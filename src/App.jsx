import React from "react";
import "./App.css";

const projects = [
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
  },

  {
    title: "Netflix Clone (React)",
    description: `
    Built a Netflix-inspired web application using React with dynamic movie data fetched from APIs.
    
    The UI includes categorized rows like trending and top-rated with reusable components.
    `,
    features: [
      "API-based movie fetching",
      "Category rows (Trending, Top Rated)",
      "Reusable React components",
      "Responsive UI"
    ],
    tech: ["React", "JavaScript", "CSS"],
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
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
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
        <div className="skills">
          {[
            "HTML", "CSS", "JavaScript", "React",
            "MongoDB", "PostgreSQL",
            "Java", "Python", "C", "AutoCAD"
          ].map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>

        {projects.map((proj, index) => (
          <div className="project" key={index}>
            <h3>{proj.title}</h3>

            <p style={{ whiteSpace: "pre-line" }}>
              {proj.description}
            </p>

            <h4>Key Features:</h4>
            <ul>
              {proj.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="tech">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p><strong>Email:</strong> jainamdavda1@gmail.com</p>
        <p><strong>Phone:</strong> +91-9321547081</p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/jainamdavda1-pixel" target="_blank" rel="noreferrer">
            github.com/jainamdavda1-pixel
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://linkedin.com/in/jainam-davda-a9589a328/" target="_blank" rel="noreferrer">
            linkedin.com/in/jainam-davda-a9589a328/
          </a>
        </p>
      </section>

    </div>
  );
}

export default App;