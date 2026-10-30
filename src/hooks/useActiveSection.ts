import { useEffect, useState } from 'react';

/**
 * Renvoie l'id de la section visible au centre de l'écran.
 * Chaque section de navigation porte `data-nav="<id>"` (plusieurs sections peuvent partager un id).
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState('');

  useEffect(() => {
    const els = ids.flatMap((id) => Array.from(document.querySelectorAll<HTMLElement>(`[data-nav="${id}"]`)));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.nav ?? '');
        });
      },
      // Bande fine au milieu de l'écran : une seule section à la fois.
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}
