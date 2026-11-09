<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<!-- Étape « Gagner des points » : la coupe tourne en 3D, le compteur monte jusqu'à +150 -->
<div class="absolute inset-0 flex items-center justify-center">
	<img
		data-v="laurel"
		src="/images/laurel-left.png"
		alt=""
		class="absolute top-45 left-[4%] h-96"
	/>
	<img
		data-v="laurel"
		src="/images/laurel-right.png"
		alt=""
		class="absolute top-45 right-[4%] h-96"
	/>
	<div
		class="relative flex h-150 w-[74%] flex-col items-center justify-center r-40 border border-blanc-casse/15 bg-charbon/80 shadow-2xl"
	>
		<div class="flex items-center gap-16">
			<img data-v="trophy" src="/images/trophy.png" alt="" class="h-56" />
			<p class="fm-42 leading-none font-black whitespace-nowrap">
				<span class="text-citron">+</span><span data-v="count" data-to={t.how.points.to}
					>{t.how.points.to}</span
				>
				{t.how.points.unit}
			</p>
		</div>
		<p class="mt-6 fm-22 whitespace-nowrap">{t.how.points.text}</p>
	</div>
</div>
