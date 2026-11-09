<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<!-- Étape « Localiser » : carte sur téléphone 3D, épingle qui tombe, onde de localisation -->
<div class="absolute inset-0 overflow-hidden">
	<div class="absolute top-8 right-120 [perspective:700px]">
		<div class="[transform:rotateY(-14deg)_rotateZ(3deg)]">
			<div
				data-v="phone"
				class="relative h-232 w-190 r-22 border-[3px] border-blanc-casse/40 bg-charbon p-4 shadow-2xl shadow-black"
			>
				<div class="relative size-full overflow-hidden r-18 bg-[#dfe7f6]">
					<svg
						viewBox="0 0 190 230"
						class="absolute inset-0 size-full"
						fill="none"
						stroke-linecap="round"
					>
						<rect x="8" y="150" width="60" height="44" fill="#b9dfb7" /><rect
							x="120"
							y="20"
							width="56"
							height="40"
							fill="#b9dfb7"
						/>
						<path d="M0 60 Q70 80 190 40" stroke="#fff" stroke-width="9" /><path
							d="M20 230 Q60 130 120 100 T190 120"
							stroke="#f3c96b"
							stroke-width="6"
						/>
						<path d="M90 0 L100 230" stroke="#fff" stroke-width="7" /><path
							d="M0 170 H190"
							stroke="#fff"
							stroke-width="6"
						/><path d="M0 110 Q90 130 190 90" stroke="#fff" stroke-width="4" />
					</svg>
					<div class="absolute top-[40%] left-1/2 -translate-x-1/2">
						<span
							data-v="ripple"
							class="absolute top-26 left-1/2 size-34 -translate-x-1/2 rounded-full border-2 border-lavande bg-lavande/30"
						></span>
						<svg data-v="pin" viewBox="0 0 24 32" class="relative h-44 w-34" aria-hidden="true"
							><path
								d="M12 0C5.4 0 0 5.2 0 11.7 0 20 12 32 12 32s12-12 12-20.3C24 5.2 18.6 0 12 0z"
								fill="#8f6fd1"
							/><circle cx="12" cy="11.5" r="4.5" fill="#fff" /></svg
						>
					</div>
					<span
						class="absolute bottom-22 left-1/2 -translate-x-1/2 rounded-full bg-white px-14 py-5 fm-18 font-bold whitespace-nowrap text-charbon shadow-lg"
						>{t.how.map}</span
					>
				</div>
			</div>
		</div>
	</div>
</div>
