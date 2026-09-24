import { Folder, Star, GitFork, ArrowUpRight } from 'lucide-react';
import '../styles/Projects.css';

const projects = [
  {
    name: 'hr-dashboard',
    desc: 'Dashboard de recursos humanos con KPIs, gráficas interactivas, tabla con filtros y ordenamiento. Arquitectura por capas con custom hooks, tema MUI centralizado y utilidades de formato.',
    tags: ['React', 'MUI', 'Recharts', 'Vite'],
    stars: 67,
    forks: 5,
    url: 'https://monsegaona.github.io/dashboard-ui/',
  },
  {
    name: 'kanban-board',
    desc: 'Tablero Kanban con drag & drop entre columnas, modo claro/oscuro y CRUD completo de tareas.',
    tags: ['React', 'MUI', 'Tailwind'],
    stars: 22,
    forks: 4,
    url: 'https://monsegaona.github.io/kanban-board/',
  },
  {
    name: 'cactus',
    desc: 'Página web informativa sobre cactus con secciones de contenido, imágenes y datos curiosos. Diseño responsive construido con React y CSS, enfocado en la presentación visual.',
    tags: ['React', 'Vite', 'CSS'],
    stars: 33,
    forks: 17,
    url: 'https://monsegaona.github.io/Cactus-Website/',
  },
  {
    name: 'ui-showroom-tailwind',
    desc: 'Galería interactiva de componentes UI con tema claro/oscuro persistente y accesibilidad completa.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    stars: 10,
    forks: 4,
    url: 'https://monsegaona.github.io/ui-showroom/',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="projects__inner">
        <div className="projects__header">
          <div>
            <p className="section-eyebrow">TRABAJO</p>
            <h2 className="section-title">Proyectos destacados</h2>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="projects__github-link">
            Ver todos en GitHub →
          </a>
        </div>

        <div className="projects__list">
          {projects.map((p) => (
            <div key={p.name} className="project-item">
              <div className="project-item__left">
                <Folder size={18} color="var(--muted-fg)" strokeWidth={1.5} />
                <div>
                  <h3 className="project-item__name">{p.name}</h3>
                  <p className="project-item__desc">{p.desc}</p>
                  <div className="project-item__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="project-item__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-item__right">
                <span className="project-item__stat">
                  <Star size={14} strokeWidth={1.5} /> {p.stars}
                </span>
                <span className="project-item__stat">
                  <GitFork size={14} strokeWidth={1.5} /> {p.forks}
                </span>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-item__ext">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}