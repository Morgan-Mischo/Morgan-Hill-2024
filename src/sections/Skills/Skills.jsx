import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/check.svg'; 
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="Python" />
        <SkillList skill="JavaScript" />
        <SkillList skill="Java" />
        <SkillList skill="Swift" />
        <SkillList skill="Node.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Full-Stack Development" />
        <SkillList skill="Front-End Development" />
        <SkillList skill="Back-End Development" />
        <SkillList skill="React.js" />
        <SkillList skill="Git" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="SQL" />
        <SkillList skill="Data Structures" />
        <SkillList skill="Algorithms" />
        <SkillList skill="Object-Oriented Programming" />
        <SkillList skill="iOS Development" />
      </div>
    </section>
  );
}

export default Skills;