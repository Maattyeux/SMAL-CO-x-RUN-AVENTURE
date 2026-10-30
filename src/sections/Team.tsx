import { Photo } from '../components/Photo';
import { ScrollText } from '../components/ScrollText';
import { SectionHeader, Todo } from '../components/ui';
import { STATUS_LABEL, athletes, type Athlete } from '../data/athletes';
import { effectif, team } from '../data/content';

/** Fiche coureur : photo si disponible, sinon monogramme typographique. */
function AthleteCard({ a }: { a: Athlete }) {
  return (
    <article className="athlete" aria-labelledby={`athlete-${a.id}`}>
      <div className="athlete__visual" aria-hidden={a.photo ? undefined : 'true'}>
        {a.photo ? (
          <Photo name={a.photo} alt={`${a.firstName} ${a.lastName}`} sizes="(min-width: 900px) 22vw, 90vw" />
        ) : (
          <span className="athlete__mono">
            {a.firstName[0]}
            {a.lastName[0]}
          </span>
        )}
        <span className="status">{STATUS_LABEL[a.status]}</span>
      </div>
      <h4 id={`athlete-${a.id}`} className="athlete__name">
        {a.firstName} <span>{a.lastName}</span>
      </h4>
      <dl className="athlete__facts">
        <div>
          <dt>Niveau</dt>
          <dd>
            <Todo text={a.level} />
          </dd>
        </div>
        <div>
          <dt>Discipline</dt>
          <dd>{a.disciplines}</dd>
        </div>
        <div>
          <dt>Palmarès</dt>
          <dd>
            <ul>
              {a.results.map((r) => (
                <li key={r}>
                  <Todo text={r} />
                </li>
              ))}
            </ul>
          </dd>
        </div>
        {a.goal && (
          <div>
            <dt>Objectif</dt>
            <dd>
              <Todo text={a.goal} />
            </dd>
          </div>
        )}
      </dl>
    </article>
  );
}

/**
 * Saison 2026/2027 : le TEAM Running / Trail (collectif indépendant,
 * pas de club FFA), son fonctionnement et ses coureurs.
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
              name="team-guerledan"
              alt="Cinq membres de SMAL & CO en tee-shirts de l'association, souriants côte à côte sur le site d'une course à Guerlédan"
              sizes="(min-width: 900px) 42vw, 92vw"
            />
          </div>
        </figure>
      </div>

      <div className="wrap">
        <ScrollText as="blockquote" className="team__why" text={team.why} />

        <ol className="cards cards--4" data-stagger aria-label="Le fonctionnement du TEAM">
          {team.principles.map((p, i) => (
            <li key={p.name} className="card">
              <span className="card__n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="card__name">{p.name}</h3>
              <p className="card__text">
                <Todo text={p.text} />
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="wrap team__athletes" aria-labelledby="athletes-title">
        <figure className="team__duo" data-reveal="mask">
          <div>
            <Photo name="team-duo" alt={effectif.duoAlt} sizes="(min-width: 1200px) 1200px, 100vw" focus="50% 40%" />
          </div>
        </figure>
        <header className="sub-head">
          <p className="eyebrow" data-reveal>
            {effectif.eyebrow}
          </p>
          <h3 id="athletes-title" className="h3" data-reveal="title">
            <span>{effectif.title}</span>
          </h3>
          <p className="lead" data-reveal>
            {effectif.lead}
          </p>
        </header>
        <div className="athletes" data-stagger>
          {athletes.map((a) => (
            <AthleteCard key={a.id} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
