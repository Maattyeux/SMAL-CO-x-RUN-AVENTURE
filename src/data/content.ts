/**
 * Tous les textes du site, centralisés.
 *
 * Convention : une valeur entre crochets ([À DÉFINIR]…) est un champ
 * volontairement laissé ouvert. Le composant <Todo> l'affiche en doré.
 */

export const site = {
  title: 'SMAL & CO × Run Aventure',
  signature: 'Créer pour oser.',
  disclaimer:
    "Proposition sans engagement. Aucun partenariat n'est signé entre SMAL & CO et Run Aventure à ce jour.",
  date: 'Octobre 2026',
};

export const nav = [
  { id: 'histoire', label: 'Histoire' },
  { id: 'cyclisme', label: 'Cyclisme' },
  { id: 'team', label: 'TEAM 2027' },
  { id: 'valeurs', label: 'Valeurs' },
  { id: 'proposition', label: 'Proposition' },
  { id: 'contact', label: 'Contact' },
] as const;

export const hero = {
  eyebrow: 'Dossier de sponsoring · TEAM Running / Trail 2026/2027',
  titleA: 'SMAL & CO',
  titleB: 'Run Aventure',
  lead: 'Nous créons le TEAM Running / Trail SMAL & CO. Nous lui cherchons un sponsor titre.',
  ctaPrimary: 'Découvrir le projet',
  ctaSecondary: 'Proposer un rendez-vous',
};

export const histoire = {
  eyebrow: '01 · Notre histoire',
  title: 'Créer pour oser.',
  poles: [
    { name: 'Cyclisme', text: 'Une équipe affiliée à la FFC.' },
    { name: 'Running / trail', text: 'Le TEAM 2027, au cœur de ce dossier.' },
    { name: 'Communication', text: 'Raconter nos courses et nos athlètes.' },
  ],
  timeline: [
    { when: 'Janvier 2026', what: 'Création de l’association à Brest.' },
    { when: 'Été 2026', what: 'L’Étape du Tour, premier défi collectif sous un maillot commun.' },
    { when: 'Toutes les deux semaines', what: 'Social rides au départ de Hobby Cycles, jusqu’à 70 participants.' },
    { when: '16 septembre 2026', what: 'Affiliation à la FFC.' },
    { when: '25 octobre 2026', what: 'SMAL & CO Cyclo, notre première cyclosportive.' },
  ],
};

export const histoireText = [
  'SMAL & CO est une association loi 1901 fondée à Brest en janvier 2026 par quatre amis.',
  'Elle réunit un pôle cyclisme affilié à la FFC, un pôle running / trail et un pôle communication.',
  'Aujourd’hui, nous franchissons une nouvelle étape : la création de notre TEAM Running / Trail.',
];

export const cyclisme = {
  eyebrow: '02 · Cyclisme',
  title: 'Le vélo, notre socle.',
  lead: 'Une équipe structurée, née en moins d’un an. C’est notre preuve de sérieux.',
  stats: [
    { value: 'FFC', label: 'Équipe affiliée depuis le 16/09/2026' },
    { value: '12', label: 'coureurs en Open 1, 2 et 3, niveau régional' },
    { value: '2027', label: 'Structurer le pôle compétition, attaquer les épreuves régionales' },
    { value: '1', label: 'partenaire référent : Hobby Cycles' },
  ],
  galleryTitle: 'Le maillot SMAL, sur la route.',
};

export const hobby = {
  eyebrow: 'Partenaire référent',
  title: 'Hobby Cycles.',
  points: [
    'Soutien financier et matériel',
    'Point de départ de nos social rides, toutes les deux semaines',
    'Jusqu’à 70 participants sur une sortie',
  ],
  model: 'Ce que nous avons construit pour le vélo sert de modèle au running / trail.',
};

export const team = {
  eyebrow: '03 · Saison 2026/2027',
  title: 'Un TEAM, pas un club.',
  lead: 'Nous créons le TEAM Running / Trail SMAL & CO : un collectif indépendant, porté par l’association. Ce n’est pas un club FFA.',
  why: 'Pourquoi un TEAM ? L’idée d’un club n’est pas écartée, mais nous voulons faire les choses dans l’ordre. Le format TEAM nous permet d’abord de poser des bases solides, de structurer notre collectif et de démarrer immédiatement l’aventure avec des coureurs déjà engagés et licenciés.',
  principles: [
    {
      name: 'Chacun garde son club',
      text: 'Chaque coureur conserve son club et sa licence.',
    },
    {
      name: 'La tenue SMAL & CO',
      text: 'Le TEAM court la majorité de ses épreuves en tenue SMAL & CO. Le maillot du club reste porté sur les compétitions officielles (championnats).',
    },
    {
      name: '50 € par coureur',
      text: 'Chaque coureur adhère à SMAL & CO. Avec 5 coureurs : 250 € de trésorerie de départ pour les premières tenues. Pack maillot + veste, maillot + débardeur ou maillot + short : choix [À FAIRE].',
    },
    {
      name: '2027, saison test',
      text: 'Un bilan avant 2028 pour décider : rester en TEAM ou étudier un club FFA.',
    },
  ],
};

export const effectif = {
  eyebrow: 'Les coureurs',
  title: 'Cinq coureurs, un maillot.',
  duoAlt: 'Deux coureurs du TEAM SMAL & CO, hilares, bras dessus bras dessous après une course (photo noir et blanc)',
  lead: 'Cinq coureurs pour l’instant, du niveau régional au national.',
};

export type AmbitionStatus = 'Projet' | 'À étudier';

