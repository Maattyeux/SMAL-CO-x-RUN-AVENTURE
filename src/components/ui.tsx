import { Fragment, type ReactNode } from 'react';

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

/**
 * Logo Run Aventure sur plaque claire : le logo (bleu pétrole et vert)
 * n'est pas lisible directement sur le fond sombre du site.
 */
export function RALogo({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <span className={`ra-plate ra-plate--${size} ${className}`}>
      <img src="assets/logo-run-aventure-full.webp" alt="Run Aventure" width={600} height={264} loading="lazy" />
    </span>
  );
}
