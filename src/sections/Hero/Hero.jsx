import styles from "./HeroStyles.module.css";
import headshot from "../../assets/Default_cartoon_headshot_3.jpg";
import sun from "../../assets/sun.svg";
import linkedinicon from "../../assets/linkedin.svg";
import githubicon from "../../assets/github.svg";
import moon from "../../assets/moon.png";
import CV from "../../assets/Morgan Hill Resume 2024.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={headshot}
          className={styles.hero}
          alt="Profile picture of Morgan Hill"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Morgan
          <br />
          Hill
        </h1>
        <h2>Engineer | Developer</h2>
        <span>
          <a href="https://github.com/Morgan-Mischo" target="_blank">
            <img src={githubicon} alt="Github icon" className="svg"/>
          </a>
          <a href="https://www.linkedin.com/in/morgan-mischo/" target="_blank">
            <img src={linkedinicon} alt="Linkedin icon" className="svg"/>
          </a>
        </span>
        <p className={styles.description}>
          Skills including full-stack development, test automation, and project
          management.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
