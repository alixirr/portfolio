import React from "react";

const projects = [
  {
    title: "Game Dev Project",
    description: "A game I developed using Unity and C#.",
    link: "#",
  },
  {
    title: "Graphic Design Work",
    description: "My high school graphic design portfolio.",
    link: "#",
  },
];

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 800, margin: "auto", padding: 20 }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Ali Zaidi</h1>
        <p>Incoming CS student at UCI | Product Design & Game Dev Portfolio</p>
        <nav style={{ marginTop: 10 }}>
          <a href="#projects" style={{ margin: "0 10px" }}>Projects</a>
          <a href="#contact" style={{ margin: "0 10px" }}>Contact</a>
        </nav>
      </header>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </section>

      <section id="contact" style={{ marginTop: 40 }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zaidia2@uci.edu">zaidia2@uci.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ali-zaidi-profile/" target="_blank" rel="noreferrer">linkedin.com/in/ali-zaidi-profile</a></p>
        <p>GitHub: <a href="https://github.com/yourgithubusername" target="_blank" rel="noreferrer">github.com/yourgithubusername</a></p>
      </section>

      <footer style={{ textAlign: "center", marginTop: 50, fontSize: 12, color: "#555" }}>
        © 2025 Ali Zaidi
      </footer>
    </div>
  );
}

export default App;
