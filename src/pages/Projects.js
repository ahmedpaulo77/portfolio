import Navbar from '../Components/Navbar';
import './Projects.css';
import clothesImg from '../images/fashion.png';
import pharmacyImg from '../images/screencapture-file-C-Users-elwady-Desktop-all-sydlya-phar-html-2026-04-25-08_24_03.png';
import fruitImg from '../images/screencapture-file-C-Users-elwady-Desktop-all-fruiittt-boot-html-2026-04-25-08_22_37.png';

const projects = [
  {
    id: 1,
    title: "Fruit Shop",
    desc: "A modern e-commerce website for fresh fruits with a beautiful UI and smooth user experience.",
    tags: ["HTML", "CSS", "Bootstrap"],
    img: fruitImg,
    link: ""
  },
  {
    id: 2,
    title: "Clothes Shop",
    desc: "A stylish online clothing store with responsive design, product catalog and shopping features.",
    tags: ["HTML", "CSS", "Bootstrap"],
    img: clothesImg,
    link: "https://peaceful-toffee-fe0288.netlify.app/"
  },
  {
    id: 3,
    title: "Pharmacy",
    desc: "A clean and professional pharmacy website with medicine listings and contact information.",
    tags: ["HTML", "CSS", "Bootstrap"],
    img: pharmacyImg,
    link: ""
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
              <img src={project.img} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.link && (
<a href={project.link} target="_blank" rel="noreferrer" className="live-btn">                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;