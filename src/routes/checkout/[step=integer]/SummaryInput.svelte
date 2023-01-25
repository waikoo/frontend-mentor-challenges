<script>
	import { info, isYearly } from '$lib/stores.js';
	// info.subscribe((val) => console.log(val.info));

	export let general,
		text = '',
		name = '',
		price = 0,
		isTop = false,
		isLast = false;

	const {
		currency,
		suffix: { monthly, yearly }
	} = general;
</script>

<div
	class="summary {isLast && 'last'}"
	style={isLast
		? 'margin: 2rem 1rem 0'
		: isTop
		? 'border-bottom: 1px solid hsl(229, 24%, 87%); padding-bottom: 1rem;'
		: ''}
>
	<div class="left">
		{#if isTop}
			<span class="type"
				>{$info.plan.type}<span class="t">({!$isYearly ? 'Monthly' : 'Yearly'})</span></span
			>
		{/if}

		<span
			class="grey-text"
			style={text === 'Change'
				? 'text-decoration: underline; text-decoration-color: hsl(231, 11%, 63%)'
				: 'none'}>{name ? name : text}</span
		>
	</div>
	<div class="right">
		<span
			class="price-con {isTop || isLast ? 'bold' : ''} {name ? 'greenvogue' : ''}"
			style={isLast ? 'color: hsl(243, 100%, 62%)' : ''}
		>
			<span class="extra">{isTop ? '' : '+'}</span>
			<span class="currency">{currency}</span>
			<span class="price">{price}</span>
			/
			<span class="timespan">{!$isYearly ? monthly : yearly}</span>
		</span>
	</div>
</div>

<style lang="scss">
	.last .extra,
	.last .currency,
	.last .price {
		margin-right: -0.35rem;
	}

	.last .timespan {
		margin-left: -0.4rem;
	}

	.extra,
	.currency,
	.price {
		margin-right: -0.22rem;
	}

	.timespan {
		margin-left: -0.22rem;
	}

	.price-con {
		white-space: nowrap;
	}

	.grey-text {
		color: $Manatee;
	}

	.summary {
		display: flex;
		justify-content: space-between;
		font-family: $ff;
	}

	.grey-text {
		display: block;
	}

	.type,
	.bold {
		font-weight: $fw-700;
		color: $GreenVogue;
	}

	.t {
		margin-left: 0.2rem;
	}

	.greenvogue {
		color: $GreenVogue;
	}

	.last {
		font-size: 1.3rem;
	}
</style>
