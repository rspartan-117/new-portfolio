import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

import vr from '../../assets/Vr.webp';
import shoe from '../../assets/shoe.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://capable-donut-8b0645.netlify.app/"
          h3="Viberr"
          p="Video Streaming App"
        />
        <ProjectCard
          src={vr}
          link="https://virtual-reality-website-react.netlify.app"
          h3="Vr Website"
          p="Virtual Reality build tools"
        />
        <ProjectCard
          src={shoe}
          link="https://nike-dashboard-page.netlify.app"
          h3="Hipsster"
          p="Shoes Website"
        />
       
      </div>
    </section>
  );
}

export default Projects;
