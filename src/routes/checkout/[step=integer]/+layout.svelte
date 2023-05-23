<script>
	import mobile_bg from '$lib/images/bg-sidebar-mobile.svg';
	import Button from './Button.svelte';
	import Steps from './Steps.svelte';

	export let data;
	$: ({
		step: { step }
	} = data);
</script>

<div class="background">
	<img src={mobile_bg} alt="" />

	<main>
		<Steps activeStep={step} />
		<slot />

		<footer>
			<Button {step} backward />
			<Button {step} forward />
		</footer>
	</main>
</div>

<style lang="scss">
	.background {
		background: $Melrose;
		max-width: 100%;
	}
	img {
		max-width: 100%;
		display: block;
		position: relative;
	}

	main {
		position: absolute;
		top: 5.2rem;
	}

	footer {
		position: fixed;
		bottom: 0;
		display: flex;
		padding: 1rem;
		background: $White;
		width: 100%;
		justify-content: flex-end;
		display: flex;
		justify-content: space-between;
	}
</style>
