<script>
	import plan1 from '$lib/images/icon-arcade.svg';
	import plan2 from '$lib/images/icon-advanced.svg';
	import plan3 from '$lib/images/icon-pro.svg';
	import { info } from '$lib/stores.js';

	export let price = 0,
		type = null,
		general = null,
		isYearly = null,
		i,
		getStoredPlan = null;

	const {
		plan_discount,
		currency,
		suffix: { monthly, yearly }
	} = general;
	const { monthly: priceMonthly, yearly: priceYearly } = price;

	const setImage = (planType) => {
		const imageMap = {
			Arcade: plan1,
			Advanced: plan2,
			Pro: plan3
		};
		return imageMap[planType];
	};
	let src = setImage(type);

	const updateStore = () => {
		info.update((info) => {
			// TODO: ran 2 times
			console.log(info);
			info.plan.type = type;
			info.plan.price = !isYearly ? priceMonthly : priceYearly;
			info.plan.timespan = !isYearly ? 'monthly' : 'yearly';
			info.plan.currency = currency;
			return info;
		});
	};

	function handleKeydown(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			// updateStore();
			this.click();
			setTimeout(() => this.focus(), 0);
		}
	}

	const setBorderColor = (i) => {
		const colors = ['#ffaf7e', '#f9818e', '#483eff'];
		return colors[i];
	};
	let border = setBorderColor(i);

	// console.log(type);
	// console.log(getStoredPlan());

	let storedPlan = type === getStoredPlan();
	// console.log(storedPlan);
	$: isChecked = type === getStoredPlan();
	// if (type === getStoredPlan()) {
	// 	console.warn('true');
	// 	document.querySelector('label[data-saved="true"]').click();
	// }
</script>

<label
	role="button"
	on:click={updateStore}
	on:keydown={handleKeydown}
	aria-label={`Choose ${type} plan`}
	for="plan{i}"
	aria-hidden="false"
	tabindex="0"
	data-border={border}
	data-saved={storedPlan}
>
	<input type="radio" name="plan" id="plan{i}" tabindex="-1" class:checked={isChecked} />
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
	label[data-border='#ffaf7e']:has(input:checked),
	label[data-border='#ffaf7e']:has(input.checked) {
		border: 3px solid #ffaf7e;
	}
	label[data-border='#f9818e']:has(input:checked),
	label[data-border='#f9818e']:has(input.checked) {
		border: 3px solid #f9818e;
	}
	label[data-border='#483eff']:has(input:checked),
	label[data-border='#483eff']:has(input:checked) {
		border: 3px solid #483eff;
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
