<script lang="ts">
	import { t } from '#lib/i18n/index.js';
	import { desktopNav } from '#lib/nav.js';

	const links = [...desktopNav.slice(1), { href: '/faq', label: t.nav.faq }];
</script>

<footer class="mt-16 border-t border-blanc-casse/10">
	<div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
		<div>
			<p class="text-lg font-black">Setal <span class="text-citron">Sunu Gox</span></p>
			<p class="mt-2 max-w-xs text-sm text-blanc-casse/70">{t.footer.about}</p>
			<p class="mt-3 text-sm font-semibold text-lavande">{t.app.slogan}</p>
		</div>
		<div>
			<p class="font-bold">{t.footer.explore}</p>
			<ul class="mt-3 grid grid-cols-2 gap-2 text-sm text-blanc-casse/70">
				{#each links as item (item.href)}<li>
						<a class="hover:text-citron" href={item.href}>{item.label}</a>
					</li>{/each}
			</ul>
		</div>
		<div>
			<p class="font-bold">{t.footer.legal}</p>
			<ul class="mt-3 space-y-2 text-sm text-blanc-casse/70">
				<li><a class="hover:text-citron" href="/legal/conditions">{t.footer.terms}</a></li>
				<li><a class="hover:text-citron" href="/legal/confidentialite">{t.footer.privacy}</a></li>
			</ul>
		</div>
	</div>
	<p class="border-t border-blanc-casse/10 py-4 text-center text-xs text-blanc-casse/50">
		© 2026 {t.app.name}. {t.footer.rights}
	</p>
</footer>
