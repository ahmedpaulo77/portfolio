import Navbar from '../Components/Navbar';
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-tag">👋 Available for work</div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ahmed</span><br />
          Frontend Developer
        </h1>
        <p className="hero-sub">
          I build beautiful, fast, and user-friendly web experiences.<br />
          Passionate about React and modern web technologies.
        </p>
        <div className="hero-btns">
          <a href="/projects" className="btn-primary">View My Work</a>
          <a href="/contact" className="btn-outline">Get In Touch</a>
        </div>
        <div className="hero-skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>React</span>
          <span>JavaScript</span>
        </div>
      </section>

      <section className="about-section">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2>Crafting digital experiences with code</h2>
            <p className="about-desc">
              I'm a frontend developer focused on building clean, responsive, and 
              interactive web applications. I love turning ideas into reality through 
              the power of modern web technologies.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Projects Built</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Dedication</p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="code-block">
              <div className="code-dots">
                <span></span><span></span><span></span>
              </div>
              <pre>{`const ahmed = {
  role: "Frontend Developer",
  skills: ["HTML", "CSS", 
           "Bootstrap", "React"],
  projects: [
    "Fruit Shop",
    "Clothes Shop",
    "Pharmacy"
  ],
  goal: "Build amazing UIs 🚀"
}`}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;