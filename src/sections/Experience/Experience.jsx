import styles from "./ExperienceStyles.module.css";
import SkillList from "../../common/SkillList";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";
import Projects from "../Projects/Projects";

function Experience() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section
      id="experience"
      className={styles.container}
      style={{
        padding: "0 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 className="sectionTitle">Work {"\u00A0"} Experience</h1>
      <h2 className="sectionTitleExp">Founding Full Stack Engineer - M0</h2>
      <h2 className="sectionTitleExpdesc">(June 2025 - Present)</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          padding: "0 10px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
          }}
        ></div>
      </div>
      <div className="sectionTitleExpdesc">
        Architected and led development of 5+ AI platforms with complex
        multi-agentic architectures and pipelines, RAG and microservices,
        including chatbots using agentic frameworks like Mastra, AI voice using
        deepgram and livekit, Ai Code generation using sandbox services like E2B
        and AI map rendering with modern web stacks (NestJS, Prisma, tRPC,
        Nextjs, Docker, Postgres, Redis etc.
      </div>{" "}
      <br />
      <div className="sectionTitleExpdesc">
        Designed and Integrated web3 Payment gateways like Loopcrypto, Atlos,
        X402 and Payment flows logic like Plans, Credit cutting, usage
        monitoring with Openmeter, access codes and gifting programmes with
        Enable3 for scalable and successful product launches.{" "}
      </div>{" "}
      <br />
      <div className="sectionTitleExpdesc">
        Integrated Web3 wallets like Metamask and Phantom with multiple chain
        options (Solana, Etherium)
      </div>{" "}
      <br />
      <div className="sectionTitleExpdesc">
        Collaborated with marketing, Design and Devops teams for rapid
        development cycles.
      </div>{" "}
      <hr />
      <h2 className="sectionTitleExpsub">Tech Stack : </h2>
      <div
        className={styles.skillList}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "100%",
          padding: "0 10px",
        }}
      >
        <SkillList src={checkMarkIcon} skill="Typescript" />
        <SkillList src={checkMarkIcon} skill="Nestjs" />
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="Mastra AI" />
        <SkillList src={checkMarkIcon} skill="RAG" />
        <SkillList src={checkMarkIcon} skill="Trpc" />
        <SkillList src={checkMarkIcon} skill="Postgres" />
        <SkillList src={checkMarkIcon} skill="Ethereum" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="AWS" />
      </div>
      <hr />
      <Projects />
      <hr />
      <h2 className="sectionTitleExp">
        Full Stack Engineer - ShortCastle Tech
      </h2>
      <h2 className="sectionTitleExpdesc">(October 2024 - June 2025)</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          padding: "0 10px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
          }}
        ></div>
      </div>
      <div className="sectionTitleExpdesc">
        Built and scaled a Chess federation/Club Management platform from
        scratch used by thousands of users across multiple organisations
        worldwide
      </div>{" "}
      <br />
      <div className="sectionTitleExpdesc">
        {" "}
        Added admin panels, Multiple Payment gateways, Dynamic forms and Role
        Base Access Systems.
      </div>
      <br />
      <div className="sectionTitleExpdesc">
        Built scalable backend services using NestJS and Golang, optimizing
        performance with caching strategies.
      </div>
      <hr />
      <h2 className="sectionTitleExpsub">Tech Stack : </h2>
      <div
        className={styles.skillList}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          maxWidth: "100%",
          padding: "0 10px",
        }}
      >
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="Typescript" />
        <SkillList src={checkMarkIcon} skill="Trpc" />
        <SkillList src={checkMarkIcon} skill="Nestjs" />
        <SkillList src={checkMarkIcon} skill="Prisma" />
        <SkillList src={checkMarkIcon} skill="Postgres" />
        <SkillList src={checkMarkIcon} skill="AWS" />
      </div>
      <hr />
    </section>
  );
}

export default Experience;
