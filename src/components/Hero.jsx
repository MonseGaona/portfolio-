import '../styles/Hero.css';
import cv from '../assets/cv.pdf';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__badge">
          <span className="hero__dot" /> Disponible para proyectos
        </p>
        <h1 className="hero__title">
          Hola, soy <br />
          <span className="hero__name">Guadalupe Gaona</span>
        </h1>
        <p className="hero__desc">
          Frontend Developer · Construyo interfaces elegantes, accesibles y rápidas.
          Apasionada por el diseño de sistemas y la experiencia de usuario.
        </p>
        <div className="hero__actions">
          <button className="hero__btn-primary" onClick={() => scrollTo('proyectos')}>
            Ver proyectos
          </button>
          <a className="hero__btn-secondary" href={cv} download="CV-Guadalupe-Gaona.pdf">
            Descargar CV
          </a>
        </div>
      </div>

      <div className="hero__illustration" aria-hidden="true">
        <div className="hero__circle-outer" />
        <div className="hero__circle-inner" />
        <div className="hero__accent-circle" />
        <div className="hero__shape-hex" />
        <div className="hero__shape-diamond" />
        <div className="hero__dots">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="hero__dot-grid" />
          ))}
        </div>
        <div className="hero__cross">+</div>
      </div>
    </section>
  );
}