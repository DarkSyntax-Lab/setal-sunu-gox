# Guide des images

Toutes les images sont dans **`src/lib/assets/`**. Le site les retrouve par leur **nom de fichier** (majuscules, espaces et espace parasite devant sont tolérés). Un fichier absent n'est jamais une erreur : l'emplacement reste simplement vide.

## Noms reconnus actuellement

| Fichier                                                                           | Où il apparaît                                                                            |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `logode lapps.png`                                                                | Logo (en-tête, bandeau du bas)                                                            |
| `image header.jpeg`                                                               | Photo du haut de l'accueil sur ordinateur (et sur mobile si `hero-mobile.jpg` est absent) |
| `hero-mobile.jpg`                                                                 | Photo portrait du haut de l'accueil sur mobile (optionnel)                                |
| `canalavant.jpeg`                                                                 | Miniature « Canal signalé près de vous » et photo « Avant » du comparateur                |
| `canalapres.jpeg`                                                                 | Photo « Après » du comparateur                                                            |
| `dakar center.png`                                                                | Communauté Dakar Centre, et 1er du classement                                             |
| `pikine.png`                                                                      | Communauté Pikine, et 2e du classement                                                    |
| `gediewaye.png`                                                                   | Communauté Guédiawaye, et 3e du classement                                                |
| `profil1.jpeg`, `profile2.jpeg`, `profile4.jpeg`, `profil6.jpeg`, `profile8.jpeg` | Têtes des membres (triées par numéro ; la première sert aussi de photo de profil)         |
| `immarketing.png`                                                                 | Récompense « Badge Actif »                                                                |
| `image marketing.png`                                                             | Récompense « Champion du Quartier »                                                       |
| `marketing2.png`                                                                  | Récompense « Casquette Setal »                                                            |
| `marketing.png`                                                                   | Récompense « T-Shirt Setal »                                                              |
| `marketing.jpeg`                                                                  | Récompense « Bon d'achat »                                                                |

## Pas encore fournis (optionnels)

`hero-mobile.jpg` (portrait, 1704 × 1320 px), `project-africa.jpg` (carte de l'Afrique de « Notre Projet »), `problem.jpg` (bloc « Le problème »), `laurel-gold.png`, `laurel-silver.png`, `laurel-bronze.png` (lauriers du podium, fond transparent). Ces cinq-là peuvent aussi être déposés dans `static/images/` avec ces mêmes noms.

## Mode démo

`PUBLIC_DEMO_MODE=true` dans `.env` affiche les chiffres et noms d'exemple (`src/lib/demo`). Avant la mise en ligne publique : `PUBLIC_DEMO_MODE=false`, puis supprimer `src/lib/demo`.

## Éléments graphiques extraits de la maquette (`static/images/`)

Coupe dorée, médaille, casquette, T-shirt vert, cadeau, icônes lavande, et les trois cadres du podium (lauriers, couronne, numéro) ont été extraits de la maquette mobile pour un rendu identique : `trophy.png`, `reward-badge.png`, `reward-champion.png`, `reward-cap.png`, `reward-tshirt.png`, `reward-voucher.png`, `icon-gift.png`, `icon-users.png`, `rank-1.png`, `rank-2.png`, `rank-3.png`. Pour les remplacer par de meilleures versions (fond transparent, plus grandes), garder les mêmes noms.

Les visuels `marketing*.png`, `immarketing.png`, `image marketing.png` et `marketing.jpeg` ne sont plus utilisés sur l'accueil ; ils serviront aux pages Récompenses.

## Section « Comment ça marche ? » (photos à ajouter dans `src/lib/assets/`)

| Fichier                           | Où il apparaît                                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `etape1-photo.jpg`                | Étape 1 (« Photographier ») : homme qui photographie un canal bouché. Sans ce fichier, le canal flouté est utilisé. |
| `etape4-groupe.jpg`               | Mobile, étape 4 : groupe de volontaires qui regarde un téléphone.                                                   |
| `etape6-nettoyage.jpg`            | Étape « Nettoyer ensemble » : volontaires qui nettoient le canal.                                                   |
| `probleme.jpg` (ou `problem.jpg`) | Mobile, bandeau « Le problème » : canal rempli de déchets plastiques.                                               |
| `equipe-skyline.jpg`              | Mobile, bas de page : l'équipe devant la skyline de Dakar.                                                          |

Les écrans de téléphone (carte, notification, calendrier, points, récompenses) sont dessinés et animés par le code, ils n'ont pas besoin de photo. Les avant/après utilisent `canalavant.jpeg` et `canalapres.jpeg`.

## Photos ajoutées récemment

| Fichier         | Où il apparaît                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `charette.jpeg` | Communauté **Dakar Centre** (là où il y avait le monument sur la maquette), et 1er du classement. Si le fichier est absent, `dakar center.png` est utilisée. |
| `plage.jpeg`    | Carte **Notre Projet** (PC), à la place de la carte de l'Afrique.                                                                                            |
