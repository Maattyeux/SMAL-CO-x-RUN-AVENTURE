import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { ScrollText } from '../components/ScrollText';
import { running } from '../data/content';

export function Running() {
  return (
    <section id="running" data-nav="running" className="running" aria-labelledby="running-title">
      <div className="cover cover--left">
        <Parallax strength={0.07} className="cover__media">
          <Photo
            name="run-310"
            alt="Un coureur SMAL & CO en tee-shirt gris, dossard 310, en pleine course"
            sizes="100vw"
            focus="60% 40%"
          />
        </Parallax>
        <div className="cover__scrim cover__scrim--side" />
        <div className="cover__content wrap">
          <p className="eyebrow" data-reveal>
            {running.eyebrow}
          </p>
          <h2 id="running-title" className="display" data-reveal="title">
            <span>{running.title}</span>
          </h2>
          <ul className="pills" data-stagger aria-label="Les chantiers du pôle">
            {running.pills.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap section-tight">
        <ScrollText as="blockquote" className="running__statement" text={running.scrollText} />
      </div>

      <div className="wrap section results" aria-labelledby="results-title">
        <div className="results__media" data-reveal="zoom">
          <Photo
            name="run-portrait"
            alt="Un coureur en tee-shirt SMAL & CO, dossard 310, en course dans une rue en ville"
            sizes="(min-width: 900px) 30vw, 70vw"
          />
        </div>
        <div className="results__body">
          <p className="eyebrow" data-reveal>
            {running.proofEyebrow}
          </p>
          <h3 id="results-title" className="h2" data-reveal="title">
            <span>
              {running.proofTitle} : <em>{running.athlete}</em>
            </span>
          </h3>
          <ol className="ranks" data-stagger>
            {running.results.map((r) => (
              <li key={r.race} className="rank">
                <span className="rank__n">{r.rank}</span>
                <span className="rank__race">{r.race}</span>
              </li>
            ))}
          </ol>
          <p className="results__more" data-reveal>
            {running.podiums} {running.stake}
          </p>
        </div>
      </div>
    </section>
  );
}
