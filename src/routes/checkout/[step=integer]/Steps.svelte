<script>
	export let activeStep;
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		document.querySelectorAll('a').forEach((a) => {
			if (+a.textContent === activeStep) {
				a.focus();
			}
		});
	});
</script>

<div class="steps">
	<a href="/checkout/1" class:active={activeStep === 1} class="circle">1</a>
	<a href="/checkout/2" class:active={activeStep === 2} class="circle">2</a>
	<a href="/checkout/3" class:active={activeStep === 3} class="circle">3</a>
	<a href="/checkout/4" class:active={activeStep === 4} class="circle">4</a>
</div>

<style lang="scss">
	a {
		text-decoration: none;
		color: white;
	}
	.steps {
		position: absolute;
		top: -3rem;
		left: 0;
		right: 0;
		display: flex;
		width: 50%;
		margin: 0 auto;
		gap: 1rem;
		z-index: 5;
		width: max-content;
	}

	.circle {
		@include size(40px);
		border: 2px solid $White;
		border-radius: 50%;
		display: grid;
		place-items: center;
	}

	.active {
		background: $FrenchPass;
		color: $GreenVogue;
		font-weight: $fw-700;
		border: none;
	}
</style>
