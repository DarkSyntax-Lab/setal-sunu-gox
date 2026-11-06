<script lang="ts">
	import { t } from '#lib/i18n/index.js';
	import Hero from '#lib/components/home/Hero.svelte';
	import StatsBar from '#lib/components/home/StatsBar.svelte';
</script>

<svelte:head>
	<title>{t.app.name} : {t.app.slogan}</title>
	<meta name="description" content={t.hero.text} />
</svelte:head>

<Hero />
<StatsBar />
