<script lang="ts">
	import { t } from '#lib/i18n/index.js';

	const imgs = ['/images/reward-medal.png', '/images/reward-cap.png', '/images/reward-tshirt.png'];
</script>

<!-- Étape « Être récompensé » : les trois récompenses se retournent en 3D puis flottent -->
<div class="absolute inset-0 flex items-center justify-center gap-18 pl-[9%]">
	{#each t.how.rewards as label, i (label)}
		<div
			data-v="reward"
			class="flex h-168 w-124 flex-col items-center justify-center gap-8 r-22 border border-blanc-casse/15 bg-charbon/80 shadow-xl"
		>
			<img src={imgs[i]} alt="" class="h-82 w-auto max-w-[90%] object-contain" />
			<span class="text-center fm-17 leading-tight font-bold">{label}</span>
		</div>
	{/each}
</div>
