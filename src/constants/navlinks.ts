import {
  about,
  aboutWhite,
  contact,
  contactWhite,
  experience,
  experienceWhite,
  folder,
  folderWhite,
  home,
  homeWhite,
} from "../assets";

export const navLinks = [
  {
    name: "Home",
    shortName: "Home",
    path: "/",
    icons: {
      light: homeWhite,
      dark: home,
    },
  },
  {
    name: "About",
    shortName: "About",
    path: "/about",
    icons: {
      light: aboutWhite,
      dark: about,
    },
  },
  {
    name: "Projects",
    shortName: "Projects",
    path: "/projects",
    icons: {
      light: folderWhite,
      dark: folder,
    },
  },
  {
    name: "Experience",
    shortName: "Exp",
    path: "/experience",
    icons: {
      light: experienceWhite,
      dark: experience,
    },
  },
  {
    name: "Contact",
    shortName: "Contact",
    path: "/contact",
    icons: {
      light: contactWhite,
      dark: contact,
    },
  },
];
