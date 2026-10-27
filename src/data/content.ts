/**
 * Tous les textes du site, centralisés.
 * Source : dossier « SMAL & CO × Run Aventure » (16 pages, octobre 2026).
 *
 * Convention : une valeur entre crochets ([À DÉFINIR]…) est un champ
 * volontairement laissé ouvert. Le composant <Todo> l'affiche en doré.
 */

export const site = {
  title: 'SMAL & CO × Run Aventure',
  signature: '« Créer pour oser »',
  disclaimer:
    "Document de proposition, sans engagement. Aucun partenariat n'est signé entre SMAL & CO et Run Aventure à ce jour.",
  date: 'Octobre 2026',
};

export const nav = [
  { id: 'identite', label: 'Identité' },
  { id: 'cyclisme', label: 'Cyclisme' },
  { id: 'running', label: 'Running / trail' },
  { id: 'team', label: 'Team 2027' },
  { id: 'effectif', label: 'Effectif' },
  { id: 'partenariat', label: 'Partenariat' },
  { id: 'contact', label: 'Contact' },
] as const;

export const hero = {
  eyebrow: 'Dossier de sponsoring · Team Running / Trail 2026/2027',
  titleA: 'SMAL & CO',
  titleB: 'Run Aventure',
  lead: 'Créer le Team Running / Trail SMAL & CO, avec un partenaire titre à nos côtés.',
  ctaPrimary: 'Découvrir le projet',
  ctaSecondary: 'Proposer un rendez-vous',
};

export const identite = {
  eyebrow: 'Identité et ambition',
  title: 'Née entre amis, construite comme une structure',
  text:
    'SMAL & CO est une association loi 1901 fondée en janvier 2026 à Brest par des passionnés de sport. Un projet collectif, avec l’exigence d’une organisation.',
  manifesto:
    'La performance, la cohésion et l’envie de raconter ce que l’on construit. Chaque sortie, chaque course et chaque contenu sert le même projet : faire grandir un collectif sportif brestois, à taille humaine.',
  poles: [
    { name: 'Cyclisme', text: 'Premier pôle structuré, affilié à la FFC.', tag: 'Socle' },
    { name: 'Running / trail', text: 'Second pôle : un Team lancé pour la saison 2026/2027. C’est l’objet de ce dossier.', tag: 'Team 2027' },
    { name: 'Communication', text: 'Contenus et événements au service des deux pôles.', tag: 'Transversal' },
  ],
  timelineTitle: 'Une structure déjà en mouvement',
  timeline: [
    { when: 'Janvier 2026', what: 'Création de l’association SMAL & CO.' },
    { when: 'Été 2026', what: 'Étape du Tour 2026 : premier défi collectif sous un maillot commun.' },
    { when: 'Saison 2026', what: 'Couverture de courses régionales : Reels, TikTok, réseaux sociaux.' },
    { when: 'Toutes les 2 semaines', what: 'Social rides sur la période estivale, au départ de notre magasin partenaire Hobby Cycles.' },
    { when: '16 septembre 2026', what: 'Affiliation officielle à la FFC et création de notre première équipe de coureurs.' },
    { when: '25 octobre 2026', what: 'SMAL & CO Cyclo, première cyclosportive organisée par nos soins.' },
  ],
};

export const cyclisme = {
  eyebrow: 'Notre sport de prédilection',
  title: 'Le cyclisme : une équipe déjà structurée',
  lead: 'Un collectif soudé : humain d’abord, la performance ensuite. Ce que nous avons construit pour le vélo sert de modèle au running / trail.',
  stats: [
    { value: 'FFC', label: 'Affiliée depuis le 16 septembre 2026' },
    { value: '12', label: 'coureurs en Open 1, 2 et 3, niveau régional' },
    { value: '2027', label: 'Structurer le pôle compétition, attaquer les épreuves régionales' },
    { value: '1', label: 'partenaire référent : Hobby Cycles' },
  ],
  galleryTitle: 'Le maillot SMAL, sur la route',
};

export const hobby = {
  eyebrow: 'Un premier modèle de partenariat',
  title: 'Hobby Cycles, référent du pôle cycle',
  points: [
    'Magasin spécialiste de la discipline, ancré à Brest',
    'Point de départ de nos social rides, une sortie toutes les deux semaines de juin à octobre',
    'Jusqu’à 70 participants sur une sortie',
    'Modalités du partenariat : soutien financier et matériel',
  ],
  model:
    'Un partenaire spécialisé par discipline, avec des rôles clairs. Run Aventure tiendrait ce rôle pour le running / trail, sans toucher au périmètre du cyclisme.',
};

