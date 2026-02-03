import { luminous, proompt, rental, space, netflix, golang } from "../assets";

type Project = {
  name: string;
  description: string;
  github: string;
  deployment?: string;
  tags: string[];
  image?: string;
  centerImage?: boolean;
};

export const projects: Project[] = [
  {
    name: "Chaos-Proxy",
    description:
      "A lightweight HTTP reverse proxy for intentionally breaking your APIs and services by injecting latency, HTTP errors, corrupting data, or dropping requests altogether.",
    github: "https://github.com/khizar-sudo/chaos-proxy",
    tags: ["golang", "proxy"],
    image: golang,
    centerImage: true,
  },
  {
    name: "Gator",
    description:
      "A CLI RSS feed aggregator that allows you to read RSS feeds from your favorite websites, store them in a database and even set up a cron job to fetch new RSS feeds.",
    github: "https://github.com/khizar-sudo/gator",
    tags: ["golang", "rss"],
    image: golang,
    centerImage: true,
  },
  {
    name: "Pokedex",
    description:
      "A simple CLI pokedex application that allows you to search, catch and view details of a pokemon.",
    github: "https://github.com/khizar-sudo/pokedexcli",
    tags: ["golang", "postgresql"],
    image: golang,
    centerImage: true,
  },
  {
    name: "Proompt",
    description:
      "An AI Prompt Sharing platform to allow everyone to benefit from ingenious ways of getting excellent results from prompt-based AI tools and softwares.",
    github: "https://github.com/khizar-sudo/proompt",
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
    tags: ["react-native", "mongodb", "node", "expressjs", "expo"],
    image: luminous,
  },
  {
    name: "Rent-a-Car",
    description:
      "A single page NextJS application which fetches information from RapidAPI and displays it in the manner of a car rental website.",
    github: "https://github.com/khizar-sudo/car_rental",
    deployment: "https://car-rental-seven-lemon.vercel.app/",
    tags: ["nextjs", "reactjs", "tailwindcss", "rapidapi"],
    image: rental,
  },
  {
    name: "Space Tourism",
    description:
      "A multi-page frontend website of a fictional space tourism company.",
    github: "https://github.com/khizar-sudo/space_tourism",
    deployment: "https://space-tourism-nu-eight.vercel.app/",
    tags: ["reactjs", "tailwindcss", "framer-motion"],
    image: space,
  },
  {
    name: "Netflix Clone",
    description:
      "A single page frontend React app which fetches information about movies and TV shows from TMDB and displays them in the format of the Netflix website.",
    github: "https://github.com/khizar-sudo/netflix-clone",
    deployment: "https://netflix-clone-biski.web.app/",
    tags: ["reactjs", "css"],
    image: netflix,
  },
];
