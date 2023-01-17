<script>
	export let header;
	const { title, description } = header;
</script>

<header>
	<h1>{title}</h1>
	<p>{description}</p>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	h1 {
		color: $GreenVogue;
		font-weight: $fw-700;
		margin: 0;
	}

	p {
		line-height: 1.6;
		color: $Manatee;
		font-size: 1.1rem;
		margin: 0;
		margin-bottom: 1.3rem;
	}
</style>
