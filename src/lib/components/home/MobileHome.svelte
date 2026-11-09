<script lang="ts">
	import { ArrowRight, BadgeCheck, Clock, Map, MapPin, Users } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import { images, slots } from '#lib/images.js';
	import { isDemo } from '#lib/demo/index.js';
	import { demo } from '#lib/demo/data.js';
	import { reveal } from '#lib/animations/reveal.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';
	import Podium from './Podium.svelte';

	let period = $state('week');
	const [nos, ...rest] = t.communities.title.split(' ');
	const rewardLabels = $derived(isDemo ? demo.rewards : t.rewards.items);
</script>

<!-- Hero : photo portrait propre au mobile (static/images/hero-mobile.jpg), sinon la photo du bureau -->
<section class="relative h-660 overflow-hidden">
	<SafeImg
		src={slots.heroMobile}
		eager
		class="absolute inset-0 size-full object-cover object-center"
	>
		{#snippet fallback()}<img
				src={images.hero}
				alt=""
				fetchpriority="high"
				class="absolute inset-0 size-full object-cover object-[68%_30%]"
			/>{/snippet}
	</SafeImg>
	<div
		class="absolute inset-0 bg-linear-to-t from-charbon via-charbon/10 via-45% to-charbon/55"
	></div>
	<h1 use:reveal class="absolute top-470 left-45 fs-38 leading-[1.2] font-extrabold">
		{t.hero.lead}<br /><span class="text-citron">{t.hero.city}</span>
		{t.hero.tail}
	</h1>
	<a
		href="/communautes"
		class="absolute top-572 left-43 flex h-56 w-343 items-center justify-center gap-14 rounded-full bg-citron fs-19 font-bold text-charbon"
		>{t.hero.joinMobile}<ArrowRight class="size-26" /></a
	>
</section>

<section class="relative mx-22 mt-2 flex h-148 overflow-hidden r-30 glass">
	<div class="flex w-198 shrink-0 items-center justify-center bg-blanc-casse/5">
		{#if isDemo}<SafeImg src={demo.nearby.thumb} class="size-full object-cover"
				>{#snippet fallback()}<MapPin class="size-60 text-lavande/60" />{/snippet}</SafeImg
			>{:else}<MapPin class="size-60 text-lavande/60" />{/if}
	</div>
	<div class="flex min-w-0 flex-1 flex-col pt-16 pr-14 pb-12 pl-20">
		<p class="flex items-center gap-12 fs-22 font-bold">
			<MapPin class="size-34 shrink-0 text-citron" />{t.nearby.title}
		</p>
		{#if isDemo}
			<Map class="absolute top-14 right-16 size-50 text-citron/80" />
			<p class="mt-10 fs-25 font-bold">{demo.nearby.place}</p>
			<div class="mt-auto flex items-center justify-between gap-10">
				<p class="flex min-w-0 items-center gap-8 truncate fs-17 text-lavande">
					<Clock class="size-22 shrink-0" />{demo.nearby.meta}
				</p>
				<a
					href="/carte"
					class="flex h-49 shrink-0 items-center gap-10 rounded-full bg-lavande px-24 fs-17 font-bold whitespace-nowrap text-charbon"
					>{t.nearby.cta}<ArrowRight class="size-24" /></a
				>
			</div>
		{:else}
			<p class="mt-10 fs-25 font-bold">{t.nearby.empty}</p>
			<div class="mt-auto flex items-center justify-between gap-10">
				<p class="min-w-0 truncate fs-17 text-blanc-casse/70">{t.nearby.hint}</p>
				<a
					href="/carte"
					class="flex h-49 shrink-0 items-center gap-10 rounded-full bg-lavande px-24 fs-17 font-bold whitespace-nowrap text-charbon"
					>{t.nearby.cta}<ArrowRight class="size-24" /></a
				>
			</div>
		{/if}
	</div>
</section>

<div class="mx-23 mt-40 flex h-56 items-center justify-between">
	<h2 class="flex items-center gap-18 fs-33 font-extrabold">
		<SafeImg src={slots.iconUsers} class="h-52 w-auto" /><span
			>{nos} <span class="text-citron">{rest.join(' ')}</span></span
		>
	</h2>
	<a href="/communautes" class="flex items-center gap-10 fs-20 text-blanc-casse/80"
		>{t.communities.link}<ArrowRight class="size-24" /></a
	>
</div>
{#if isDemo}
	<ul class="mt-14 flex snap-x gap-10 overflow-x-auto px-22">
		{#each demo.communities as c (c.slug)}
			<li class="shrink-0 snap-start">
				<a href="/communautes/{c.slug}" class="relative block h-190 w-407 r-28 glass p-14">
					<span class="flex gap-14">
						<SafeImg src={c.cover} alt={c.name} class="size-90 shrink-0 rounded-full object-cover"
							>{#snippet fallback()}<span
									class="flex size-90 shrink-0 items-center justify-center rounded-full bg-lavande/30"
									><Users class="size-40 text-lavande" /></span
								>{/snippet}</SafeImg
						>
						<span class="min-w-0 pt-4">
							<span class="flex items-center gap-10 fs-24 font-bold"
								>{c.name}{#if c.verified}<BadgeCheck
										class="size-26 fill-citron text-charbon"
									/>{/if}</span
							>
							<span class="mt-4 flex items-center gap-8 fs-17 font-semibold text-citron"
								><Users class="size-22" />{c.members} membres</span
							>
							<span class="mt-4 block truncate fs-17 text-blanc-casse/75">{c.tagline}</span>
						</span>
					</span>
					<span class="absolute inset-x-14 bottom-14 flex items-center gap-8">
						<span class="flex">
							{#each c.heads as n (n)}
								<SafeImg
									src={n}
									class="-ml-12 size-42 rounded-full border-2 border-charbon object-cover first:ml-0"
									>{#snippet fallback()}<span
											class="-ml-12 size-42 rounded-full border-2 border-charbon bg-lavande/40 first:ml-0"
										></span>{/snippet}</SafeImg
								>
							{/each}
						</span>
						{#if c.more}<span
								class="flex h-42 items-center rounded-full bg-blanc-casse/10 px-14 fs-17 font-semibold"
								>{c.more}</span
							>{/if}
						<span
							class="r-full ml-auto flex h-44 items-center rounded-full bg-lavande px-26 fs-18 font-bold text-charbon"
							>Rejoindre</span
						>
					</span>
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p class="mx-22 mt-14 flex h-190 items-center justify-center r-28 glass px-40 text-center fs-17">
		{t.communities.empty}
	</p>
{/if}

<div class="mx-30 mt-30 flex h-54 items-center justify-between">
	<h2 class="flex items-center gap-20 fs-33 font-extrabold">
		<SafeImg src={slots.trophy} class="-my-6 h-66 w-auto" />{t.ranking.title}
	</h2>
	<select
		bind:value={period}
		aria-label={t.ranking.title}
		class="h-40 rounded-full border border-blanc-casse/60 bg-charbon px-20 fs-16"
	>
		<option value="week">{t.ranking.week}</option><option value="month">{t.ranking.month}</option
		><option value="all">{t.ranking.all}</option>
	</select>
</div>
<section class="mt-16 h-250 r-30 glass px-20">
	<p class="sr-only">{t.ranking.empty}</p>
	<Podium variant="mobile" items={isDemo ? demo.podiumMobile : []} />
</section>

<div class="mx-33 mt-30 flex h-42 items-center justify-between">
	<h2 class="flex items-center gap-22 fs-28 font-extrabold">
		<SafeImg src={slots.iconGift} class="h-52 w-auto" />{t.rewards.titleMobile}
	</h2>
	<a
		href="/recompenses"
		class="flex h-40 items-center gap-12 rounded-full bg-lavande px-24 fs-17 font-bold text-charbon"
		>{t.rewards.link}<ArrowRight class="size-22" /></a
	>
</div>
<ul class="mx-30 mt-12 grid grid-cols-5 gap-10">
	{#each rewardLabels as label, i (label)}
		<li
			class="flex h-126 flex-col items-center justify-start gap-4 r-22 border border-blanc-casse/15 bg-charbon/80 px-4 pt-8 text-center"
		>
			<SafeImg src={slots.rewards[i]} class="h-72 w-auto max-w-full object-contain" />
			<span class="fs-17 leading-[1.1] font-bold">{label}</span>
		</li>
	{/each}
</ul>
