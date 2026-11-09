<script lang="ts">
	import { t } from '#lib/i18n/index.js';
	import MobileHome from '#lib/components/home/MobileHome.svelte';
	import DesktopHome from '#lib/components/home/DesktopHome.svelte';
	import HowItWorks from '#lib/components/how/HowItWorks.svelte';
</script>

<svelte:head>
	<title>{t.app.name} : {t.app.slogan}</title>
	<meta name="description" content={t.hero.text} />
</svelte:head>

<div class="desk:hidden"><MobileHome /></div>
<div class="hidden desk:block"><DesktopHome /></div>
<HowItWorks />
