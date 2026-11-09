<script lang="ts">
	import { images } from '#lib/images.js';
	import { t } from '#lib/i18n/index.js';

	// Le logo entier (avec son slogan) à trois tailles : mobile, en-tête du bureau, bandeau du bas.
	let { variant = 'full' }: { variant?: 'full' | 'compact' | 'banner' } = $props();
</script>

<img
	src={images.logo}
	alt={t.app.name}
	class="block h-auto max-w-none {variant === 'full'
		? 'w-230'
		: variant === 'compact'
			? 'w-150'
			: 'w-110'}"
/>
