import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { nav } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import { scrollToId, subscribe } from '../lib/scroll';

const ids = nav.map((n) => n.id);

/**
 * Barre de navigation fixe : liens d'ancre, section active, barre de
 * progression de lecture et menu plein écran sur mobile.
 */
export function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  // Fond opaque après le hero + progression de lecture.
  useEffect(
    () =>
      subscribe((vh) => {
        const max = document.documentElement.scrollHeight - vh;
        const p = max > 0 ? window.scrollY / max : 0;
        bar.current?.style.setProperty('transform', `scaleX(${p.toFixed(4)})`);
        setSolid(window.scrollY > vh * 0.6);
      }),
    [],
  );

  // Menu mobile : Échap pour fermer, page figée pendant l'ouverture.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('menu-open');
    };
  }, [open]);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="#accueil" className="nav__brand" onClick={(e) => go(e, 'accueil')}>
          SMAL <span>&amp; CO</span>
          <span className="nav__x" aria-hidden="true">×</span>
          <span className="nav__partner">Run Aventure</span>
        </a>

        <button
          ref={toggle}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-label">{open ? 'Fermer' : 'Menu'}</span>
          <span className="nav__burger" aria-hidden="true" />
        </button>

        <nav id="menu" className="nav__menu" aria-label="Sections">
          <ul>
            {nav.map((item, i) => (
              <li key={item.id} style={{ ['--i' as string]: i }}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={(e) => go(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="nav__progress" aria-hidden="true">
        <div ref={bar} />
      </div>
    </header>
  );
}
