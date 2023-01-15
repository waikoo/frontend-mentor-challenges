<script>
	import Header from './Header.svelte';
	import Input from './Input.svelte';

	export let header, input;
	console.log(header, input);
</script>

<div class="card">
	<Header {header} />
	<div class="inputs">
		{#each input as { type, label, placeholder }}
			<Input {type} {label} {placeholder} />
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
