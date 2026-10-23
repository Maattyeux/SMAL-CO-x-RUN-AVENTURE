/**
 * Moteur de défilement unique.
 *
 * Un seul écouteur `scroll` + `resize` (passifs) pour tout le site ;
 * les composants s'abonnent et sont appelés au plus une fois par frame
 * via requestAnimationFrame. Les calculs restent donc groupés et les
 * écritures se limitent à des variables CSS / transform.
 */

type Tick = (vh: number) => void;

const subscribers = new Set<Tick>();
let scheduled = false;
let listening = false;

function run() {
  scheduled = false;
  const vh = window.innerHeight;
  subscribers.forEach((fn) => fn(vh));
}

function request() {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(run);
  }
}

export function subscribe(fn: Tick): () => void {
  subscribers.add(fn);
  if (!listening) {
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    listening = true;
  }
  request();
  return () => {
    subscribers.delete(fn);
  };
}

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/** true si l'utilisateur a demandé moins d'animations. */
export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Défilement doux vers une section, en respectant reduced-motion et la barre fixe. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  // Le focus suit la navigation clavier / lecteur d'écran.
  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}
