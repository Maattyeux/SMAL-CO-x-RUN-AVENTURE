import { useEffect, useRef } from 'react';
import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { ScrollText } from '../components/ScrollText';
import { Tilt } from '../components/Tilt';
import { SectionHeader } from '../components/ui';
import { identite, site } from '../data/content';
import { clamp, subscribe } from '../lib/scroll';

/** Frise : la ligne se remplit au fil du défilement. */
function Timeline() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return subscribe((vh) => {
      const r = el.getBoundingClientRect();
      const p = clamp((vh * 0.7 - r.top) / r.height);
      el.style.setProperty('--fill', p.toFixed(3));
    });
  }, []);

  return (
    <ol ref={ref} className="timeline" data-stagger>
      {identite.timeline.map((t) => (
        <li key={t.when} className="timeline__item">
          <span className="timeline__when">{t.when}</span>
          <span className="timeline__what">{t.what}</span>
        </li>
      ))}
    </ol>
  );
}

export function Identite() {
  return (
    <section id="identite" data-nav="identite" className="section identite" aria-labelledby="identite-title">
      <div className="wrap identite__grid">
        <div className="identite__text">
          <SectionHeader id="identite-title" eyebrow={identite.eyebrow} title={identite.title}>
            <p>{identite.text}</p>
          </SectionHeader>
          <ScrollText className="identite__manifesto" text={identite.manifesto} />
        </div>

        {/* Collage en profondeur : deux plans qui bougent à des vitesses différentes */}
        <Tilt className="identite__collage" max={5}>
          <div className="collage__back" data-reveal="mask">
            <Parallax strength={0.05}>
              <Photo
                name="team-wall"
                alt="Cinq cyclistes SMAL & CO en maillot violet, posant serrés dans un abri en béton"
                sizes="(min-width: 900px) 34vw, 80vw"
              />
            </Parallax>
          </div>
          <div className="collage__front" data-reveal="zoom">
            <Photo
              name="run-friends"
              alt="Des membres de SMAL & CO en tee-shirts de l'association, souriants sur un site de course"
              sizes="(min-width: 900px) 24vw, 60vw"
            />
          </div>
          <p className="collage__tag signature">{site.signature}</p>
        </Tilt>
      </div>

      <div className="wrap">
        <ul className="poles" data-stagger aria-label="Les trois pôles de SMAL & CO">
          {identite.poles.map((p) => (
            <li key={p.name} className="pole">
              <span className="pole__tag">{p.tag}</span>
              <h3 className="pole__name">{p.name}</h3>
              <p className="pole__text">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap identite__parcours">
        <h3 className="h3-display" data-reveal>
          <span className="eyebrow">Parcours 2026</span>
          {identite.timelineTitle}
        </h3>
        <Timeline />
      </div>
    </section>
  );
}
