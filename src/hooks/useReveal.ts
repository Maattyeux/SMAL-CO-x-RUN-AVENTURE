import { useLayoutEffect } from 'react';

/**
 * Révélations au scroll, déclarées en HTML :
 *   <div data-reveal>…</div>                 fondu + légère translation
 *   <div data-reveal="mask">…</div>          masque qui s'ouvre (images)
 *   <div data-reveal="zoom">…</div>          image qui se pose (scale)
 *   <ul data-stagger>…</ul>                  enfants révélés en séquence
 *
 * Un seul IntersectionObserver pour toute la page. Sans JS ou avec
 * prefers-reduced-motion, le CSS laisse tout visible (aucun état caché).
 */
export function useReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-stagger]');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    targets.forEach((el) => {
      // Numérote les enfants pour le délai CSS en cascade.
      if (el.hasAttribute('data-stagger')) {
        Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
      }
      io.observe(el);
    });

    root.classList.add('reveal-ready');
    return () => io.disconnect();
  }, []);
}
