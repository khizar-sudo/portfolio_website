import {
  about,
  aboutWhite,
  contact,
  contactWhite,
  folder,
  folderWhite,
  home,
  homeWhite,
} from "../assets";

export const navLinks = [
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
