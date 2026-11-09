<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { asset } from '#lib/assets.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';

	const canal = asset('canalavant.jpeg');
</script>

<!-- Étape « Publier » : le signalement s'affiche sur le téléphone, la coche verte apparaît -->
<div class="absolute inset-0 overflow-hidden">
	<div class="absolute top-12 right-60 [perspective:700px]">
		<div class="[transform:rotateY(-10deg)_rotateZ(2deg)]">
			<div
				data-v="phone"
				class="relative h-230 w-300 r-24 border-[3px] border-blanc-casse/40 bg-charbon p-4 shadow-2xl shadow-black"
			>
				<div
					class="relative size-full overflow-hidden r-20 bg-linear-to-br from-lavande/80 to-lavande/30"
				>
					<div
						class="absolute top-24 left-18 h-92 w-150 overflow-hidden r-14 border-2 border-white/70 shadow-lg"
					>
						<SafeImg src={canal} class="size-full object-cover" />
					</div>
					<span
						data-v="check"
						class="absolute top-42 right-26 flex size-62 items-center justify-center rounded-full bg-[#38c24d] text-white shadow-lg ring-4 ring-white/30"
						><Check class="size-36" stroke-width={4} /></span
					>
				</div>
			</div>
		</div>
	</div>
</div>
