import '../styles/Skills.css';

const columns = [
  {
    title: 'Lenguajes',
    items: [
      'TypeScript · 3 años · tipado estricto y escalabilidad',
      'JavaScript · 5 años · lógica de negocio y DOM',
      'HTML & CSS · 5 años · estructura y estilos a medida',
    ],
  },
  {
    title: 'Frameworks / Librerías',
    items: [
      'React · UI componentizada en producción',
      'Tailwind CSS · estilos utilitarios y consistentes',
      'MUI · interfaces rápidas con design system',
    ],
  },
  {
    title: 'Herramientas',
    items: [
      'Git · control de versiones en equipo',
      'GitHub Actions · automatización y despliegue',
      'Figma · lectura de diseños e implementación',
    ],
  },
];

export default function Skills() {
  const maxRows = Math.max(...columns.map((col) => col.items.length));

  return (
    <section id="habilidades" className="skills">
      <div className="skills__inner">
        <p className="section-eyebrow">HABILIDADES</p>
        <h2 className="section-title">Stack técnico</h2>
        <p className="skills__subtitle">
          Tecnologías con las que he trabajado en entornos reales, con años de uso y contexto de aplicación.
        </p>
        <div className="skills__table">
          <div className="skills__row skills__row--head">
            {columns.map((col) => (
              <div key={col.title} className="skills__cell skills__cell--head">
                {col.title}
              </div>
            ))}
          </div>
          {Array.from({ length: maxRows }).map((_, rowIdx) => (
            <div key={rowIdx} className="skills__row">
              {columns.map((col) => (
                <div key={col.title} className="skills__cell">
                  {col.items[rowIdx] ?? ''}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="skills__mobile">
          {columns.map((col) => (
            <div key={col.title} className="skills__mobile-group">
              <h3 className="skills__mobile-title">{col.title}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item} className="skills__mobile-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}