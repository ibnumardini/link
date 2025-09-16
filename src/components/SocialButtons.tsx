import { SocialLink } from "@/data/links";
import { Icon } from "@/lib/icons";

interface SocialButtonsProps {
  socialLinks: SocialLink[];
}

export default function SocialButtons({ socialLinks }: SocialButtonsProps) {
  return (
    <div
      className="social-buttons"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginBottom: "32px",
        flexWrap: "wrap",
      }}
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          title={social.platform}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(128, 32, 56, 0.2)",
            textDecoration: "none",
            color: "#2d1b35",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Icon name={social.icon as any} size={20} />
        </a>
      ))}
    </div>
  );
}
