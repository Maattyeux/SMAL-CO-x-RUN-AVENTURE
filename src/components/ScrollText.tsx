import { useEffect, useMemo, useRef } from 'react';
import { clamp, prefersReducedMotion, subscribe } from '../lib/scroll';

interface ScrollTextProps {
  text: string;
  as?: 'p' | 'blockquote';
  className?: string;
}

/**
 * Lecture progressive : chaque mot passe du gris au blanc à mesure que
 * le paragraphe traverse l'écran.
 *
 * Technique : un seul nombre (--p, 0 → 1) est écrit sur le paragraphe ;
 * chaque mot connaît son rang (--i) et le CSS calcule sa propre teinte
 * avec color-mix(). Le texte reste un vrai texte, sélectionnable, et
 * s'affiche en blanc si le script ou color-mix() ne sont pas disponibles.
 */
export function ScrollText({ text, as: Tag = 'p', className = '' }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement & HTMLQuoteElement>(null);
  const words = useMemo(() => text.split(/\s+/), [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.setProperty('--p', '1');
      return;
    }
    el.classList.add('scroll-text--live');
    return subscribe((vh) => {
      const r = el.getBoundingClientRect();
      // Commence quand le haut du texte atteint 85 % de l'écran,
      // se termine quand son bas passe 45 %.
      const start = vh * 0.85;
      const end = vh * 0.45;
      const p = clamp((start - r.top) / (start - end + r.height));
      el.style.setProperty('--p', p.toFixed(3));
    });
  }, []);

  return (
    <Tag ref={ref} className={`scroll-text ${className}`} style={{ ['--n' as string]: words.length }}>
      {words.map((w, i) => (
        <span key={i} className="scroll-text__w" style={{ ['--i' as string]: i }}>
          {w}{' '}
        </span>
      ))}
    </Tag>
  );
}
