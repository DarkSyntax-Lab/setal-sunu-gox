<script lang="ts">
	import { t } from '#lib/i18n/index.js';

	const links = [
		{ href: '/legal/conditions', label: t.footer.terms },
		{ href: '/legal/confidentialite', label: t.footer.privacy },
		{ href: '/faq', label: t.nav.faq },
		{ href: '/contact', label: t.footer.contact }
	];
</script>

<footer
	class="flex flex-col items-center gap-8 px-82 py-20 fs-11 text-blanc-casse/80 desk:h-41 desk:flex-row desk:justify-between desk:py-0"
>
	<p>© 2026 {t.app.name}. {t.footer.rights}</p>
	<ul class="flex flex-wrap justify-center gap-x-30 gap-y-6">
		{#each links as l (l.href)}<li>
				<a class="hover:text-citron" href={l.href}>{l.label}</a>
			</li>{/each}
	</ul>
	<p>{t.footer.by}</p>
</footer>
