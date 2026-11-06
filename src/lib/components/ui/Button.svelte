<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = {
		variant?: 'primary' | 'secondary' | 'lavande';
		href?: string;
		class?: string;
		children: Snippet;
	} & Omit<HTMLButtonAttributes, 'class' | 'children'>;

	let { variant = 'primary', href, class: className = '', children, ...rest }: Props = $props();

	const variants = {
		primary: 'bg-citron text-charbon hover:brightness-95',
		secondary: 'border border-blanc-casse/40 text-blanc-casse hover:bg-blanc-casse/10',
		lavande: 'bg-lavande text-charbon hover:brightness-95'
	};
	const base =
		'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition active:scale-95';
</script>

{#if href}
	<a {href} class="{base} {variants[variant]} {className}">{@render children()}</a>
{:else}
	<button class="{base} {variants[variant]} {className}" {...rest}>{@render children()}</button>
{/if}