export const preuves = {
  eyebrow: 'Preuves d’activation',
  title: 'Ce que nous savons déjà faire',
  items: [
    {
      value: '98 %',
      label: 'des places vendues en 48 h',
      context: 'SMAL & CO Cyclo, La Forest-Landerneau, 25 octobre 2026. Source : plateforme d’inscription Cyclopass.',
    },
    {
      value: '70',
      label: 'participants au maximum',
      context: 'Social rides au départ de Hobby Cycles, une sortie toutes les deux semaines, saison 2026.',
    },
    {
      value: '+118K',
      label: 'vues du profil Instagram',
      context: 'Compte @smal__co, mois de mai 2026, statistiques Instagram.',
    },
  ],
  note: 'Des chiffres datés et sourcés, qui montrent une capacité à rassembler et à produire du contenu. Ils ne constituent pas une garantie pour l’avenir.',
};

export const running = {
  eyebrow: 'Un second pôle',
  title: 'Le running / trail : une nouvelle ambition',
  scrollText:
    'Des résultats individuels existent déjà. SMAL & CO veut les inscrire dans un collectif identifiable, humain et ambitieux, d’abord à l’échelle régionale. Le cyclisme nous a appris à structurer une équipe. Le running est la prochaine étape.',
  pills: ['Team 2026/2027', 'Identité textile', 'Partenaire titre'],
  proofEyebrow: 'Preuves de potentiel',
  proofTitle: 'Des résultats déjà là, avant même le Team',
  athlete: 'Ewen Premel',
  results: [
    { rank: '2e', race: 'Trail de Guerlédan 2026' },
    { rank: '4e', race: 'Trail de l’Aber-Wrac’h 2026' },
    { rank: '2 h 37', race: 'Marathon' },
  ],
  podiums: 'Plusieurs podiums régionaux.',
  stake: 'Dans le Team, Ewen court aux côtés de Lucas Tanné, vainqueur du Grand Raid du Finistère 2024, et de Moran Bars, 3e sur 450 au Trail du Bout du Monde. L’enjeu : réunir ces résultats sous un même maillot.',
};

export const team = {
  eyebrow: 'Saison 2026/2027 · Ce que nous voulons',
  title: 'Un Team Running / Trail, pas un club FFA',
  lead: 'Pour 2026/2027, SMAL & CO crée un Team : un collectif de coureurs indépendant, porté par l’association, qui court sous les couleurs SMAL & CO. Nous ne créons pas de club affilié à la FFA.',
  principles: [
    {
      name: 'Chacun garde son club',
      text: 'Les coureurs conservent leur club et leur licence. Le Team s’ajoute à leur parcours, sans rien leur retirer.',
    },
    {
      name: 'Le maillot SMAL & CO en course',
      text: 'Le Team court la majorité de ses épreuves en tenue SMAL & CO. Le maillot du club reste porté sur les compétitions officielles, comme les championnats.',
    },
    {
      name: 'Des coureurs qui s’engagent',
      text: 'Chaque coureur adhère à SMAL & CO (50 € par coureur). Cette première trésorerie finance les premières tenues du Team.',
    },
    {
      name: '2027, saison test',
      text: 'Un bilan est prévu avant 2028 pour décider de la suite : poursuivre en Team ou étudier la création d’un club FFA.',
    },
  ],
  why: 'Pourquoi un Team plutôt qu’un club FFA ? Une affiliation fédérale est lourde à mettre en place, et le paysage des clubs est déjà très concurrentiel. Le Team permet de démarrer vite, avec des coureurs déjà licenciés, et de faire nos preuves sur une saison.',
  modelTitle: 'Un partenaire titre par discipline',
  model: [
    { pole: 'Cyclisme', structure: 'Équipe affiliée FFC, 12 coureurs', partner: 'Hobby Cycles', state: 'Partenaire référent' },
    { pole: 'Running / trail', structure: 'Team indépendant, saison test 2027', partner: 'Run Aventure ?', state: 'Proposition' },
  ],
  sponsor:
    'Comme Hobby Cycles pour le vélo, nous cherchons un sponsor titre pour le Team : un seul partenaire principal, spécialiste de la discipline, associé à chaque course, chaque tenue et chaque contenu de la saison. C’est la place que nous proposons à Run Aventure.',
};

