import { Fragment, useState, type ReactNode } from 'react';

/**
 * Affiche un texte en mettant en évidence (doré) les champs à compléter
 * écrits entre crochets, ex. « date [À FIXER] ».
 */
export function Todo({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\[.+\]$/.test(part) ? (
          <span key={i} className="todo" title="Information à compléter">
            {part.slice(1, -1).toLowerCase()}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  id?: string;
  align?: 'start' | 'wide';
}

/** En-tête de section : sur-titre, titre révélé ligne à ligne, chapeau. */
export function SectionHeader({ eyebrow, title, children, id, align = 'start' }: SectionHeaderProps) {
  return (
    <header className={`sh sh--${align}`}>
      <p className="eyebrow" data-reveal>
        {eyebrow}
      </p>
      <h2 id={id} className="sh__title" data-reveal="title">
        <span>{title}</span>
      </h2>
      {children && (
        <div className="sh__lead" data-reveal>
          {children}
        </div>
      )}
    </header>
  );
}

/** Bouton « Copier » : fonctionne même si mailto / tel sont bloqués. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [state, setState] = useState<'idle' | 'ok' | 'ko'>('idle');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState('ok');
    } catch {
      setState('ko');
    }
    window.setTimeout(() => setState('idle'), 2200);
  };

  return (
    <button type="button" className="copy" onClick={copy} aria-label={`Copier ${label}`}>
      <span aria-live="polite">{state === 'ok' ? 'Copié' : state === 'ko' ? 'Sélectionnez le texte' : 'Copier'}</span>
    </button>
  );
}
