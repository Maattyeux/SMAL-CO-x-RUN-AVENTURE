import { Nav } from './components/Nav';
import { useReveal } from './hooks/useReveal';
import { Ambitions } from './sections/Ambitions';
import { Contact } from './sections/Contact';
import { Cyclisme } from './sections/Cyclisme';
import { Hero } from './sections/Hero';
import { Histoire } from './sections/Histoire';
import { Proposition } from './sections/Proposition';
import { Team } from './sections/Team';
import { Valeurs } from './sections/Valeurs';

/**
 * Récit en trois temps, puis la proposition :
 * histoire → cyclisme (la preuve) → TEAM 2027 et ses ambitions → valeurs partagées
 * avec Run Aventure → sponsor titre → contact.
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
        <Histoire />
        <Cyclisme />
        <Team />
        <Ambitions />
        <Valeurs />
        <Proposition />
        <Contact />
      </main>
    </>
  );
}
