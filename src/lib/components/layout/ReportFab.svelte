<script lang="ts">
	import { Camera } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
</script>

<!-- Mobile uniquement : sur ordinateur, on ne prend pas de photo avec l'appareil. -->
<a
	href="/signaler"
	aria-label={t.nav.reportCanal}
	class="fixed right-30 bottom-[calc(env(safe-area-inset-bottom)+var(--u)*170)] z-50 flex size-100 items-center justify-center rounded-full border-4 border-charbon bg-citron text-charbon shadow-lg shadow-citron/25 active:scale-90 desk:hidden"
>
	<Camera class="size-46" />
</a>
