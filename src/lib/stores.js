import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { persistStore } from './persistStore';

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
	total: 0,
	calculateTotal: function () {
		let total = 0;
		if (this.plan.price) {
			total += this.plan.price;
			for (const addon of this.addons) {
				if (addon.wants) {
					total += addon.price;
				}
			}
		}
		this.total = total;
	}
};

export let info = persistStore('user', inputTemplate);
