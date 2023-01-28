import { motion } from "framer-motion";
import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div
      className="h-screen relative gap-10 flex flex-col text-xl  
    text-center md:text-left md:flex-row px-10  max-w-7xl mx-auto items-center justify-evenly "
    >
      <h3 className="top-20 absolute tracking-[10px] md:tracking-[20px] text-xl  md:text-2xl ml-4 text-gray-500 uppercase">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: [0, 0.5, 1],
        }}
        transition={{ duration: 0.6 }}
        src="/asif.jpeg"
        className="h-40 w-40 md:h-80 -mb-36 md:mb-0 md:w-80 md:rounded-md rounded-full"
      />
      <div>
        <h1 className=" my-4 lg:my-10  font-semibold text-sm md:text-xl">
          Here's Some of My{" "}
          <span className=" p-2 sm:p-4 font-bold border animate-pulse rounded-tl-[65px] rounded-bl-[35px] rounded-tr-[35px] rounded-br-[65px]  rounded-b-sm border-mustard">
            Info{" "}
          </span>
        </h1>

        <p className="text-gray-400 text-xs sm:leading-6 lg:leading-snug -mb-20 md:mb-0 sm:text-lg font-light tracking-wide">
          "My name is Asif Sabir and I am a passionate MERN stack developer. I
          am deeply committed to writing clean, efficient, and well-organized
          code, and I am always eager to learn new technologies and programming
          languages. I have a strong desire to develop innovative and
          user-friendly applications that deliver the best possible experience
          for the end-user. Whether it's working on a new project or
          troubleshooting a complex issue, I am always up for the challenge and
          thrive on the satisfaction of finding a solution. I believe that
          programming is not just a job, but a true passion, and I am excited to
          continue growing and developing my skills as a developer."
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
