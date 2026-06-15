import React from "react";
import "./App.css";

const projects = [
  {
    title: "Gamified EdTech Platform for Somaiya",
    description: `
    An educational platform that converts university syllabus topics into interactive learning experiences. It contains module-wise simulations, videos, infographics, mind maps, and learning resources to help students understand concepts visually instead of only reading theory.
    `,
    features: [
      "Module-wise organization of content",
      "Interactive simulations for every module and subtopic",
      "Videos, infographics, and mind maps",
      "Redirection from a central simulations hub",
      "Modern UI focused on student learning",
      "Responsive design",
      "Educational visualization approach"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
    featured: true,
    status: "Currently Building 🚀"
  },
  {
    title: "Lotus Cars – Car Dealership Website",
    description: `
    Developed a premium car dealership website with category filtering, dynamic car pages, and a test drive booking system.
    
    Each car has a detailed page with specifications like engine, performance, and features.
    Implemented a modal-based booking system with validation.
    `,
    features: [
      "Category filtering (Sport, Luxury, Mid)",
      "Dynamic car detail pages",
      "Detailed specifications",
      "Test drive booking system",
      "Responsive premium UI"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed"
  },
  {
    title: "Netflix Clone",
    description: `
    Built a responsive Netflix homepage clone using frontend technologies.
    
    Demonstrates structuring content, semantic HTML, and custom styling with pure CSS.
    `,
    features: [
      "Semantic HTML5 structure",
      "Custom CSS styling and layout",
      "Responsive layout for all screen sizes",
      "Hover animations and smooth transitions"
    ],
    tech: ["HTML", "CSS"],
    status: "Completed"
  },
  {
    title: "Todo List App (React)",
    description: `
    Created a task management application using React where users can add and delete tasks dynamically.
    
    Demonstrates use of state management and event handling.
    `,
    features: [
      "Add and delete tasks",
      "Real-time UI updates",
      "React state management",
      "Simple clean UI"
    ],
    tech: ["React", "JavaScript", "CSS"],
    status: "Completed"
  },
  {
    title: "Arithmetic Coding Solver",
    description: `
    Developed an interactive web-based application to demonstrate the concept of Arithmetic Coding used in data compression.
    
    The system allows users to input symbols along with their probabilities and performs both encoding and decoding processes.
    It dynamically calculates ranges, intervals, and final encoded values step-by-step.
    `,
    features: [
      "Step-by-step encoding and decoding",
      "Dynamic probability interval calculation",
      "User input-based processing",
      "Visualization of compression technique"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed"
  }
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "C", "AutoCAD"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "Currently Learning",
    skills: ["Node.js", "Express.js", "MongoDB", "Full Stack Development"],
    isLearning: true
  }
];

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Jainam Davda</h1>
        <p>Full Stack Developer | BTech IT (AI Honors)</p>

        <div className="hero-links">
          <a href="https://github.com/jainamdavda1-pixel" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/jainam-davda-a9589a328/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a BTech IT student with a strong interest in web development and problem solving.
          I enjoy building interactive applications and learning modern technologies like React and databases.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`skill-card ${category.isLearning ? 'currently-learning' : ''}`}
            >
              <h3>{category.title}</h3>
              <div className="skill-pills">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="current-focus">
        <div className="current-focus-header">
          <span className="current-focus-badge">
            <span className="pulse-dot"></span>
            What I'm Currently Working On
          </span>
        </div>
        <p>
          Building an EdTech platform that transforms academic syllabus topics into interactive simulations and visual learning experiences. Exploring full-stack development with Node.js, Express.js, React, and modern web technologies.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        <div className="projects-list">
          {projects.map((proj, index) => (
            <div className="project" key={index}>
              <div className="project-header">
                <h3>{proj.title}</h3>
                <div className="badge-group">
                  {proj.featured && <span className="badge badge-featured">Featured</span>}
                  {proj.status && (
                    <span 
                      className={`badge ${
                        proj.status.includes("Building") 
                          ? "badge-building" 
                          : proj.status === "Ongoing" 
                          ? "badge-ongoing" 
                          : "badge-new"
                      }`}
                    >
                      {proj.status}
                    </span>
                  )}
                </div>
              </div>

              <p className="project-description" style={{ whiteSpace: "pre-line" }}>
                {proj.description.trim()}
              </p>

              <h4>Key Features:</h4>
              <ul>
                {proj.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="tech-tags">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <div className="contact-list">
          <p className="contact-item">
            <strong>Email:</strong> 
            <a href="mailto:jainamdavda1@gmail.com">jainamdavda1@gmail.com</a>
          </p>
          <p className="contact-item">
            <strong>Phone:</strong> 
            <span>+91-9321547081</span>
          </p>
          <p className="contact-item">
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/jainamdavda1-pixel" target="_blank" rel="noreferrer">
              github.com/jainamdavda1-pixel
            </a>
          </p>
          <p className="contact-item">
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/jainam-davda-a9589a328/" target="_blank" rel="noreferrer">
              linkedin.com/in/jainam-davda-a9589a328/
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;