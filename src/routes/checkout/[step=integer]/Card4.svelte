<script>
	import Header from './Header.svelte';
	import SummaryInput from './SummaryInput.svelte';
	import { info } from '$lib/stores';
	import calculateTotal from '$lib/utils/calculateTotal';

	export let header, general;

	const total = calculateTotal($info);
</script>

<div class="card">
	<Header {header} />
	<div class="summary-con">
		<SummaryInput {general} text="Change" isTop price={$info.plan.price} />

		{#each $info.addons as { name, wants, price }}
			{#if wants}
				<SummaryInput {general} {name} {price} />
			{/if}
		{/each}
	</div>
	<SummaryInput {general} text="Total (per month)" isLast price={total} />
</div>

<style lang="scss">
	.card {
		background: $White;
		padding: 2.5rem 1.5rem;
		margin: 1rem;
		border-radius: 10px;
	}

	.card:last-child {
		padding: 2rem;
		margin: 1rem;
	}

	.summary-con {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: $Zircon;
		padding: 1rem;
		border-radius: 12px;
	}
</style>
