<script lang="ts">
	import {
		ArrowRight,
		Building2,
		Camera,
		CircleCheck,
		Gift,
		Leaf,
		MapPin,
		Megaphone,
		Play,
		Rocket,
		Trophy,
		Users
	} from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import { images, slots } from '#lib/images.js';
	import { isDemo } from '#lib/demo/index.js';
	import { demo } from '#lib/demo/data.js';
	import { reveal } from '#lib/animations/reveal.js';
	import Logo from '#lib/components/layout/Logo.svelte';
	import ImageSlot from '#lib/components/ui/ImageSlot.svelte';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';
	import BeforeAfterSlider from '#lib/components/gallery/BeforeAfterSlider.svelte';
	import HomeCard from './HomeCard.svelte';
	import Podium from './Podium.svelte';

	const statIcons = [Leaf, Users, Trophy, Building2];
	const statLabels = [t.stats.tonnes, t.stats.citizens, t.stats.winners, t.stats.communities];
	const rewardLabels = $derived(isDemo ? demo.rewards : t.rewards.items);
</script>

<!-- Hero -->
<section class="relative h-415 overflow-hidden">
	<img
		src={images.hero}
		alt=""
		fetchpriority="high"
		class="absolute top-0 right-0 h-full w-[62%] object-cover object-center"
	/>
	<div
		class="absolute inset-0 bg-linear-to-r from-charbon from-30% via-charbon/55 via-44% to-transparent to-62%"
	></div>
	<div class="absolute inset-x-0 bottom-0 h-70 bg-linear-to-t from-charbon to-transparent"></div>

	<div use:reveal class="absolute top-85 left-80">
		<h1 class="relative fs-84 leading-[0.76] font-black tracking-tight">
			Setal<Leaf class="absolute -top-8 left-232 size-52 rotate-[18deg] text-citron" /><br /><span
				class="text-citron">Sunu Gox</span
			>
		</h1>
		<p class="mt-16 fs-30 leading-[0.97] font-extrabold">
			{t.hero.lead} <span class="text-citron">{t.hero.city}</span><br />{t.hero.tail}
		</p>
		<p class="mt-10 w-405 fs-15 leading-[1.1] text-blanc-casse/90">{t.hero.text}</p>
		<div class="mt-12 flex gap-18">
			<a
				href="/communautes"
				class="flex h-41 min-w-235 items-center justify-center gap-12 rounded-full bg-citron px-22 fs-14 font-bold whitespace-nowrap text-charbon"
				><Rocket class="size-20" />{t.hero.join}<ArrowRight class="size-18" /></a
			>
			<a
				href="/a-propos"
				class="flex h-41 min-w-157 items-center justify-center gap-10 rounded-full border border-blanc-casse/70 px-22 fs-14 font-bold whitespace-nowrap"
				><Play class="size-22" />{t.hero.learn}</a
			>
		</div>
	</div>

	<p
		class="absolute top-80 right-190 w-190 -rotate-[9deg] font-script fs-34 leading-[0.95] font-bold"
	>
		Un Dakar<br />plus propre,<br /><span
			class="underline decoration-citron decoration-[3px] underline-offset-4">c'est possible !</span
		>
	</p>

	<a href="/carte" class="absolute top-203 right-44 h-195 w-250 r-20 glass p-10">
		<span class="flex items-center gap-10">
			<span class="flex size-34 shrink-0 items-center justify-center r-10 bg-lavande/25"
				><MapPin class="size-22 text-lavande" /></span
			>
			<span
				><span class="block fs-15 font-bold">{t.mapTeaser.title}</span><span
					class="block fs-10 leading-[1.15] text-blanc-casse/75">{t.mapTeaser.text}</span
				></span
			>
			<ArrowRight class="ml-auto size-18" />
		</span>
		<span
			class="relative mt-8 flex h-110 items-center justify-center overflow-hidden r-12 bg-blanc-casse/10"
		>
			{#if isDemo}<SafeImg src={demo.mapPreview} class="absolute inset-0 size-full object-cover"
				></SafeImg>{/if}
			<span
				class="absolute bottom-6 flex h-20 items-center gap-6 rounded-full bg-charbon/90 px-14 fs-10 font-semibold"
				>{t.mapTeaser.cta}<ArrowRight class="size-12" /></span
			>
		</span>
	</a>
</section>

<div class="flex flex-col gap-12 px-40 pt-5">
	<div class="grid grid-cols-[477fr_552fr_552fr] gap-12">
		<HomeCard title={t.project.title} icon={Users} iconSrc={slots.iconUsers} class="relative h-232">
			<div class="flex gap-14">
				<div class="h-167 w-160 shrink-0 overflow-hidden r-14">
					<SafeImg src={slots.project} class="size-full object-cover"
						>{#snippet fallback()}<ImageSlot
								hint="static/images/project-africa.jpg"
							/>{/snippet}</SafeImg
					>
				</div>
				<div>
					<p class="fs-12 leading-[1.3]">{t.project.text}</p>
					<ul class="mt-6 space-y-5 fs-12">
						{#each t.project.points as point (point)}<li class="flex items-center gap-8">
								<CircleCheck class="size-17 text-citron" />{point}
							</li>{/each}
					</ul>
				</div>
			</div>
			<a
				href="/a-propos"
				class="absolute right-16 bottom-12 flex h-24 items-center gap-8 rounded-full bg-citron px-14 fs-11 font-bold text-charbon"
				>{t.project.cta}<ArrowRight class="size-13" /></a
			>
		</HomeCard>

		<HomeCard
			title={t.gallery.title}
			icon={Camera}
			href="/galerie"
			linkLabel={t.gallery.link}
			class="h-232"
		>
			{#if isDemo}
				<BeforeAfterSlider
					beforeUrl={demo.gallery.before}
					afterUrl={demo.gallery.after}
					class="h-184 w-full r-14"
				/>
			{:else}
				<div class="relative grid h-184 grid-cols-2 overflow-hidden r-14 bg-blanc-casse/5">
					<span
						class="absolute bottom-8 left-6 rounded-full bg-charbon/80 px-14 py-6 fs-11 font-bold"
						>{t.gallery.before}</span
					>
					<span
						class="absolute right-6 bottom-8 rounded-full bg-charbon/80 px-14 py-6 fs-11 font-bold"
						>{t.gallery.after}</span
					>
					<p
						class="absolute inset-0 flex items-center justify-center bg-charbon/60 px-60 text-center fs-12"
					>
						{t.gallery.empty}
					</p>
				</div>
			{/if}
		</HomeCard>

		<HomeCard
			title={t.communities.title}
			icon={Users}
			iconSrc={slots.iconUsers}
			href="/communautes"
			linkLabel={t.communities.link}
			class="h-232"
		>
			{#if isDemo}
				<ul class="grid grid-cols-3 gap-10">
					{#each demo.communities as c (c.slug)}
						<li>
							<a
								href="/communautes/{c.slug}"
								class="flex h-175 flex-col overflow-hidden r-12 border border-blanc-casse/20 bg-charbon/60"
							>
								<SafeImg src={c.cover} alt={c.name} class="h-91 w-full object-cover"
									>{#snippet fallback()}<span
											class="flex h-91 w-full items-center justify-center bg-blanc-casse/10"
											><Users class="size-30 text-lavande" /></span
										>{/snippet}</SafeImg
								>
								<span class="px-10 pt-8"
									><span class="block fs-14 font-bold">{c.name}</span><span
										class="flex items-center gap-4 fs-11 text-citron"
										><Users class="size-12" />{c.members} membres</span
									></span
								>
								<span
									class="mx-auto mt-auto mb-8 flex h-22 items-center rounded-full bg-lavande px-26 fs-11 font-bold text-charbon"
									>Rejoindre</span
								>
							</a>
						</li>
					{/each}
				</ul>
			{:else}
				<p
					class="flex h-175 items-center justify-center r-14 border border-dashed border-blanc-casse/25 px-50 text-center fs-12 text-blanc-casse/80"
				>
					{t.communities.empty}
				</p>
			{/if}
		</HomeCard>
	</div>

	<div class="grid grid-cols-[685fr_435fr_457fr] gap-14">
		<div class="pt-18">
			<ul class="grid grid-cols-4 gap-13 px-12">
				{#each statLabels as label, i (label)}
					{@const Icon = statIcons[i]}
					<li
						class="flex h-84 flex-col items-center justify-center r-14 border border-citron/30 bg-charbon/60"
					>
						<Icon class="size-30 text-citron" /><span class="fs-26 leading-none font-extrabold"
							>{isDemo ? demo.stats[i] : '—'}</span
						><span class="mt-2 fs-12 text-blanc-casse/80">{label}</span>
					</li>
				{/each}
			</ul>
		</div>

		<HomeCard
			title={t.ranking.title}
			icon={Trophy}
			iconSrc={slots.trophy}
			href="/classement"
			linkLabel={t.ranking.link}
			small
			class="h-136"
		>
			<p class="sr-only">{t.ranking.empty}</p>
			<Podium variant="desktop" items={isDemo ? demo.podiumDesktop : []} />
		</HomeCard>

		<HomeCard
			title={t.rewards.title}
			icon={Gift}
			iconSrc={slots.iconGift}
			href="/recompenses"
			linkLabel={t.rewards.link}
			small
			class="h-136"
		>
			<ul class="grid grid-cols-5 gap-6">
				{#each rewardLabels as label, i (label)}
					<li
						class="flex h-79 flex-col items-center justify-start gap-3 r-12 border border-blanc-casse/15 bg-charbon/60 px-2 pt-6 text-center"
					>
						<SafeImg src={slots.rewards[i]} class="h-38 w-auto max-w-full object-contain" />
						<span class="fs-10 leading-[1.1] font-semibold">{label}</span>
					</li>
				{/each}
			</ul>
		</HomeCard>
	</div>

	<div
		class="mx-[-18px] flex h-91 items-center rounded-full border border-lavande/45 bg-linear-to-r from-lavande/60 via-charbon/95 via-40% to-charbon pr-40 pl-14"
	>
		<span
			class="flex size-84 shrink-0 items-center justify-center rounded-full bg-lavande text-charbon"
			><Megaphone class="size-46" /></span
		>
		<div class="ml-30">
			<p class="fs-22 font-extrabold text-lavande">{t.banner.title}</p>
			<p class="mt-4 fs-12">{t.banner.text}</p>
		</div>
		<div class="ml-auto flex flex-col items-end gap-2 fs-11">
			<Logo variant="banner" /><span>{t.banner.tag}</span>
		</div>
	</div>
</div>
