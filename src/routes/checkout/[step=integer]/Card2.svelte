<script>
	import Header from './Header.svelte';
	import PlanInput from './PlanInput.svelte';
	import Toggle from './Toggle.svelte';

	export let general, header, input;
	console.log(input);

	$: isYearly = false;
	const togglePlan = () => {
		isYearly = !isYearly;
		console.log(isYearly);
	};
</script>

<div class="card">
	<Header {header} />
	<div class="inputs">
		{#each input as { price, type }}
			<PlanInput {isYearly} {price} {type} {general} />
		{/each}
		<Toggle {isYearly} {togglePlan} />
	</div>
</div>

<style lang="scss">
	.card {
		background: $White;
		padding: 2.5rem 1.5rem;
		margin: 1rem;
		border-radius: 10px;
		border-radius: 10px;
	}

	.inputs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
