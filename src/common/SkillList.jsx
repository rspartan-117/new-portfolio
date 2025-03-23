function SkillList({ src, skill }) {
  return (
    <span>
      {src && <img src={src} alt="Checkmark icon" />}
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
