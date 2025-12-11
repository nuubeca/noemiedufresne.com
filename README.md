# Noémie Dufresne - Site Officiel

Site web officiel de Noémie Dufresne, créatrice de contenu.

## Stack Technique

- **Next.js 15** avec App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **Server Actions** pour la gestion des formulaires
- **Resend** pour l'envoi d'emails
- **AWS S3** pour l'upload de fichiers

## Installation

```bash
# Installer les dépendances
yarn install

# Copier le fichier d'environnement et le configurer
cp .env.example .env.local

# Lancer le serveur de développement
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## Configuration

### Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes:

```env
# Resend API
RESEND_API_KEY=re_xxxxx
RESEND_EMAIL_FROM=noreply@votredomaine.com
RESEND_EMAIL_TO=votre-email@example.com

# AWS S3
AWS_REGION=ca-central-1
AWS_ACCESS_KEY_ID=votre-access-key-id
AWS_SECRET_ACCESS_KEY=votre-secret-access-key
AWS_BUCKET_NAME=noemiedufresne

# Google Analytics (optionnel)
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

### Configuration Resend

1. Créez un compte sur [resend.com](https://resend.com)
2. Ajoutez et vérifiez votre domaine
3. Générez une clé API
4. Configurez les variables d'environnement

### Configuration AWS S3

1. Créez un bucket S3 dans la région souhaitée
2. Configurez les permissions publiques pour les objets uploadés
3. Créez un utilisateur IAM avec les permissions S3 nécessaires
4. Générez des clés d'accès

## Fonctionnalités

- Page d'accueil avec liens vers les réseaux sociaux
- Formulaire de collaboration pour les marques
- Formulaire de candidature avec upload de photos
- Formulaire de vote
- Envoi d'emails via Resend
- Upload de fichiers vers AWS S3

## Déploiement

Le site peut être déployé sur [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

N'oubliez pas de configurer les variables d'environnement dans les paramètres de votre projet Vercel.

## Structure du Projet

```
├── app/
│   ├── actions/          # Server Actions
│   │   ├── email.ts      # Action pour l'envoi d'emails
│   │   └── upload.ts     # Action pour l'upload de fichiers
│   ├── components/       # Composants React Client
│   │   ├── ApplicationForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── VoteForm.tsx
│   ├── layout.tsx        # Layout racine
│   └── page.tsx          # Page d'accueil
├── public/               # Fichiers statiques
├── styles/               # Styles globaux
└── ...
```

## Développement

```bash
# Lancer le serveur de développement
yarn dev

# Build de production
yarn build

# Lancer le serveur de production
yarn start
```
