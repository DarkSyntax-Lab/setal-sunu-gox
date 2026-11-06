<script lang="ts">
	import { Camera } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
	import { reveal } from '#lib/animations/reveal.js';
	import Button from '#lib/components/ui/Button.svelte';
</script>

<section class="hero-glow relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-32">
		<div use:reveal class="max-w-2xl">
			<h1 class="text-6xl leading-[0.95] font-black tracking-tight sm:text-8xl">
				Setal<br /><span class="text-citron">Sunu Gox</span>
			</h1>
			<p class="mt-6 text-2xl font-bold sm:text-3xl">
				{t.hero.lead} <span class="text-citron">{t.hero.city}</span>
				{t.hero.tail}
			</p>
			<p class="mt-4 max-w-xl text-blanc-casse/80">{t.hero.text}</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<Button href="/signaler"><Camera size={18} />{t.nav.reportCanal}</Button>
				<Button href="/communautes" variant="secondary">{t.hero.communitiesCta}</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-glow {
		background:
			radial-gradient(
				60% 60% at 85% 10%,
				color-mix(in srgb, var(--color-lavande) 35%, transparent),
				transparent
			),
			radial-gradient(
				50% 50% at 5% 95%,
				color-mix(in srgb, var(--color-citron) 16%, transparent),
				transparent
			);
	}
</style>
