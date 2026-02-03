import { headerLinks } from "../constants";
import { logo, logoWhite } from "../assets";
import { Link } from "react-router-dom";

type Theme = "dark" | "light";

const Header = ({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {
  const handleThemeChange = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setTheme(localStorage.theme);
  };

  return (
    <header className="w-full flex justify-between items-center py-8 pr-[8%] sm:pr-[15%] pl-[8%] z-10">
      <Link to="/" className="flex gap-2" aria-label="Go to home page">
        <img src={theme === "dark" ? logoWhite : logo} height={24} width={24} alt="Khizar Nawab logo" />
        <p className="text-lg hidden md:block">
          <span className="font-bold">Khizar</span> Nawab
        </p>
      </Link>
      <div className="flex flex-row items-center">
        <ul className="flex gap-4 sm:gap-6 mr-4 sm:mr-6" aria-label="Social links">
          {headerLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.name} profile`}
              >
                <img
                  src={theme === "dark" ? link.icons.dark : link.icons.light}
                  alt=""
                  className="h-6 w-6 object-cover hover:scale-125 transition-all duration-100 ease-in-out"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="w-px h-[20px] bg-gray-700" aria-hidden="true" />

        <div className="ml-4 sm:ml-6">
          <label className="switch link hover:scale-125 transition-all duration-100 ease-in-out">
            <input
              type="checkbox"
              onChange={handleThemeChange}
              checked={theme === "light"}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
