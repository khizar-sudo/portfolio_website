import { Transition } from "../components";
import { chevronRight, chevronWhite } from "../assets";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ theme }: { theme: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[8%] flex flex-1 my-auto items-center">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center max-w-6xl">
        <div className="text-left">
          <motion.h1 className="text-[2.15rem] sm:text-[2.7rem] md:text-[3.2rem] mb-2 font-bold">
            Khizar Nawab
          </motion.h1>
          <div>
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4">
              Full Stack Engineer
            </motion.h2>
            <motion.p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Lahore, Pakistan
            </motion.p>
            <motion.p className="text-lg sm:text-xl mb-6 md:pl-[3px]">
              Give me a problem and a keyboard. <br />
              I'll ship the solution.
            </motion.p>

            <Link target="_blank" to="https://drive.google.com/file/d/1V4Et1nAUwoPdSAhVFALLr4nheW2eRhZP/view?usp=sharing">
              <motion.button
                className="border-2 border-black dark:border-white hover:text-white dark:hover:text-black hover:bg-black hover:dark:bg-white hover:border-white hover:dark:border-black rounded-lg p-4 transition-all duration-150 ease-in-out"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div className="flex items-center justify-center">
                  View Resume
                  <img
                    src={
                      (theme === "light" && !hover) ||
                        (theme === "dark" && hover)
                        ? chevronRight
                        : chevronWhite
                    }
                    alt="chevron right"
                    className="ml-4"
                  />
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <Transition />
    </div>
  );
};

export default Home;
