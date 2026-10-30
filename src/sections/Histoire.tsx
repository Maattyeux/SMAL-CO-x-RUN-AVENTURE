import { useEffect, useRef } from 'react';
import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { Tilt } from '../components/Tilt';
import { SectionHeader } from '../components/ui';
import { histoire, histoireText } from '../data/content';
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
    <ol ref={ref} className="timeline" data-stagger aria-label="Repères 2026">
      {histoire.timeline.map((t) => (
        <li key={t.when} className="timeline__item">
          <span className="timeline__when">{t.when}</span>
          <span className="timeline__what">{t.what}</span>
        </li>
      ))}
    </ol>
  );
}

export function Histoire() {
  return (
    <section id="histoire" data-nav="histoire" className="section histoire" aria-labelledby="histoire-title">
      <div className="wrap histoire__grid">
        <div className="histoire__text">
          <SectionHeader id="histoire-title" eyebrow={histoire.eyebrow} title={histoire.title}>
            {histoireText.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </SectionHeader>
        </div>

        {/* Collage en profondeur : deux plans qui bougent à des vitesses différentes */}
        <Tilt className="histoire__collage" max={5}>
          <div className="collage__back" data-reveal="mask">
            <Parallax strength={0.05}>
              <Photo
                name="histoire-portrait"
                alt="Un coureur en sweat SMAL & CO tient un micro siglé SMAL"
                sizes="(min-width: 900px) 34vw, 80vw"
                focus="40% 45%"
              />
            </Parallax>
          </div>
          <div className="collage__front" data-reveal="zoom">
            <Photo
              name="histoire-cyclistes"
              alt="Des cyclistes casqués sur un promontoire rocheux, face à une rade et un pont au coucher du soleil"
              sizes="(min-width: 900px) 24vw, 60vw"
              focus="65% 50%"
            />
          </div>
        </Tilt>
      </div>

      <div className="wrap histoire__poles">
        <ol className="cards cards--3" data-stagger aria-label="Les trois pôles de SMAL & CO">
          {histoire.poles.map((p, i) => (
            <li key={p.name} className="card">
              <span className="card__n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="card__name">{p.name}</h3>
              <p className="card__text">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="wrap histoire__parcours">
        <p className="eyebrow" data-reveal>
          Repères 2026
        </p>
        <Timeline />
      </div>
    </section>
  );
}
