<script>
	export let step,
		forward = false,
		backward = false;

	// window.location =
</script>

{#if forward}
	<a href="/checkout/{step + 1}">{step < 4 ? 'Next Step' : 'Confirm'}</a>
{:else if backward}
	<a href="/checkout/{step - 1}">Go Back</a>
{/if}

<!-- differentiate by class -->
<style lang="scss">
	a {
		background: $GreenVogue;
		border: none;
		color: white;
		font-family: $ff;
		padding: 1rem 1.5rem;
		border-radius: 5px;
		font-size: 1.4rem;
	}

	.back {
		background: none;
		color: $Manatee;
		display: block;
	}

	#hide {
		display: none;
	}
</style>
