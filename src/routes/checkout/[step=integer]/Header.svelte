<script>
	export let header;
	const { title, description } = header;
</script>

<h1>{title}</h1>
<p>{description}</p>

<style lang="scss">
	h1 {
		margin-top: 0;
		color: $GreenVogue;
		font-weight: $fw-700;
	}

	p {
		line-height: 1.6;
		color: $Manatee;
		font-size: 1.1rem;
	}
</style>
