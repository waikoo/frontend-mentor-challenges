<script>
	export let step,
		forward = false,
		backward = false;
</script>

{#if forward}
	<a href="/checkout/{step < 4 ? step + 1 : 1}">{step < 4 ? 'Next Step' : 'Confirm'}</a>
{:else if backward}
	<a href="/checkout/{step - 1}" class:back={backward} class:hidden={!backward}>Go Back</a>
{/if}

<style lang="scss">
	a {
		background: $Blue;
		border: none;
		color: white;
		font-family: $ff;
		padding: 1rem 1.5rem;
		border-radius: 5px;
		font-size: 1.2rem;
		justify-self: flex-end;
		text-decoration: none;
		cursor: pointer;
	}

	.back {
		background: none;
		color: $Manatee;
		display: block;
	}

	.hidden {
		visibility: hidden;
	}

	a[forward='true'] {
		margin-left: auto;
	}
</style>
