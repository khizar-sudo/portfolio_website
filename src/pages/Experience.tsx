import { Transition } from "../components";
import { experience } from "../constants";

interface ExperienceItem {
    company: string;
    position: string;
    location: string;
    description: React.ReactNode;
    startDate: string;
    endDate: string;
    tags: string[];
}

const Experience = () => {
    const experienceData = experience as ExperienceItem[];

    return (
        <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 flex-col my-auto items-center justify-center sm:mt-8">
            <div className="w-full max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-center">
                        Professional Journey
                    </h1>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-6 md:pl-0">
                    {/* Center line - hidden on mobile, shown on md+ */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black/20 dark:bg-white/20" />

                    {/* Left line for mobile */}
                    <div className="md:hidden absolute left-[7px] w-0.5 h-full bg-black/20 dark:bg-white/20" />

                    {/* Timeline Items */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        {experienceData.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline dot - center on md+, left on mobile */}
                                <div className="absolute -left-[17px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black z-10" />

                                {/* Date badge - shown on md+ screens */}
                                <div
                                    className={`hidden md:block absolute left-1/2 transform ${index % 2 === 0
                                        ? "translate-x-6"
                                        : "-translate-x-full -ml-6"
                                        } text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap`}
                                >
                                    {exp.startDate} — {exp.endDate}
                                </div>

                                {/* Card */}
                                <div
                                    className={`w-full md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                                        }`}
                                >
                                    <div className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg p-5 hover:scale-[102%] transition-all duration-150 ease-in-out">
                                        {/* Date badge - shown on mobile only */}
                                        <div className="md:hidden text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                                            {exp.startDate} — {exp.endDate}
                                        </div>

                                        {/* Position & Company */}
                                        <h3 className="text-xl sm:text-2xl font-bold mb-1">
                                            {exp.position}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                                            {exp.location}
                                        </p>

                                        {/* Description */}
                                        <div className="text-sm mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">{exp.description}</div>

                                        {/* Tags */}
                                        <ul className="flex flex-wrap gap-x-3 gap-y-1 pt-3 border-t border-gray-200 dark:border-gray-700">
                                            {exp.tags.map((tag) => (
                                                <li
                                                    key={tag}
                                                    className="text-xs text-gray-500 dark:text-gray-400"
                                                >
                                                    #{tag}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Transition />
        </div>
    );
};

export default Experience;
