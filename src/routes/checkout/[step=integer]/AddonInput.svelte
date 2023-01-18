<script>
	import checkmark from '$lib/images/icon-checkmark.svg';
	import { info } from '$lib/stores.js';

	export let general, description, name, price, isYearly, i, isAddonChecked;
	const {
		currency,
		suffix: { monthly, yearly }
	} = general;
	const { monthly: monthlyPrice, yearly: yearlyPrice } = price;

	const id = i === 1 ? 'addon1' : i === 2 ? 'addon2' : 'addon3';
	const addon = name.toLowerCase().split(' ').join('_');

	const updateStore = () => {
		info.update((info) => {
			info.addons[addon].wants = isAddonChecked[addon];
			if (!info.addons[addon].wants) info.addons[addon].price = 0;
			else info.addons[addon].price = !isYearly ? monthlyPrice : yearlyPrice;
			return info;
		});
	};
</script>

<label for={id}>
	<div class="input-con">
		<input
			type="checkbox"
			name="addon"
			{id}
			bind:checked={isAddonChecked[addon]}
			on:change={updateStore}
		/>
		<img src={checkmark} alt="" />
	</div>
	<div class="text">
		<h2>{name}</h2>
		<span class="description">{description}</span>
	</div>
	<div class="price-con">
		+
		<span class="currency">{currency}</span>
		<span class="price">{!isYearly ? monthlyPrice : yearlyPrice}</span>
		/
		<span class="timespan">{!isYearly ? monthly : yearly}</span>
	</div>
</label>

<style lang="scss">
	$borderRadius: 5px;

	.currency {
		margin-left: -0.3rem;
		margin-right: -0.3rem;
	}

	.price {
		margin-right: -0.2rem;
	}

	.timespan {
		margin-left: -0.28rem;
	}

	.price-con {
		white-space: nowrap;
		font-size: 1.05rem;
		color: $Blue;
	}

	h2 {
		font-size: 1rem;
		margin: 0;
		color: $GreenVogue;
	}

	.description {
		font-size: 1rem;
		color: $Manatee;
	}

	.input-con {
		position: relative;
	}
	img {
		position: absolute;
		@include size(15px);
		top: 8px;
		left: 9px;
	}
	label {
		display: flex;
		align-items: center;
		gap: 1rem;
		user-select: none;
		cursor: pointer;
		@include buttonize();
	}

	label:has(input:checked) {
		@include selected();
	}

	input {
		@include size(25px);
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: 1px solid $Manatee;
		border-radius: $borderRadius;
		min-width: 25px;
	}

	input:checked {
		border-radius: $borderRadius;
		@include size(25px);
		accent-color: $Blue;
		padding: 0.5rem;
		background: $Blue;
	}

	/* input:checked::before {
		content: url('/src/lib/images/icon-checkmark.svg');
		@include size(20px);
	} */
</style>
