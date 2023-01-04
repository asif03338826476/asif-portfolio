import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex p-3 z-20 mx-auto items-center gap-2 max-w-7xl">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex-1"
      >
        <SocialIcon
          className="hover:scale-105 transition-all delay-75 duration-150"
          bgColor="none"
          fgColor="gray"
          url="https://www.facebook.com/profile.php?id=100006032834216"
        />
        <SocialIcon
          className="hover:scale-105 transition-all delay-75 duration-150"
          bgColor="none"
          fgColor="gray"
          url="https://www.linkedin.com/in/asif-sabir8826476/"
        />
        <SocialIcon
          className="hover:scale-105 transition-all delay-75 duration-150"
          bgColor="none"
          fgColor="gray"
          url="https://github.com/asif03338826476"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex  items-center"
      >
        <SocialIcon
          className="hover:scale-105 transition-all delay-75 duration-150 cursor-pointer"
          bgColor="none"
          fgColor="gray"
          network="email"
        />
        <span className="hidden md:inline-flex text-gray-400 text-sm">
          Get in Touch
        </span>
      </motion.div>
    </header>
  );
};

export default Header;
