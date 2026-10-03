export type Position = {
  title: string
  dates: string
  points: string[]
}

export type Experience = {
  org: string
  place: string
  positions: Position[]
}

export type Certification = {
  name: string
  issuer: string
  href: string
  issued?: string
}

export const experiences: Experience[] = [
  {
    org: "Diligent",
    place: "Bangalore",
    positions: [
      {
        title: "Software Engineer I",
        dates: "Apr 2023 — Present",
        points: [
          "Led the UI modernization of a 70+ page product across 300+ components, migrating from a legacy design system to a new enterprise system.",
          "Shipped the migration with an environment-based feature-flag rollout over 5–6 months, with strong Customer Success feedback.",
          "Rewrote a shared financial calculation engine used across services, for datasets up to 5,000 shareholders, improving accuracy and cutting production bugs.",
          "Designed Moleculer microservice APIs with validation, structured errors, and backend unit tests; contribute architecture and PR reviews on Diligent Community.",
        ],
      },
    ],
  },
  {
    org: "SearchingYard.Group",
    place: "Bhubaneswar",
    positions: [
      {
        title: "Senior Software Developer",
        dates: "Sep 2022 — Mar 2023",
        points: [
          "Owned full-stack delivery on React and Node.js products, from feature design through release.",
          "Designed REST APIs and integrated third-party services used across client applications.",
          "Collaborated with cross-functional teams in an agile setting to ship production features on schedule.",
        ],
      },
      {
        title: "Software Developer",
        dates: "May 2022 — Sep 2022",
        points: [
          "Built and maintained full-stack web applications with React and Node.js.",
          "Implemented REST endpoints and connected frontend flows to backend services.",
          "Worked with designers and stakeholders to ship iterative product improvements.",
        ],
      },
      {
        title: "Junior Software Developer",
        dates: "Jul 2021 — May 2022",
        points: [
          "Developed UI features and bug fixes in React applications for client projects.",
          "Supported API integration work and learned production delivery practices in an agile team.",
          "Contributed to testing and maintenance of existing full-stack codebases.",
        ],
      },
    ],
  },
]

export const currentRole = {
  title: experiences[0].positions[0].title,
  org: experiences[0].org,
  place: experiences[0].place,
  dates: experiences[0].positions[0].dates,
}

export const education = {
  credential: "Bachelor of Technology",
  school: "Gandhi Institute of Excellent Technocrats",
  place: "Bhubaneswar, Odisha",
  dates: "Graduated June 2021",
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/01b32ac4-b5e7-4a48-997c-ea7600d23a85",
    issued: "Dec 2023",
  },
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/e749371cb5cb",
    issued: "Mar 2025",
  },
  {
    name: "Rest API (Intermediate)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/770d75b1c401",
    issued: "Mar 2025",
  },
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/985295cd4a11",
    issued: "Mar 2025",
  },
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/c053c45b477f",
    issued: "Mar 2025",
  },
  {
    name: "React (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/c83fc0b228d4",
    issued: "Mar 2025",
  },
  {
    name: "Node (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/b8e6923b4603",
    issued: "Mar 2025",
  },
  {
    name: "AWS Cloud Practitioner (CLF-C01 & CLF-C02)",
    issuer: "Udemy",
    href: "https://www.udemy.com/certificate/UC-189d8d9e-5ba1-463c-ae8d-35e58275b100/",
    issued: "Sep 2023",
  },
]

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Redux",
  "Context API",
  "Node.js",
  "REST APIs",
  "Moleculer",
  "MongoDB",
  "AWS",
  "EC2",
  "S3",
  "Lambda",
  "AWS CDK",
  "Docker",
  "CI/CD",
  "Jest",
  "E2E Testing",
  "Tailwind CSS",
  "Microservices",
]
