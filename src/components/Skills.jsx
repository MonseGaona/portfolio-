import '../styles/Skills.css';

const columns = [
  {
    title: 'Lenguajes',
    items: [
      { name: 'JavaScript', detail: 'Desarrollo web' },
    ],
  },
  {
    title: 'Frameworks / Librerías',
    items: [
      { name: 'React', detail: 'desarrollo de interfaces dinámica' },
      { name: 'Tailwind CSS', detail: 'estilos rápidos y responsivos' },
      { name: 'MUI', detail: 'componentes reutilizables para interfaces' },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git', detail: 'control de versiones' },
      { name: 'GitHub', detail: 'trabajo con repositorios y ramas' },
      { name: 'Postman', detail: 'pruebas de APIs' },
      { name: 'Figma', detail: 'implementación de diseños' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="skills">
      <div className="skills__inner">
        <p className="section-eyebrow">HABILIDADES</p>
        <h2 className="section-title">Stack técnico</h2>
        <p className="skills__subtitle">
          Herramientas y tecnologías con las que he trabajado.
        </p>

        <div className="skills__grid">
          {columns.map((col) => (
            <div key={col.title} className="skills__card">
              <h3 className="skills__card-title">{col.title}</h3>
              <ul className="skills__list">
                {col.items.map((item) => (
                  <li key={item.name} className="skills__item">
                    <span className="skills__name">{item.name}</span>
                    <span className="skills__detail">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}