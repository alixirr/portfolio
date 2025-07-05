import React from "react";

const projects = [
  {
    title: "Game Development",
    description: "Coming soon ~ various games made with LOVE2D and GODOT game engines",
    link: "#",
  },
  {
    title: " Design",
    description: "Coming soon ~ editorial design for my high school's art magazine and miscellaneous media",
    link: "#",
  },
  {
    title: "Photography",
    description: "Coming soon ~ my best work shot on 35mm film",
    link: "#",
  },
];

function App() {
  return (
    <div style={{ fontFamily: "Outfit, sans-serif", maxWidth: 800, margin: "auto", padding: 20, backgroundColor: "f0efeb", color: "#634688" }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Ali Zaidi</h1>
        <p>Incoming CS student at UCI | Aspiring Product Designer</p>
        <nav style={{ marginTop: 10 }}>
          <a href="#projects" style={{ margin: "0 10px" }} className="rainbow-link">PROJECTS</a>
          <a href="#about" style={{ margin: "0 10px" }} className="rainbow-link">ABOUT</a>
          <a href="#contact" style={{ margin: "0 10px" }} className="rainbow-link">CONTACT</a>
        </nav>
      </header>

      <section id="projects">
        <h2>PROJECTS</h2>
        {projects.map((project, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section id="about">
        <h2>ABOUT</h2>
        <p>Hi! I am an incoming freshman at UC Irvine majoring in Computer Science, with interests in design and education. I’m currently exploring how human-computer interaction can bring these fields together to create accessible, aesthetically pleasing, and user-centered technologies.</p>
        <p>Note: This portfolio is currently a work in progress as of July 2025! I am working on designing this site and hosting my games online. Check back later for updates!</p>
      </section>

      <section id="contact" style={{ marginTop: 40 }}>
        <h2>CONTACT</h2>
        <p>Email: <a href="mailto:zaidia2@uci.edu" className="rainbow-link">zaidia2@uci.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ali-zaidi-profile/" target="_blank" rel="noreferrer" className="rainbow-link">linkedin.com/in/ali-zaidi-profile</a></p>
        <p>GitHub: <a href="https://github.com/alixirr" target="_blank" rel="noreferrer" className="rainbow-link">https://github.com/alixirr</a></p>
      </section>

      <footer style={{ textAlign: "center", marginTop: 50, fontSize: 12, color: "#555" }}>
        © 2025 Ali Zaidi
      </footer>
    </div>
  );
}

export default App;
