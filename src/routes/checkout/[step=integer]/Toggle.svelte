<script>
	export let isYearly, togglePlan;

	const timespanHandler = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			togglePlan();
		} else if (e.key === 'Tab' && e.shiftKey) {
			document.querySelectorAll('label')[2].focus();
		} else if (e.key === 'Tab') {
			document.querySelector('a').focus();
		}
	};
</script>

<button
	class="toggle-container"
	on:keydown|preventDefault={timespanHandler}
	role="switch"
	aria-checked={isYearly}
	aria-label="Choose between monthly or yearly billing"
>
	<span class:blue={!isYearly}>Monthly</span>
	<label for="checkbox">
		<input type="checkbox" bind:checked={isYearly} on:click={togglePlan} id="checkbox" />
		<div class="toggle-switch">
			<div class="toggle-handle" />
		</div>
	</label>
	<span class:rose={isYearly}>Yearly</span>
</button>

<style lang="scss">
	span {
		color: $Manatee;
		font-weight: $fw-700;
	}
	.blue {
		color: $GreenVogue;
	}
	.rose {
		color: $Rose;
	}

	.toggle-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		background: $Zircon;
		padding: 1rem;
		border-radius: 10px;
		border: none;
		font-size: 1rem;
	}

	.toggle-switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 29px;
		border-radius: 34px;
		background-color: $GreenVogue;
		transition: background-color 0.3s ease;
	}

	.toggle-handle {
		position: absolute;
		top: 4px;
		bottom: 2px;
		@include size(20px);
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		transition: left 0.3s ease;
		left: calc(50% - 23px);
	}

	input[type='checkbox'] {
		display: none;
	}

	input[type='checkbox']:checked + .toggle-switch {
		background-color: $Rose;
	}

	input[type='checkbox']:checked + .toggle-switch .toggle-handle {
		left: calc(100% - 27px);
	}
</style>
