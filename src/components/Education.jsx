import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

function Education() {
  return (
    <>
      <div className="inline-flex items-center justify-center w-full  mt-24 mb-12 ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-5xl underline underline-offset-8  decoration-blue-800  mb-9"
        >
          Education
        </motion.h1>
      </div>
      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className=" ml-20 mb-8 flex flex-wrap lg:justify-center "
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm font-semibold "> {education.year} </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{education.company}</h6>
              <p>{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Education;
