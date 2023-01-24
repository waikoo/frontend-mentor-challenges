<script>
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';
	import { browser } from '$app/environment';
	import { info } from '$lib/stores';
	import { page } from '$app/stores';

	export let data;
	$: ({
		general,
		step: { step, header, input }
	} = data);

	let userData = browser && JSON.parse(localStorage.getItem('user'));

	const getChosenTimespan = (userData) => {
		if (browser) {
			if (!userData) userData = JSON.parse(localStorage.getItem('user'));
			const storedTimespan = userData.plan.timespan;
			if (storedTimespan) return storedTimespan === 'yearly';
		}
	};
	$: isYearly = getChosenTimespan(userData);
	console.log($page.data);

	const togglePlan = () => {
		isYearly = !isYearly;

		info.update((info) => {
			info.plan.timespan = isYearly ? 'yearly' : 'monthly';
			return info;
		});
	};

	getChosenTimespan();
</script>

{#if step === 1}
	<Card {header} {input} />
{:else if step === 2}
	<Card2 {general} {header} {input} {isYearly} {togglePlan} />
{:else if step === 3}
	<Card3 {general} {header} {input} {isYearly} />
{:else if step === 4}
	<Card4 {header} {general} {isYearly} />
{:else}
	<p>ERROR</p>
{/if}
