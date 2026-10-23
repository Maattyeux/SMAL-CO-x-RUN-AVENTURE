import { useRef, type PointerEvent, type ReactNode } from 'react';

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Inclinaison maximale en degrés. */
  max?: number;
}

/**
 * Profondeur au survol : légère rotation 3D qui suit le pointeur.
 * Uniquement avec une souris (pointerType "mouse") ; neutralisée par
 * le CSS en reduced-motion. Aucun effet au toucher.
 */
export function Tilt({ children, className = '', max = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`);
    ref.current.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`);
    ref.current.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
    ref.current.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg');
    ref.current?.style.setProperty('--ry', '0deg');
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
}
