import styles from "./HeroStyles.module.css";
import headshot from "../../assets/Default_cartoon_headshot_3.jpg";
import themeIcon from "../../assets/sun.svg";
import githubicon from "../../assets/github.svg";
import linkedinicon from "../../assets/linkedin.svg";
import CV from "../../assets/Morgan Hill Resume 2024.pdf"; 

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={headshot}
          alt="Cartoon headshot of Morgan Hill"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Morgan
          <br />
          Hill
        </h1>
        <h2>Programmer</h2>
        <span>
          <a href="https://github.com/Morgan-Mischo" target="_blank">
            <img src={githubicon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/morgan-mischo/" target="_blank">
            <img src={linkedinicon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p>
          I'm an engineer with a Bachelor's degree in Computer Science and five
          years of experience. I enjoy building reliable and scalable
          applications and have led several successful projects. My skills
          include full-stack development, test automation, and project
          management. I'm committed to learning and improving with each new
          challenge.
        </p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
