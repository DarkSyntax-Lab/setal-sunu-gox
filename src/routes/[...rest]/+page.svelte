<script lang="ts">
	import { t } from '#lib/i18n/index.js';
	import Button from '#lib/components/ui/Button.svelte';
</script>

<svelte:head><title>{t.comingSoon.title} | {t.app.name}</title></svelte:head>

<section class="mx-auto max-w-xl px-4 pt-[max(8rem,calc(var(--u)*140))] pb-24 text-center">
	<h1 class="text-3xl font-black">{t.comingSoon.title}</h1>
	<p class="mt-3 text-blanc-casse/70">{t.comingSoon.text}</p>
	<Button href="/" class="mt-8">{t.comingSoon.back}</Button>
</section>
