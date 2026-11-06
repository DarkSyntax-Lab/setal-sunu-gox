<script lang="ts">
	import { Camera } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
</script>

<a
	href="/signaler"
	aria-label={t.nav.reportCanal}
	class="-mt-7 flex h-16 w-16 items-center justify-center rounded-full border-4 border-charbon bg-citron text-charbon shadow-lg shadow-citron/20 transition active:scale-90"
>
	<Camera size={28} />
</a>
