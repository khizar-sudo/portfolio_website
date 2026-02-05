import { Transition } from "../components";
import { me } from "../assets";
import { motion } from "motion/react";
import { skills } from "../constants";

const About = () => {
  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 flex-col my-auto items-center justify-center sm:mt-8">
      <div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold">
            Biography
          </h1>
          <div className="flex flex-col-reverse md:flex-row gap-10 sm:pl-[4px] max-lg:items-center justify-between">
            <p className="text-sm md:text-base md:max-w-[65%]">
              <span className="text-2xl">Hi there! </span> <br /> <br />
              I'm Khizar Nawab, a full stack engineer from Lahore who accidentally discovered his life's calling during A-level math. Loved the subject, couldn't explain why. Turned out I wasn't actually in love with calculus, I just really, <i>really</i> liked solving problems. Took one Computer Science class and had my "oh, THIS is what I'm supposed to be doing" moment.
              <br /> <br /> Now I build software, break things (sometimes on purpose), and obsess over why distributed systems don't implode when half the nodes go offline. When I'm not staring at code, I'm either playing sports, gaming, or falling down YouTube rabbit holes about some new tech stack I convinced myself I need to learn by Tuesday.
              <br /> <br /> I have this wildly unrealistic goal of wanting to master everything. Like, everything. Not just programming - sports, calisthenics, new frameworks, fitness, whatever catches my attention that week. I know it's impossible. Life's too short, there are too many skills to learn, and I still haven't nailed that muscle-up I've been working on. So I'm learning to take things one obsession at a time and trust that I'll get where I need to go.
              <br /> <br /> The truth is, I just like fixing stuff. Doesn't matter what it is; broken code, slow databases, products that don't exist yet. If there's a problem, I'm probably interested. That's the whole thing, really.
            </p>
            <motion.div
              animate={{
                y: ["-7px", "7px"], // Animation range: move up 10px and down 10px
              }}
              transition={{
                duration: 2, // Duration of each animation cycle (2 seconds in this example)
                repeat: Infinity, // Repeat the animation infinitely
                repeatType: "reverse", // Reverse the animation when repeating
                ease: "easeInOut", // Easing function for smooth animation
              }}
              className="flex relative xs:max-w-[40%]"
            >
              <div className="absolute top-0 w-full h-full bg-black dark:bg-white rounded-lg m-2" />
              <img
                src={me}
                alt="profile picture"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out rounded-lg  border-2 border-black dark:border-white w-full bg-white dark:bg-black"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 font-bold text-center">
            Technologies I've Worked With
          </h2>
          <ul className="flex justify-center gap-10 flex-wrap  sm:mx-20 lg:mx-40 my-8 lg:my-20">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-between items-center"
              >
                <div className="flex h-full justify-center items-center">
                  <img src={skill.icon} width={40} height={40} alt={skill.name} />
                </div>
                <span className="text-sm font-semibold">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Transition />
    </div>
  );
};

export default About;
