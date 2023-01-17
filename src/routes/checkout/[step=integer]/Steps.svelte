<script>
	export let activeStep;
</script>

<div class="steps">
	<div class:active={activeStep === 1} class="circle">1</div>
	<div class:active={activeStep === 2} class="circle">2</div>
	<div class:active={activeStep === 3} class="circle">3</div>
	<div class:active={activeStep === 5} class="circle">4</div>
</div>

<style lang="scss">
	.steps {
		position: absolute;
		top: -3rem;
		left: 0;
		right: 0;
		color: white;
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
