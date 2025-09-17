import { Link } from "@/data/links";
import { Icon } from "@/lib/icons";

interface LinkCardProps {
  link: Link;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card ${link.featured ? "featured" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "16px 20px",
        margin: "8px 0",
        backgroundColor: link.featured ? "#802038" : "rgba(255, 255, 255, 0.8)",
        color: link.featured ? "#fff" : "#2d1b35",
        borderRadius: "12px",
        textDecoration: "none",
        transition: "all 0.2s ease",
        border: link.featured ? "none" : "1px solid rgba(128, 32, 56, 0.2)",
        fontSize: "16px",
        fontWeight: "500",
        flex: 1,
        minWidth: 0,
      }}
    >
      <Icon name={link.icon as any} size={20} />
      <span>{link.title}</span>
    </a>
  );
}
