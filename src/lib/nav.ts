import { House, MapPin, CalendarDays, Trophy, User } from '@lucide/svelte';
import { t } from '#lib/i18n/index.js';

export type NavItem = { href: string; label: string };
export type MobileNavItem = NavItem & { icon: typeof House };

export const desktopNav: NavItem[] = [
	{ href: '/', label: t.nav.home },
	{ href: '/carte', label: t.nav.map },
	{ href: '/communautes', label: t.nav.communities },
	{ href: '/calendrier', label: t.nav.calendar },
	{ href: '/galerie', label: t.nav.gallery },
	{ href: '/classement', label: t.nav.ranking },
	{ href: '/recompenses', label: t.nav.rewards },
	{ href: '/a-propos', label: t.nav.about }
];

// 2 onglets, le bouton photo au centre (ReportFab), puis 3 onglets.
export const mobileLeft: MobileNavItem[] = [
	{ href: '/', label: t.nav.home, icon: House },
	{ href: '/carte', label: t.nav.map, icon: MapPin }
];
export const mobileRight: MobileNavItem[] = [
	{ href: '/calendrier', label: t.nav.calendar, icon: CalendarDays },
	{ href: '/classement', label: t.nav.ranking, icon: Trophy },
	{ href: '/profil', label: t.nav.profile, icon: User }
];

export function isActive(pathname: string, href: string): boolean {
	return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
}
