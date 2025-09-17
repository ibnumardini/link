import { Link } from "@/data/links";
import { Icon } from "@/lib/icons";

interface ProjectCardProps {
  project: Link & { description?: string };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "14px 18px",
        margin: "10px 0",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        color: "#2d1b35",
        borderRadius: "12px",
        textDecoration: "none",
        transition: "all 0.2s ease",
        border: "1px solid rgba(128, 32, 56, 0.15)",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            backgroundColor: "#802038",
            color: "white",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {index + 1}
        </span>
        <Icon name={project.icon as any} size={18} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "600", marginBottom: "4px" }}>
          {project.title}
        </div>
        <div style={{ color: "#666", fontSize: "13px", lineHeight: "1.4" }}>
          {project.description}
        </div>
      </div>
    </a>
  );
}
