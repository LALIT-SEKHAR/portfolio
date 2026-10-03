import type { Icon } from "@phosphor-icons/react"
import {
  ArrowRight,
  ArrowSquareOut,
  Briefcase,
  Buildings,
  CalendarBlank,
  Certificate,
  CloudArrowUp,
  Code,
  Database,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  HardDrives,
  LinkedinLogo,
  MapPin,
  MoonStars,
  Stack,
  Sun,
  TestTube,
  TreeStructure,
} from "@phosphor-icons/react"

export const Icons = {
  ArrowRight,
  ArrowSquareOut,
  Briefcase,
  Buildings,
  CalendarBlank,
  Certificate,
  CloudArrowUp,
  Code,
  Database,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  HardDrives,
  LinkedinLogo,
  MapPin,
  MoonStars,
  Stack,
  Sun,
  TestTube,
  TreeStructure,
} as const

const skillIconMap: Record<string, Icon> = {
  TypeScript: Code,
  JavaScript: Code,
  React: Stack,
  Redux: TreeStructure,
  "Context API": TreeStructure,
  "Node.js": HardDrives,
  "REST APIs": CloudArrowUp,
  Moleculer: TreeStructure,
  MongoDB: Database,
  AWS: CloudArrowUp,
  EC2: HardDrives,
  S3: Database,
  Lambda: CloudArrowUp,
  "AWS CDK": CloudArrowUp,
  Docker: HardDrives,
  "CI/CD": TreeStructure,
  Jest: TestTube,
  "E2E Testing": TestTube,
  "Tailwind CSS": Stack,
  Microservices: TreeStructure,
}

export function skillIcon(name: string): Icon {
  return skillIconMap[name] ?? Code
}

export function issuerIcon(issuer: string): Icon {
  const key = issuer.toLowerCase()
  if (key.includes("hackerrank")) return Code
  if (key.includes("amazon") || key.includes("aws")) return CloudArrowUp
  if (key.includes("udemy")) return GraduationCap
  return Certificate
}
