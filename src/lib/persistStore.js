import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const persistStore = (key, initial) => {
	const storedValue = browser && localStorage.getItem(key);
	const data = storedValue ? JSON.parse(storedValue) : initial;

	const store = writable(data, () => {
		const unsubscribe = store.subscribe((value) => {
			browser && localStorage.setItem(key, JSON.stringify(value));
		});
		return unsubscribe;
	});
	return store;
};
