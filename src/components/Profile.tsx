import Avatar from "./Avatar";
import { bio } from "@/data/bio";

export default function Profile() {
  return (
    <div
      className="profile"
      style={{ textAlign: "center", marginBottom: "40px" }}
    >
      <Avatar src={bio.avatar} alt={bio.name} />

      <div style={{ marginBottom: "16px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            margin: "24px 0 6px",
            color: "#2d1b35",
            lineHeight: "1.3",
          }}
        >
          {bio.name}
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#802038",
            margin: "0 0 4px",
            fontStyle: "italic",
          }}
        >
          aka. {bio.nickname}
        </p>
      </div>

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          margin: "0 0 12px",
          lineHeight: "1.6",
          fontWeight: "400",
        }}
      >
        {bio.bio}
      </p>

      {bio.location && (
        <p
          style={{
            fontSize: "16px",
            color: "#777",
            margin: "0",
            fontWeight: "500",
          }}
        >
          📍 {bio.location}
        </p>
      )}
    </div>
  );
}
