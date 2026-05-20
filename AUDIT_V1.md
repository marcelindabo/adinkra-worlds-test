# Audit Adinkra Worlds V1 — 2026-05-21

## Résultat rapide

- Bibliothèque structurée : 103 IDs dans `ADINKRA_OFFICIAL_IDS`.
- Sapientogrammes prêts pour apprentissage : 30.
- Langues UI : FR / EN / PT / Twi / Wolof / Swahili.
- SVG disponibles pour les 30 prêts : oui dans l’état canvas, y compris `sankofa-one` et `sankofa-two` via alias.
- Fallback “A” : ne doit pas apparaître dans les 30 prêts ; il peut encore apparaître sur les symboles verrouillés ou incomplets.

## Correction appliquée dans le canvas

Le jeu “Conte” utilisait `starterSymbols` comme options fixes. Or certaines questions demandaient Sankofa, Gye Nyame ou Akoma, qui pouvaient être absents de ces options. Le jeu pouvait donc proposer une question impossible.

Correction appliquée : `Story()` construit maintenant `storyOptions` autour du symbole cible, puis ajoute des distracteurs depuis `getReadySymbols()`.

## Points à surveiller avant publication complète

1. Export exact du canvas : le présent ZIP est un paquet PWA de test installable, pas un APK natif.
2. Les 73 sapientogrammes restants sont bien structurés mais doivent encore recevoir SVG + fiche riche.
3. Les symboles verrouillés peuvent conserver un rendu provisoire : éviter de les afficher comme “officiels” tant qu’ils ne sont pas enrichis.
4. Tester sur mobile : Apprendre, Quiz, Collection, navigation, installation PWA.
5. Tester sur tablette : centrage des cartes, noms longs, zones texte.

## Installation test via GitHub Pages

1. Dézipper ce dossier.
2. Envoyer tous les fichiers dans le dépôt GitHub.
3. Activer GitHub Pages sur la branche principale.
4. Ouvrir l’URL GitHub Pages sur le téléphone.
5. Dans Chrome/Android : menu ⋮ > Ajouter à l’écran d’accueil / Installer l’application.
6. Dans Safari/iPhone : Partager > Sur l’écran d’accueil.
