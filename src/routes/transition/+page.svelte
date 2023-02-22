<script>
	import { fade, fly } from 'svelte/transition';

	let visible = true;
	let visibleFly = true;
	let visibleFadeFly = true;
</script>

<div class="container">
	<label>
		<input type="checkbox" bind:checked={visible} /> Visible using fade
	</label>

	{#if visible}
		<p transition:fade>Fade in and fade out</p>
	{/if}

	<div class="my-3" />
	<label>Transition functions can accept parameters. Replace the fade transition with fly...</label>
	<div class="my-3" />
	<label>
		<input type="checkbox" bind:checked={visibleFly} /> Visible using fly
	</label>
	{#if visibleFly}
		<p transition:fly={{ y: 10, duration: 2000 }}>Flies in and out</p>
	{/if}

	<div class="my-3" />
	<label
		>Instead of the transition directive, an element can have an in or an out directive, or both
		together. Import fade alongside fly...</label
	>
	<div class="my-3" />
	<label>
		<input type="checkbox" bind:checked={visibleFadeFly} /> Visible using fly and fade
	</label>
	{#if visibleFadeFly}
		<p in:fly={{ y: 10, duration: 2000 }} out:fade>Flies in, fades out</p>
	{/if}

	<div class="my-3" />
	<a target="_blank" rel="noreferrer" href="https://learn.svelte.dev/tutorial/transition"
		>Go to tutorial</a
	>
</div>
