import { Photo } from '../components/Photo';
import { SectionHeader, Todo } from '../components/ui';
import { proposition } from '../data/content';
import { scrollToId } from '../lib/scroll';

export function Proposition() {
  return (
    <section id="proposition" data-nav="proposition" className="section proposition" aria-labelledby="proposition-title">
      <div className="wrap">
        <SectionHeader id="proposition-title" eyebrow={proposition.eyebrow} title={proposition.title}>
          <p>{proposition.lead}</p>
        </SectionHeader>

        {/* Un sponsor titre par discipline */}
        <ul className="model" data-stagger aria-label="Partenaire principal par discipline">
          {proposition.model.map((m) => {
            const open = m.state === 'Proposition';
            return (
              <li key={m.pole} className={`model__row ${open ? 'model__row--open' : ''}`}>
                <span className="model__pole">{m.pole}</span>
                <span className="model__arrow" aria-hidden="true">
                  →
                </span>
                <span className="model__partner">
                  <img
                    className={`model__logo ${m.logo.mono ? 'model__logo--mono' : 'model__logo--plate'}`}
                    src={m.logo.src}
                    alt={m.partner}
                    width={m.logo.w}
                    height={m.logo.h}
                    loading="lazy"
                  />
                  {open && ' ?'}
                </span>
                <span className={`tag ${open ? 'tag--etude' : 'tag--projet'}`}>{m.state}</span>
              </li>
            );
          })}
        </ul>

        <div className="proposition__axes">
          <div className="proposition__media" data-reveal="zoom">
            <Photo
              name="proposition-chaussures"
              alt="Gros plan sur les chaussures de running bleu turquoise d'un coureur, chaussettes siglées, sur un chemin"
              sizes="(min-width: 900px) 30vw, 90vw"
              focus="50% 60%"
            />
          </div>
          <ol className="cards cards--stack" data-stagger aria-label="Les trois axes du partenariat">
            {proposition.axes.map((a, i) => (
              <li key={a.name} className="card">
                <span className="card__n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="card__name">{a.name}</h3>
                <p className="card__text">
                  <Todo text={a.text} />
                </p>
                {i === 2 && (
                  <a
                    className="link"
                    href="#ambitions"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId('ambitions');
                    }}
                  >
                    Voir les Ambitions 2027
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>

        <p className="proposition__duration" data-reveal>
          {proposition.duration} <strong>{proposition.durationAccent}</strong>
        </p>
      </div>
    </section>
  );
}
