import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import generalized from "../../assets/generalized.png";
import scribeOs from "../../assets/scribeOs.png";
import depth from "../../assets/depth.png";
import lifeOrg from "../../assets/lifeOrg.png";
import nhealth from "../../assets/nhealth.png";
import research3 from "../../assets/research3.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Products</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={generalized}
          link="https://generalized.xyz/"
          h3="Generalized AI"
          p1="AI platform that generates structured, multi-module courses and audio-books from user prompts."
        />
        <ProjectCard
          src={scribeOs}
          link="https://scribeos.xyz/"
          h3="Scribe OS"
          p1="Scalable Transcription and Translation platform converting speech and digital activity into searchable, structured text knowledge."
        />
        <ProjectCard
          src={depth}
          link="https://depth.systems/"
          h3="Depth Systems"
          p1="AI-powered deep research platform for academics, professionals, and lifelong learners, offering comprehensive insights and analysis across various domains."
        />
        <ProjectCard
          src={lifeOrg}
          link="https://lifeorg.ai/"
          h3="LifeOrg"
          p1="AI-powered multi-agentic life management platform that organizes and optimizes user's nutrition through intelligent inputs and Voice conversations."
        />
        <ProjectCard
          src={nhealth}
          link="https://app.nhealth.ai/"
          h3="NHealth"
          p1="Health management platform with multiple ai-agents that provide personalized insights and recommendations for users to optimize their well-being and to manage chronic conditions effectively."
        />
        <ProjectCard
          src={research3}
          link="https://www.research3.ai/"
          h3="Research3"
          p1="Academic research assistant platform that uses AI to help researchers find relevant papers, generate summaries, and create structured notes for efficient knowledge management."
        />
      </div>
    </section>
  );
}

export default Projects;
