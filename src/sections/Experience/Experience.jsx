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
     
     <h2 className="sectionTitleExp">Full Stack Engineer - ShortCastle Tech</h2>
     <hr />
     <h2 className="sectionTitleExpsub">Product - FedChess
     <a href="https://fms.chesslang.com/login" target="_blank" rel="noopener noreferrer">
     <FiExternalLink style={{ marginLeft: "8px", color:"white"}} />
     </a>
     </h2>
    
     
     <div className='sectionTitleExpdesc'>Built a Chess federation/Club Management platform from scratch.</div> <br/>
     <div className='sectionTitleExpdesc'> Added admin panels, Payment gateways, Dynamic forms and Role Base Access Systems.</div>
     <br/>
     <div className='sectionTitleExpdesc'>Merged around 150+ commits in one month.</div>
     <hr />
      <h2 className="sectionTitleExpsub">Tech Stack : </h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="Typescript" />
        <SkillList src={checkMarkIcon} skill="Trpc" />
         <SkillList src={checkMarkIcon} skill="Prisma" />
         <SkillList src={checkMarkIcon} skill="Postgres" />
        <SkillList src={checkMarkIcon} skill="Zod" />
        <SkillList src={checkMarkIcon} skill="React-Hook-Form" />
        <SkillList src={checkMarkIcon} skill="Next-Auth" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        
      </div>
      <hr />
       <hr />
       <h2 className="sectionTitleExp">Full Stack Engineer (Web2 + Web3) - M0</h2>
     <hr />
     <h2 className="sectionTitleExpsub">Product - LifeOrg
     </h2>
    
     
     <div className='sectionTitleExpdesc'>Developed a lifestyle platform with web3 wallet integrations</div> <br />
      <div className='sectionTitleExpdesc'>Created a scalable UI architecture using Next.js and styled components </div> <br />
       <div className='sectionTitleExpdesc'>Architected a maintainable and scalable API backend in NestJS </div>
     <br/>
    
     <hr />
      <h2 className="sectionTitleExpsub">Tech Stack : </h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="Typescript" />
        <SkillList src={checkMarkIcon} skill="Nestjs" />
         <SkillList src={checkMarkIcon} skill="Prisma" />
         <SkillList src={checkMarkIcon} skill="Postgres" />
        <SkillList src={checkMarkIcon} skill="Zod" />
        <SkillList src={checkMarkIcon} skill="Blockchain" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        
      </div>
      <hr />
    
  
    
    </section>
  );
}

export default Experience;
