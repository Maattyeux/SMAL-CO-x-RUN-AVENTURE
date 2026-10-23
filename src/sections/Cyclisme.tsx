import { HorizontalGallery } from '../components/HorizontalGallery';
import { Parallax } from '../components/Parallax';
import { Photo, type PhotoName } from '../components/Photo';
import { cyclisme, hobby } from '../data/content';

const gallery: { name: PhotoName; alt: string; caption: string; wide?: boolean }[] = [
  { name: 'road-peloton', alt: "Le groupe SMAL & CO roule de face sur une route, maillots violets", caption: 'En groupe, sur les routes du Finistère', wide: true },
  { name: 'studio-solo', alt: 'Un coureur SMAL & CO pose en maillot violet sous une lumière violette', caption: 'Le maillot SMAL' },
  { name: 'team-beach', alt: "Sept coureurs SMAL & CO alignés sur un rocher face à la mer", caption: 'L’équipe face à la mer', wide: true },
  { name: 'road-bend', alt: 'Des cyclistes SMAL & CO négocient un virage', caption: 'Sortie collective' },
  { name: 'team-flag', alt: "L'équipe SMAL & CO réunie autour d'un drapeau SMAL", caption: 'Une identité commune', wide: true },
  { name: 'road-solo', alt: 'Un cycliste SMAL & CO en tête de groupe sur une route de campagne', caption: 'Rouler ensemble' },
  { name: 'team-sea', alt: 'Les coureurs SMAL & CO assis de dos, face à la mer', caption: 'Ancrage breton', wide: true },
];

export function Cyclisme() {
  return (
    <section id="cyclisme" data-nav="cyclisme" className="cyclisme" aria-labelledby="cyclisme-title">
      {/* Ouverture plein cadre */}
      <div className="cover">
        <Parallax strength={0.06} className="cover__media">
          <Photo
            name="team-studio"
            alt="Huit coureurs de l'équipe cycliste SMAL & CO alignés en maillot violet, sous un éclairage violet"
            sizes="100vw"
          />
        </Parallax>
        <div className="cover__scrim" />
        <div className="cover__content wrap">
          <p className="eyebrow" data-reveal>
            {cyclisme.eyebrow}
          </p>
          <h2 id="cyclisme-title" className="display" data-reveal="title">
            <span>{cyclisme.title}</span>
          </h2>
        </div>
      </div>

      <div className="wrap section-tight">
        <p className="lead cyclisme__lead" data-reveal>
          {cyclisme.lead}
        </p>
        <dl className="figures" data-stagger>
          {cyclisme.stats.map((s) => (
            <div key={s.value} className="figure">
              <dt className="figure__label">{s.label}</dt>
              <dd className="figure__value">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <HorizontalGallery
        label="Galerie de l'équipe cycliste, faites défiler horizontalement"
        heading={
          <p className="hgallery__title">
            <span className="eyebrow">Galerie</span>
            {cyclisme.galleryTitle}
          </p>
        }
      >
        {gallery.map((g) => (
          <figure key={g.name} className={`shot ${g.wide ? 'shot--wide' : ''}`}>
            <Photo name={g.name} alt={g.alt} sizes="(min-width: 900px) 46vw, 82vw" />
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </HorizontalGallery>

      {/* Hobby Cycles : le modèle de partenariat */}
      <div className="wrap section hobby" aria-labelledby="hobby-title">
        <figure className="hobby__media" data-reveal="mask">
          <Photo
            name="hobby"
            alt="Un groupe d'une trentaine de cyclistes rassemblés devant le magasin Hobby Cycles à Brest avant une social ride"
            sizes="(min-width: 900px) 45vw, 92vw"
          />
          <figcaption>Départ d’une social ride, devant Hobby Cycles</figcaption>
        </figure>
        <div className="hobby__text">
          <p className="eyebrow" data-reveal>
            {hobby.eyebrow}
          </p>
          <h3 id="hobby-title" className="h2" data-reveal="title">
            <span>{hobby.title}</span>
          </h3>
          <ul className="checklist" data-stagger>
            {hobby.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <blockquote className="callout" data-reveal>
            {hobby.model}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
