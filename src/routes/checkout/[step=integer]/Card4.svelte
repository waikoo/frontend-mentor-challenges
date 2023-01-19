<script>
	import Header from './Header.svelte';
	import SummaryInput from './SummaryInput.svelte';
	import { info } from '$lib/stores.js';

	export let header, general, isYearly;

	info.subscribe((info) => console.log(info));

	$info.calculateTotal();
</script>

<div class="card">
	<Header {header} />
	<div class="summary-con">
		<SummaryInput {general} {isYearly} text="Change" isTop price={$info.plan.price} />

		{#each $info.addons as { name, wants, price }}
			{#if wants}
				<SummaryInput {general} {isYearly} {name} {price} />
			{/if}
		{/each}
	</div>
	<SummaryInput {general} {isYearly} text="Total (per month)" isLast price={$info.total} />
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
