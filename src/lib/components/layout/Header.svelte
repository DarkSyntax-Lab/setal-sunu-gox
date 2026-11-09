<script lang="ts">
	import { page } from '$app/state';
	import { Bell, ChevronDown, Search, User, Users } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import { desktopNav, isActive } from '#lib/nav.js';
	import { isDemo } from '#lib/demo/index.js';
	import { demo } from '#lib/demo/data.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';
	import Logo from './Logo.svelte';

	const pathname = $derived(page.url.pathname);
	const unread = isDemo ? demo.unread : 0; // vrai compteur : étape 4 (notifications)
</script>

{#snippet bell(size: string)}
	<span class="relative">
		<Bell class={size} />
		{#if unread > 0}<span
				class="absolute -top-4 -right-4 flex size-20 items-center justify-center rounded-full bg-red-500 fs-11 font-bold text-white"
				>{unread}</span
			>{/if}
	</span>
{/snippet}
{#snippet avatar(size: string, icon: string)}
	{#if isDemo}
		<SafeImg src={demo.avatarMe} class="{size} rounded-full object-cover">
			{#snippet fallback()}<User class={icon} />{/snippet}
		</SafeImg>
	{:else}<User class={icon} />{/if}
{/snippet}

<!-- Mobile : par-dessus la photo du hero -->
<header class="absolute inset-x-0 top-0 z-40 h-200 desk:hidden">
	<a href="/" class="absolute top-[calc(env(safe-area-inset-top)+var(--u)*26)] left-14"><Logo /></a>
	<div
		class="absolute top-[calc(env(safe-area-inset-top)+var(--u)*48)] right-22 flex items-center gap-16"
	>
		<a
			href="/communautes"
			class="flex h-65 items-center gap-10 rounded-full bg-lavande px-18 fs-15 leading-tight font-bold whitespace-nowrap text-charbon"
		>
			<Users class="size-34 shrink-0" />
			<span>{t.nav.community}<br />{isDemo ? demo.myCommunity : t.nav.choose}</span><ChevronDown
				class="size-18"
			/>
		</a>
		<a href="/notifications" aria-label={t.nav.notifications} class="text-blanc-casse"
			>{@render bell('size-44')}</a
		>
		<a
			href="/profil"
			aria-label={t.nav.profile}
			class="flex size-70 items-center justify-center overflow-hidden rounded-full border-2 border-lavande bg-charbon/70"
			>{@render avatar('size-full', 'size-34')}</a
		>
	</div>
</header>

<!-- Bureau -->
<header class="absolute inset-x-0 top-0 z-40 hidden h-80 items-center pr-27 pl-70 desk:flex">
	<a href="/" class="mt-2"><Logo variant="compact" /></a>
	<nav aria-label={t.nav.main} class="ml-117 flex h-46 items-center gap-6 rounded-full glass px-7">
		{#each desktopNav as item (item.href)}
			{@const active = isActive(pathname, item.href)}
			<a
				href={item.href}
				aria-current={active ? 'page' : undefined}
				class="flex h-35 items-center gap-8 rounded-full px-21 fs-13 font-bold whitespace-nowrap {active
					? 'bg-lavande text-charbon'
					: 'text-blanc-casse hover:text-citron'}"
			>
				{#if item.icon}{@const Icon = item.icon}<Icon class="size-18" />{/if}{item.label}
			</a>
		{/each}
	</nav>
	<form
		action="/carte"
		role="search"
		class="ml-auto flex h-44 w-196 items-center gap-12 rounded-full glass px-22 fs-13 whitespace-nowrap"
	>
		<Search class="size-20 shrink-0" />
		<input
			name="q"
			placeholder={t.nav.search}
			aria-label={t.nav.search}
			class="w-full bg-transparent outline-none placeholder:text-blanc-casse/70"
		/>
	</form>
	<a
		href="/notifications"
		aria-label={t.nav.notifications}
		class="ml-20 flex size-52 items-center justify-center rounded-full glass"
		>{@render bell('size-24')}</a
	>
	<a
		href="/profil"
		aria-label={t.nav.profile}
		class="ml-10 flex h-52 w-90 items-center justify-center gap-8 rounded-full glass"
		>{@render avatar('size-40', 'size-26')}<ChevronDown class="size-16" /></a
	>
</header>
