import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">gg.</span>

        <nav className="header__nav">
          <button onClick={() => scrollTo('proyectos')}>Proyectos</button>
          <button onClick={() => scrollTo('sobre-mi')}>Sobre mí</button>
          <button onClick={() => scrollTo('habilidades')}>Habilidades</button>
          <button className="header__cta" onClick={() => scrollTo('footer')}>
            Contacto
          </button>
        </nav>

        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="header__mobile-menu">
          <button onClick={() => scrollTo('proyectos')}>Proyectos</button>
          <button onClick={() => scrollTo('sobre-mi')}>Sobre mí</button>
          <button onClick={() => scrollTo('habilidades')}>Habilidades</button>
          <button className="header__cta-mobile" onClick={() => scrollTo('footer')}>
            Contacto
          </button>
        </div>
      )}
    </header>
  );
}