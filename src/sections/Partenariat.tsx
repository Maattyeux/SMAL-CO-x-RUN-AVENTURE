import { Photo } from '../components/Photo';
import { SectionHeader, Todo } from '../components/ui';
import { financement, partenariat, projets, textile } from '../data/content';
import { scrollToId } from '../lib/scroll';

function Axes() {
  return (
    <div className="wrap section-tight">
      <SectionHeader eyebrow={partenariat.eyebrow} title={partenariat.title} id="partenariat-title" />
      <ol className="axes" data-stagger>
        {partenariat.axes.map((a) => (
          <li key={a.id}>
            <a
              className="axe"
              href={`#${a.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(a.id);
              }}
            >
              <span className="axe__n">{a.n}</span>
              <span className="axe__name">{a.name}</span>
              <span className="axe__go" aria-hidden="true">↓</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Textile() {
  return (
    <div id="textile" className="wrap section textile" aria-labelledby="textile-title">
      <div className="textile__media">
        <div className="textile__main" data-reveal="mask">
          <Photo
            name="run-shirts"
            alt="Des coureurs montrent fièrement les tee-shirts SMAL & CO après une course"
            sizes="(min-width: 900px) 30vw, 70vw"
          />
        </div>
        <div className="textile__inset" data-reveal="zoom">
          <Photo
            name="run-action-1"
            alt="Un coureur en tee-shirt SMAL & CO en pleine course sur route"
            sizes="(min-width: 900px) 16vw, 40vw"
          />
        </div>
      </div>
      <div className="textile__body">
        <p className="eyebrow" data-reveal>
          {textile.eyebrow}
        </p>
        <h3 id="textile-title" className="h2" data-reveal="title">
          <span>{textile.title}</span>
        </h3>
        <p className="lead" data-reveal>
          {textile.lead}
        </p>
        <ul className="kit" data-stagger>
          {textile.items.map((i) => (
            <li key={i.name} className="kit__item">
              <span className="kit__name">{i.name}</span>
              <span className={`kit__state ${i.state === 'À créer' ? 'kit__state--todo' : ''}`}>{i.state}</span>
            </li>
          ))}
        </ul>
        <blockquote className="callout" data-reveal>
          {textile.role}
        </blockquote>
      </div>
    </div>
  );
}

function Financement() {
  return (
    <div id="financement" className="wrap section financement" aria-labelledby="financement-title">
      <SectionHeader id="financement-title" eyebrow={financement.eyebrow} title={financement.title} />
      <div className="table-wrap" data-reveal>
        <table className="table">
          <caption className="visually-hidden">Postes de dépenses envisagés pour le pôle running / trail</caption>
          <thead>
            <tr>
              <th scope="col">Poste</th>
              <th scope="col">Ce que cela finance</th>
              <th scope="col">Montant</th>
            </tr>
          </thead>
          <tbody>
            {financement.rows.map((r) => (
              <tr key={r.poste}>
                <th scope="row">{r.poste}</th>
                <td>{r.usage}</td>
                <td>
                  <Todo text={r.montant} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="levels" data-stagger aria-label="Niveaux de contribution, à construire ensemble">
        {financement.levels.map((l) => (
          <span key={l} className="level">
            <Todo text={l} />
          </span>
        ))}
      </div>
      <p className="note" data-reveal>
        {financement.note}
      </p>
    </div>
  );
}

function Projets() {
  return (
    <div id="projets" className="wrap section projets" aria-labelledby="projets-title">
      <SectionHeader id="projets-title" eyebrow={projets.eyebrow} title={projets.title} />
      <ul className="ideas" data-stagger>
        {projets.rows.map((r) => (
          <li key={r.idea} className="idea">
            <span className={`status ${r.status === 'Idée' ? 'status--idee' : 'status--etude'}`}>{r.status}</span>
            <h4 className="idea__name">{r.idea}</h4>
            <p className="idea__needs">
              <span>Ce qu’il faudrait</span> {r.needs}
            </p>
          </li>
        ))}
      </ul>
      <p className="note" data-reveal>
        {projets.note}
      </p>
      <p className="statement" data-reveal>
        {projets.goal}
      </p>
    </div>
  );
}

export function Partenariat() {
  return (
    <section id="partenariat" data-nav="partenariat" className="partenariat" aria-labelledby="partenariat-title">
      <Axes />
      <Textile />
      <Financement />
      <Projets />
    </section>
  );
}
