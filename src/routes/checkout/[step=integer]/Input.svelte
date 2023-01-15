<script>
	export let type, label, placeholder;
	console.log(type, label, placeholder);
</script>

<label for={type}
	>{label}
	<input {type} {placeholder} id={type} />
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
