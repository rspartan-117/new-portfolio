import styles from './ExperienceStyles.module.css';
import SkillList from '../../common/SkillList';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
import { FiExternalLink } from "react-icons/fi";
import fms from '../../assets/fms.png';
import lifeOrg from '../../assets/lifeOrg.png';





function Experience() {
   const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  

  return (
    <section id="experience" className={styles.container} style={{
      padding: '0 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 className="sectionTitle">Work {"\u00A0"} Experience</h1>
     
     
     <h2 className="sectionTitleExp">Full Stack Engineer - ShortCastle Tech</h2>
     <hr />
     <h2 className="sectionTitleExpsub">Product - FedChess
     <a href="https://fms.chesslang.com/login" target="_blank" rel="noopener noreferrer">
     <FiExternalLink style={{ marginLeft: "8px", color:"white"}} />
     </a>
     </h2>
   
     <div style={{ 
       display: 'flex', 
       justifyContent: 'center', 
       marginBottom: '20px',
       padding: '0 10px'
     }}>
       <div style={{ 
         width: '100%',
         maxWidth: '450px'
       }}>
         <a href="https://fms.chesslang.com/login" target="_blank" rel="noopener noreferrer">
           <img 
             src={fms} 
             alt="FedChess Product" 
             style={{ 
               width: '100%', 
               height: 'auto',
               minHeight: '200px',
               maxHeight: '300px',
               objectFit: 'cover',
               display: 'block',
               borderRadius: '8px'
             }} 
           />
         </a>
       </div>
     </div>
     
     <div className='sectionTitleExpdesc'>Built and scaled a Chess federation/Club Management platform from scratch used by thousands of users across multiple organisations worldwide</div> <br/>
     <div className='sectionTitleExpdesc'> Added admin panels, Multiple Payment gateways, Dynamic forms and Role Base Access Systems.</div>
     <br/>
     <div className='sectionTitleExpdesc'>Merged around 150+ commits in one month.</div>
     <hr />
      <h2 className="sectionTitleExpsub">Tech Stack : </h2>
      <div className={styles.skillList} style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '100%',
        padding: '0 10px'
      }}>
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
    
     <div style={{ 
       display: 'flex', 
       justifyContent: 'center', 
       marginBottom: '20px',
       padding: '0 10px'
     }}>
       <div style={{ 
         width: '100%',
         maxWidth: '450px'
       }}>
         <a href="#" target="_blank" rel="noopener noreferrer">
           <img 
             src={lifeOrg} 
             alt="LifeOrg Product" 
             style={{ 
               width: '100%', 
               height: 'auto',
               minHeight: '200px',
               maxHeight: '300px',
               objectFit: 'cover',
               display: 'block',
               borderRadius: '8px'
             }} 
           />
         </a>
       </div>
     </div>
     
     <div className='sectionTitleExpdesc'>Developed a lifestyle platform with web3 wallet integrations</div> <br />
      <div className='sectionTitleExpdesc'>Created a scalable UI architecture using Next.js and styled components </div> <br />
       <div className='sectionTitleExpdesc'>Architected a maintainable and scalable API backend in NestJS </div>
     <br/>
    
     <hr />
      <h2 className="sectionTitleExpsub">Tech Stack : </h2>
      <div className={styles.skillList} style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '100%',
        padding: '0 10px'
      }}>
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
