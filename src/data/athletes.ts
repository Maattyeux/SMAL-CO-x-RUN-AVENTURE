import type { PhotoName } from '../components/Photo';

/**
 * Coureurs du TEAM Running / Trail SMAL & CO, saison 2026/2027.
 *
 * C'est le seul fichier à modifier pour faire évoluer l'effectif :
 * ajouter, retirer ou mettre à jour une fiche, puis relancer le build.
 *
 * Règles :
 * - Une donnée inconnue s'écrit entre crochets, ex. '[À COMPLÉTER]' :
 *   elle s'affiche en doré sur le site.
 * - Aucun résultat sans source (classement officiel, chrono).
 * - `photo` : nom d'une image de public/img (voir image-manifest.json),
 *   à renseigner uniquement si la photo montre bien ce coureur.
 */

export type AthleteStatus = 'membre';

export interface Athlete {
  id: string;
  firstName: string;
  lastName: string;
  disciplines: string;
  level: string;
  /** Résultats de référence, une entrée par ligne. */
  results: string[];
  /** Objectif annoncé, s'il y en a un. */
  goal?: string;
  photo?: PhotoName;
  status: AthleteStatus;
}

export const STATUS_LABEL: Record<AthleteStatus, string> = {
  membre: 'Membre du TEAM 2027',
};

export const athletes: Athlete[] = [
  {
    id: 'lucas-tanne',
    photo: 'athlete-lucas-tanne',
    firstName: 'Lucas',
    lastName: 'Tanné',
    disciplines: 'Trail & route',
    level: 'National',
    results: ['Victoire · Grand Raid du Finistère 2024'],
    status: 'membre',
  },
  {
    id: 'ewen-premel',
    photo: 'athlete-ewen-premel',
    firstName: 'Ewen',
    lastName: 'Premel',
    disciplines: 'Trail & route',
    level: 'National',
    results: ['2e · Trail de Guerlédan 2026', "4e · Trail de l'Aber-Wrac'h 2026", 'Marathon en 2 h 37'],
    status: 'membre',
  },
  {
    id: 'moran-bars',
    photo: 'athlete-moran-bars',
    firstName: 'Moran',
    lastName: 'Bars',
    disciplines: 'Trail & route',
    level: 'Régional',
    results: [
      '1er Espoir · Thérèse Trail [ANNÉE À COMPLÉTER]',
      '3e / 450 · Trail du Bout du Monde, 11 km [ANNÉE À COMPLÉTER]',
    ],
    status: 'membre',
  },
  {
    id: 'lucas-marrec',
    photo: 'athlete-lucas-marrec',
    firstName: 'Lucas',
    lastName: 'Marrec',
    disciplines: 'Trail',
    level: 'Régional',
    results: ['[À COMPLÉTER]'],
    goal: "UTMB Val d'Aran 2027",
    status: 'membre',
  },
  {
    id: 'mael-bruno',
    photo: 'athlete-mael-bruno',
    firstName: 'Maël',
    lastName: 'Bruno',
    disciplines: 'Piste & route',
    level: 'National',
    results: ['1 500 m · 3’48”62', '5 km · 14’41”', '10 km · 31’50”', 'Victoire · 10 km de Plouguin'],
    goal: 'Piste (1 500 m) et route (5 / 10 km)',
    status: 'membre',
  },
];
