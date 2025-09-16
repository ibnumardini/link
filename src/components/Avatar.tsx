"use client";

import { Icon } from "@/lib/icons";
import { useState } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 120 }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        border: "3px solid #f1f1f1",
        margin: "0 auto",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#999",
      }}
    >
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <Icon name="User" size={size / 2.5} />
      )}
    </div>
  );
}
