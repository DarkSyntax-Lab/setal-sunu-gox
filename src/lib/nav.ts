import {
	House,
	MapPin,
	CalendarDays,
	Trophy,
	User,
	Users,
	Gift,
	HeartHandshake,
	Image as ImageIcon
} from '@lucide/svelte';
import { t } from '#lib/i18n/index.js';

export type NavItem = { href: string; label: string; icon?: typeof House };

// Ordre exact de la maquette bureau.
export const desktopNav: NavItem[] = [
	{ href: '/', label: t.nav.home, icon: House },
	{ href: '/communautes', label: t.nav.communities, icon: Users },
	{ href: '/carte', label: t.nav.map, icon: MapPin },
	{ href: '/classement', label: t.nav.ranking, icon: Trophy },
	{ href: '/recompenses', label: t.nav.rewards, icon: Gift },
	{ href: '/a-propos', label: t.nav.about, icon: HeartHandshake },
	{ href: '/galerie', label: t.nav.gallery, icon: ImageIcon },
	{ href: '/faq', label: t.nav.faq }
];

// Ordre exact de la maquette mobile.
export const mobileNav: NavItem[] = [
	{ href: '/', label: t.nav.home, icon: House },
	{ href: '/carte', label: t.nav.map, icon: MapPin },
	{ href: '/calendrier', label: t.nav.calendar, icon: CalendarDays },
	{ href: '/classement', label: t.nav.ranking, icon: Trophy },
	{ href: '/profil', label: t.nav.profile, icon: User }
];

export function isActive(pathname: string, href: string): boolean {
	return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
}
