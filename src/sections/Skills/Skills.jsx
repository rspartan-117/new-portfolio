import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Nodejs" />
        <SkillList src={checkMarkIcon} skill="Golang" />
        <SkillList src={checkMarkIcon} skill="REST/GraphQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="Nestjs" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Trpc" />
        
      </div>
      <hr />
      <div className={styles.skillList}> 
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="mongodb" />
        <SkillList src={checkMarkIcon} skill="Prisma" />
        <SkillList src={checkMarkIcon} skill="Mongoose" />
      </div>
      <hr />
       <div className={styles.skillList}>
         <SkillList src={checkMarkIcon} skill="Redis" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Kafka" />
        <SkillList src={checkMarkIcon} skill="Next-Auth" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React-Hook-form" />
        <SkillList src={checkMarkIcon} skill="Zod" />
        <SkillList src={checkMarkIcon} skill="Tanstack Query" />
        <SkillList src={checkMarkIcon} skill="PWA" />
        <SkillList src={checkMarkIcon} skill="MicroFrontend" />
        
      </div>
      <hr />
    </section>
  );
}

export default Skills;
