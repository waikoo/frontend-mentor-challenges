<script>
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	import Card3 from './Card3.svelte';
	import Card4 from './Card4.svelte';

	export let data;
	// console.log(data);
	$: ({
		general,
		step: { step, header, input }
	} = data);
	console.log(step);

	$: isYearly = false;
	const togglePlan = () => {
		isYearly = !isYearly;
	};
</script>

{#if step === 1}
	<Card {header} {input} />
{:else if step === 2}
	<Card2 {general} {header} {input} {isYearly} {togglePlan} />
{:else if step === 3}
	<Card3 {general} {header} {input} {isYearly} />
{:else if step === 4}
	<Card4 {header} {isYearly} />
{:else}
	<p>ERROR</p>
{/if}
