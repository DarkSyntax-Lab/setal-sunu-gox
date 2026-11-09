import { defineEnvVars } from '@sveltejs/kit/env';

// Réglages lus dans le fichier .env. Les clés Supabase seront déclarées ici à l'étape 2.
export const variables = defineEnvVars({
	/** true = données d'exemple pour une présentation. Toujours false en production publique. */
	PUBLIC_DEMO_MODE: {
		public: true,
		schema: (value) => value === 'true'
	}
});
