export default {
	general: {
		currency: '$',
		suffix: {
			monthly: 'mo',
			yearly: 'yr'
		},
		plan_discount: '2 months free'
	},
	steps: [
		{
			step: 1,
			header: {
				title: 'Personal info',
				description: 'Please provide your name, email address, and phone number.'
			},
			input: [
				{
					id: 1,
					label: 'Name',
					placeholder: 'e.g. Stephen King',
					type: 'name'
				},
				{
					id: 2,
					label: 'Email Address',
					placeholder: 'e.g. stephenking@lorem.com',
					type: 'email'
				},
				{
					id: 3,
					label: 'Phone Number',
					placeholder: 'e.g. +1 234 567 890',
					type: 'tel'
				}
			]
		},
		{
			step: 2,
			header: {
				title: 'Select your plan',
				description: 'You have the option of monthly or yearly billing.'
			},
			input: [
				{
					type: 'Arcade',
					price: {
						monthly: 9,
						yearly: 90
					}
				},
				{
					type: 'Advanced',
					price: {
						monthly: 12,
						yearly: 120
					}
				},
				{
					type: 'Pro',
					price: {
						monthly: 15,
						yearly: 150
					}
				}
			]
		},
		{
			step: 3,
			header: {
				title: 'Pick add-ons',
				description: 'Add-ons help enhance your gaming experience.'
			},
			input: [
				{
					name: 'Online service',
					description: 'Access to multiplayer games',
					price: {
						monthly: 1,
						yearly: 10
					}
				},
				{
					name: 'Larger storage',
					description: 'Extra 1TB of cloud save',
					price: {
						monthly: 2,
						yearly: 20
					}
				},
				{
					name: 'Customizable profile',
					description: 'Custom theme on your profile',
					price: {
						monthly: 2,
						yearly: 20
					}
				}
			]
		},
		{
			step: 4,
			header: {
				title: 'Finishing up',
				description: 'Double-check everything looks OK before confirming.'
			}
		}
	]
};
