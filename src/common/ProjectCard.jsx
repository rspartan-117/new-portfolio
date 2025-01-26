import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ src, link, h3, p1, p2 }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3 className="project-title">
        {h3}
        <FiExternalLink className="link-icon" style={{ marginLeft: "8px" }} />

      </h3>
      <p>{p1}</p>
      <p>{p2}</p>
    </a>
  );
}

export default ProjectCard;
