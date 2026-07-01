import { MapPin, GraduationCap, Briefcase, Languages } from 'lucide-react';
import '../styles/About.css';

const cards = [
  { icon: MapPin,        text: 'Asunción, Paraguay' },
  { icon: GraduationCap, text: 'Lic. en Ciencias de la Computación' },
  { icon: Briefcase,     text: '5 años de experiencia' },
  { icon: Languages,     text: 'Español · Inglés (B1)' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about__inner">
        <div className="about__text">
          <p className="section-eyebrow">SOBRE MÍ</p>
          <h2 className="section-title">Un poco de mi historia</h2>
          <p className="about__para">
            Soy desarrolladora frontend con enfoque en construir productos digitales bien pensados.
            Me interesa el espacio entre código y diseño: la accesibilidad, la performance y los
            sistemas de diseño escalables.
          </p>
          <p className="about__para">
            Actualmente trabajo de forma freelance y colaboro con equipos de producto en etapas
            tempranas. Disfruto trabajar con personas que se preocupan por los detalles.
          </p>
        </div>

        <div className="about__cards">
          {cards.map(({ icon: Icon, text }) => (
            <div key={text} className="about__card">
              <Icon size={18} color="var(--primary)" strokeWidth={1.8} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}