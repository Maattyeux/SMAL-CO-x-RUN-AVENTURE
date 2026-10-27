import { Nav } from './components/Nav';
import { useReveal } from './hooks/useReveal';
import { Ambitions } from './sections/Ambitions';
import { Benefices, Fonctionnement } from './sections/Benefices';
import { Contact } from './sections/Contact';
import { Cyclisme } from './sections/Cyclisme';
import { Effectif } from './sections/Effectif';
import { Hero } from './sections/Hero';
import { Identite } from './sections/Identite';
import { Partenariat } from './sections/Partenariat';
import { Preuves } from './sections/Preuves';
import { Running } from './sections/Running';
import { Team } from './sections/Team';

/**
 * Parcours narratif :
 * identité → cyclisme (socle) → preuves → running/trail (ambition)
 * → Team 2026/2027 (le projet, le sponsor titre) → effectif → vision → les 3 axes → bénéfices → fonctionnement → contact.
 */
export function App() {
  useReveal();

  return (
    <>
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      <Nav />
      <main id="contenu">
        <Hero />
        <Identite />
        <Cyclisme />
        <Preuves />
        <Running />
        <Team />
        <Effectif />
        <Ambitions />
        <Partenariat />
        <Benefices />
        <Fonctionnement />
        <Contact />
      </main>
    </>
  );
}
