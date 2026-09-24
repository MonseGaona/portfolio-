import { MapPin, GraduationCap, Briefcase, Languages } from 'lucide-react';
import '../styles/About.css';

const cards = [
  { icon: MapPin,        text: 'Asunción, Paraguay' },
  { icon: GraduationCap, text: 'Lic. en Análisis de Sistemas' },
  { icon: Briefcase,     text: 'Desarrollo de interfaces web' },
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
            Hola, soy Guadalupe, desarrolladora frontend. Me gusta convertir conceptos en interfaces intuitivas y siempre estoy aprendiendo para crear mejores experiencias de usuario.
          </p>
          <p className="about__para">
            Tengo interés en el diseño de interfaces, la accesibilidad y el código limpio. Me gusta pensar cada proyecto desde la estructura y cuidar los pequeños detalles.
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