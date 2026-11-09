<script lang="ts">
	import {
		ArrowRight,
		Bell,
		Brush,
		CalendarDays,
		Camera,
		ChartNoAxesColumn,
		Gift,
		Lightbulb,
		MapPin,
		Send,
		Trophy,
		TriangleAlert,
		Users,
		X
	} from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import { asset } from '#lib/assets.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';
	import StepVisual from './StepVisual.svelte';

	let { sweep = $bindable(30), onuserdrag }: { sweep?: number; onuserdrag?: () => void } = $props();

	const m = t.how.mobile;
	const icons = [Camera, MapPin, Send, Bell, CalendarDays, Brush, ChartNoAxesColumn, Trophy, Gift];
	const problem = asset('problem.jpg') ?? asset('probleme.jpg') ?? asset('canalavant.jpeg');
</script>

<section class="relative pt-30 pb-20" aria-labelledby="how-problem">
	<!-- Le problème -->
	<div data-a="head" class="relative mx-30 flex h-130 items-center gap-22 r-60 glass pr-20 pl-20">
		<span
			class="flex size-92 shrink-0 items-center justify-center rounded-full border-2 border-lavande bg-lavande/30"
			><TriangleAlert class="size-48 text-white" /></span
		>
		<div class="pr-70">
			<h2 id="how-problem" class="fs-42 leading-none font-extrabold">
				{m.problemTitle} <span class="text-lavande">{m.problemAccent}</span>
			</h2>
			<p class="mt-8 fs-22 leading-[1.3]">
				{m.problemText} <span class="font-bold text-citron">{m.problemCity}</span>
			</p>
		</div>
		{#each [0, 1, 2] as k (k)}<span
				class="absolute top-36 h-54 w-5 rounded-full bg-citron"
				style="right: calc(var(--u) * {95 - k * 22}); transform: rotate({38 - k * 12}deg)"
			></span>{/each}
	</div>
	<div data-a="head" class="relative mt-6 h-290 overflow-hidden">
		<SafeImg src={problem} alt={t.problem.imageAlt} class="size-full object-cover" />
		<ul class="absolute top-72 right-22 w-235 space-y-16 r-34 glass p-16">
			{#each m.problemList as item (item)}
				<li class="flex items-center gap-12 fs-20 leading-tight">
					<span class="flex size-38 shrink-0 items-center justify-center rounded-full bg-red-500"
						><X class="size-22 text-white" stroke-width={4} /></span
					>{item}
				</li>
			{/each}
		</ul>
	</div>

	<!-- Notre solution : les 9 étapes, une par carte, avec les mêmes animations 3D que sur ordinateur -->
	<div data-a="head" class="relative mx-30 mt-8 flex h-128 items-center gap-22 r-60 glass pl-24">
		<Lightbulb class="size-72 shrink-0 text-citron" />
		<div>
			<h2 class="fs-52 leading-none font-extrabold">
				{m.solutionTitle} <span class="text-citron">{m.solutionAccent}</span>
			</h2>
			<p class="mt-8 fs-26">{m.solutionIntro}</p>
		</div>
		<svg
			viewBox="0 0 200 24"
			class="absolute right-24 bottom-26 h-24 w-200"
			fill="none"
			stroke-linecap="round"
			stroke-width="5"
			aria-hidden="true"><path class="stroke-citron" d="M4 18 C50 4 130 2 196 8" /></svg
		>
	</div>

	<ol class="mx-30 mt-56 space-y-84">
		{#each t.how.steps as step, i (i)}
			{@const Icon = icons[i]}
			<li data-step={i + 1} class="relative" style="perspective: 1400px">
				<div
					data-card
					class="relative h-470 overflow-hidden r-50 glass shadow-[0_0_40px_-10px_var(--color-lavande)]"
				>
					<StepVisual {i} class="absolute inset-x-0 top-0 h-330" bind:sweep {onuserdrag} />
					<div
						class="pointer-events-none absolute inset-x-0 bottom-0 h-170 bg-linear-to-t from-charbon via-charbon/90 to-transparent"
					></div>
					<p class="absolute right-34 bottom-26 left-34 fs-27 leading-[1.3] text-blanc-casse">
						{step.text}
					</p>
					<span
						data-icon
						class="absolute top-62 left-24 flex size-84 items-center justify-center rounded-full border-2 border-lavande bg-charbon/60 backdrop-blur"
						><Icon class="size-40 text-lavande" /></span
					>
				</div>
				<span
					data-num
					class="absolute -top-34 left-32 flex size-76 items-center justify-center rounded-full bg-citron fs-40 font-black text-charbon shadow-[0_0_24px_var(--color-citron)]"
					>{i + 1}</span
				>
				<span
					data-pill
					class="absolute -top-22 left-122 flex h-52 items-center rounded-full bg-lavande px-26 fs-27 font-bold whitespace-nowrap text-charbon"
					>{step.title}</span
				>
				{#if i < t.how.steps.length - 1}
					<svg
						data-arrow={i + 1}
						viewBox="0 0 70 44"
						class="absolute -bottom-62 left-44 h-46 w-70"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="5"
						aria-hidden="true"
					>
						<g class="stroke-citron"
							><path
								data-draw
								d="M6 2 Q8 34 48 36"
								pathLength="1"
								style="stroke-dasharray: 1"
							/><path data-head d="M38 26 L52 36 L38 44" /></g
						>
					</svg>
				{/if}
			</li>
		{/each}
	</ol>

	<a
		data-a="cta"
		href="/communautes"
		class="mx-auto mt-60 flex h-76 w-485 items-center justify-center gap-18 rounded-full bg-citron fs-26 font-bold text-charbon shadow-[0_0_40px_-10px_var(--color-citron)]"
	>
		<Users class="size-42" />{t.how.cta}<ArrowRight class="size-34" />
	</a>

	<div class="relative mt-40 h-230 overflow-hidden">
		<SafeImg src={asset('equipe-skyline.jpg')} class="size-full object-cover" />
		<svg
			viewBox="0 0 852 120"
			preserveAspectRatio="none"
			class="absolute inset-x-0 bottom-0 h-110 w-full"
			aria-hidden="true"
			><path d="M0 100 C220 20 520 60 852 0 V120 H0Z" class="fill-lavande/40" /></svg
		>
	</div>
</section>
