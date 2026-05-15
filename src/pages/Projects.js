import Navbar from '../Components/Navbar';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Fruit Shop",
    desc: "A modern e-commerce website for fresh fruits with a beautiful UI and smooth user experience.",
    tags: ["HTML", "CSS", "Bootstrap"],
    icon: "🍊"
  },
  {
    id: 2,
    title: "Clothes Shop",
    desc: "A stylish online clothing store with responsive design, product catalog and shopping features.",
    tags: ["HTML", "CSS", "Bootstrap"],
    icon: "👕"
  },
  {
    id: 3,
    title: "Pharmacy",
    desc: "A clean and professional pharmacy website with medicine listings and contact information.",
    tags: ["HTML", "CSS", "Bootstrap"],
    icon: "💊"
  }
];

function Projects() {
  return (
    <div>
      <Navbar />
      <section className="projects-section">
        <p className="section-label">Portfolio</p>
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-sub">Here are some of the projects I've built so far.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;