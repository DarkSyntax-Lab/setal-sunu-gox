// DONNÉES D'EXEMPLE pour présenter la plateforme. Rien ici n'est réel.
// Les images sont dans static/demo/ (voir docs/IMAGES.md). Supprimer ce dossier avant la mise en ligne réelle.
import type { PodiumItem } from '#lib/types.js';
import { asset, portraits } from '#lib/assets.js';

// Dakar Centre : la charrette (charette.jpeg), sinon l'ancienne photo.
const dakar = asset('charette.jpeg') ?? asset('charrette.jpeg') ?? asset('dakar center.png');
const pikine = asset('pikine.png');
const guediawaye = asset('gediewaye.png');
const canalAvant = asset('canalavant.jpeg');
const canalApres = asset('canalapres.jpeg');

export const demo = {
	unread: 2,
	myCommunity: 'Dakar',
	avatarMe: portraits[0] ?? null,
	nearby: { thumb: canalAvant, place: 'Grand Dakar', meta: 'Il y a 15 min • par Moussa' },
	communities: [
		{
			slug: 'dakar-centre',
			name: 'Dakar Centre',
			verified: true,
			members: '12.5k',
			tagline: 'Ensemble pour un Dakar propre',
			more: '+8.2k',
			cover: dakar,
			heads: portraits.slice(0, 4)
		},
		{
			slug: 'pikine',
			name: 'Pikine',
			verified: false,
			members: '8.7k',
			tagline: 'Setal ci, Setal là',
			more: '+6.1k',
			cover: pikine,
			heads: [...portraits].reverse().slice(0, 4)
		},
		{
			slug: 'guediawaye',
			name: 'Guédiawaye',
			verified: false,
			members: '7.3k',
			tagline: '',
			more: '',
			cover: guediawaye,
			heads: [] as string[]
		}
	],
	stats: ['+120 T', '+50K', '3', '+20'],
	podiumMobile: [
		{ rank: 1, name: 'Dakar Centre', pts: '12 450', photo: dakar },
		{ rank: 2, name: 'Pikine', pts: '10 230', photo: pikine },
		{ rank: 3, name: 'Guédiawaye', pts: '8 760', photo: guediawaye }
	] satisfies PodiumItem[],
	podiumDesktop: [
		{ rank: 1, name: 'Dakar Centre', pts: '18 750', photo: dakar },
		{ rank: 2, name: 'Pikine', pts: '15 200', photo: pikine },
		{ rank: 3, name: 'Guédiawaye', pts: '13 640', photo: guediawaye }
	] satisfies PodiumItem[],
	rewards: [
		'Badge Actif',
		'Champion du Quartier',
		'Casquette Setal',
		'T-Shirt Setal',
		"Bon d'achat 40 000 F"
	],
	gallery: { before: canalAvant, after: canalApres },
	mapPreview: null as string | null
};
