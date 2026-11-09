<script lang="ts">
	// Emplacement vide : invisible pour le public, un indice s'affiche seulement en développement.
	let { hint = '' }: { hint?: string } = $props();
</script>

<div class="flex h-full w-full items-center justify-center bg-blanc-casse/5 p-4 text-center">
	{#if import.meta.env.DEV && hint}<code class="text-xs text-lavande">{hint}</code>{/if}
</div>
