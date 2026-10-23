import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { SectionHeader } from '../components/ui';
import { preuves } from '../data/content';

export function Preuves() {
  return (
    <section className="preuves" aria-labelledby="preuves-title">
      <Parallax strength={0.1} className="preuves__bg">
        <Photo name="road-group" alt="" sizes="100vw" />
      </Parallax>
      <div className="preuves__scrim" />
      <div className="wrap section preuves__inner">
        <SectionHeader id="preuves-title" eyebrow={preuves.eyebrow} title={preuves.title} />
        <ul className="proofs" data-stagger>
          {preuves.items.map((p) => (
            <li key={p.value} className="proof">
              <span className="proof__value">{p.value}</span>
              <span className="proof__label">{p.label}</span>
              <span className="proof__context">{p.context}</span>
            </li>
          ))}
        </ul>
        <p className="note" data-reveal>
          {preuves.note}
        </p>
      </div>
    </section>
  );
}
