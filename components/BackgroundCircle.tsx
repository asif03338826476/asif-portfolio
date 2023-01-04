import { motion } from "framer-motion";
import React from "react";

type Props = {};
const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.1, 0.3, 1],
        borderRadius: ["20", "30", "50", "80", "20"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="border border-[#5c5b5b] absolute h-[200px] w-[200px] rounded-full animate-ping mt-52" />
      <div className="border border-[#333333] absolute h-[300px] w-[300px] rounded-full  mt-52" />
      <div className="border border-[#333333] absolute h-[500px] w-[500px] rounded-full  mt-52" />
      <div className="border border-[#F7AB0A] opacity-20 absolute h-[650px] w-[650px] rounded-full animate-pulse mt-52" />
      <div className="border border-[#333333] absolute h-[800px] w-[800px] rounded-full animate-ping mt-52" />
    </motion.div>
  );
};

export default BackgroundCircle;
