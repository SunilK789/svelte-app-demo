<script>
	import RedThing from './RedThing.svelte';
	import GreenThing from './GreenThing.svelte';
	import BlueThing from './BlueThing.svelte';

	const options = [
		{ color: 'red', component: RedThing },
		{ color: 'green', component: GreenThing },
		{ color: 'blue', component: BlueThing }
	];

	let selected = options[0];
</script>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<!-- {#if selected.color === 'red'}
	<RedThing />
{:else if selected.color === 'green'}
	<GreenThing />
{:else if selected.color === 'blue'}
	<BlueThing />
{/if} -->

<svelte:component this={selected.component} />

<div class="my-5" />
<a target="_blank" rel="noreferrer" href="https://learn.svelte.dev/tutorial/svelte-component"
	>Go to tutorial</a
>
