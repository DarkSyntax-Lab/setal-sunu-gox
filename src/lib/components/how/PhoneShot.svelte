<script lang="ts">
	import { asset } from '#lib/assets.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';

	// Étape « Photographier » : photo de fond (etape1-photo.jpg) si elle existe, sinon le canal flouté ; téléphone 3D avec viseur et flash.
	const canal = asset('canalavant.jpeg');
	const bg = asset('etape1-photo.jpg');
</script>

<div class="absolute inset-0 overflow-hidden">
	<div
		data-v="photo"
		class="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_6%,black_50%)]"
	>
		<SafeImg
			src={bg ?? canal}
			class="size-full object-cover {bg ? '' : 'scale-110 blur-[2px] brightness-50'}"
		/>
	</div>
	<div class="absolute top-10 right-150 [perspective:700px]">
		<div class="[transform:rotateY(-16deg)_rotateZ(5deg)]">
			<div
				data-v="phone"
				class="relative h-230 w-118 r-20 border-[3px] border-blanc-casse/40 bg-charbon p-4 shadow-2xl shadow-black"
			>
				<div class="relative size-full overflow-hidden r-16">
					<SafeImg src={canal} class="size-full object-cover" />
					<div data-v="bracket" class="absolute inset-16 r-8 border-2 border-citron/90"></div>
					<div data-v="flash" class="absolute inset-0 bg-white opacity-0"></div>
					<span
						class="absolute bottom-10 left-1/2 size-26 -translate-x-1/2 rounded-full border-[3px] border-white"
					></span>
				</div>
			</div>
		</div>
	</div>
</div>
