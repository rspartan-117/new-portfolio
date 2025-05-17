import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import ReactLogo from '../../assets/ReactLogo.png';
import TypeScriptLogo from '../../assets/TypeScriptLogo.png';
import FrontEndDevCertLogo from '../../assets/FrontEndDevCertLogo.png';





function Certifications() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Certifications</h1>
      <div className={styles.projectsContainer}>
        
        <ProjectCard
          src={ReactLogo}
          link="https://www.hackerrank.com/certificates/5d6716454798"
          h3="React"
          p1="HackerRank"
          p2=""
        /> 
        <ProjectCard
          src={TypeScriptLogo}
          link="https://drive.google.com/file/d/1-lBFPCDWWo-UxJV1DbYWBGxRC5r-b3fU/view?usp=sharing"
          h3="Typescript"
          p1="SimpliLearn"
          p2=""
        />
         <ProjectCard
          src={FrontEndDevCertLogo}
          link="https://drive.google.com/file/d/179oOqUYMQe1nn7c9mcZOGCqttGCucAsI/view?usp=sharing"
          h3="FrontEnd Development"
          p1="Coding Ninjas"
          p2=""
        />
      
      </div>
    </section>
  );
}

export default Certifications;
