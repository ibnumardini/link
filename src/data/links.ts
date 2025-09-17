export interface Link {
  title: string;
  url: string;
  icon: string;
  description?: string;
  featured?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://instagram.com/ibnu.mardini.dev",
    icon: "Instagram",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/ibnumardini",
    icon: "Twitter",
  },
  {
    platform: "GitHub",
    url: "https://github.com/ibnumardini",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/ibnumardini",
    icon: "Linkedin",
  },
  {
    platform: "Email",
    url: "mailto:hi@mardini.dev",
    icon: "Mail",
  },
];

export const mainLinks: Link[] = [
  {
    title: "My Website",
    url: "https://ibnu.mardini.dev",
    icon: "Globe",
    featured: true,
  },
  {
    title: "Download CV",
    url: "https://s.id/fatkur-cv-download",
    icon: "Download",
  },
];

export const projectLinks: Link[] = [
  {
    title: "SIMALU",
    url: "https://simalu.mardini.dev",
    description: "Alumni relations software for educational institutions.",
    icon: "Users",
  },
  {
    title: "Logn",
    url: "https://github.com/ibnumardini/logn",
    description: "Simple Go-lang log management library.",
    icon: "FileText",
  },
  {
    title: "UMBY Student Directory",
    url: "https://umby.mardini.dev",
    description: "Student directory for Universitas Mercu Buana Yogyakarta.",
    icon: "Database",
  },
  {
    title: "Wilayah Indonesia API",
    url: "https://wilayah-indonesia-api.mardini.dev/swagger/index.html",
    description:
      "Indonesian region data API (provinces, cities, districts, villages).",
    icon: "Map",
  },
  {
    title: "Palestine Twibbon",
    url: "https://palestine.mardini.dev",
    description: "Let’s support Palestine with your profile picture! 🇵🇸",
    icon: "Heart",
  },
];
