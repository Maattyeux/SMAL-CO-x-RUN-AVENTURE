import { useMemo, useState } from 'react';
import { SectionHeader } from '../components/ui';
import { STATUS_LABEL, STATUS_ORDER, athletes, type Athlete, type AthleteStatus } from '../data/athletes';
import { effectif } from '../data/content';

type Filter = 'tous' | AthleteStatus;

/** Fiche athlète en forme de dossard (quatre épingles aux coins). */
function Bib({ a }: { a: Athlete }) {
  return (
    <article className={`bib bib--${a.status}`} aria-labelledby={`bib-${a.id}`}>
      <span className="bib__pins" aria-hidden="true" />
      <header className="bib__head">
        <span className="bib__club">Team SMAL &amp; CO · 2027</span>
        <span className={`status status--${a.status}`}>{STATUS_LABEL[a.status]}</span>
      </header>
      <h3 id={`bib-${a.id}`} className="bib__name">
        <span>{a.firstName}</span> {a.lastName}
      </h3>
      <dl className="bib__facts">
        <div>
          <dt>Discipline</dt>
          <dd>{a.disciplines}</dd>
        </div>
        <div>
          <dt>Niveau</dt>
          <dd>{a.level ?? <span className="todo">à compléter</span>}</dd>
        </div>
        <div>
          <dt>Résultats</dt>
          <dd>
            {a.results ? (
              <ul>
                {a.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            ) : (
              <span className="todo">à compléter</span>
            )}
          </dd>
        </div>
        <div>
          <dt>Objectif</dt>
          <dd>{a.goal ?? <span className="todo">à compléter</span>}</dd>
        </div>
      </dl>
    </article>
  );
}

export function Effectif() {
  const [filter, setFilter] = useState<Filter>('tous');

  const counts = useMemo(() => {
    const c: Record<string, number> = { tous: athletes.length };
    STATUS_ORDER.forEach((s) => (c[s] = athletes.filter((a) => a.status === s).length));
    return c;
  }, []);

  const shown = filter === 'tous' ? athletes : athletes.filter((a) => a.status === filter);
  const filters: Filter[] = ['tous', ...STATUS_ORDER];

  return (
    <section id="effectif" data-nav="effectif" className="section effectif" aria-labelledby="effectif-title">
      <div className="wrap">
        <SectionHeader id="effectif-title" eyebrow={effectif.eyebrow} title={effectif.title}>
          <p>{effectif.lead}</p>
        </SectionHeader>

        <div className="filters" role="group" aria-label="Filtrer par statut" data-reveal>
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter ${f !== 'tous' ? `filter--${f}` : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              disabled={counts[f] === 0}
            >
              {f === 'tous' ? 'Tous les profils' : STATUS_LABEL[f]}
              <span className="filter__count">{counts[f]}</span>
            </button>
          ))}
        </div>

        <p className="visually-hidden" aria-live="polite">
          {shown.length} profil{shown.length > 1 ? 's' : ''} affiché{shown.length > 1 ? 's' : ''}
        </p>

        <div className="bibs" data-stagger>
          {shown.map((a) => (
            <Bib key={a.id} a={a} />
          ))}
          {filter === 'tous' && (
            <article className="bib bib--open">
              <span className="bib__pins" aria-hidden="true" />
              <h3 className="bib__name bib__name--open">{effectif.openSlot.title}</h3>
              <p className="bib__open-text">{effectif.openSlot.text}</p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
