import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { CopyButton, Todo } from '../components/ui';
import { contact, site } from '../data/content';

export function Contact() {
  return (
    <section id="contact" data-nav="contact" className="contact" aria-labelledby="contact-title">
      <Parallax strength={0.06} className="contact__bg">
        <Photo name="team-beach" alt="" sizes="100vw" focus="50% 35%" />
      </Parallax>
      <div className="contact__scrim" />

      <div className="wrap section contact__inner">
        <p className="eyebrow" data-reveal>
          {contact.eyebrow}
        </p>
        <h2 id="contact-title" className="display" data-reveal="title">
          <span>{contact.title}</span>
        </h2>

        <ol className="next" data-stagger>
          {contact.steps.map((s) => (
            <li key={s.n} className="next__step">
              <span className="next__n">{s.n}</span>
              <h3 className="next__name">{s.name}</h3>
              <p className="next__text">
                <Todo text={s.text} />
              </p>
            </li>
          ))}
        </ol>

        <div className="card-contact" data-reveal>
          <div className="card-contact__who">
            <p className="card-contact__name">{contact.person}</p>
            <p className="card-contact__role">{contact.role}, SMAL &amp; CO</p>
          </div>
          <ul className="channels">
            {contact.channels.map((c) => (
              <li key={c.value} className="channel">
                <span className="channel__label">{c.label}</span>
                <span className="channel__row">
                  <a
                    className="channel__value"
                    href={c.href}
                    {...(c.kind === 'social' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {c.value}
                    {c.kind === 'social' && <span className="visually-hidden"> (nouvel onglet)</span>}
                  </a>
                  {c.kind !== 'social' && <CopyButton value={c.value} label={c.label} />}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="footer wrap">
        <p className="signature">{site.signature}</p>
        <p>{site.disclaimer}</p>
        <p>
          SMAL &amp; CO, association loi 1901, Brest · Partenaire référent du pôle cyclisme : Hobby Cycles · {site.date}
        </p>
      </footer>
    </section>
  );
}
