import manifest from '../data/image-manifest.json';

export type PhotoName = keyof typeof manifest;

interface PhotoProps {
  name: PhotoName;
  alt: string;
  /** Attribut `sizes` : quelle largeur l'image occupe à l'écran. */
  sizes?: string;
  /** Image visible au premier écran : chargement prioritaire. */
  priority?: boolean;
  className?: string;
  /** Point focal pour object-fit: cover, ex. "50% 30%". */
  focus?: string;
}

/**
 * Image responsive (WebP, deux largeurs) avec dimensions réelles
 * pour réserver l'espace et éviter tout décalage de mise en page.
 */
export function Photo({ name, alt, sizes = '100vw', priority = false, className, focus }: PhotoProps) {
  const img = manifest[name];
  const variants = img.variants;
  const srcSet = variants.map((v) => `${v.file} ${v.w}w`).join(', ');
  const fallback = variants[variants.length - 1].file;

  return (
    <img
      className={className}
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      width={img.w}
      height={img.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      style={focus ? { objectPosition: focus } : undefined}
    />
  );
}
