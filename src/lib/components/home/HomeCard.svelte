<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ArrowRight, type Users } from '@lucide/svelte';

	type Props = {
		title: string;
		icon: typeof Users;
		/** Image d'icône extraite de la maquette ; sinon l'icône vectorielle `icon`. */
		iconSrc?: string;
		href?: string;
		linkLabel?: string;
		small?: boolean;
		class?: string;
		children: Snippet;
	};
	let {
		title,
		icon: Icon,
		iconSrc,
		href,
		linkLabel,
		small = false,
		class: className = '',
		children
	}: Props = $props();
</script>

<section class="r-22 glass {small ? 'p-12' : 'p-16'} {className}">
	<header class="mb-6 flex items-center justify-between">
		<h2 class="{small ? 'fs-16' : 'fs-20'} flex items-center gap-10 font-extrabold">
			{#if iconSrc}<img src={iconSrc} alt="" class="{small ? 'h-24' : 'h-28'} w-auto" />{:else}<Icon
					class="{small ? 'size-24' : 'size-28'} text-lavande"
				/>{/if}{title}
		</h2>
		{#if href && linkLabel}
			<a {href} class="flex items-center gap-6 fs-11 font-semibold hover:text-citron"
				>{linkLabel}<ArrowRight class="size-14" /></a
			>
		{/if}
	</header>
	{@render children()}
</section>
