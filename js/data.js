/* =========================================================
   CONTENU DU PORTFOLIO — le seul fichier à modifier
   pour mettre à jour tes infos, projets, contenus et réseaux.
   ========================================================= */
window.PORTFOLIO = {
  profil: {
    prenom: "Aige-Clei",
    nom: "OBI MBOUMBA",
    surnom: "Monsieur Obi",
    titre: "Technicien informatique · Créateur de contenu tech · Intégrateur IA",
    roles: [
      "CTO de start-up",
      "créateur de contenu tech",
      "intégrateur d'IA (Claude)",
      "motion designer",
      "formateur en informatique",
      "graphiste",
    ],
    apropos:
      "Technicien informatique polyvalent depuis plus de 6 ans, je suis CTO de la start-up Bradlss et créateur de la page « Informatique à l'école ». Chaque jour, je travaille avec l'IA Claude d'Anthropic pour concevoir des applications, monter des vidéos en code et former des élèves et des professionnels au numérique. Mon objectif : rendre la technologie utile, simple et accessible au Gabon.",
    email: "aigeclei@gmail.com",
    telephones: ["+241 62 72 79 74", "+241 77 79 80 78"],
    whatsapp: "24162727974",
    ville: "Angondjé, Libreville — Gabon",
    photo: "img/monsieur-obi-hero.jpg",
  },

  chiffres: [
    { valeur: 6, suffixe: "+", label: "ans d'expérience" },
    { valeur: 8, suffixe: "+", label: "Reels & tutos" },
    { valeur: 4, suffixe: "", label: "réseaux actifs" },
  ],

  /* Réseaux : remplace chaque url par le lien exact de ta page. */
  reseaux: [
    { nom: "Facebook", detail: "Informatique à l'école", icone: "facebook", url: "https://www.facebook.com/search/top?q=Informatique%20%C3%A0%20l%27%C3%A9cole" },
    { nom: "TikTok", detail: "Tutos & Reels tech", icone: "tiktok", url: "https://www.tiktok.com/search?q=Informatique%20%C3%A0%20l%27%C3%A9cole" },
    { nom: "LinkedIn", detail: "Parcours & certifications", icone: "linkedin", url: "https://www.linkedin.com/in/clei-obi-8a6550364/" },
    { nom: "WhatsApp", detail: "Discutons de votre projet", icone: "whatsapp", url: "https://wa.me/24162727974" },
    { nom: "E-mail", detail: "aigeclei@gmail.com", icone: "mail", url: "mailto:aigeclei@gmail.com" },
  ],

  /* Vidéos publiées sur les réseaux (ce ne sont pas des projets).
     reseau : nom affiché ; lien : URL du post (à compléter). */
  contenus: [
    { titre: "Faire tourner une IA en local", reseau: "TikTok · Facebook", media: "oeuvres/ia-locale-publication.mp4", poster: "oeuvres/ia-locale-publication.jpg", lien: "" },
    { titre: "Réviser avec l'IA", reseau: "TikTok · Facebook", media: "oeuvres/reviser-ia.mp4", poster: "oeuvres/reviser-ia.jpg", lien: "" },
    { titre: "Présentation d'une appli", reseau: "TikTok · Facebook", media: "oeuvres/appli.mp4", poster: "oeuvres/appli.jpg", lien: "" },
    { titre: "Reel « Eve »", reseau: "TikTok · Facebook", media: "oeuvres/eve.mp4", poster: "oeuvres/eve.jpg", lien: "" },
    { titre: "Entreprendre au Gabon", reseau: "TikTok · Facebook", media: "oeuvres/bceg.mp4", poster: "oeuvres/bceg.jpg", lien: "" },
    { titre: "Les bases de la bureautique", reseau: "TikTok · Facebook", media: "oeuvres/bureautique.mp4", poster: "oeuvres/bureautique.jpg", lien: "" },
    { titre: "Publication AL", reseau: "TikTok · Facebook", media: "oeuvres/al-publication.mp4", poster: "oeuvres/al-publication.jpg", lien: "" },
  ],

  /* PROJETS FICTIFS — emplacements à remplacer par tes vrais projets.
     Mets statut: "Livré" et un lien quand le projet est réel. */
  projets: [
    { titre: "Plateforme e-learning", categorie: "Web & Apps", statut: "Bientôt", description: "Cours en ligne, quiz et suivi des élèves pour les établissements gabonais.", stack: ["React", "Node.js", "IA"], lien: "", couleur: "#2563eb" },
    { titre: "Assistant IA pour PME", categorie: "Intelligence artificielle", statut: "Bientôt", description: "Un assistant Claude qui répond aux clients, rédige les devis et résume les échanges.", stack: ["Claude API", "WhatsApp", "Automatisation"], lien: "", couleur: "#0ea5e9" },
    { titre: "Application de gestion de stock", categorie: "Mobile", statut: "Bientôt", description: "Entrées, sorties et alertes de rupture pour les commerces de proximité.", stack: ["PWA", "Hors ligne", "IndexedDB"], lien: "", couleur: "#6366f1" },
    { titre: "Identité visuelle de marque", categorie: "Branding", statut: "Bientôt", description: "Logo, charte graphique et déclinaisons pour une marque locale.", stack: ["Logo", "Charte", "Print"], lien: "", couleur: "#3b82f6" },
    { titre: "Tableau de bord RH", categorie: "Web & Apps", statut: "Bientôt", description: "Présences, congés et paie dans une interface claire pour les petites équipes.", stack: ["TypeScript", "Tailwind", "Docker"], lien: "", couleur: "#1d4ed8" },
    { titre: "Chatbot de service client", categorie: "Intelligence artificielle", statut: "Bientôt", description: "Réponses automatiques 24 h/24 sur WhatsApp et Facebook Messenger.", stack: ["IA", "Messenger", "WhatsApp"], lien: "", couleur: "#06b6d4" },
  ],

  experiences: [
    { periode: "2022 — aujourd'hui", poste: "CTO · Chief Technology Officer", structure: "Bradlss Start-up", texte: "Je pilote la stratégie technologique : choix des outils, infrastructure, produits numériques et intégration de l'IA dans les processus.", tags: ["Stratégie tech", "IA", "Management"] },
    { periode: "2026 — aujourd'hui", poste: "Concepteur d'applications assisté par IA", structure: "Indépendant", texte: "Je conçois et livre des applications web avec Claude et Claude Code, de la maquette au déploiement.", tags: ["React", "TypeScript", "PWA", "Claude Code"] },
    { periode: "2025 — aujourd'hui", poste: "Créateur de contenu & formateur", structure: "Informatique à l'école", texte: "Je produis des Reels et des tutoriels sur l'informatique et l'IA, montés en code et diffusés sur TikTok, Facebook, LinkedIn et WhatsApp. J'anime aussi des formations (attestations remises en août 2026).", tags: ["Motion design", "Remotion", "Formation"] },
    { periode: "2022 — 2023", poste: "Graphiste", structure: "Bradlss Start-up", texte: "Je créais les visuels, les chartes et les supports print et digitaux de l'entreprise.", tags: ["Branding", "Print"] },
    { periode: "2021 — 2022", poste: "Technicien de maintenance", structure: "ALKIM IMMO / BTP", texte: "Je dépannais les ordinateurs, les réseaux et les logiciels pour garantir la continuité des opérations.", tags: ["Maintenance", "Réseaux"] },
  ],

  formations: [
    { periode: "2026", titre: "Certifications Claude — Anthropic", lieu: "4 badges Claude Academy (AI Fluency, Claude 101…)" },
    { periode: "2021 — 2022", titre: "Infographie (VAE)", lieu: "Bradlss Start-up" },
    { periode: "2020 — 2022", titre: "Maintenance informatique (VAE)", lieu: "Bradlss Start-up" },
    { periode: "2019 — 2020", titre: "Baccalauréat technologique", lieu: "Lycée Paul Indjendje Ngondjou" },
  ],

  /* Les compétences s'affichent en « dossiers » à faire glisser. */
  competences: [
    { nom: "IA générative", code: "IA", niveau: 88, items: ["Claude & Claude Code", "Rédaction de prompts", "Agents et skills", "Automatisation"] },
    { nom: "Motion design", code: "MO", niveau: 85, items: ["Remotion", "HyperFrames", "ffmpeg", "Sous-titres dynamiques"] },
    { nom: "Développement web", code: "DEV", niveau: 75, items: ["React & TypeScript", "HTML, CSS, JS", "PWA hors ligne", "Docker & Netlify"] },
    { nom: "Infographie", code: "GFX", niveau: 82, items: ["Logos", "Chartes graphiques", "Print", "Visuels réseaux"] },
    { nom: "Marketing digital", code: "MKT", niveau: 80, items: ["TikTok", "Facebook", "LinkedIn", "Stratégie de contenu"] },
    { nom: "Maintenance & réseaux", code: "NET", niveau: 84, items: ["Dépannage matériel", "Réseaux LAN", "Logiciels", "Administration"] },
    { nom: "Formation & leadership", code: "LEAD", niveau: 86, items: ["Animation de formations", "Pédagogie", "Gestion d'équipe", "Prise de parole"] },
  ],

  outils: [
    "Claude", "Claude Code", "React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "Node.js",
    "Prisma", "PWA", "Docker", "Git", "Remotion", "ffmpeg", "HyperFrames", "Canva", "Photoshop", "Pack Office",
  ],

  /* Tech stack : slug = nom de l'icône sur simpleicons.org */
  stack: [
    { nom: "Claude", slug: "claude", couleur: "#D97757" },
    { nom: "Anthropic", slug: "anthropic", couleur: "#F0EEE6" },
    { nom: "React", slug: "react", couleur: "#61DAFB" },
    { nom: "TypeScript", slug: "typescript", couleur: "#3178C6" },
    { nom: "JavaScript", slug: "javascript", couleur: "#F7DF1E" },
    { nom: "HTML5", slug: "html5", couleur: "#E34F26" },
    { nom: "CSS3", slug: "css3", couleur: "#1572B6" },
    { nom: "Tailwind", slug: "tailwindcss", couleur: "#06B6D4" },
    { nom: "Node.js", slug: "nodedotjs", couleur: "#5FA04E" },
    { nom: "Vite", slug: "vite", couleur: "#9135FF" },
    { nom: "Prisma", slug: "prisma", couleur: "#E2E8F0" },
    { nom: "Docker", slug: "docker", couleur: "#2496ED" },
    { nom: "Git", slug: "git", couleur: "#F05032" },
    { nom: "Netlify", slug: "netlify", couleur: "#00C7B7" },
    { nom: "Remotion", slug: "", couleur: "#4290F5" },
    { nom: "FFmpeg", slug: "ffmpeg", couleur: "#5CB85C" },
    { nom: "Canva", slug: "canva", couleur: "#00C4CC" },
    { nom: "TikTok", slug: "tiktok", couleur: "#FFFFFF" },
  ],

  langues: [
    { nom: "Français", niveau: "Courant" },
    { nom: "Anglais", niveau: "Intermédiaire" },
  ],

  certifications: [
    { titre: "AI Fluency for educators", emetteur: "Anthropic · Claude Academy", date: "nov. 2026", url: "https://academy.claude.com/verify/53b6d81591c3dfafa74f1fa38ba01bfd", note: "Badge vérifiable" },
    { titre: "AI Fluency for students", emetteur: "Anthropic · Claude Academy", date: "nov. 2026", url: "https://academy.claude.com/verify/20e51a8da47cc5882042879087118887", note: "Badge vérifiable" },
    { titre: "AI capabilities and limitations", emetteur: "Anthropic · Claude Academy", date: "nov. 2026", url: "https://academy.claude.com/verify/dfe59be7b42000fefbb5400bbc8f9a64", note: "Badge vérifiable" },
    { titre: "Claude Platform 101", emetteur: "Anthropic · Claude Academy", date: "nov. 2026", url: "https://academy.claude.com/verify/aedbc7d12f59af06bb7b7e1cf24e4ba9", note: "Badge vérifiable" },
  ],
};
