<script lang="ts">
	import { page } from '$app/state';
	import { Bell, Camera, User } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import { desktopNav, isActive } from '#lib/nav.js';
	import Button from '#lib/components/ui/Button.svelte';

	const pathname = $derived(page.url.pathname);
</script>

<header
	class="sticky top-0 z-40 border-b border-blanc-casse/10 bg-charbon/90 pt-[env(safe-area-inset-top)] backdrop-blur"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
		<a href="/" class="text-lg leading-none font-black tracking-tight" aria-label={t.app.name}>
			<span class="block">Setal</span>
			<span class="block text-citron">Sunu Gox</span>
		</a>

		<nav aria-label={t.nav.main} class="hidden items-center gap-1 lg:flex">
			{#each desktopNav as item (item.href)}
				{@const active = isActive(pathname, item.href)}
				<a
					href={item.href}
					aria-current={active ? 'page' : undefined}
					class="rounded-full px-4 py-2 text-sm font-semibold transition {active
						? 'bg-lavande text-charbon'
						: 'text-blanc-casse/80 hover:bg-blanc-casse/10'}">{item.label}</a
				>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<Button href="/signaler" class="hidden lg:inline-flex"
				><Camera size={18} />{t.nav.reportCanal}</Button
			>
			<a
				href="/notifications"
				aria-label={t.nav.notifications}
				class="rounded-full p-2.5 hover:bg-blanc-casse/10"><Bell size={22} /></a
			>
			<a
				href="/profil"
				aria-label={t.nav.profile}
				class="rounded-full p-2.5 hover:bg-blanc-casse/10"><User size={22} /></a
			>
		</div>
	</div>
</header>
