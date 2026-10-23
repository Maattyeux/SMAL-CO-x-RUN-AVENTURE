import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { SectionHeader } from '../components/ui';
import { ambitions } from '../data/content';

export function Ambitions() {
  return (
    <section className="section ambitions" aria-labelledby="ambitions-title">
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
          <SectionHeader id="ambitions-title" eyebrow={ambitions.eyebrow} title={ambitions.title} />
          <ol className="steps" data-stagger>
            {ambitions.steps.map((s) => (
              <li key={s.name} className="step">
                <span className="step__phase">{s.phase}</span>
                <h3 className="step__name">{s.name}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="note" data-reveal>
            {ambitions.axes}
          </p>
        </div>
      </div>
    </section>
  );
}
