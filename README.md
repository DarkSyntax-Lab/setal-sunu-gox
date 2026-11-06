# Setal Sunu Gox

Plateforme numérique citoyenne pour des quartiers propres et la prévention des inondations à Dakar.
Slogan : _Ensemble pour un quartier propre._

Projet en cours de développement. Suivi des étapes : [docs/JOURNAL.md](docs/JOURNAL.md).

## Pile technique

SvelteKit, TypeScript, Tailwind CSS, GSAP, Supabase (PostgreSQL, Auth, Storage, Realtime, RLS), Leaflet, OpenStreetMap, PostGIS, PWA, Lucide.

## Prérequis

- Node.js 22.17 ou plus
- npm et Git

## Installation

```
npm install
cp .env.example .env   # puis remplir les valeurs
npm run dev
```

## Commandes

| Commande        | Rôle                                        |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Serveur de développement (`localhost:5173`) |
| `npm run check` | Vérification des types                      |
| `npm run lint`  | Vérification du format et du code           |
| `npm run build` | Compilation de production                   |

## Conventions

- Les imports internes utilisent l'alias `#lib`, avec l'extension : `#lib/utils/x.js`.
- Tous les textes sont dans `src/lib/i18n` (français d'abord, wolof ensuite).
- Aucune donnée fictive en production : les écrans sans données affichent un état vide.
- Les quatre couleurs officielles sont définies dans `src/routes/layout.css`.
