# Journal de bord

## État d'avancement

| Étape                                          | Statut                       |
| ---------------------------------------------- | ---------------------------- |
| 0. Préparation                                 | Terminée                     |
| 1a. Palette, structure, accueil                | Livrée et poussée sur GitHub |
| 1b. Sections de l'accueil, emplacements photos | Livrée, en attente de test   |
| 1c. Responsive complet et photos réelles       | À faire                      |
| 2. Base de données et comptes                  | À faire                      |
| 3. Carte, signalement, validation              | À faire                      |
| 4. Communautés, calendrier, notifs             | À faire                      |
| 5. Gamification et galerie                     | À faire                      |
| 6. Administration                              | À faire                      |
| 7. Finalisation et déploiement                 | À faire                      |

## Décisions techniques

- SvelteKit 3, Svelte 5, Tailwind 4, Vite 8. Node.js 22.17 ou plus est obligatoire.
- L'alias `$lib` n'existe plus : on utilise `#lib/...` avec l'extension du fichier.
- Icônes : `@lucide/svelte` (le paquet `lucide-svelte` est déprécié).
- Supabase : clés `publishable` (navigateur) et `secret` (serveur uniquement).
- Carte : tuiles OpenStreetMap en développement, fournisseur commercial en production.
- Règle ESLint `svelte/no-navigation-without-resolve` désactivée : l'application est servie à la racine.

## Décisions à valider

- Hiérarchie des quartiers : département, commune, quartier.
- Médailles du podium (or, argent, bronze) comme seule exception à la palette de quatre couleurs.
- Newsletter reportée.

## Informations à fournir

- Liste des premiers quartiers et délégués de zone réels.
- Photographies réelles des actions, avec l'accord des personnes visibles.
- Partenaires réels pour les récompenses.
- Mentions légales, à faire relire par un juriste avant le lancement public.

## Mode démo

- `PUBLIC_DEMO_MODE=true` dans `.env` affiche des données d'exemple (`src/lib/demo`) pour les présentations.
- Un bandeau « MODE DÉMO » reste visible en permanence.
- Avant la mise en ligne publique : `PUBLIC_DEMO_MODE=false`, puis supprimer `src/lib/demo` et `static/demo`.
