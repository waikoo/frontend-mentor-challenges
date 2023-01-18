import { writable } from 'svelte/store';

export let info = writable({
	info: {
		name: '',
		email: '',
		tel: ''
	},
	plan: {
		type: '',
		price: '',
		timespan: '',
		currency: ''
	},
	addons: {
		online_service: {
			wants: false,
			price: 0
		},
		larger_storage: {
			wants: false,
			price: 0
		},
		customizable_profile: {
			wants: false,
			price: 0
		}
	},
	total: 0
});
