import { RALogo, SectionHeader } from '../components/ui';
import { valeurs } from '../data/content';

/**
 * Valeurs partagées : chaque valeur mise en avant par Run Aventure
 * est mise en regard de la valeur de SMAL & CO qui lui répond.
 */
export function Valeurs() {
  return (
    <section id="valeurs" data-nav="valeurs" className="section valeurs" aria-labelledby="valeurs-title">
      <div className="wrap">
        <SectionHeader id="valeurs-title" eyebrow={valeurs.eyebrow} title={valeurs.title}>
          <p>{valeurs.lead}</p>
        </SectionHeader>

        <div className="pairs__head" aria-hidden="true">
          <RALogo size="sm" />
          <span className="pairs__amp">×</span>
          <img src="assets/logo-smal-co.webp" alt="" width={682} height={125} className="pairs__smal" />
        </div>

        <ul className="pairs" data-stagger>
          {valeurs.pairs.map((p) => (
            <li key={p.ra.name} className="pair">
              <div className="pair__side pair__side--ra">
                <span className="pair__brand">Run Aventure</span>
                <h3 className="pair__name">{p.ra.name}</h3>
                <p className="pair__text">{p.ra.text}</p>
              </div>
              <span className="pair__link" aria-hidden="true">
                ↔
              </span>
              <div className="pair__side pair__side--smal">
                <span className="pair__brand">SMAL &amp; CO</span>
                <h3 className="pair__name">{p.smal.name}</h3>
                <p className="pair__text">{p.smal.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="note valeurs__source" data-reveal>
          {valeurs.source}
        </p>
      </div>
    </section>
  );
}
