<script lang="ts">
	import { asset } from '#lib/assets.js';
	import SafeImg from '#lib/components/ui/SafeImg.svelte';
	import BeforeAfterSlider from '#lib/components/gallery/BeforeAfterSlider.svelte';
	import StepMedia from './StepMedia.svelte';
	import PhoneShot from './PhoneShot.svelte';
	import MapStep from './MapStep.svelte';
	import PublishStep from './PublishStep.svelte';
	import NotifStep from './NotifStep.svelte';
	import CalendarStep from './CalendarStep.svelte';
	import PointsStep from './PointsStep.svelte';
	import RewardsStep from './RewardsStep.svelte';

	// L'illustration animée de l'étape `i` (0 à 8). Utilisée telle quelle sur PC et sur mobile ; `class` donne sa place.
	type Props = { i: number; class?: string; sweep?: number; onuserdrag?: () => void };
	let { i, class: className = '', sweep = $bindable(30), onuserdrag }: Props = $props();

	const canal = asset('canalavant.jpeg');
	const cleaning = asset('etape6-nettoyage.jpg') ?? canal;
</script>

{#if i === 5}
	<div
		data-v="photo"
		class="{className} [mask-image:linear-gradient(to_right,transparent_8%,black_42%)]"
	>
		<SafeImg src={cleaning} class="size-full object-cover" />
	</div>
{:else if i === 6}
	<div data-v="slider" class={className}>
		<BeforeAfterSlider
			beforeUrl={canal}
			afterUrl={asset('canalapres.jpeg')}
			class="size-full"
			bind:position={sweep}
			{onuserdrag}
		/>
	</div>
{:else}
	<StepMedia class={className}>
		{#if i === 0}<PhoneShot />
		{:else if i === 1}<MapStep />
		{:else if i === 2}<PublishStep />
		{:else if i === 3}<NotifStep />
		{:else if i === 4}<CalendarStep />
		{:else if i === 7}<PointsStep />
		{:else}<RewardsStep />{/if}
	</StepMedia>
{/if}
