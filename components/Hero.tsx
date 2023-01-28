import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi' 👋 This is Asif",
      "Guy-who-loves-cricket.tsx",
      "<ButLovesCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col text-center overflow-hidden space-y-8 items-center justify-center">
      <BackgroundCircle />
      <img
        src="/asif.jpeg"
        alt=""
        className="h-32 w-32 object-cover mx-auto rounded-full"
      />
      <h1 className="text-xs tracking-[10px] sm:text-sm sm:tracking-[15px] text-gray-500 z-20">
        SOFTWARE ENGINEER
      </h1>
      <h1 className=" flex font-semibold text-2xl lg:text-3xl z-20">
        <p>{text}</p>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div className="flex sm:gap-2 pt-2">
        <div className="navButton">about</div>
        <div className="navButton">experience</div>
        <div className="navButton">skills</div>
        <div className="navButton">projects</div>
      </div>
    </div>
  );
};

export default Hero;
