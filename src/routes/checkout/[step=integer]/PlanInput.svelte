<script>
	import plan1 from '$lib/images/icon-arcade.svg';
	import plan2 from '$lib/images/icon-advanced.svg';
	import plan3 from '$lib/images/icon-pro.svg';
	import { info, isYearly } from '$lib/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let price = 0,
		type = null,
		general = null,
		i;

	const {
		plan_discount,
		currency,
		suffix: { monthly, yearly }
	} = general;
	const { monthly: priceMonthly, yearly: priceYearly } = price;

	let labelRef;
	console.log(labelRef);
	const getStoredPlanType = () => {
		// returns Arcade | Advanced | Pro
		if (browser) {
			const storedInputValues = JSON.parse(localStorage.getItem('user'));
			return storedInputValues ? storedInputValues.plan.type : null;
		}
	};

	const setImage = (planType) => {
		const imageMap = {
			Arcade: plan1,
			Advanced: plan2,
			Pro: plan3
		};
		return imageMap[planType];
	};
	let src = setImage(type);

	const handleClick = (e) => {
		updateStore();
		// e.target.style.border = `3px solid ${setBorderColor(i)}`;
		document.querySelectorAll('label').forEach((label) => {
			label.classList.remove('stored');
			if (label === e.target) {
				label.classList.add(`border-color-${i}`);
			} else {
				label.classList.remove(`border-color-${i}`);
			}
		});
	};

	const updateStore = () => {
		info.update((info) => {
			info.plan.type = type;
			info.plan.price = !$isYearly ? priceMonthly : priceYearly;
			info.plan.timespan = !$isYearly ? 'monthly' : 'yearly';
			info.plan.currency = currency;
			return info;
		});
	};

	function handleKeyup(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			this.click();
			setTimeout(() => this.focus(), 0);
		}
	}

	// const setBorderColor = (i) => {
	// 	const colors = ['#ffaf7e', '#f9818e', '#483eff'];
	// 	return colors[i];
	// };
	// sets a different border-color for each
	// let borderColor = setBorderColor(i);

	// will be true for 1 element:
	let storedPlan = type === getStoredPlanType();
	$: isChecked = type === getStoredPlanType();

	const setBorderColor = (i) => {
		const colors = ['#ffaf7e', '#f9818e', '#483eff'];
		return colors[i];
	};
	// highlightStoredPlan();

	onMount(() => {
		// if (getStoredPlanType()) {
		// 	if (type === getStoredPlanType()) {
		// 		labelRef.classList.add(`border-color-${i}`);
		// 	}
		// }
	});

	// const highlightStoredPlan = () => {
	// 	if (getStoredPlanType() === type) {
	// 		labelRef.classList.add('stored');
	// 	}
	// };
</script>

<label
	role="button"
	on:click={handleClick}
	on:keyup={handleKeyup}
	bind:this={labelRef}
	aria-label={`Choose ${type} plan`}
	for="plan{i}"
	aria-hidden="false"
	tabindex="0"
	data-saved={storedPlan}
	class:checked={isChecked}
>
	<!-- data-border-color={borderColor} -->
	<input type="radio" name="plan" id="plan{i}" tabindex="-1" />
	<img {src} alt="" />
	<div class="text">
		<h2>{type}</h2>
		<div class="price-con">
			<div class="price-line">
				<span class="currency">{currency}</span>
				<span class="price">{!isYearly ? priceMonthly : priceYearly}</span>
				/
				<span class="timespan">{!isYearly ? monthly : yearly}</span>
			</div>
			{#if isYearly}
				<span class="discount">{plan_discount}</span>
			{/if}
		</div>
	</div>
</label>

<style lang="scss">
	.stored[data-border-color='#ffaf7e'] {
		border: 3px solid #ffaf7e !important;
	}
	.stored[data-border-color='#f9818e'] {
		border: 3px solid #f9818e !important;
	}
	.stored[data-border-color='#483eff'] {
		border: 3px solid #483eff !important;
	}
	/* label.checked[data-saved='true']:has(input:checked) {
		border: 3px solid #ffaf7e;
	}
	label.checked[data-saved='true']:has(input:checked) {
		border: 3px solid #f9818e;
	}

	label.checked[data-saved='true']:has(input:checked) {
		border: 3px solid #483eff;
	} */

	/* label.selected[data-border-color='#ffaf7e']:has(input:checked) {
		border: 3px solid #ffaf7e;
	}

	label.selected[data-border-color='#f9818e']:has(input:checked) {
		border: 3px solid #f9818e;
	}

	label.selected[data-border-color='#483eff']:has(input:checked) {
		border: 3px solid #483eff;
	} */

	.border-color-0 {
		border: 3px solid #ffaf7e !important;
	}

	.border-color-1 {
		border: 3px solid #f9818e !important;
	}
	.border-color-2 {
		border: 3px solid #483eff !important;
	}

	.stored {
	}

	input {
		position: fixed;
		pointer-events: none;
		opacity: 0;
	}

	label {
		@include buttonize();
		display: flex;
		align-items: flex-start;
		gap: 1rem;

		&:focus {
			@include selected();
		}

		&:hover {
			cursor: pointer;
		}
	}

	img {
		@include size(53px);
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: left;
	}

	h2 {
		margin: 0;
		justify-self: flex-start;
		font-size: 1.4rem;
		color: $GreenVogue;
	}

	.price-con {
		color: $Manatee;
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
		font-size: 1.1rem;
	}

	.timespan {
		margin-left: -0.3rem;
	}

	.price {
		margin-left: -0.3rem;
		margin-right: -0.2rem;
	}

	.discount {
		font-size: 1rem;
		letter-spacing: -0.5px;
		display: block;
		color: $GreenVogue;
	}
</style>
