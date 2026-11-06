import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Pages prévues, pas encore construites. Tout le reste reste une vraie erreur 404.
const upcoming = [
	'carte',
	'signaler',
	'calendrier',
	'communautes',
	'classement',
	'recompenses',
	'galerie',
	'profil',
	'notifications',
	'a-propos',
	'faq',
	'legal',
	'auth',
	'admin'
];

export const load: PageLoad = ({ params }) => {
	if (!upcoming.includes(params.rest.split('/')[0])) error(404, 'Page introuvable');
	return {};
};
