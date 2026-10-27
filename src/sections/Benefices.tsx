import { Photo } from '../components/Photo';
import { SectionHeader, Todo } from '../components/ui';
import { benefices, fonctionnement } from '../data/content';

export function Benefices() {
  return (
    <section className="benefices" aria-labelledby="benefices-title">
      <div className="benefices__bg" aria-hidden="true">
        <Photo name="run-310-city" alt="" sizes="100vw" />
      </div>
      <div className="wrap section benefices__inner">
        <SectionHeader id="benefices-title" eyebrow={benefices.eyebrow} title={benefices.title} />
        <ul className="gains" data-stagger>
          {benefices.items.map((b) => (
            <li key={b.name} className="gain">
              <h3 className="gain__name">{b.name}</h3>
              <p className="gain__text">{b.text}</p>
            </li>
          ))}
        </ul>
        <p className="note" data-reveal>
          {benefices.note}
        </p>
      </div>
    </section>
  );
}

export function Fonctionnement() {
  return (
    <section className="section fonctionnement" aria-labelledby="fonctionnement-title">
      <div className="wrap">
        <SectionHeader id="fonctionnement-title" eyebrow={fonctionnement.eyebrow} title={fonctionnement.title} />
        <div className="duo" data-stagger>
          {[fonctionnement.smal, fonctionnement.run].map((col) => (
            <div key={col.title} className="duo__col">
              <h3 className="duo__title">{col.title}</h3>
              <ul className="checklist">
                {col.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <dl className="terms" data-stagger>
          {fonctionnement.terms.map((t) => (
            <div key={t.k} className="term">
              <dt>{t.k}</dt>
              <dd>
                <span className="term__v">
                  <Todo text={t.v} />
                </span>
                <span className={`status ${t.state === 'Proposition' ? 'status--idee' : 'status--etude'}`}>{t.state}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="note" data-reveal>
          {fonctionnement.scope}
        </p>
      </div>
    </section>
  );
}
