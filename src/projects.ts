export type RepoLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  year: string
  summary: string
  live?: string
  repos: RepoLink[]
  note?: string
}

export const projects: Project[] = [
  {
    name: "Background generator",
    year: "2020",
    summary: "A page that builds a background from two colors.",
    live: "https://background-generator-xi.vercel.app",
    repos: [
      {
        label: "background-generator",
        href: "https://github.com/LALIT-SEKHAR/background-generator",
      },
    ],
  },
  {
    name: "Robofriends",
    year: "2020",
    summary: "A React practice app for filtering a list of robots.",
    live: "https://robofriends-pink.vercel.app",
    repos: [{ label: "robofriends", href: "https://github.com/LALIT-SEKHAR/robofriends" }],
  },
  {
    name: "Face recognition",
    year: "2020",
    summary: "A web app and API for detecting a face in a photo.",
    live: "https://face-recognition-tau-ten.vercel.app",
    repos: [
      {
        label: "frontend",
        href: "https://github.com/LALIT-SEKHAR/facerecognitionbrain_frontend",
      },
      {
        label: "API",
        href: "https://github.com/LALIT-SEKHAR/facerecognitionbrain_backend",
      },
    ],
  },
  {
    name: "Clock",
    year: "2020",
    summary: "A clock built with HTML, CSS, and JavaScript.",
    live: "https://clock-peach-omega.vercel.app",
    repos: [{ label: "Clock", href: "https://github.com/LALIT-SEKHAR/Clock" }],
  },
  {
    name: "Calculator",
    year: "2020",
    summary: "A calculator laid out in HTML and CSS.",
    live: "https://calculator-woad-beta-77.vercel.app",
    repos: [{ label: "Calculator", href: "https://github.com/LALIT-SEKHAR/Calculator" }],
  },
  {
    name: "Age calculator",
    year: "2020",
    summary: "Calculates an age from a date of birth.",
    live: "https://age-calculator-ten-gold.vercel.app",
    repos: [{ label: "Age_Calculator", href: "https://github.com/LALIT-SEKHAR/Age_Calculator" }],
  },
  {
    name: "Calculator two",
    year: "2020",
    summary: "A second calculator, written in JavaScript.",
    live: "https://calculator-two-phi-six.vercel.app",
    repos: [{ label: "Calculatortwo", href: "https://github.com/LALIT-SEKHAR/Calculatortwo" }],
  },
  {
    name: "Todo",
    year: "2020",
    summary: "A to-do list styled with CSS.",
    live: "https://todo-2020.vercel.app",
    repos: [{ label: "todo", href: "https://github.com/LALIT-SEKHAR/todo" }],
  },
  {
    name: "Brick game",
    year: "2020",
    summary: "A small browser game with a score and a start button.",
    live: "https://brick-game-cyan.vercel.app",
    repos: [{ label: "BRICK-GAME", href: "https://github.com/LALIT-SEKHAR/BRICK-GAME" }],
  },
  {
    name: "Movie app",
    year: "2020",
    summary: "A React app for browsing movies.",
    live: "https://movieapp-steel-psi.vercel.app",
    repos: [{ label: "movieapp", href: "https://github.com/LALIT-SEKHAR/movieapp" }],
  },
  {
    name: "My own momentum",
    year: "2020",
    summary: "A personal start page with the weather.",
    repos: [],
    note: "Repository stays private because API keys are committed in it.",
  },
  {
    name: "WebRTC media control",
    year: "2021",
    summary: "Controls for media in a WebRTC call.",
    live: "https://webrtc-media-control.vercel.app",
    repos: [
      {
        label: "WebRTC-Media-Controle",
        href: "https://github.com/LALIT-SEKHAR/WebRTC-Media-Controle",
      },
    ],
  },
  {
    name: "One to one video call",
    year: "2021",
    summary: "A video call between two browsers.",
    repos: [
      {
        label: "OneToOne_VideoCall",
        href: "https://github.com/LALIT-SEKHAR/OneToOne_VideoCall",
      },
    ],
  },
  {
    name: "WebRTC mesh",
    year: "2021",
    summary: "Group calls connected as a mesh of peers.",
    repos: [
      {
        label: "WebRTC_Mesh_Architecture",
        href: "https://github.com/LALIT-SEKHAR/WebRTC_Mesh_Architecture",
      },
    ],
  },
  {
    name: "React slider",
    year: "2021",
    summary: "A React component for a slider.",
    repos: [
      {
        label: "react-lalit-slider",
        href: "https://github.com/LALIT-SEKHAR/react-lalit-slider",
      },
    ],
  },
  {
    name: "Oliyo",
    year: "2022",
    summary: "A messaging app.",
    repos: [{ label: "Oliyo", href: "https://github.com/LALIT-SEKHAR/Oliyo" }],
  },
  {
    name: "Knowra",
    year: "2026",
    summary: "Upload documents and ask questions about them in conversation.",
    live: "https://knowra-cyan.vercel.app",
    repos: [
      { label: "web", href: "https://github.com/LALIT-SEKHAR/Knowra" },
      { label: "API", href: "https://github.com/LALIT-SEKHAR/Knowra-api" },
    ],
  },
  {
    name: "Daybook",
    year: "2026",
    summary: "A daily task list and journal, on the web and on mobile.",
    live: "https://daybook-nine-tau.vercel.app/",
    repos: [
      { label: "web", href: "https://github.com/LALIT-SEKHAR/daybook" },
      { label: "API", href: "https://github.com/LALIT-SEKHAR/daybook-api" },
      { label: "mobile", href: "https://github.com/LALIT-SEKHAR/daybook-mobile" },
    ],
  },
]
