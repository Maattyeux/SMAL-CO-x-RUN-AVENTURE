import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { Todo } from '../components/ui';
import { ambitions } from '../data/content';

/** Ambitions 2027 du TEAM : chaque projet porte un statut visible. */
export function Ambitions() {
  return (
    <section id="ambitions" data-nav="team" className="section ambitions" aria-labelledby="ambitions-title">
      <div className="wrap ambitions__grid">
        <div className="ambitions__media" data-reveal="mask">
          <Parallax strength={0.08}>
            <Photo
              name="run-action-2"
              alt="Un coureur SMAL & CO en tee-shirt gris, dossard 310, au coude à coude avec un autre coureur"
              sizes="(min-width: 900px) 32vw, 80vw"
            />
          </Parallax>
        </div>
        <div className="ambitions__body">
          <header className="sub-head">
            <p className="eyebrow" data-reveal>
              {ambitions.eyebrow}
            </p>
            <h3 id="ambitions-title" className="h3" data-reveal="title">
              <span>{ambitions.title}</span>
            </h3>
            <p className="note" data-reveal>
              {ambitions.note}
            </p>
          </header>
          <ol className="ambition-list" data-stagger>
            {ambitions.items.map((a, i) => (
              <li key={a.name} className="ambition">
                <span className="card__n">{String(i + 1).padStart(2, '0')}</span>
                <div className="ambition__body">
                  <h4 className="ambition__name">{a.name}</h4>
                  <p className="ambition__text">
                    <Todo text={a.text} />
                  </p>
                </div>
                <span className={`tag ${a.status === 'Projet' ? 'tag--projet' : 'tag--etude'}`}>{a.status}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
