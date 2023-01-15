<script>
	import mobile_bg from '$lib/images/bg-sidebar-mobile.svg';
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	import Header from './Header.svelte';
	import Input from './Input.svelte';
	import Steps from './Steps.svelte';

	export let data;
	const {
		step: { header, input, step }
	} = data;
</script>

<div class="background">
	<img src={mobile_bg} alt="" />

	<main>
		<Steps activeStep={step} />
		<slot />

		<footer>
			{#if step > 1}
				<Button {step} backward />
			{/if}
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

	button {
		background: $White;
		font-family: $ff;
		color: $Manatee;
		font-size: 1.4rem;
		border: none;
		font-weight: $fw-500;
	}
</style>
