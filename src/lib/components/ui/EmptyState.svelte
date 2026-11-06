<script lang="ts">
	type Props = { title: string; text: string };
	let { title, text }: Props = $props();
</script>

<div
	class="rounded-3xl border border-dashed border-blanc-casse/25 bg-blanc-casse/5 p-6 text-center"
>
	<p class="text-lg font-bold">{title}</p>
	<p class="mx-auto mt-2 max-w-xl text-sm text-blanc-casse/70">{text}</p>
</div>
