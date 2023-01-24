<script>
	import Header from './Header.svelte';
	import PlanInput from './PlanInput.svelte';
	import Toggle from './Toggle.svelte';
	import { info } from '$lib/stores.js';
	import { browser } from '$app/environment';

	export let general, header, input, isYearly, togglePlan;

	// console.log($info.info.name);

	const getStoredPlan = () => {
		if (browser) {
			const storedInputValues = JSON.parse(localStorage.getItem('user'));
			// console.log(storedInputValues);
			return storedInputValues ? storedInputValues.plan.type : null;
		}
	};
</script>

<div class="card">
	<Header {header} />
	<form class="inputs">
		{#each input as { price, type }, i}
			<PlanInput {isYearly} {price} {type} {general} {i} {getStoredPlan} />
		{/each}
		<Toggle {isYearly} {togglePlan} />
	</form>
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
