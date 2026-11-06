<script lang="ts">
	import { t } from '#lib/i18n/index.js';
	import EmptyState from '#lib/components/ui/EmptyState.svelte';

	// Les chiffres viendront de la base de données (étape 5). Tant qu'il n'y en a pas : null.
	type Stats = { tonnes: number; citizens: number; zones: number; cleanups: number };
	let { stats = null }: { stats?: Stats | null } = $props();

	const tiles = $derived(
		stats
			? [
					[stats.tonnes, t.stats.tonnes],
					[stats.citizens, t.stats.citizens],
					[stats.zones, t.stats.zones],
					[stats.cleanups, t.stats.cleanups]
				]
			: []
	);
</script>

<section class="mx-auto max-w-7xl px-4 py-10" aria-labelledby="stats-title">
	<h2 id="stats-title" class="mb-4 text-2xl font-black">{t.stats.title}</h2>
	{#if stats}
		<ul class="grid grid-cols-2 gap-3 md:grid-cols-4">
			{#each tiles as [value, label] (label)}
				<li class="rounded-3xl border border-blanc-casse/10 bg-blanc-casse/5 p-5 text-center">
					<p class="text-3xl font-black text-citron">{value}</p>
					<p class="mt-1 text-sm text-blanc-casse/70">{label}</p>
				</li>
			{/each}
		</ul>
	{:else}
		<EmptyState title={t.stats.emptyTitle} text={t.stats.emptyText} />
	{/if}
</section>
