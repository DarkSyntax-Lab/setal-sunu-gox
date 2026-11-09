<script lang="ts">
	import type { Snippet } from 'svelte';

	// Zone d'illustration d'une étape. Les visuels y sont dessinés sur une toile de 200 unités de haut,
	// et s'adaptent automatiquement à la hauteur disponible (bureau ou mobile).
	let { children, class: className = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="[container-type:size] absolute {className}">
	<div class="size-full" style="--u: calc(100cqh / 200); --spacing: calc(100cqh / 200)">
		{@render children()}
	</div>
</div>
