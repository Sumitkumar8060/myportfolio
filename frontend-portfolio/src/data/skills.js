// Your real technical skills, grouped the way you want them presented.
// No invented proficiency percentages — just an honest categorized list.
import {
  Code2,
  Coffee,
  Braces,
  Palette,
  FileCode,
  Atom,
  Server,
  Zap,
  Globe,
  Database,
  Cloud,
  Container,
  Layers,
  Boxes,
  Wrench,
  Workflow,
  RefreshCw,
  Terminal,
  GitBranch,
  Github,
} from "lucide-react";

export const skillCategories = [
  "all",
  "programming",
  "web-backend",
  "database",
  "cloud-devops",
  "tools",
];

export const categoryLabels = {
  all: "All",
  programming: "Programming",
  "web-backend": "Web / Backend",
  database: "Database",
  "cloud-devops": "Cloud & DevOps",
  tools: "Tools",
};

export const skills = [
  // Programming Languages
  { name: "C", category: "programming", icon: Code2 },
  { name: "C++", category: "programming", icon: Code2 },
  { name: "Java", category: "programming", icon: Coffee },
  { name: "JavaScript", category: "programming", icon: Braces },
  { name: "Python", category: "programming", icon: Code2 },

  // Web / Backend
  { name: "HTML", category: "web-backend", icon: FileCode },
  { name: "CSS", category: "web-backend", icon: Palette },
  { name: "React", category: "web-backend", icon: Atom },
  { name: "Node.js", category: "web-backend", icon: Server },
  { name: "Express.js", category: "web-backend", icon: Zap },
  { name: "REST APIs", category: "web-backend", icon: Globe },

  // Databases
  { name: "MongoDB", category: "database", icon: Database },
  { name: "MySQL", category: "database", icon: Database },

  // Cloud / DevOps
  { name: "AWS", category: "cloud-devops", icon: Cloud },
  { name: "Docker", category: "cloud-devops", icon: Container },
  { name: "Docker Compose", category: "cloud-devops", icon: Layers },
  { name: "Kubernetes", category: "cloud-devops", icon: Boxes },
  { name: "Jenkins", category: "cloud-devops", icon: Wrench },
  { name: "GitHub Actions", category: "cloud-devops", icon: Workflow },
  { name: "CI/CD", category: "cloud-devops", icon: RefreshCw },
  { name: "Linux / Ubuntu", category: "cloud-devops", icon: Terminal },

  // Tools
  { name: "Git", category: "tools", icon: GitBranch },
  { name: "GitHub", category: "tools", icon: Github },
];
