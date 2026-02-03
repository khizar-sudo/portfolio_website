import { Transition } from "../components";
import { Link } from "react-router-dom";
import { proj } from "../constants";
import { clip, clipWhite, github, githubWhite } from "../assets";

const Projects = ({ theme }: { theme: string }) => {
  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 flex-col my-auto items-center justify-center sm:mt-8">
      <div className="w-full">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-center">
            Passion begets Perfection
          </h1>
          <h2 className="text-center">
            Discover the diverse range of projects I have undertaken, showcasing
            my expertise in creating dynamic websites and applications. From
            responsive designs that adapt beautifully to any device, to scalable
            back-end systems that handle complex data interactions, each project
            in my portfolio demonstrates my commitment to quality and
            excellence.
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {proj.map((project) => (
            <li
              key={project.name}
              className="flex flex-col bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg overflow-hidden hover:scale-[102%] transition-all duration-150 ease-in-out"
            >
              {/* Image Section */}
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={`${project.name} image`}
                  className="aspect-video w-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {project.name}
                  </h2>
                  <div className="flex gap-2 shrink-0">
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source code on GitHub`}
                      className="w-8 h-8 rounded-full flex justify-center items-center bg-black dark:bg-white hover:scale-125 transition-all duration-150 ease-in-out"
                    >
                      <img
                        src={theme === "dark" ? github : githubWhite}
                        width={20}
                        height={20}
                        alt=""
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </Link>

                    {project.deployment !== "" && (
                      <Link
                        to={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live demo`}
                        className="w-8 h-8 rounded-full flex justify-center items-center bg-black dark:bg-white hover:scale-125 transition-all duration-150 ease-in-out"
                      >
                        <img
                          src={theme === "dark" ? clip : clipWhite}
                          width={20}
                          height={20}
                          alt=""
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-sm flex-1">{project.description}</p>

                <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.tags.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs text-gray-500 dark:text-gray-400"
                    >
                      #{tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Transition />
    </div>
  );
};

export default Projects;
