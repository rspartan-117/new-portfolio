import styles from './ExperienceStyles.module.css';
import SkillList from '../../common/SkillList';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
import { FiExternalLink } from "react-icons/fi";


function Experience() {
   const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Work Experience</h1>
     
     <h2 className="sectionTitleExp">Full Stack Developer - ShortCastle</h2>
     <h2 className="sectionTitleExp">(January 2025 - Present)</h2>
     <hr />
     <h2 className="sectionTitleExpsub">FedChess
     <a href="https://fms.chesslang.com/login" target="_blank" rel="noopener noreferrer">
     <FiExternalLink style={{ marginLeft: "8px", color:"white"}} />
     </a>
     </h2>
    
     
     <div className='sectionTitleExpdesc'>Developed a Chess federation/Club Management platform from scratch with admin panels and Role Base Access Systems</div>
     <div className='sectionTitleExpdesc'>Merged around 60 contributions in one month</div>
     <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="Typescript" />
        <SkillList src={checkMarkIcon} skill="Trpc" />
        <SkillList src={checkMarkIcon} skill="Zod" />
        <SkillList src={checkMarkIcon} skill="React-Hook-Form" />
        <SkillList src={checkMarkIcon} skill="Shadcn" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        
      </div>
      <hr />
    
  
    
    </section>
  );
}

export default Experience;
