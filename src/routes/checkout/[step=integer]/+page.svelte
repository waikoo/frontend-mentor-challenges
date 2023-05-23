<script>
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';
	import { info, isYearly } from '$lib/stores';
	import { page } from '$app/stores';
	import getStoredValue from '../../../lib/utils/getStoredValue';

	export let data;
	// console.log(data);
	// $: ({ subscription } = data);
	// console.log(data.subscription);
	// console.log(data);
	$: ({
		general,
		step: { step, header, input }
	} = data);

	if (getStoredValue('timespan')) {
		isYearly.set(getStoredValue('timespan') === 'yearly');
	}
</script>

{#if step === 1}
	<Card {header} {input} />
{:else if step === 2}
	<Card2 {general} {header} {input} />
{:else if step === 3}
	<Card3 {general} {header} {input} />
{:else if step === 4}
	<Card4 {header} {general} />
{:else}
	<p>ERROR</p>
{/if}
