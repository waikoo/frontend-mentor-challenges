<script>
	import Header from './Header.svelte';
	import NameInput from './NameInput.svelte';

	export let header, input;
</script>

<div class="card">
	<Header {header} />
	<div class="inputs">
		{#each input as { type, label, placeholder }}
			<NameInput {type} {label} {placeholder} />
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
