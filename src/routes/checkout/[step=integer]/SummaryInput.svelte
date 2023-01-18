<script>
	import { info } from '$lib/stores.js';
	// info.subscribe((val) => console.log(val.info));

	export let general,
		isYearly,
		text,
		isTop = false,
		isLast = false;

	const {
		currency,
		suffix: { monthly, yearly }
	} = general;
</script>

<div
	class="summary"
	style={isLast ? 'margin-top: 2rem' : isTop ? 'border-bottom: 1px solid hsl(229, 24%, 87%)' : ''}
>
	<div class="left">
		{#if isTop}
			<span class="type"
				>{$info.plan.type}<span class="timespan">({!isYearly ? 'Monthly' : 'Yearly'})</span></span
			>
		{/if}

		<span class="grey-text">{text}</span>
	</div>
	<div class="right">
		<span class="price-con" style={isLast ? 'color: hsl(243, 100%, 62%)' : ''}>
			<span class="extra">{isTop ? '' : '+'}</span>
			<span class="currency">{currency}</span>
			<span class="price">{$info.plan.price}</span>
			/
			<span class="timespan">{!isYearly ? monthly : yearly}</span>
		</span>
	</div>
</div>

<style lang="scss">
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
</style>
