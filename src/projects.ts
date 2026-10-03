export type RepoLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  summary: string
  created: string
  updated: string
  live?: string
  repos: RepoLink[]
}

export const projects: Project[] = [
  {
    name: "Daybook",
    summary: "A daily task list and journal, on the web and on mobile.",
    created: "2026-09-29",
    updated: "2026-10-02",
    live: "https://daybook-nine-tau.vercel.app/",
    repos: [
      { label: "web", href: "https://github.com/LALIT-SEKHAR/daybook" },
      { label: "API", href: "https://github.com/LALIT-SEKHAR/daybook-api" },
      { label: "mobile", href: "https://github.com/LALIT-SEKHAR/daybook-mobile" },
    ],
  },
  {
    name: "Knowra",
    summary: "Upload documents and ask questions about them in conversation.",
    created: "2026-09-19",
    updated: "2026-09-30",
    live: "https://knowra-cyan.vercel.app",
    repos: [
      { label: "web", href: "https://github.com/LALIT-SEKHAR/Knowra" },
      { label: "API", href: "https://github.com/LALIT-SEKHAR/Knowra-api" },
    ],
  },
  {
    name: "Oliyo",
    summary: "A messaging app.",
    created: "2022-03-06",
    updated: "2022-03-19",
    live: "https://oliyo-taupe.vercel.app",
    repos: [{ label: "Oliyo", href: "https://github.com/LALIT-SEKHAR/Oliyo" }],
  },
  {
    name: "React slider",
    summary: "A React component for a slider.",
    created: "2021-12-31",
    updated: "2022-01-22",
    repos: [
      {
        label: "react-lalit-slider",
        href: "https://github.com/LALIT-SEKHAR/react-lalit-slider",
      },
    ],
  },
  {
    name: "WebRTC mesh",
    summary: "Group calls connected as a mesh of peers.",
    created: "2021-08-20",
    updated: "2021-08-27",
    repos: [
      {
        label: "WebRTC_Mesh_Architecture",
        href: "https://github.com/LALIT-SEKHAR/WebRTC_Mesh_Architecture",
      },
    ],
  },
  {
    name: "One to one video call",
    summary: "A video call between two browsers.",
    created: "2021-08-12",
    updated: "2021-08-19",
    repos: [
      {
        label: "OneToOne_VideoCall",
        href: "https://github.com/LALIT-SEKHAR/OneToOne_VideoCall",
      },
    ],
  },
  {
    name: "WebRTC media control",
    summary: "Controls for media in a WebRTC call.",
    created: "2021-07-30",
    updated: "2021-08-12",
    live: "https://webrtc-media-control.vercel.app",
    repos: [
      {
        label: "WebRTC-Media-Controle",
        href: "https://github.com/LALIT-SEKHAR/WebRTC-Media-Controle",
      },
    ],
  },
  {
    name: "My own momentum",
    summary: "A personal start page with the weather.",
    created: "2020-08-14",
    updated: "2021-08-16",
    live: "https://my-own-momentom.vercel.app",
    repos: [
      {
        label: "my-own-momentom",
        href: "https://github.com/LALIT-SEKHAR/my-own-momentom",
      },
    ],
  },
  {
    name: "Movie app",
    summary: "A React app for browsing movies.",
    created: "2020-07-23",
    updated: "2026-02-13",
    live: "https://movieapp-steel-psi.vercel.app",
    repos: [{ label: "movieapp", href: "https://github.com/LALIT-SEKHAR/movieapp" }],
  },
  {
    name: "Brick game",
    summary: "A small browser game with a score and a start button.",
    created: "2020-05-29",
    updated: "2020-05-29",
    live: "https://brick-game-cyan.vercel.app",
    repos: [{ label: "BRICK-GAME", href: "https://github.com/LALIT-SEKHAR/BRICK-GAME" }],
  },
  {
    name: "Todo",
    summary: "A to-do list styled with CSS.",
    created: "2020-05-09",
    updated: "2020-05-13",
    live: "https://todo-2020.vercel.app",
    repos: [{ label: "todo", href: "https://github.com/LALIT-SEKHAR/todo" }],
  },
  {
    name: "Calculator two",
    summary: "A second calculator, written in JavaScript.",
    created: "2020-05-07",
    updated: "2020-05-09",
    live: "https://calculator-two-phi-six.vercel.app",
    repos: [{ label: "Calculatortwo", href: "https://github.com/LALIT-SEKHAR/Calculatortwo" }],
  },
  {
    name: "Age calculator",
    summary: "Calculates an age from a date of birth.",
    created: "2020-05-07",
    updated: "2020-05-07",
    live: "https://age-calculator-ten-gold.vercel.app",
    repos: [{ label: "Age_Calculator", href: "https://github.com/LALIT-SEKHAR/Age_Calculator" }],
  },
  {
    name: "Calculator",
    summary: "A calculator laid out in HTML and CSS.",
    created: "2020-05-07",
    updated: "2020-05-07",
    live: "https://calculator-woad-beta-77.vercel.app",
    repos: [{ label: "Calculator", href: "https://github.com/LALIT-SEKHAR/Calculator" }],
  },
  {
    name: "Clock",
    summary: "A clock built with HTML, CSS, and JavaScript.",
    created: "2020-04-29",
    updated: "2020-05-07",
    live: "https://clock-peach-omega.vercel.app",
    repos: [{ label: "Clock", href: "https://github.com/LALIT-SEKHAR/Clock" }],
  },
  {
    name: "Face recognition",
    summary: "A web app and API for detecting a face in a photo.",
    created: "2020-02-23",
    updated: "2025-03-08",
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
    name: "Robofriends",
    summary: "A React practice app for filtering a list of robots.",
    created: "2020-02-15",
    updated: "2026-02-13",
    live: "https://robofriends-pink.vercel.app",
    repos: [{ label: "robofriends", href: "https://github.com/LALIT-SEKHAR/robofriends" }],
  },
  {
    name: "Background generator",
    summary: "A page that builds a background from two colors.",
    created: "2020-02-13",
    updated: "2020-02-13",
    live: "https://background-generator-xi.vercel.app",
    repos: [
      {
        label: "background-generator",
        href: "https://github.com/LALIT-SEKHAR/background-generator",
      },
    ],
  },
]
