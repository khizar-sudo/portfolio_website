import { useEffect, useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { Navbar, Header, Footer } from "./components";
import { Landing } from "./pages";
import FOG from "vanta/src/vanta.fog.js";
import { vantConfigDark, vantConfigLight } from "./styles";
import Cursor from "./components/Cursor";

interface VantaEffect {
  destroy: () => void;
}

// Helper function to determine initial theme
function getInitialTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  }
  return "light";
}

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);
  const vantaRef = useRef<VantaEffect | null>(null);

  // Sync theme with DOM and create Vanta effect
  useEffect(() => {
    // Destroy previous Vanta instance before creating new one
    if (vantaRef.current) {
      vantaRef.current.destroy();
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      vantaRef.current = FOG(vantConfigDark);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      vantaRef.current = FOG(vantConfigLight);
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, [theme]);

  return (
    <div className="w-screen min-h-screen m-0 p-0 flex flex-col">
      <BrowserRouter>
        <Landing theme={theme} />
        <Cursor />
        <Navbar theme={theme} />
        <Header theme={theme} setTheme={setTheme} />
        <AnimatedRoutes theme={theme} />
        <div
          id="background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