export const ambitions = {
  eyebrow: 'Ambitions 2027',
  title: 'Ce que nous voulons faire.',
  items: [
    {
      name: 'Courir ensemble',
      text: 'Un programme de courses régionales en tenue SMAL & CO, puis des épreuves plus exigeantes selon le niveau de chacun. Calendrier [À COMPLÉTER].',
      status: 'Projet',
    },
    {
      name: 'Testing de marques',
      text: 'Des sessions de test de chaussures et d’équipements avec les marques distribuées par le partenaire, ouvertes à la communauté, en magasin ou sur le terrain.',
      status: 'Projet',
    },
    {
      name: 'Sorties collectives et découverte',
      text: 'Des sorties running / trail ouvertes à tous, sur le modèle des social rides vélo.',
      status: 'Projet',
    },
    {
      name: 'Événement SMAL & CO running',
      text: 'Une course ou un trail chronométré organisé par l’association. À étudier : autorisations, sécurité, budget, bénévoles.',
      status: 'À étudier',
    },
    {
      name: 'Raconter la saison',
      text: 'Contenus photo et vidéo sur les courses, les athlètes et les partenaires : Reels, réseaux sociaux.',
      status: 'Projet',
    },
  ] satisfies { name: string; text: string; status: AmbitionStatus }[],
  note: 'Aucun de ces événements n’est encore programmé ni autorisé.',
};

/**
 * Valeurs partagées. Côté Run Aventure : uniquement ce que l'enseigne met
 * en avant sur runaventure.fr (page du magasin de Brest).
 */
export const valeurs = {
  eyebrow: 'Ce qui nous rassemble',
  title: 'Les mêmes valeurs, sur le même terrain.',
  lead: 'Run Aventure se présente comme un spécialiste du running, du trail et de l’outdoor, qui accompagne chaque coureur. C’est exactement ce que le TEAM veut incarner sur les courses.',
  pairs: [
    {
      ra: { name: 'L’expertise', text: 'Un conseil de spécialiste : analyse du pied et de la foulée, choix du bon matériel.' },
      smal: { name: 'La performance', text: 'Des coureurs de niveau régional à national qui progressent avec le bon équipement.' },
    },
    {
      ra: { name: 'Tous les coureurs', text: 'Un accompagnement pour chacun, débutant ou confirmé.' },
      smal: { name: 'Le collectif', text: 'Un TEAM à taille humaine et des sorties ouvertes à toute la communauté.' },
    },
    {
      ra: { name: 'L’aventure', text: 'Des sorties running et des tests produits en magasin, des aventures à vivre ensemble.' },
      smal: { name: 'L’audace', text: 'Créer pour oser : lancer un TEAM, organiser des sorties, imaginer des événements.' },
    },
    {
      ra: { name: 'La proximité', text: 'Un magasin spécialiste au service de Brest et de sa périphérie.' },
      smal: { name: 'L’ancrage', text: 'Une association brestoise qui porte les couleurs du Finistère sur les courses.' },
    },
  ],
  source: 'Côté Run Aventure : éléments présentés sur runaventure.fr, page du magasin de Brest.',
};

export const proposition = {
  eyebrow: '04 · La proposition',
  title: 'Devenir notre sponsor titre.',
  lead: 'Comme Hobby Cycles pour le vélo, nous cherchons un sponsor titre pour le TEAM : un partenaire principal, spécialiste de la discipline. C’est la place que nous proposons à Run Aventure.',
  model: [
    {
      pole: 'Cyclisme',
      partner: 'Hobby Cycles',
      state: 'Partenaire référent',
      // logo noir sur transparent : affiché en blanc sur le fond sombre (mono)
      logo: { src: 'assets/logo-hobby-cycles.webp', w: 166, h: 169, mono: true },
    },
    {
      pole: 'Running / trail',
      partner: 'Run Aventure',
      state: 'Proposition',
      logo: { src: 'assets/logo-run-aventure-light.webp', w: 593, h: 116, mono: false },
    },
  ],
  axes: [
    { name: 'Tenues et équipement', text: 'Conseil produits, accès au matériel, présence sur les tenues.' },
    { name: 'Soutien financier', text: 'Inscriptions, déplacements, équipements. Montants [À DÉFINIR].' },
    { name: 'Projets communs', text: 'Testings de marques en magasin, sorties, éventuelle course chronométrée à étudier.' },
  ],
  duration: 'Proposition : un partenariat d’un an, la saison test 2027,',
  durationAccent: 'avec un bilan partagé en fin de saison.',
};

export const contact = {
  badge: 'Nous contacter',
  title: 'Rencontrons-nous pour en parler.',
  next: 'Un rendez-vous de 30 à 45 minutes au magasin, date [À FIXER].',
  channels: [
    { kind: 'mail', label: 'Notre mail', value: 'smal.partner@gmail.com', href: 'mailto:smal.partner@gmail.com' },
    {
      kind: 'instagram',
      label: 'Instagram',
      value: '@smal__co',
      href: 'https://www.instagram.com/smal__co/',
    },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      value: 'SMAL & CO',
      href: 'https://www.linkedin.com/in/smal-co-a187363a7/',
    },
  ],
};

export const footer = {
  thanks:
    'Merci pour le temps accordé à la lecture de notre projet et pour la considération de notre demande de partenariat.',
  madeBy: 'Site pensé et réalisé par Matthieu Bruno, président de l’association.',
  photo: { author: 'Lucas', handle: '@lucas_photo29', href: 'https://www.instagram.com/lucas_photo29' },
};
