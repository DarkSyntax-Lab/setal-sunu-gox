<script lang="ts">
	import { t } from '#lib/i18n/index.js';
</script>

<!-- Étape « Informer » : la notification tombe sur le téléphone, la cloche sonne -->
<div class="absolute inset-0 overflow-hidden">
	<div class="absolute top-12 right-50 [perspective:700px]">
		<div class="[transform:rotateY(-12deg)_rotateZ(3deg)]">
			<div
				data-v="phone"
				class="relative h-230 w-330 r-24 border-[3px] border-blanc-casse/40 bg-charbon p-4 shadow-2xl shadow-black"
			>
				<div
					class="relative size-full overflow-hidden r-20 bg-linear-to-b from-[#3b2f5c] to-charbon"
				>
					<div
						data-v="notif"
						class="absolute top-34 right-14 left-14 flex items-center gap-12 r-16 bg-white/95 p-12 text-charbon shadow-xl"
					>
						<svg viewBox="0 0 24 32" class="h-36 w-28 shrink-0" aria-hidden="true"
							><path
								d="M12 0C5.4 0 0 5.2 0 11.7 0 20 12 32 12 32s12-12 12-20.3C24 5.2 18.6 0 12 0z"
								fill="#5fb25a"
							/><circle cx="12" cy="12" r="5" fill="#fff" /></svg
						>
						<div class="fm-17 leading-tight">
							<p class="flex justify-between gap-10 font-bold">
								{t.how.notif.app}<span class="fm-13 font-normal text-charbon/60"
									>{t.how.notif.now}</span
								>
							</p>
							<p class="font-semibold">{t.how.notif.line1}</p>
							<p>{t.how.notif.line2}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
