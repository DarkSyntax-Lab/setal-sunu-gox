// Tous les textes de l'application sont ici. Pour le wolof : créer wo.ts avec la même structure.
export const fr = {
	app: { name: 'Setal Sunu Gox', slogan: 'Ensemble pour un quartier propre.' },
	nav: {
		home: 'Accueil',
		map: 'Carte',
		communities: 'Communautés',
		calendar: 'Calendrier',
		gallery: 'Galerie',
		ranking: 'Classement',
		rewards: 'Récompenses',
		about: 'À propos',
		faq: 'FAQ',
		profile: 'Profil',
		notifications: 'Notifications',
		report: 'Signaler',
		reportCanal: 'Signaler un canal',
		main: 'Navigation principale'
	},
	hero: {
		lead: 'Ensemble, nettoyons',
		city: 'Dakar',
		tail: 'avant les pluies !',
		text: 'Signalez les canaux bouchés, mobilisez votre quartier et participez à des actions citoyennes pour un environnement plus propre.',
		communitiesCta: 'Découvrir les communautés'
	},
	stats: {
		title: 'Notre impact',
		emptyTitle: 'Les premiers chiffres arrivent bientôt',
		emptyText:
			'Cette section affichera uniquement des résultats réels, dès que les premières actions auront été vérifiées.',
		tonnes: 'Tonnes de déchets retirés',
		citizens: 'Citoyens engagés',
		zones: 'Quartiers actifs',
		cleanups: 'Nettoyages réalisés'
	},
	comingSoon: {
		title: 'Cette page arrive bientôt',
		text: 'Nous la construisons étape par étape. Elle sera disponible dans une prochaine version.',
		back: "Retour à l'accueil"
	},
	footer: {
		about:
			'Une plateforme citoyenne pour des quartiers propres et la prévention des inondations à Dakar.',
		explore: 'Explorer',
		legal: 'Informations légales',
		terms: "Conditions d'utilisation",
		privacy: 'Politique de confidentialité',
		rights: 'Tous droits réservés.'
	}
};
export type Messages = typeof fr;
