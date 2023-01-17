<script>
	import plan1 from '$lib/images/icon-arcade.svg';
	import plan2 from '$lib/images/icon-advanced.svg';
	import plan3 from '$lib/images/icon-pro.svg';

	export let price, type, general, isYearly;
	const {
		plan_discount,
		currency,
		suffix: { monthly, yearly }
	} = general;
	const { monthly: priceMonthly, yearly: priceYearly } = price;

	const setImage = (str) => {
		if (typeof str === 'string') {
			switch (str) {
				case 'Arcade':
					return plan1;
				case 'Advanced':
					return plan2;
				case 'Pro':
					return plan3;
				default:
					throw new Error("Type doesn't match expected values");
			}
		}
		throw new Error('Arg is not a string');
	};
	let src = setImage(type);
</script>

<button>
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
</button>

<style lang="scss">
	button {
		font-family: $ff;
		border: 2px solid $Mischka;
		background: $White;
		border-radius: 12px;
		padding: 1rem;
		display: flex;
		align-items: flex-start;
		gap: 1rem;

		&:focus {
			border-color: $Blue;
			background: $Zircon;
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
