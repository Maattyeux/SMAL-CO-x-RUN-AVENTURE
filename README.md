# SMAL & CO × Run Aventure : site de proposition

Version web du dossier de partenariat running / trail (16 pages, octobre 2026).
React 19 + TypeScript, compilé avec esbuild. Aucune autre dépendance d'exécution.

## Lancer le projet

```bash
npm install                # react, react-dom, esbuild, typescript, @types/*
npm run dev                # serveur local : http://localhost:5173 (recompilation auto)
npm run build              # production : dist/ et dist-artifact/
npm run typecheck          # vérification TypeScript (strict)
npm run images             # régénère les WebP depuis assets-src/ (Python 3 + Pillow)
```

- `dist/` : site statique classique (`index.html`, `assets/app.js`, `assets/app.css`, `img/`).
- `dist-artifact/` : même site en une seule page (JS et CSS inline) + `img/`, pour un
  hébergeur qui n'accepte pas de scripts externes.

## Déployer

Le site publié sur GitHub Pages est servi depuis le dossier `docs/` de la branche `main`.
Après une modification : `npm run build`, puis `rm -rf docs && cp -r dist docs && touch docs/.nojekyll`, commit et push.


`dist/` est un site statique : Netlify (glisser-déposer du dossier), Vercel, GitHub Pages,
Cloudflare Pages ou n'importe quel hébergement mutualisé (envoi FTP du contenu de `dist/`).
Les chemins sont relatifs, le site fonctionne aussi dans un sous-dossier.

## Mettre à jour le contenu

| Quoi | Où |
|---|---|
| Tous les textes, chiffres, coordonnées | `src/data/content.ts` |
| Effectif running / trail (statuts, résultats, objectifs) | `src/data/athletes.ts` |
| Photos | déposer le JPEG dans `assets-src/`, lancer `npm run images`, l'appeler par son nom dans `<Photo name="…">` |

Un texte entre crochets (`[À DÉFINIR]`) s'affiche en doré : c'est une information à compléter.
Un athlète ne passe en `confirme` qu'après son accord écrit.

## Architecture

```
src/
  data/          contenus, effectif, manifeste des images (généré)
  lib/scroll.ts  moteur de défilement unique (1 écouteur, regroupé par requestAnimationFrame)
  hooks/         révélations au scroll (IntersectionObserver), section active
  components/    Nav, Photo, Parallax, ScrollText, HorizontalGallery, Tilt, ui
  sections/      une section du récit par fichier
  styles/        tokens, base (révélations), composants, sections
```

## Animations

- Révélations déclaratives : `data-reveal` (fondu), `data-reveal="title"` (ligne masquée),
  `data-reveal="mask"` (rideau sur image), `data-reveal="zoom"`, `data-stagger` (cascade).
- Texte progressif (`ScrollText`) : un seul nombre `--p` par paragraphe ; chaque mot calcule
  sa teinte en CSS (`color-mix`). Le texte reste sélectionnable et blanc sans script.
- Parallaxe modérée, galerie cycliste épinglée à défilement horizontal (souris, ≥ 900 px),
  collage en profondeur au survol, frise qui se remplit.
- `prefers-reduced-motion` : aucun état caché, parallaxe et épinglage désactivés.

## Pourquoi esbuild

esbuild compile React et TypeScript en moins d'une seconde, sans configuration.
Pour passer à Vite : ajouter `vite` et `@vitejs/plugin-react`, un `vite.config.ts`,
et déplacer `head.html` dans `index.html`.
