<script lang="ts">
	import { CalendarDays, Clock } from '@lucide/svelte';
	import { t } from '#lib/i18n/index.js';
</script>

<!-- Étape « Planifier » : la carte de l'événement se déplie, la date se valide -->
<div class="absolute inset-0 overflow-hidden">
	<div class="absolute top-12 right-50 [perspective:700px]">
		<div class="[transform:rotateY(-12deg)_rotateZ(-3deg)]">
			<div
				data-v="phone"
				class="relative h-230 w-330 r-24 border-[3px] border-blanc-casse/40 bg-charbon p-4 shadow-2xl shadow-black"
			>
				<div
					class="relative size-full overflow-hidden r-20 bg-linear-to-b from-[#4a3b73] to-charbon p-16"
				>
					<p class="fm-17 font-semibold text-white">+ {t.how.event.title}</p>
					<div data-v="cal" class="mt-12 r-16 bg-lavande/90 p-14 text-charbon shadow-xl">
						<p class="flex items-center gap-10 fm-19 font-bold">
							<CalendarDays class="size-22" />{t.how.event.date}
							<span
								data-v="tick"
								class="ml-auto flex size-24 items-center justify-center rounded-full bg-[#38c24d] text-white"
								><svg
									viewBox="0 0 24 24"
									class="size-16"
									fill="none"
									stroke="currentColor"
									stroke-width="4"><path d="M5 12l5 5 9-10" /></svg
								></span
							>
						</p>
						<p class="mt-8 flex items-center gap-10 fm-19 font-semibold">
							<Clock class="size-22" />{t.how.event.time}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
