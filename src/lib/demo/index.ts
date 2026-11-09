import { PUBLIC_DEMO_MODE } from '$app/env/public';

/** Mode démonstration : affiche des données d'exemple (voir data.ts). À désactiver en production publique. */
export const isDemo: boolean = PUBLIC_DEMO_MODE;
