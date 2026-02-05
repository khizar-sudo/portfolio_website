import { Transition, ProjectCard } from "../components";
import { projects } from "../constants";

const Projects = ({ theme }: { theme: string }) => {
  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 flex-col my-auto items-center justify-center sm:mt-8">
      <div className="w-full">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-center">
            Passion Begets Perfection
          </h1>
        </div>

        {/* Fullstack Projects Section */}
        {projects.fullstack.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Full-Stack Projects
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.fullstack.map((project) => (
                <ProjectCard key={project.name} project={project} theme={theme} />
              ))}
            </ul>
          </div>
        )}

        {/* Backend Projects Section */}
        {projects.backend.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Back-End Projects
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.backend.map((project) => (
                <ProjectCard key={project.name} project={project} theme={theme} />
              ))}
            </ul>
          </div>
        )}

        {/* Frontend Projects Section */}
        {projects.frontend.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Front-End Projects
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.frontend.map((project) => (
                <ProjectCard key={project.name} project={project} theme={theme} />
              ))}
            </ul>
          </div>
        )}
      </div>
      <Transition />
    </div>
  );
};

export default Projects;
