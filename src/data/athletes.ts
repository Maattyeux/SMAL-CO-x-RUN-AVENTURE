/**
 * Effectif du Team Running / Trail SMAL & CO, saison 2026/2027.
 *
 * C'est le seul fichier à modifier pour faire évoluer l'effectif :
 * ajouter, retirer ou mettre à jour une fiche, puis relancer le build.
 *
 * Règles :
 * - `status` ne passe à "confirme" qu'après l'adhésion effective du coureur.
 * - Un champ inconnu reste `null` : il s'affiche « à compléter ».
 * - Aucun résultat sans source (classement officiel, chrono).
 * - Les coureurs du Team gardent leur club et leur licence d'origine.
 */

export type AthleteStatus = 'confirme' | 'envisage' | 'discussion' | 'a-confirmer';

export interface Athlete {
  id: string;
  firstName: string;
  lastName: string;
  disciplines: string;
  /** Niveau annoncé par le président (national, régional…). null = à compléter. */
  level: string | null;
  /** Résultats de référence, une entrée par ligne. null = à compléter. */
  results: string[] | null;
  /** Objectif annoncé par l'athlète. null = à compléter. */
  goal: string | null;
  status: AthleteStatus;
  /** Où l'information a été trouvée (pour la relecture interne). */
  source: string;
}

export const STATUS_LABEL: Record<AthleteStatus, string> = {
  confirme: 'Membre confirmé',
  envisage: 'Prévu au Team 2027',
  discussion: 'Discussion en cours',
  'a-confirmer': 'Profil à confirmer',
};

export const STATUS_ORDER: AthleteStatus[] = ['confirme', 'envisage', 'discussion', 'a-confirmer'];

export const athletes: Athlete[] = [
  {
    id: 'lucas-tanne',
    firstName: 'Lucas',
    lastName: 'Tanné',
    disciplines: 'Trail & route',
    level: 'National',
    results: ['Victoire · Grand Raid du Finistère 2024'],
    goal: null,
    status: 'envisage',
    source: 'Communiqué par le président (oct. 2026)',
  },
  {
    id: 'ewen-premel',
    firstName: 'Ewen',
    lastName: 'Premel',
    disciplines: 'Trail & route',
    level: 'National',
    results: [
      '2e · Trail de Guerlédan 2026',
      "4e · Trail de l'Aber-Wrac'h 2026",
      'Marathon en 2 h 37',
    ],
    goal: null,
    // Membre de l'association depuis 2026 (dossier de recrutement SMAL & CO).
    status: 'confirme',
    source: 'Dossier Run Aventure ; dossier de recrutement (membres 2026)',
  },
  {
    id: 'moran-bars',
    firstName: 'Moran',
    lastName: 'Bars',
    disciplines: 'Trail & route',
    level: 'Régional',
    results: ['1er Espoir · Thérèse Trail', '3e / 450 · Trail du Bout du Monde (11 km)'],
    goal: null,
    status: 'envisage',
    source: 'Communiqué par le président (oct. 2026)',
  },
  {
    id: 'lucas-marrec',
    firstName: 'Lucas',
    lastName: 'Marrec',
    disciplines: 'Trail',
    level: 'Régional',
    results: null,
    goal: "UTMB Val d'Aran 2027",
    status: 'envisage',
    source: 'Dossier Run Aventure p. 9 ; communiqué par le président (oct. 2026)',
  },
  {
    id: 'mael-bruno',
    firstName: 'Maël',
    lastName: 'Bruno',
    disciplines: 'Route & piste',
    level: null,
    results: null,
    goal: null,
    status: 'a-confirmer',
    source: 'Dossier Run Aventure p. 9 (statut non précisé)',
  },
];
