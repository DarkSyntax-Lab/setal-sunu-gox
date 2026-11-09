<script lang="ts">
	import type { Snippet } from 'svelte';

	// Affiche l'image ; si le fichier n'existe pas (ou plante), affiche `fallback` à la place.
	type Props = {
		src: string | null;
		alt?: string;
		class?: string;
		eager?: boolean;
		style?: string;
		fallback?: Snippet;
	};
	let { src, alt = '', class: className = '', eager = false, style, fallback }: Props = $props();

	let failed = $state(false);

	// Gère les deux cas : erreur déjà survenue avant l'hydratation, ou erreur à venir.
	function watch(node: HTMLImageElement) {
		const fail = () => (failed = true);
		if (node.complete && node.naturalWidth === 0) fail();
		node.addEventListener('error', fail);
		return { destroy: () => node.removeEventListener('error', fail) };
	}
</script>

{#if src && !failed}
	<img
		use:watch
		{src}
		{alt}
		class={className}
		{style}
		loading={eager ? 'eager' : 'lazy'}
		decoding="async"
	/>
{:else if fallback}
	{@render fallback()}
{/if}
