<script>
	let hereKitty = false;

	const handleMouseenter = () => (hereKitty = true);
	const handleMouseleave = () => (hereKitty = false);
</script>

<svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} />

<!-- creative commons BY-NC http://www.pngall.com/kitten-png/download/7247 -->
<!-- svelte-ignore a11y-missing-attribute -->
<a class="btn btn-light" class:curious={hereKitty}>Move cursor here, i will change my color</a>

<style>
	img {
		position: absolute;
		left: 0;
		bottom: -60px;
		transform: translate(-80%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
		background-color: red;
	}
	.redColor {
	}

	:global(body) {
		overflow: hidden;
	}
</style>
