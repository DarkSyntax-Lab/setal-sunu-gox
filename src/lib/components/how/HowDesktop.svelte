<script lang="ts">
	import {
		ArrowRight,
		Bell,
		Brush,
		CalendarDays,
		Camera,
		ChartNoAxesColumn,
		Gift,
		MapPin,
		Send,
		Trophy,
		Users
	} from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import StepVisual from './StepVisual.svelte';

	let { sweep = $bindable(30), onuserdrag }: { sweep?: number; onuserdrag?: () => void } = $props();

	// Toutes les positions sont en pixels de la maquette (2510 px de large) : la section se met à l'échelle de l'écran.
	const px = (n: number) => `calc(var(--u) * ${n})`;
	const Y0 = 185;
	const cards = [
		{ x: 178, y: 375, w: 644, icon: Camera },
		{ x: 944, y: 375, w: 623, icon: MapPin },
		{ x: 1687, y: 375, w: 631, icon: Send },
		{ x: 1668, y: 720, w: 650, icon: Bell },
		{ x: 942, y: 720, w: 602, icon: CalendarDays },
		{ x: 178, y: 720, w: 634, icon: Brush },
		{ x: 182, y: 1065, w: 648, icon: ChartNoAxesColumn },
		{ x: 948, y: 1065, w: 614, icon: Trophy },
		{ x: 1682, y: 1065, w: 634, icon: Gift }
	];
	const arrows = [
		['M852 295 H904', 'M886 272 L910 295 L886 318'],
		['M1597 295 H1649', 'M1631 272 L1655 295 L1631 318'],
		[
			'M2322 295 H2372 Q2402 295 2402 325 V625 Q2402 655 2372 655 H2336',
			'M2354 632 L2330 655 L2354 678'
		],
		['M1640 643 H1590', 'M1608 620 L1584 643 L1608 666'],
		['M910 643 H860', 'M878 620 L854 643 L878 666'],
		['M180 643 H140 Q112 643 112 671 V955 Q112 985 142 985 H174', 'M156 962 L180 985 L156 1008'],
		['M860 985 H912', 'M894 962 L918 985 L894 1008'],
		['M1594 985 H1646', 'M1628 962 L1652 985 L1628 1008']
	];
</script>

<section class="[container-type:inline-size]" aria-labelledby="how-title">
	<div
		class="relative"
		style="--u: calc(100cqw / 2510); --spacing: calc(100cqw / 2510); height: calc(var(--u) * 1330); perspective: 2400px"
	>
		<div
			class="pointer-events-none absolute right-0 bottom-0 size-1000 bg-[radial-gradient(circle_at_100%_100%,color-mix(in_srgb,var(--color-lavande)_35%,transparent),transparent_60%)]"
		></div>
		<!-- Titre -->
		<span data-a="head" class="absolute top-22 left-202 h-70 w-18 rounded-full bg-citron"></span>
		<h2
			id="how-title"
			data-a="head"
			class="absolute top-8 left-260 fs-80 font-extrabold tracking-tight italic"
		>
			{t.how.title} <span class="text-citron">{t.how.accent}</span>
			<svg
				viewBox="0 0 270 30"
				class="absolute top-96 left-380 h-28 w-270"
				fill="none"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"><path class="text-citron" d="M4 22 C60 6 160 4 266 12" /></svg
			>
		</h2>
		<span data-a="head" class="absolute top-20 left-1076 h-80 w-3 bg-blanc-casse/50"></span>
		<p data-a="head" class="absolute top-24 left-1131 w-950 fs-29 leading-[1.3]">{t.how.intro}</p>

		<!-- Flèches du parcours -->
		<svg
			viewBox="0 0 2510 1330"
			class="pointer-events-none absolute inset-0 size-full"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="6"
			aria-hidden="true"
		>
			{#each arrows as [line, head], i (i)}
				<g data-arrow={i + 1} class="stroke-citron">
					<path data-draw d={line} pathLength="1" style="stroke-dasharray: 1" /><path
						data-head
						d={head}
					/>
				</g>
			{/each}
		</svg>

		<!-- Les 9 étapes -->
		{#each cards as c, i (i)}
			{@const step = t.how.steps[i]}
			{@const Icon = c.icon}
			<article
				data-step={i + 1}
				class="absolute"
				style="left: {px(c.x)}; top: {px(c.y - Y0)}; width: {px(c.w)}; height: {px(280)}"
			>
				<div
					data-card
					class="absolute inset-0 overflow-hidden r-40 border-2 border-lavande/60 bg-charbon/85 shadow-[0_0_40px_-8px_var(--color-lavande)]"
				>
					<StepVisual
						{i}
						class={i === 6
							? 'absolute top-0 right-0 h-205 w-[82%]'
							: 'absolute inset-x-0 top-0 h-205'}
						bind:sweep
						{onuserdrag}
					/>
					<div
						class="pointer-events-none absolute inset-x-0 bottom-0 h-90 bg-linear-to-t from-charbon/95 via-charbon/85 to-transparent"
					></div>
					<p class="absolute top-212 left-95 w-[80%] fs-25 leading-[1.36]">{step.text}</p>
					<span
						data-icon
						class="absolute top-58 left-24 flex size-86 items-center justify-center rounded-full border-2 border-lavande bg-charbon/60 backdrop-blur"
						><Icon class="size-40 text-lavande" /></span
					>
				</div>
				<span
					data-num
					class="absolute -top-37 left-58 flex size-80 items-center justify-center rounded-full bg-citron fs-46 font-black text-charbon shadow-[0_0_30px_var(--color-citron)]"
					>{i + 1}</span
				>
				<span
					data-pill
					class="absolute -top-24 left-152 flex h-54 items-center rounded-full bg-lavande px-28 fs-27 font-bold whitespace-nowrap text-charbon"
					>{step.title}</span
				>
			</article>
		{/each}

		<a
			data-a="cta"
			href="/communautes"
			class="absolute top-1195 left-908 flex h-92 w-674 items-center justify-center gap-24 rounded-full bg-citron fs-40 font-bold text-charbon shadow-[0_0_50px_-10px_var(--color-citron)]"
		>
			<Users class="size-52" />{t.how.cta}<ArrowRight class="size-44" />
		</a>
	</div>
</section>
