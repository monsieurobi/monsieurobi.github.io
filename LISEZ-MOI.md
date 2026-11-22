# Portfolio motion design — Monsieur Obi

Site statique (HTML, CSS et JS, avec GSAP chargé depuis un CDN) aux couleurs noir et bleu.

## Fichiers
- `index.html` : le portfolio.
- `cv.html` : le CV mis à jour. Le bouton « Télécharger en PDF » l'imprime sur une page A4.
- `js/data.js` : **tout le contenu** (profil, projets, compétences, vidéos, réseaux, certifications, tech stack). C'est le seul fichier à modifier.
- `oeuvres/` : les vidéos publiées sur tes réseaux, avec leurs miniatures.
- `img/` : les photos (badge, révélation, CV).

## Animations
1. **Chargement** : « MONSIEUR OBI » se décode lettre par lettre, puis le compteur monte jusqu'à 100 %.
2. **Ciel étoilé** avec des étoiles filantes, en fond de tout le site.
3. **Badge suspendu** : on peut l'attraper et le lancer (il se balance au bout de sa sangle). Un clic le retourne : au dos, un QR code ouvre ton WhatsApp.
4. **Titres de section** : ils apparaissent, puis s'écrasent sous la barre de navigation au défilement.
5. **Photo révélée** : passer la souris (ou le doigt) sur ta photo en costume fait apparaître ta photo en blazer blanc.
6. **Onglets** Projets, Certificats, Compétences et Tech stack, avec un indicateur qui glisse.
7. **Dossiers de compétences** : à glisser avec le doigt ou la souris.
8. **Vidéos des réseaux** : un carrousel glissable ; la vidéo se lance au survol et s'ouvre en grand au clic.

## À compléter dans `js/data.js`
- `projets` : ce sont des **projets fictifs**. Remplace-les par tes vrais projets (mets `statut: "Livré"` et un `lien`).
- `reseaux` : remplace les liens de recherche par les liens exacts de tes pages.
- `contenus` : ajoute le `lien` de chaque publication (TikTok, Facebook…).
- `certifications` : ajoute chacun de tes badges Claude/Anthropic.

## Ajouter un projet depuis le site
Clique sur « Gérer » en bas de page (ou ouvre `index.html?admin`). Le projet est enregistré **dans ce navigateur uniquement**. Le bouton « Exporter » sauvegarde tes ajouts dans un fichier JSON.

## Voir le site en local
Dans ce dossier, lance la commande suivante, puis ouvre http://localhost:5510 :
```
python -m http.server 5510
```

## Mettre en ligne
Fais glisser le dossier `portfolio` sur https://app.netlify.com/drop.
