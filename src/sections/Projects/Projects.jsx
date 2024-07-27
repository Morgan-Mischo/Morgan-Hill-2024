import React from "react";
import styles from "./ProjectsStyles.module.css";
import sickTogether from "../../assets/Sick Together.jpeg";
import fitbook from "../../assets/Fitbook.jpeg"; 
import wtfeat from "../../assets/WTF Should I Eat.png"; 

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/Morgan-Mischo/personal/tree/master">
          <img
            className="hover"
            src={fitbook}
            alt="Fitbook Picture"
          />
          <h3>Fitbook</h3>
          <p>Fitness Social Media</p>
        </a>
        <a href="https://github.com/sick-together/sick-together">
          <img
            className="hover"
            src={sickTogether}
            alt="Sick Together Picture"
          />
          <h3>Sick Together</h3>
          <p>Chatroom for Hospital Patients</p>
        </a>
        <a href="https://github.com/cowancs4760spring23/group3/tree/main/Ios">
          <img
            className="hover"
            src={wtfeat}
            alt="WTF Should I Eat? Picture"
          />
          <h3>WTF Should I Eat?</h3>
          <p>Recipe iOS App</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
