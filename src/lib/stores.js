import { writable } from 'svelte/store';
import { persistStore } from './persistStore';
import { browser } from '$app/environment';

const inputTemplate = {
	info: {
		name: '',
		email: '',
		tel: ''
	},
	plan: {
		type: '',
		price: 0,
		timespan: '',
		currency: ''
	},
	addons: [
		{
			name: 'Online service',
			wants: false,
			price: 0
		},
		{
			name: 'Larger storage',
			wants: false,
			price: 0
		},
		{
			name: 'Customizable profile',
			wants: false,
			price: 0
		}
	],
	total: 0
};

const getPaymentCyclePreference = () => {
	if (browser) {
		const isValueStored = localStorage.getItem('isYearly');
		return Boolean(isValueStored) ? isValueStored : false;
	}
};

export let isYearly = persistStore('isYearly', getPaymentCyclePreference());
// export let isYearly = persistStore('isYearly', false);
export let info = persistStore('user', inputTemplate);
