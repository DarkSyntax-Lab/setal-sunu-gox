<script lang="ts">
	import { Star } from '@lucide/svelte';
	import { slots } from '#lib/images.js';
	import type { PodiumItem } from '#lib/types.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';

	type Props = { variant: 'desktop' | 'mobile'; items?: PodiumItem[] };
	let { variant, items = [] }: Props = $props();

	// Cadres extraits de la maquette, en pixels de maquette : largeur, hauteur, centre et rayon du trou photo.
	const frames = {
		1: { w: 238, h: 180, cx: 119, cy: 114, r: 61 },
		2: { w: 186, h: 142, cx: 93, cy: 89, r: 47.5 },
		3: { w: 178, h: 136, cx: 88, cy: 84, r: 46.5 }
	} as const;
	const order = [2, 1, 3] as const;
	const k = $derived(variant === 'mobile' ? 1 : 0.3);
	const u = (n: number) => `calc(var(--u) * ${n * k})`;
</script>

<ol class="flex items-end justify-around {variant === 'mobile' ? 'h-full pb-13' : ''}">
	{#each order as rank (rank)}
		{@const f = frames[rank]}
		{@const item = items.find((i) => i.rank === rank)}
		<li class="flex flex-col items-center">
			<div class="relative" style="width: {u(f.w)}; height: {u(f.h)}">
				<div
					class="absolute overflow-hidden rounded-full bg-blanc-casse/10"
					style="left: {u(f.cx - f.r - 1)}; top: {u(f.cy - f.r - 1)}; width: {u(
						f.r * 2 + 2
					)}; height: {u(f.r * 2 + 2)}"
				>
					{#if item}<SafeImg src={item.photo ?? null} class="size-full object-cover" />{/if}
				</div>
				<img
					src={slots.frames[rank]}
					alt=""
					class="pointer-events-none absolute inset-0 size-full"
				/>
			</div>
			<span class="{variant === 'mobile' ? 'mt-4 fs-22' : 'fs-12'} font-bold"
				>{item?.name ?? '—'}</span
			>
			<span
				class="{variant === 'mobile'
					? 'fs-20'
					: 'fs-10'} flex items-center gap-4 font-bold text-citron"
				><Star
					class="{variant === 'mobile' ? 'size-24' : 'size-10'} fill-amber-400 text-amber-400"
				/>{item?.pts ?? '—'} pts</span
			>
		</li>
	{/each}
</ol>
