import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      
   
      <section className="hero">
        <h1>Jainam Davda</h1>
        <p>Full Stack Developer | BTech IT (AI Honors)</p>
        <a href="https://github.com/jainamdavda1-pixel" target="_blank" rel="noreferrer">
          View GitHub
        </a>
      </section>


      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a BTech IT student with a strong interest in web development and problem solving.
          I enjoy building interactive applications and learning modern technologies like React and databases.
        </p>
      </section>

   
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>Java</span>
          <span>Python</span>
          <span>C</span>
          <span>AutoCAD</span>
        </div>
      </section>

   
      <section className="section">
        <h2>Projects</h2>

        <div className="project">
          <h3>Arithmetic Coding Solver</h3>
          <p>
            Built an interactive web app that demonstrates encoding and decoding using arithmetic coding.
            Displays step-by-step calculations for better understanding.
          </p>
        </div>

        <div className="project">
          <h3>Lotus Cars-Fictional Car Dealership Website</h3>
          <p>
            Developed a responsive website for a fictional car dealership using HTML, CSS, and JavaScript.
            Implemented features like car listing, filtering, and user authentication.
          </p>
        </div>

      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: jainamdavda1@gmail.com</p>
        <p>Phone: +91-9321547081</p>
      </section>

    </div>
  );
}

export default App;