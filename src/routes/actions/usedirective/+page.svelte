<script>
	import { clickOutside, longpress } from './click_outside.js';
	let showModal = false;

	let pressed = false;
	let duration = 2000;
</script>

<br /><br />
<label>
	<input type="range" bind:value={duration} max={2000} step={100} />
	{duration}ms
</label>

<button
	use:longpress={duration}
	on:longpress={() => (pressed = true)}
	on:mouseenter={() => (pressed = false)}>press and hold</button
>

{#if pressed}
	<p>
		congratulations, you pressed and held for {duration}ms
	</p>
{/if}
<br /><br />
<button on:click={() => (showModal = true)}>Show Modal</button>
{#if showModal}
	<div class="box" use:clickOutside on:outClick={() => (showModal = false)}>Click outside me!</div>
{/if}

<style>
	.box {
		--width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 4px;
		background-color: #ff3e00;
		color: #fff;
		text-align: center;
		font-weight: bold;
	}
</style>