export const effectif = {
  eyebrow: 'Les coureurs',
  title: 'Le Team 2027',
  lead: 'Deux coureurs de niveau national, deux de niveau régional, un effectif qui reste ouvert. Seul le statut « Membre confirmé » vaut adhésion ; chaque fiche est complétée avec l’accord du coureur.',
  openSlot: {
    title: 'Profil à venir',
    text: 'Le Team reste ouvert : route, trail court, trail long, piste. Objectif de départ : 4 à 7 coureurs.',
  },
};

export const ambitions = {
  eyebrow: 'Notre vision sportive',
  title: 'Du Team 2027 à la suite, étape par étape',
  steps: [
    { phase: 'Automne 2026', name: 'Lancer le Team', text: 'Réunir les premiers coureurs, encaisser les adhésions, choisir les tenues, trouver le partenaire titre.' },
    { phase: 'Saison 2027', name: 'Faire nos preuves', text: 'Courir en régional et sur des épreuves plus exigeantes selon le niveau de chacun, raconter la saison en contenus.' },
    { phase: 'Fin 2027', name: 'Faire le bilan', text: 'Bilan sportif et financier partagé avec le partenaire, puis décision : rester en Team ou étudier un club FFA pour 2028.' },
  ],
  axes: 'Axes de recrutement, selon les profils qui rejoindront le collectif : piste, route, trail court, trail long. Aucune de ces spécialités n’est présentée comme déjà couverte.',
};

export const partenariat = {
  eyebrow: 'La proposition',
  title: 'Partenaire titre du Team : trois axes',
  lead: 'Être partenaire titre, c’est accompagner le Team sur trois terrains : ce que portent les coureurs, ce qui leur permet de courir, et ce que nous créons ensemble.',
  axes: [
    { id: 'textile', n: 'Axe 1', name: 'Tenues et équipement' },
    { id: 'financement', n: 'Axe 2', name: 'Soutien financier' },
    { id: 'projets', n: 'Axe 3', name: 'Projets communs' },
  ],
};

export const textile = {
  eyebrow: 'Axe 1 · Tenues et équipement',
  title: 'Construire notre identité textile',
  lead: 'Une collection reconnaissable, dans la continuité des maillots cyclistes. Un premier tee-shirt SMAL & CO est déjà porté en course. Les packs du Team, financés en premier lieu par les adhésions, restent à créer.',
  items: [
    { name: 'Tee-shirt de course', state: 'Premier modèle porté' },
    { name: 'Pack maillot + veste', state: 'À créer' },
    { name: 'Pack maillot + débardeur', state: 'À créer' },
    { name: 'Pack maillot + short', state: 'À créer' },
    { name: 'Accessoires, dont casquette', state: 'À créer' },
  ],
  role:
    'Run Aventure pourrait conseiller le choix des produits parmi les marques qu’il distribue, faciliter l’accès au matériel et aider à nouer un partenariat avec l’une de ces marques, sur laquelle vos couleurs seraient portées.',
};

export const financement = {
  eyebrow: 'Axe 2 · Soutien financier',
  title: 'Un soutien ciblé sur des besoins concrets',
  rows: [
    { poste: 'Équipements collectifs', usage: 'Tenues', montant: '[À DÉFINIR]' },
    { poste: 'Matériel', usage: 'Offre dédiée à notre effectif', montant: '[À DÉFINIR]' },
    { poste: 'Inscriptions', usage: 'Compétitions régionales, puis épreuves plus exigeantes', montant: '[À DÉFINIR]' },
    { poste: 'Soutien financier', usage: 'Déplacements communs, développement médiatique', montant: '[À DÉFINIR]' },
  ],
  levels: ['[NIVEAU 1]', '[NIVEAU 2]', '[NIVEAU 3]'],
  note: 'Trois niveaux de contribution seront construits avec Run Aventure selon ses moyens. Les montants s’appuieront sur un budget de saison détaillé, avec un bilan partagé en fin de saison. Le soutien sert uniquement le pôle running / trail.',
};

