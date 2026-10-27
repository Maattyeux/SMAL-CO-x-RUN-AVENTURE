import { Photo } from '../components/Photo';
import { ScrollText } from '../components/ScrollText';
import { SectionHeader } from '../components/ui';
import { team } from '../data/content';

/**
 * Saison 2026/2027 : le projet de Team Running / Trail
 * (collectif indépendant, pas de club FFA) et la place de sponsor titre.
 */
export function Team() {
  return (
    <section id="team" data-nav="team" className="section team" aria-labelledby="team-title">
      <div className="wrap team__intro">
        <div className="team__head">
          <SectionHeader id="team-title" eyebrow={team.eyebrow} title={team.title}>
            <p>{team.lead}</p>
          </SectionHeader>
        </div>
        <figure className="team__media" data-reveal="mask">
          <div>
            <Photo
              name="run-bw-group"
              alt="Une dizaine de coureurs réunis après une course, l'un d'eux brandit un tee-shirt SMAL & CO"
              sizes="(min-width: 900px) 42vw, 92vw"
            />
          </div>
          <figcaption>Le noyau du futur Team, après une course</figcaption>
        </figure>
      </div>

      <div className="wrap">
        <ul className="principles" data-stagger aria-label="Les principes du Team">
          {team.principles.map((p) => (
            <li key={p.name} className="principle">
              <h3 className="principle__name">{p.name}</h3>
              <p className="principle__text">{p.text}</p>
            </li>
          ))}
        </ul>

        <p className="note team__why" data-reveal>
          {team.why}
        </p>
      </div>

      <div className="wrap team__model" aria-labelledby="model-title">
        <h3 id="model-title" className="h3-display" data-reveal>
          <span className="eyebrow">Le modèle SMAL &amp; CO</span>
          {team.modelTitle}
        </h3>
        <div className="model" data-stagger role="table" aria-label="Partenaire principal par discipline">
          <div className="model__row model__row--head" role="row">
            <span role="columnheader">Pôle</span>
            <span role="columnheader">Structure</span>
            <span role="columnheader">Partenaire titre</span>
          </div>
          {team.model.map((m) => (
            <div key={m.pole} className={`model__row ${m.state === 'Proposition' ? 'model__row--open' : ''}`} role="row">
              <span className="model__pole" role="cell">
                {m.pole}
              </span>
              <span className="model__structure" role="cell">
                {m.structure}
              </span>
              <span className="model__partner" role="cell">
                {m.partner}
                <span className={`status ${m.state === 'Proposition' ? 'status--etude' : 'status--confirme'}`}>{m.state}</span>
              </span>
            </div>
          ))}
        </div>
        <ScrollText className="team__sponsor" text={team.sponsor} />
      </div>
    </section>
  );
}
