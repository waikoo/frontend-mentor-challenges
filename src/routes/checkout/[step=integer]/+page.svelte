<script>
	import Card from './Card.svelte';

	export let data;
	let {
		step: { step, header, input }
	} = data;
	console.log(data);
</script>

{#if step === 1}
	<Card {header} {input} />
{:else}
	<p>ERROR</p>
{/if}

<h1>page.svelte</h1>
