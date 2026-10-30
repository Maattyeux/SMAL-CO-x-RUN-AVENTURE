import { Parallax } from '../components/Parallax';
import { Photo } from '../components/Photo';
import { RALogo, Todo } from '../components/ui';
import { contact, footer, site } from '../data/content';

type Channel = (typeof contact.channels)[number];

/** Pictogrammes des bulles de contact (trait, couleur héritée). */
function Icon({ kind }: { kind: Channel['kind'] }) {
  const paths: Record<Channel['kind'], string> = {
    mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
    instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5h0',
    linkedin: 'M4 4h16v16H4zM8 10v6M8 7.5h0M12 16v-6M12 12.5a2.5 2.5 0 0 1 5 0V16',
  };
  return (
    <svg className="bubble__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" data-nav="contact" className="contact" aria-labelledby="contact-title">
      <Parallax strength={0.06} className="contact__bg">
        <Photo name="team-sea" alt="" sizes="100vw" focus="50% 35%" />
      </Parallax>
      <div className="contact__scrim" />

      <div className="wrap section contact__inner">
        <p className="badge" data-reveal>
          {contact.badge}
        </p>
        <h2 id="contact-title" className="contact__title" data-reveal>
          {contact.title}
        </h2>
        <div className="contact__logos" data-reveal>
          <img className="contact__logo" src="assets/logo-smal-co.webp" alt="SMAL & CO" width={682} height={125} loading="lazy" />
          <span className="contact__x" aria-hidden="true">×</span>
          <RALogo size="md" />
        </div>
        <p className="contact__next" data-reveal>
          <Todo text={contact.next} />
        </p>

        <ul className="bubbles" data-stagger>
          {contact.channels.map((c) => {
            const external = c.kind !== 'mail';
            return (
              <li key={c.kind}>
                <a
                  className="bubble"
                  href={c.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon kind={c.kind} />
                  <span className="bubble__label">{c.label}</span>
                  <span className="bubble__value">{c.value}</span>
                  {external && <span className="visually-hidden"> (nouvel onglet)</span>}
                  <span className="bubble__go" aria-hidden="true">
                    {external ? '↗' : '→'}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="footer wrap">
        <p className="footer__thanks">{footer.thanks}</p>
        <div className="footer__logos">
          <img className="footer__logo" src="assets/logo-smal-co.webp" alt="SMAL & CO" width={682} height={125} loading="lazy" />
          <span aria-hidden="true">×</span>
          <RALogo size="sm" />
        </div>
        <p className="signature">{site.signature}</p>
        <p>{site.disclaimer}</p>
        <p>SMAL &amp; CO, association loi 1901, Brest · {site.date}</p>
        <div className="footer__credits">
          <p>{footer.madeBy}</p>
          <p>
            Crédits photographiques : © {footer.photo.author} — Retrouvez son travail sur Instagram{' '}
            <a href={footer.photo.href} target="_blank" rel="noopener noreferrer">
              {footer.photo.handle}
              <span className="visually-hidden"> (nouvel onglet)</span>
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
