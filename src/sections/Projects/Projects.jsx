import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

import vr from '../../assets/Vr.webp';
import shoe from '../../assets/shoe.webp';
import ProjectCard from '../../common/ProjectCard';
import weather from '../../assets/weather.webp';
import Dashboard from '../../assets/Dashboard.webp';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://capable-donut-8b0645.netlify.app/"
          h3="Viberr"
          p1="Video Streaming App"
          p2="React, Material UI, TailwindCSS"
        />
        <ProjectCard
          src={weather}
          link="https://weather-nextjs-typescript.netlify.app/"
          h3="WeatherWise"
          p1="Weather App"
          p2="Nextjs, Typescript, TailwindCSS"

        />
         <ProjectCard
          src={Dashboard}
          link="https://admin-dashboard-nextjs-typescript.netlify.app/"
          h3="Dashboard"
          p1="Admin Dashboard"
          p2="Nextjs, Shadcn, Typescript"
        />
        <ProjectCard
          src={vr}
          link="https://virtual-reality-website-react.netlify.app"
          h3="Vr Website"
          p1="Modern Landing Page"
          p2="React, Typescript, TailwindCSS"
        />
        <ProjectCard
          src={shoe}
          link="https://nike-dashboard-page.netlify.app"
          h3="Hipsster"
          p1="Shoes Website"
          p2="React, TailwindCSS"
        />
      </div>
    </section>
  );
}

export default Projects;
