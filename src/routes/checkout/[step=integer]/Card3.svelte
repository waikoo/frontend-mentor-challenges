<script>
	import Header from './Header.svelte';
	import AddonInput from './AddonInput.svelte';
	import { info } from '$lib/stores.js';

	export let general, header, input, isYearly;

	// info.subscribe((info) => console.table(info.addons));

	console.log($info.plan.type);
	$: isAddonChecked = {
		'Online service': false,
		'Larger storage': false,
		'Customizable profile': false
	};
</script>

<div class="card">
	<Header {header} />
	<div class="inputs">
		{#each input as { description, name, price }, i}
			<AddonInput {general} {description} {name} {price} {isYearly} {i} {isAddonChecked} />
		{/each}
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
