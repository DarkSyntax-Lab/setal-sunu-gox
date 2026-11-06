<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Header from '#lib/components/layout/Header.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import BottomNav from '#lib/components/layout/BottomNav.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#1E1E1E" />
</svelte:head>

<Header />
<main class="min-h-[70dvh]">{@render children()}</main>
<div class="pb-24 lg:pb-0"><Footer /></div>
<BottomNav />
