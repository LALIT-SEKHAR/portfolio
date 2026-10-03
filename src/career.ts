export type Role = {
  title: string
  org: string
  place: string
  dates: string
  points: string[]
}

export const roles: Role[] = [
  {
    title: "Software Engineer I",
    org: "Diligent",
    place: "Bangalore",
    dates: "Apr 2023 — Present",
    points: [
      "Led the UI modernization of a 70+ page cap table product, from a legacy design system to a new one.",
      "Rewrote a shared financial calculation engine used across services, for datasets up to 5,000 shareholders.",
      "Designed customer onboarding APIs on a Moleculer microservices backend.",
      "Contributing to Diligent Community, a larger modernization, owning modules end to end.",
    ],
  },
  {
    title: "Senior Software Engineer I",
    org: "SearchingYard",
    place: "Bhubaneswar",
    dates: "Jul 2021 — Apr 2023",
    points: [
      "Built and maintained full-stack applications with React and Node.js.",
      "Designed REST APIs and integrated third-party services.",
      "Worked with cross-functional teams in an agile setting.",
    ],
  },
]

export const education = {
  credential: "Bachelor of Technology",
  school: "Gandhi Institute of Excellent Technocrats",
  place: "Bhubaneswar, Odisha",
  dates: "Graduated June 2021",
}

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "REST API (Intermediate)",
  "Frontend Developer (React)",
]

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "AWS",
  "Docker",
]
