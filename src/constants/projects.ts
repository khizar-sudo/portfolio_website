import { luminous, proompt, rental, space, netflix } from "../assets";

export type Project = {
  name: string;
  description: string;
  github: string;
  deployment?: string;
  tags: string[];
  image?: string;
};

export const projects: {
  fullstack: Project[];
  backend: Project[];
  frontend: Project[];
} = {
  fullstack: [
    {
      name: "Luminous",
      description:
        "A university social hub featuring an interactive campus events map, student welfare management, course resources, GPA calculator, and instructor reviews, connecting students with campus life in one mobile app.",
      github: "https://github.com/HickeryDickery/P04-LUMSapp-frontend",
      tags: ["react-native", "mongodb", "node", "expressjs", "expo"],
      image: luminous,
    },
    {
      name: "Proompt",
      description:
        "A collaborative AI prompt sharing platform where users discover, share, and refine powerful prompts to unlock the full potential of AI tools. Built with Next.js and MongoDB.",
      github: "https://github.com/khizar-sudo/proompt",
      deployment: "https://proompt-sigma.vercel.app/",
      tags: ["nextjs", "next-auth", "reactjs", "mongodb", "tailwindcss"],
      image: proompt,
    },
  ],
  backend: [
    {
      name: "Chaos-Proxy",
      description:
        "A lightweight chaos engineering tool built in Go that stress-tests your APIs by injecting latency, errors, and data corruption, helping you build more resilient systems.",
      github: "https://github.com/khizar-sudo/chaos-proxy",
      tags: ["golang", "proxy", "cli"],
    },
    {
      name: "Gator",
      description:
        "A powerful CLI RSS feed aggregator with PostgreSQL storage and automated feed fetching to stay updated with your favorite content sources from the command line.",
      github: "https://github.com/khizar-sudo/gator",
      tags: ["golang", "rss", "postgresql", "cli"],
    },
    {
      name: "Pokedex",
      description:
        "An interactive CLI Pokédex built with Go and PostgreSQL. Search, catch, and explore detailed information about your favorite Pokémon from the terminal.",
      github: "https://github.com/khizar-sudo/pokedexcli",
      tags: ["golang", "postgresql", "cli"],
    },
  ],
  frontend: [
    {
      name: "Rent-a-Car",
      description:
        "A sleek car rental showcase built with Next.js and Tailwind CSS, featuring real-time vehicle data from RapidAPI with advanced filtering and search capabilities.",
      github: "https://github.com/khizar-sudo/car_rental",
      deployment: "https://car-rental-seven-lemon.vercel.app/",
      tags: ["nextjs", "reactjs", "tailwindcss", "rapidapi"],
      image: rental,
    },
    {
      name: "Space Tourism",
      description:
        "An immersive multi-page space tourism website with stunning animations powered by Framer Motion. Explore destinations, crew, and cutting-edge spacecraft technology.",
      github: "https://github.com/khizar-sudo/space_tourism",
      deployment: "https://space-tourism-nu-eight.vercel.app/",
      tags: ["reactjs", "tailwindcss", "framer-motion"],
      image: space,
    },
    {
      name: "Netflix Clone",
      description:
        "A pixel-perfect Netflix interface clone powered by TMDB API. Browse trending movies and TV shows with dynamic content loading and authentic Netflix styling.",
      github: "https://github.com/khizar-sudo/netflix-clone",
      // deployment: "https://netflix-clone-biski.web.app/",
      tags: ["reactjs", "css"],
      image: netflix,
    },
  ],
};
