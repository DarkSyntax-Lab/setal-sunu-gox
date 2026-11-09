// Images du projet. Voir docs/IMAGES.md.
import logo from '#lib/assets/logode lapps.png';
import hero from '#lib/assets/image header.jpeg';
import { asset } from '#lib/assets.js';

/** Logo et photo du haut de l'accueil (bureau). Remplacer le fichier en gardant le même nom. */
export const images = { logo, hero };

/** Photo trouvée dans src/lib/assets (par son nom), sinon dans static/images/. */
const pick = (assetName: string, staticPath: string) => asset(assetName) ?? staticPath;

export const slots = {
	/** Photo du haut de l'accueil sur mobile. */
	heroMobile: pick('photomobile.png', '/images/hero-mobile.jpg'),
	project: asset('plage.jpeg') ?? pick('project-africa.jpg', '/images/project-africa.jpg'),
	problem: pick('problem.jpg', '/images/problem.jpg'),
	// Éléments graphiques extraits de la maquette (static/images/), dans l'ordre des tuiles :
	// Badge Actif, Champion du Quartier, Casquette Setal, T-Shirt Setal, Bon d'achat.
	rewards: [
		'/images/reward-badge.png',
		'/images/reward-champion.png',
		'/images/reward-cap.png',
		'/images/reward-tshirt.png',
		'/images/reward-voucher.png'
	],
	/** Cadres du podium : lauriers, anneau, couronne et numéro (le centre est transparent). */
	frames: { 1: '/images/rank-1.png', 2: '/images/rank-2.png', 3: '/images/rank-3.png' },
	trophy: '/images/trophy.png',
	iconGift: '/images/icon-gift.png',
	iconUsers: '/images/icon-users.png'
};
