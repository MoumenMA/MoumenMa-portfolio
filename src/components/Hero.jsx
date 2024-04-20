import React from "react";

import photo from "../assets/images/tswirti.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero() {
  return (
    <div className=" pb-4 lg:mb-35 lg:ml-14 mb-20">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className=" text-3xl pb-6 tracking-tight lg:mt-6 lg:text-6xl"
            >
              Nice to meet you! 👋🏼 <br />
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="   text-3xl pb-2 tracking-tight  lg:mt-2  lg:text-6xl underline underline-offset-8  decoration-blue-800 tracking-text"
            >
              I'm Mohammed Amine Moumen
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" text-lg my-2 max-w-xl py-6 tracking-tighter"
            >
              A web developer, <br />
              passionate about building a modern web application that users
              love.
            </motion.p>

           

            <br />
          </div>
        </div>
        <div className="w-full  lg:w-1/2 lg:p-8  ">
          <div className="flex justify-center lg:ml-24 ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className=" rounded-3xl  h-96  "
              src={photo}
              alt="moumen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
