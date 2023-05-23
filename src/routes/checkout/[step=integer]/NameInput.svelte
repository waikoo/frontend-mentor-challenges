<script>
	import { info } from '$lib/stores.js';

	export let type, label, placeholder;

	const typeAction = (node) => (node.type = type);
</script>

<label for={type}
	>{label}
	<input use:typeAction {placeholder} id={type} bind:value={$info.info[type]} />
</label>

<style lang="scss">
	label {
		display: flex;
		flex-direction: column;
		color: $GreenVogue;
	}

	input {
		padding: 1rem;
		font-size: 1rem;
		margin-top: 0.5rem;
		font-weight: $fw-700;
		border-radius: 10px;
		border: 1px solid $Mischka;
	}

	input::placeholder {
		color: $Manatee;
	}
</style>
