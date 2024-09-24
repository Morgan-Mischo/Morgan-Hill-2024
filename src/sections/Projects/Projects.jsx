import React from "react";
import styles from "./ProjectsStyles.module.css";
import apple_clone from "../../assets/apple_clone.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Latest Project</h1>
      <div className={styles.projectsContainer}>
        <a href="https://flourishing-madeleine-346f0b.netlify.app/">
          <img className="hover" src={apple_clone} alt="Site Picture" />
        </a>
        <h3>Apple Clone</h3>
        <p>
          Clone of the Apple website using React, Tailwind, and GSap
          <a
            className="hover"
            style="text-decoration: underline"
            href="https://github.com/Morgan-Mischo/apple_site_clone"
          >
            Github Link
          </a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
