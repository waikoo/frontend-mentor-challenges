<script>
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';

	export let data;
	// console.log(data);
	$: ({
		general,
		step: { step, header, input }
	} = data);
</script>

{#if step === 1}
	<Card {header} {input} />
{:else if step === 2}
	<Card2 {general} {header} {input} />
{:else if step === 3}
	<p>Card 3 here</p>
{:else}
	<p>ERROR</p>
{/if}
