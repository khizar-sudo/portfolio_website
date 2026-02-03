import {
  home,
  about,
  folder,
  contact,
  homeWhite,
  aboutWhite,
  folderWhite,
  contactWhite,
  github,
  githubWhite,
  linkedin,
  frontendMentor,
  js,
  react,
  ts,
  node,
  mongo,
  redux,
  git,
  figma,
  tailwind,
  nextjs,
  luminous,
  proompt,
  netflix,
  rental,
  space,
  supabase,
  postgres,
  nestjs,
  mySQL,
  graphql,
  jest,
  rtl,
  kubernetes,
  docker,
  helm,
} from "../assets";

const navLinks = [
  {
    name: "Home",
    path: "/",
    icons: {
      light: homeWhite,
      dark: home,
    },
  },
  {
    name: "About",
    path: "/about",
    icons: {
      light: aboutWhite,
      dark: about,
    },
  },
  {
    name: "Projects",
    path: "/projects",
    icons: {
      light: folderWhite,
      dark: folder,
    },
  },
  {
    name: "Contact",
    path: "/contact",
    icons: {
      light: contactWhite,
      dark: contact,
    },
  },
];

const headerLinks = [
  {
    name: "Github",
    icons: {
      light: github,
      dark: githubWhite,
    },
    path: "https://github.com/khizar-sudo",
  },
  {
    name: "LinkedIn",
    icons: {
      light: linkedin,
      dark: linkedin,
    },
    path: "https://www.linkedin.com/in/khizar-nawab/",
  },
  {
    name: "Frontend Mentor",
    icons: {
      light: frontendMentor,
      dark: frontendMentor,
    },
    path: "https://www.frontendmentor.io/profile/HickeryDickery",
  },
];

const skills = [
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "TypeScript",
    icon: ts,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node",
    icon: node,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "MySQL",
    icon: mySQL,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },

  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },

  {
    name: "Helm Charts",
    icon: helm,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "React Testing Library",
    icon: rtl,
  },
];

const projects = [
  {
    name: "Proompt",
    description:
      "An AI Prompt Sharing platform to allow everyone to benefit from ingenious ways of getting excellent results from prompt-based AI tools and softwares.",
    github: "https://github.com/HickeryDickery/proompt",
    deployment: "https://proompt-sigma.vercel.app/",
    tags: ["nextjs", "next-auth", "reactjs", "mongodb", "tailwindcss"],
    image: proompt,
  },
  {
    name: "Luminous",
    description:
      "A React Native Android application that allows Student Societies and University Administration to add Events which would be added to a map in the app using the Google Maps API.",
    github:
      "https://github.com/nibi420/Luminous_2.0/tree/HickeryDickery-patch-1",
    deployment: "",
    tags: ["react-native", "mongodb", "node", "expressjs", "expo"],
    image: luminous,
  },
  {
    name: "Rent-a-Car",
    description:
      "A single page NextJS application which fetches information from RapidAPI and displays it in the manner of a car rental website.",
    github: "https://github.com/HickeryDickery/car_rental",
    deployment: "https://car-rental-seven-lemon.vercel.app/",
    tags: ["nextjs", "reactjs", "tailwindcss", "rapidapi"],
    image: rental,
  },
  {
    name: "Space Tourism",
    description:
      "A multi-page frontend website of a fictional space tourism company.",
    github: "https://github.com/HickeryDickery/space_tourism",
    deployment: "https://space-tourism-nu-eight.vercel.app/",
    tags: ["reactjs", "tailwindcss", "framer-motion"],
    image: space,
  },
  {
    name: "Netflix Clone",
    description:
      "A single page frontend React app which fetches information about movies and TV shows from TMDB and displays them in the format of the Netflix website.",
    github: "https://github.com/HickeryDickery/netflix-clone",
    deployment: "https://netflix-clone-biski.web.app/",
    tags: ["reactjs", "css"],
    image: netflix,
  },
];

export { navLinks, headerLinks, skills, projects };
