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
 * Logo Run Aventure sans fond, version pour fond sombre :
 * le bleu pétrole du logo est passé en blanc, le vert est conservé.
 */
export function RALogo({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <img
      className={`ra-logo ra-logo--${size} ${className}`}
      src="assets/logo-run-aventure-light.webp"
      alt="Run Aventure"
      width={593}
      height={116}
      loading="lazy"
    />
  );
}