export const projets = {
  eyebrow: 'Axe 3 · Projets communs',
  title: 'Créer des événements ensemble',
  rows: [
    { idea: 'Sorties running collectives', needs: 'Parcours, encadrement, assurance', status: 'Idée' },
    { idea: 'Tests de chaussures et d’équipements', needs: 'Matériel du magasin, créneau en magasin', status: 'Idée' },
    { idea: 'Séances de découverte ouvertes à tous', needs: 'Format, bénévoles, communication', status: 'Idée' },
    { idea: 'Trail ou course chronométrée', needs: 'Autorisations, sécurité, assurance, budget, bénévoles', status: 'À étudier' },
  ],
  note: 'Run Aventure propose déjà des sorties running et des tests produits en magasin. Aucun événement commun n’est préparé ni autorisé à ce jour : nous proposons de les construire ensemble, selon vos capacités, nos envies et votre intérêt.',
  goal: 'L’objectif : que Run Aventure devienne notre partenaire référent, pour développer l’image et la pratique du running à Brest, ainsi que les performances de nos coureurs.',
};

export const benefices = {
  eyebrow: 'Ce que le partenariat peut apporter',
  title: 'Ce que Run Aventure peut y gagner',
  items: [
    { name: 'Visibilité locale', text: 'Auprès des coureurs de Brest et de notre communauté.' },
    { name: 'Expertise mise en scène', text: 'Contenus photo et vidéo autour des produits, des conseils et des athlètes.' },
    { name: 'Relations durables', text: 'Des athlètes qui connaissent le magasin et ses conseillers.' },
    { name: 'Animations en magasin', text: 'Sorties, tests de matériel, rencontres avec les coureurs, organisation spécifique.' },
    { name: 'Présence sur les tenues', text: 'Une place identifiée sur les équipements, pour que nos coureurs portent les couleurs de notre partenaire.' },
    { name: 'Projet en construction', text: 'Associer le magasin à la naissance d’un collectif running / trail à Brest.' },
  ],
  note: 'Ces bénéfices ne sont pas des garanties de ventes. Chacun sera activé, suivi et évalué avec vous. Ce partenariat a un double objectif, pour vous et pour nous.',
};

export const fonctionnement = {
  eyebrow: 'Fonctionnement',
  title: 'Une collaboration durable et évolutive',
  smal: {
    title: 'SMAL & CO s’engage',
    items: [
      'À affecter le soutien aux seules dépenses du Team Running / Trail',
      'À valoriser Run Aventure sur ses supports, selon l’accord',
      'À intégrer le magasin à son réseau de partenaires',
      'À partager un bilan sportif et financier en fin de saison',
    ],
  },
  run: {
    title: 'Run Aventure, à discuter',
    items: [
      'Une contribution financière, matérielle ou logistique',
      'Le conseil sur les équipements et les tenues',
      'Des projets menés ensemble, selon nos envies communes',
    ],
  },
  terms: [
    { k: 'Durée', v: '1 an, la saison test 2027', state: 'Proposition' },
    { k: 'Périmètre', v: 'Team Running / Trail', state: 'Proposition' },
    { k: 'Statut', v: 'Partenaire titre du Team', state: 'Proposition' },
    { k: 'Exclusivité', v: 'Piste, route, trail, ultra', state: 'À négocier' },
    { k: 'Renouvellement', v: 'Après le bilan de fin 2027', state: 'À négocier' },
    { k: 'Nom du Team', v: 'Association du nom du partenaire [À DISCUTER]', state: 'À négocier' },
  ],
  scope: 'Le cyclisme reste accompagné par Hobby Cycles : le périmètre proposé à Run Aventure est strictement running / trail.',
};

export const contact = {
  eyebrow: 'Prochaines étapes',
  title: 'Construisons la suite ensemble',
  steps: [
    { n: '1', name: 'Rendez-vous', text: 'Un échange de 30 à 45 minutes au magasin, date [À FIXER].' },
    { n: '2', name: 'Cadrage', text: 'Définir ensemble besoins, niveaux de contribution et contreparties.' },
    { n: '3', name: 'Formalisation', text: 'Un accord écrit avant toute communication publique.' },
  ],
  person: 'Matthieu Bruno',
  role: 'Cofondateur et président',
  channels: [
    { kind: 'email', label: 'E-mail du président', value: 'matthieu.bruno29@gmail.com', href: 'mailto:matthieu.bruno29@gmail.com' },
    { kind: 'phone', label: 'Téléphone', value: '07 67 52 59 18', href: 'tel:+33767525918' },
    { kind: 'email', label: 'E-mail partenaires', value: 'smal.partner@gmail.com', href: 'mailto:smal.partner@gmail.com' },
    { kind: 'social', label: 'Instagram', value: '@smal__co', href: 'https://www.instagram.com/smal__co/' },
  ],
};
