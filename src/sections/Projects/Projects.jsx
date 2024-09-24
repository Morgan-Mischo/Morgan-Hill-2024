import React from "react";
import styles from "./ProjectsStyles.module.css";
import apple_clone from "../../assets/apple_clone.png";
import github_img from "../../assets/github.svg"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Latest Project</h1>
      <div className={styles.projectsContainer}>
        <a href="https://flourishing-madeleine-346f0b.netlify.app/">
          <img id ={styles.siteImg} className="hover" src={apple_clone} alt="Site Picture" />
        </a>

      </div>
      <div className={styles.container}>
      <h3>Apple Clone
      <a
            href="https://github.com/Morgan-Mischo/apple_site_clone"
          >
            <img id={styles.logo} className="hover" src={github_img} alt="Github Logo" />
          </a>
      </h3>
      <p>
          Clone of the Apple website using React, Tailwind, and GSap 

        </p>


      </div>
    </section>
  );
}

export default Projects;
