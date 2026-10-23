import { useEffect, useRef, type ReactNode } from 'react';
import { clamp, prefersReducedMotion, subscribe } from '../lib/scroll';

interface ParallaxProps {
  children: ReactNode;
  /** Amplitude en % de la hauteur du cadre (0.08 = ±8 %). */
  strength?: number;
  className?: string;
}

/**
 * Parallaxe modérée : l'enfant (une image en cover, agrandie de
 * quelques %) glisse plus lentement que la page. Calcul uniquement
 * quand le cadre est visible ; écriture d'un seul transform.
 */
export function Parallax({ children, strength = 0.08, className = '' }: ParallaxProps) {
  const frame = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current;
    const inner = layer.current;
    if (!el || !inner || prefersReducedMotion()) return;

    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: '10% 0px' });
    io.observe(el);

    const off = subscribe((vh) => {
      if (!visible) return;
      const r = el.getBoundingClientRect();
      // -1 quand le cadre entre par le bas, +1 quand il sort par le haut
      const p = clamp((vh - r.top) / (vh + r.height), 0, 1) * 2 - 1;
      inner.style.transform = `translate3d(0, ${(-p * strength * 100).toFixed(2)}%, 0) scale(${1 + strength * 2})`;
    });

    return () => {
      io.disconnect();
      off();
    };
  }, [strength]);

  return (
    <div ref={frame} className={`parallax ${className}`}>
      <div ref={layer} className="parallax__layer">
        {children}
      </div>
    </div>
  );
}
