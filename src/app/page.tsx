import Profile from "@/components/Profile";
import SocialButtons from "@/components/SocialButtons";
import LinkCard from "@/components/LinkCard";
import ProjectCard from "@/components/ProjectCard";
import { socialLinks, mainLinks, projectLinks } from "@/data/links";

export default function Home() {
  return (
    <div className="container">
      <div className="main-card">
        <Profile />

        <SocialButtons socialLinks={socialLinks} />

        <div
          className="main-links"
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          {mainLinks.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </div>

        <div style={{ margin: "32px 0 24px" }}>
          <hr
            style={{
              border: "none",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(128, 32, 56, 0.3), transparent)",
              margin: "0",
            }}
          />
        </div>

        <div className="project-links">
          {projectLinks.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
