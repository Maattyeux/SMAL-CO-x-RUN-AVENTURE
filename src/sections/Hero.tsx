import { Photo } from '../components/Photo';
import { footer, hero, site } from '../data/content';
import { scrollToId } from '../lib/scroll';
import { RALogo } from '../components/ui';

export function Hero() {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Photo
          name="hero-guerledan"
          priority
          alt="Cinq membres de SMAL & CO en tee-shirts de l'association, souriants côte à côte sur le site d'une course à Guerlédan"
          focus="50% 30%"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content wrap">
        <p className="hero__for">
          <span>Dossier préparé pour</span>
          <RALogo size="md" />
        </p>
        <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">
            <span>{hero.titleA}</span>
          </span>
          <span className="hero__line hero__line--x" aria-hidden="true">
            <span>×</span>
          </span>
          <span className="visually-hidden"> et </span>
          <span className="hero__line hero__line--b">
            <span>{hero.titleB}</span>
          </span>
        </h1>
        <div className="hero__foot">
          <p className="hero__lead">{hero.lead}</p>
          <p className="signature">{site.signature}</p>
        </div>
        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href="#histoire"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('histoire');
            }}
          >
            {hero.ctaPrimary}
            <span className="btn__arrow" aria-hidden="true">↓</span>
          </a>
          <a
            className="btn btn--ghost"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('contact');
            }}
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <p className="hero__meta wrap">
        <span className="hero__place">
          Brest · Bretagne ·{' '}
          <span className="hero__credit">
            <em>crédit photo</em>{' '}
            <a href={footer.photo.href} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5h0" />
              </svg>
              {footer.photo.handle}
              <span className="visually-hidden"> sur Instagram (nouvel onglet)</span>
            </a>
          </span>
        </span>
        <span>{site.date} · proposition sans engagement</span>
      </p>
    </section>
  );
}
