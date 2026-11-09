<script lang="ts">
	import { ChevronsLeftRight } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';

	type Props = {
		beforeUrl: string | null;
		afterUrl: string | null;
		altBefore?: string;
		altAfter?: string;
		class?: string;
		position?: number;
		onuserdrag?: () => void;
	};
	let {
		beforeUrl,
		afterUrl,
		altBefore = t.gallery.before,
		altAfter = t.gallery.after,
		class: className = 'aspect-video rounded-3xl',
		position = $bindable(50),
		onuserdrag
	}: Props = $props();
</script>

<div
	role="presentation"
	onpointerdown={onuserdrag}
	class="relative overflow-hidden select-none {className}"
>
	<SafeImg src={afterUrl} alt={altAfter} class="absolute inset-0 h-full w-full object-cover" />
	<SafeImg
		src={beforeUrl}
		alt={altBefore}
		class="absolute inset-0 h-full w-full object-cover"
		style="clip-path: inset(0 {100 - position}% 0 0)"
	/>
	<span class="absolute bottom-3 left-3 rounded-full bg-charbon/80 px-3 py-1 text-xs font-bold"
		>{t.gallery.before}</span
	>
	<span class="absolute right-3 bottom-3 rounded-full bg-charbon/80 px-3 py-1 text-xs font-bold"
		>{t.gallery.after}</span
	>
	<div class="pointer-events-none absolute inset-y-0 w-0.5 bg-citron" style="left: {position}%">
		<span
			class="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-citron text-charbon"
			><ChevronsLeftRight size={20} /></span
		>
	</div>
	<input
		type="range"
		min="0"
		max="100"
		bind:value={position}
		aria-label={t.gallery.slider}
		class="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
		style="touch-action: pan-y"
	/>
</div>
