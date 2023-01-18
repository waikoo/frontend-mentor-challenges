<script>
	import Header from './Header.svelte';
	import SummaryInput from './SummaryInput.svelte';
	import { info } from '$lib/stores.js';

	export let header, general, isYearly;

	info.subscribe((info) => console.log(info));
</script>

<div class="card">
	<Header {header} />
	<div class="summary-con">
		<SummaryInput {general} {isYearly} text="Change" isTop />

		<SummaryInput {general} {isYearly} text="Online service" />
		<SummaryInput {general} {isYearly} text="Larger storage" />

		<SummaryInput {general} {isYearly} text="Total (per month)" isLast />
	</div>
</div>

<style lang="scss">
	.card {
		background: $White;
		padding: 2.5rem 1.5rem;
		margin: 1rem;
		border-radius: 10px;
	}

	.summary-con {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: $Zircon;
		padding: 1rem;
	}
</style>
