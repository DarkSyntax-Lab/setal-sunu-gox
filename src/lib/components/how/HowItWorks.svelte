<script lang="ts">
	import { onMount } from 'svelte';
	import { setupHow } from '#lib/animations/how.js';
	import HowDesktop from './HowDesktop.svelte';
	import HowMobile from './HowMobile.svelte';

	let desktop = $state<HTMLElement>();
	let mobile = $state<HTMLElement>();
	let sweep = $state(30);
	let stop: (() => void) | undefined;

	onMount(() => {
		if (!desktop || !mobile) return;
		const handle = setupHow(desktop, mobile, (p) => (sweep = p));
		stop = handle.stopSweep;
		return handle.destroy;
	});
</script>

<!-- Bureau : parcours en 9 étapes. Mobile : « Le problème » puis « Notre solution » en 5 étapes. -->
<div bind:this={desktop} class="hidden desk:block">
	<HowDesktop bind:sweep onuserdrag={() => stop?.()} />
</div>
<div bind:this={mobile} class="desk:hidden">
	<HowMobile bind:sweep onuserdrag={() => stop?.()} />
</div>
