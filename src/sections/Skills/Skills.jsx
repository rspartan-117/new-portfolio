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
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Golang" />
        <SkillList src={checkMarkIcon} skill="REST/GraphQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Nodejs" />
        <SkillList src={checkMarkIcon} skill="Nestjs" />
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="SpringBoot" />
        
        
      </div>
      <hr />
      <div className={styles.skillList}> 
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="mongodb" />
        <SkillList src={checkMarkIcon} skill="Redis" />
        <SkillList src={checkMarkIcon} skill="Prisma" />
        
      </div>
      <hr />
       <div className={styles.skillList}>
         <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Kafka" />
        <SkillList src={checkMarkIcon} skill="Github Actions" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Mastra Ai" />
        <SkillList src={checkMarkIcon} skill="Sandboxes" />
        <SkillList src={checkMarkIcon} skill="LLM integrations" />
        <SkillList src={checkMarkIcon} skill="RAG" />
        <SkillList src={checkMarkIcon} skill="Ethereum/Solana" />
      
        
      </div>
      <hr />
    </section>
  );
}

export default Skills;
