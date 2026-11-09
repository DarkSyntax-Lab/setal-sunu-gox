# Setal Sunu Gox

> **Ensemble pour un quartier propre.**
> Plateforme web communautaire pour des quartiers propres et la prévention des inondations à Dakar.

République du Sénégal – *Un peuple – un but – une foi*
Institut Supérieur de Management (ISM) – Entreprenariat
Nom du groupe : **Setal Sunu Gox**

## Accès au prototype

| | Lien |
| --- | --- |
| **Site en ligne (démo)** | https://setal-sunu-gox.vercel.app |
| Dépôt GitHub | https://github.com/DarkSyntax-Lab/setal-sunu-gox |

Le site fonctionne en **mode démo** (données d'exemple, sans compte réel). Il est utilisable sur smartphone et sur PC.

## Sommaire

1. [La problématique](#1-la-problématique)
2. [La solution](#2-la-solution)
3. [Documentation technique](#3-documentation-technique)

---

## 1. La problématique

### 1.1 Le problème choisi

Les canaux bouchés par les déchets plastiques aggravent les inondations à Dakar. La collecte est irrégulière et les habitants ne savent pas où agir.

**Cause racine :** il n'existe pas d'outil simple pour repérer les canaux bouchés et organiser le quartier avant les pluies.

### 1.2 La cible

Habitants, jeunes et associations des zones inondables de Dakar, avec un délégué de zone par quartier.

- **Quartier de départ :** Hann Maristes
- **Extension prévue :** Yoff, Pikine, Guédiawaye, Thiaroye

### 1.3 La phrase « Comment pourrions-nous… ? »

> Comment pourrions-nous permettre aux habitants des zones inondables de Dakar de repérer et nettoyer eux-mêmes les canaux bouchés avant les pluies, malgré une collecte irrégulière, sans attendre l'État et sans gérer d'argent ?

---

## 2. La solution

### 2.1 Le persona

**Mohamed, 27 ans, habitant de Hann Maristes.**

- **Objectif :** vivre dans un quartier propre.
- **Frustration :** les habitants de son quartier ne participent pas à l'assainissement et jettent des déchets dans les rues.
- **Besoin :** un moyen simple de signaler les endroits sales et de réunir ses voisins pour agir.
- **Concurrence :** projet innovant, pas de concurrence directe identifiée pour le moment *(à vérifier)*.

### 2.2 La solution retenue : Setal Sunu Gox

Une application web (smartphone et PC) structurée autour d'espaces communautaires locaux.

| Fonctionnalité | Description |
| --- | --- |
| **Authentification et communauté** | L'utilisateur s'inscrit, se connecte et rejoint la communauté de sa zone (Hann Maristes, Dakar Centre, Pikine, Guédiawaye…). |
| **Canal de discussion et signalements** | Espace d'échange local où les membres signalent les canaux bouchés avec photo et position GPS. |
| **Carte interactive et calendrier** | Visualisation des points critiques du quartier et organisation de nettoyages volontaires avec rappels. |
| **Vérification avant/après** | Photos de preuve validées par le délégué de zone. |
| **Gamification et classement** | Points (+150 pts), badges et classement hebdomadaire inter-quartiers. |

**Contraintes prises en compte :** application ultra-légère (faible consommation de données), utilisable sur mobile et PC, français puis wolof, aucun argent géré, règles de sécurité strictes (gants, pas de nettoyage sous la pluie).

### 2.3 La proposition de valeur

- Un quartier plus propre et moins de risques d'inondation avant la saison des pluies.
- Moins d'humidité et de moisissures dans le logement, donc une meilleure santé pour la famille.
- Un outil simple : se connecter, rejoindre son quartier, signaler et échanger en quelques clics.
- Du pouvoir d'agir collectif et de la reconnaissance (badges, points, classement).
- Un gain concret : échange des points contre des récompenses de sponsors (recharges, équipements) ou valorisation du plastique collecté *(à vérifier)*.

### 2.4 Le parcours utilisateur

| Étape | Ce qui se passe | Ce que Mohamed vit sur l'app |
| --- | --- | --- |
| **1. Connexion et quartier** | Il ouvre l'application et rejoint la communauté de son quartier. | Il accède instantanément à l'espace d'échange de ses voisins. |
| **2. Le problème et le signalement** | Il photographie un canal bouché et publie le signalement. | Le signalement est publié en quelques secondes, avec géolocalisation. |
| **3. Validation et carte** | Le délégué de zone valide le signalement, qui s'affiche sur la carte. | Il voit que son alerte est prise en compte. |
| **4. Échange et planification** | Une session de nettoyage est planifiée dans le calendrier. | Il échange avec ses voisins et confirme sa participation. |
| **5. Le nettoyage** | Mobilisation le jour J avec équipements de protection, photo « après ». | Il nettoie aux côtés de sa communauté. |
| **6. Gamification et classement** | La communauté gagne des points (+150 pts) et monte au classement. | Il débloque un badge et voit son quartier progresser. |

### 2.5 Modèle économique

Le projet **ne gère aucun argent** : le service est totalement gratuit pour les utilisateurs.

- **Gain pour les utilisateurs :** récompenses en nature offertes par des sponsors, en échange des points accumulés.
- **Utilisateurs :** gratuit (application web légère, optimisée mobile et PC).
- **Revenus possibles :** partenariats avec les collectivités et mairies, sponsoring d'entreprises locales (visibilité sur les classements), subventions d'ONG environnementales et de recyclage *(à vérifier)*.
- **Coûts principaux :** hébergement et maintenance, communication de quartier, équipements de protection (gants, sacs).

---

## 3. Documentation technique

Suivi d'avancement du développement : [docs/JOURNAL.md](docs/JOURNAL.md)

### Pile technique

SvelteKit, TypeScript, Tailwind CSS, GSAP, Supabase (PostgreSQL, Auth, Storage, Realtime, RLS), Leaflet, OpenStreetMap, PostGIS, PWA, Lucide.

### Prérequis

- Node.js 22.17 ou plus
- npm et Git

### Installation

```bash
npm install
cp .env.example .env   # puis remplir les valeurs
npm run dev
```

### Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement (`localhost:5173`) |
| `npm run check` | Vérification des types |
| `npm run lint` | Vérification du format et du code |
| `npm run build` | Compilation de production |

### Déploiement

Le site est hébergé sur Vercel. Le mode démo est activé par la variable `PUBLIC_DEMO_MODE=true`.
