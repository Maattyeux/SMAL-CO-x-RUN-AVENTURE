import { useEffect, useRef, useState, type ReactNode } from 'react';
import { clamp, prefersReducedMotion, subscribe } from '../lib/scroll';

interface HorizontalGalleryProps {
  label: string;
  heading: ReactNode;
  children: ReactNode;
}

/**
 * Galerie qui défile horizontalement pendant le scroll vertical
 * (section épinglée). Sur écran étroit, tactile ou en reduced-motion,
 * elle redevient une simple bande horizontale avec scroll-snap.
 */
export function HorizontalGallery({ label, heading, children }: HorizontalGalleryProps) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px) and (pointer: fine)');
    const update = () => setPinned(mq.matches && !prefersReducedMotion());
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const o = outer.current;
    const t = track.current;
    if (!o || !t) return;
    if (!pinned) {
      o.style.height = '';
      t.style.transform = '';
      return;
    }

    let distance = 0;
    const measure = () => {
      distance = Math.max(0, t.scrollWidth - window.innerWidth);
      // Hauteur de la zone épinglée = écran + distance horizontale.
      o.style.height = `${window.innerHeight + distance}px`;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(t);

    const off = subscribe(() => {
      const r = o.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, distance));
      t.style.transform = `translate3d(${(-p * distance).toFixed(1)}px, 0, 0)`;
    });

    return () => {
      ro.disconnect();
      off();
    };
  }, [pinned]);

  return (
    <div ref={outer} className={`hgallery ${pinned ? 'hgallery--pinned' : ''}`}>
      <div className="hgallery__sticky">
        <div className="hgallery__head">{heading}</div>
        <div
          ref={track}
          className="hgallery__track"
          role="region"
          aria-label={label}
          tabIndex={pinned ? -1 : 0}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
