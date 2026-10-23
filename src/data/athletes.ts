/**
 * Futur effectif running / trail.
 *
 * C'est le seul fichier à modifier pour faire évoluer l'effectif :
 * ajouter, retirer ou mettre à jour une fiche, puis relancer le build.
 *
 * Règles :
 * - `status` ne passe à "confirme" qu'après accord écrit de l'athlète.
 * - Un champ inconnu reste `null` : il s'affiche « à compléter ».
 * - Aucun résultat sans source officielle (classement, chrono).
 */

export type AthleteStatus = 'confirme' | 'envisage' | 'discussion' | 'a-confirmer';

export interface Athlete {
  id: string;
  firstName: string;
  lastName: string;
  disciplines: string;
  /** Résultats vérifiés, séparés par entrée. null = à compléter. */
  results: string[] | null;
  /** Objectif annoncé par l'athlète. null = à compléter. */
  goal: string | null;
  status: AthleteStatus;
  /** Où l'information a été trouvée (pour la relecture interne). */
  source: string;
}

export const STATUS_LABEL: Record<AthleteStatus, string> = {
  confirme: 'Membre confirmé',
  envisage: 'Intégration envisagée',
  discussion: 'Discussion en cours',
  'a-confirmer': 'Profil à confirmer',
};

export const STATUS_ORDER: AthleteStatus[] = ['confirme', 'envisage', 'discussion', 'a-confirmer'];

export const athletes: Athlete[] = [
  {
    id: 'ewen-premel',
    firstName: 'Ewen',
    lastName: 'Premel',
    disciplines: 'Trail & route',
    results: [
      '2e · Trail de Guerlédan 2026',
      "4e · Trail de l'Aber-Wrac'h 2026",
      'Marathon en 2 h 37',
    ],
    goal: null,
    // Membre de l'association depuis 2026 (dossier de recrutement SMAL & CO).
    status: 'confirme',
    source: 'Dossier Run Aventure p. 8-9 ; dossier de recrutement (membres 2026)',
  },
  {
    id: 'moran-bars',
    firstName: 'Moran',
    lastName: 'Bars',
    disciplines: 'Trail & route',
    results: null,
    goal: null,
    status: 'a-confirmer',
    source: 'Dossier Run Aventure p. 9 (statut non précisé)',
  },
  {
    id: 'mael-bruno',
    firstName: 'Maël',
    lastName: 'Bruno',
    disciplines: 'Route & piste',
    results: null,
    goal: null,
    status: 'a-confirmer',
    source: 'Dossier Run Aventure p. 9 (statut non précisé)',
  },
  {
    id: 'lucas-marrec',
    firstName: 'Lucas',
    lastName: 'Marrec',
    disciplines: 'Trail',
    results: null,
    goal: "UTMB Val d'Aran 2027",
    status: 'a-confirmer',
    source: 'Dossier Run Aventure p. 9 (statut non précisé)',
  },
  {
    id: 'lucas-tanne',
    firstName: 'Lucas',
    lastName: 'Tanne',
    disciplines: 'Trail & route',
    results: null,
    goal: null,
    status: 'a-confirmer',
    source: 'Dossier Run Aventure p. 9 (statut non précisé)',
  },
];
