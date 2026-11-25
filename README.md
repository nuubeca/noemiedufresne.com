# Noémie Dufresne - Site Officiel

Page link-in-bio de Noémie Dufresne, servie sur `/` et `/instagram`.

## Stack Technique

- **Next.js 15** avec App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## Installation

```bash
yarn install
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Variables d'environnement

```env
# Google Analytics (optionnel)
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

## Structure du Projet

```
├── app/
│   ├── instagram/
│   │   ├── LinkInBioPage.tsx   # Page partagée par / et /instagram
│   │   ├── metadata.ts         # Métadonnées (noindex pour /instagram)
│   │   ├── breakout-script.ts  # Sortie des navigateurs in-app
│   │   ├── config.ts           # URL de destination
│   │   ├── visit/              # Redirection intermédiaire
│   │   └── go/                 # Redirection 302 finale
│   ├── layout.tsx
│   └── page.tsx                # / (indexable)
├── public/images/
└── styles/
```

## Développement

```bash
yarn dev     # serveur de développement
yarn build   # build de production
yarn start   # serveur de production
```
