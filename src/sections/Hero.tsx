import { Photo } from '../components/Photo';
import { hero, site } from '../data/content';
import { scrollToId } from '../lib/scroll';

export function Hero() {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Photo
          name="run-group"
          priority
          alt="Quatre membres de SMAL & CO posent ensemble avant une course, l'un porte le tee-shirt de course SMAL & CO et le dossard 310"
          focus="50% 30%"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content wrap">
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
            href="#identite"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('identite');
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
        <span>Brest · Bretagne</span>
        <span>{site.date} · proposition sans engagement</span>
      </p>
    </section>
  );
}
