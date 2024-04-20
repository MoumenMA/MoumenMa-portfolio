import { PROJECTS } from "../constants";

import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div className="inline-flex items-center justify-center w-full mt-24 mb-12  ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-5xl underline underline-offset-8  decoration-blue-800  mb-9"
        >
          Project 🎨
        </motion.h1>
      </div>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={700}
                height={300}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="ml-7  w-full max-w-xl lg:w-3/4 space-y-6"
            >
              <h6 className="font-semibold">{project.title}</h6>
              <p>{project.description} </p> <br />
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-200 px-2 py-1 text-sm font-meduim"
                >
                  {tech}
                </span>
              ))}
              <div className="flex items-center gap-3 mt-7">
                <a href={project.github} target="_blank">
                  <IoLogoGithub className=" size-6" />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
