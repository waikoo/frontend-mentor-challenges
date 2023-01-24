import { browser } from '$app/environment';

export const getStoredInputValues = () => {
	const isInputSaved = !!localStorage.getItem('user');
	let storedInput;

	if (browser) {
		if (!isInputSaved) localStorage.setItem('user', JSON.stringify(inputTemplate));
		else storedInput = localStorage.getItem('user');
	}

	return storedInput;
};
