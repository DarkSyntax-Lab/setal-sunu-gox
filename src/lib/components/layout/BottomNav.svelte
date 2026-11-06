<script lang="ts">
	import { page } from '$app/state';
	import { t } from '#lib/i18n/index.js';
	import { mobileLeft, mobileRight, isActive } from '#lib/nav.js';
	import ReportFab from './ReportFab.svelte';

	const pathname = $derived(page.url.pathname);
</script>

{#snippet tab(item: (typeof mobileLeft)[number])}
	{@const active = isActive(pathname, item.href)}
	<a
		href={item.href}
		aria-current={active ? 'page' : undefined}
		class="flex flex-col items-center gap-0.5 rounded-2xl px-1 py-2 text-[10px] font-semibold {active
			? 'bg-lavande text-charbon'
			: 'text-blanc-casse/80'}"
	>
		<item.icon size={22} />
		<span>{item.label}</span>
	</a>
{/snippet}

<nav
	aria-label={t.nav.main}
	class="fixed inset-x-0 bottom-0 z-50 border-t border-blanc-casse/10 bg-charbon/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
>
	<ul class="grid grid-cols-5 items-end px-2 pt-1">
		{#each mobileLeft as item (item.href)}<li>{@render tab(item)}</li>{/each}
		<li class="flex justify-center"><ReportFab /></li>
		{#each mobileRight as item (item.href)}<li>{@render tab(item)}</li>{/each}
	</ul>
</nav>
