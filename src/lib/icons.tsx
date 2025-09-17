import {
  Instagram,
  Twitter,
  Facebook,
  Github,
  Linkedin,
  Globe,
  Mail,
  User,
  Download,
  Users,
  FileText,
  Database,
  Map,
  Heart,
} from "lucide-react";

const iconMap = {
  Instagram,
  Twitter,
  Facebook,
  Github,
  Linkedin,
  Globe,
  Mail,
  User,
  Download,
  Users,
  FileText,
  Database,
  Map,
  Heart,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className = "" }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
}
