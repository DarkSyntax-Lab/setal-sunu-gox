<script lang="ts">
	import { page } from '$app/state';
	import { t } from '#lib/i18n/index.js';
	import { mobileNav, isActive } from '#lib/nav.js';

	const pathname = $derived(page.url.pathname);
</script>

<nav
	aria-label={t.nav.main}
	class="fixed inset-x-10 bottom-[calc(env(safe-area-inset-bottom)+var(--u)*14)] z-50 desk:hidden"
>
	<ul class="grid h-142 grid-cols-5 items-center gap-4 r-60 glass bg-charbon/95 px-18">
		{#each mobileNav as item (item.href)}
			{@const active = isActive(pathname, item.href)}
			{@const Icon = item.icon!}
			<li>
				<a
					href={item.href}
					aria-current={active ? 'page' : undefined}
					class="flex h-110 flex-col items-center justify-center gap-6 r-40 fs-20 font-bold {active
						? 'bg-lavande text-charbon'
						: 'text-blanc-casse'}"
				>
					<Icon class="size-40" /><span>{item.label}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
