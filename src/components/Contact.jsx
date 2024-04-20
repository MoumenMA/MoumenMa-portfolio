import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSucces] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3djrl89", "template_uud6adf", formRef.current, {
        publicKey: "gJywHIyZ5fszURwS0",
      })
      .then(
        (result) => {
          setSucces(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <div className="inline-flex items-center justify-center w-full mt-28 mb-12 ">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className=" text-5xl underline underline-offset-8  decoration-blue-800
         mb-9 "
        >
          Get in Touch 📭
        </motion.p>
      </div>
      <div className="mb-8  flex flex-wrap lg:justify-center pb-11  ">
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
          className=" mx-auto"
        >
          <div className="relative z-0  w-96 mb-5 group">
            <input
              type="text"
              required
              placeholder=""
              name="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              for="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              required
              placeholder=""
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              rows={8}
              placeholder=""
              name="message"
              className="block  py-2.5 px-0  h-36 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label
              for="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SEND
          </button>
        </motion.form>
      </div>
      <div className="text-center  tracking-thighter pb-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="m-1 flex items-center justify-center gap-2 text-2xl "
        >
          <a
            href="https://github.com/MoumenMA?tab=overview&from=2024-04-01&to=2024-04-20"
            target="_blank"
          >
            <IoLogoGithub className=" size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-amine-moumen/"
            target="_blank"
          >
            <FaLinkedin className=" size-6" />
          </a>
          <a href="https://www.instagram.com/_____m0umen/" target="_blank">
            <FaInstagram className=" size-6" />
          </a>
          <a href="https://twitter.com/MN40724854" target="_blank">
            <FaXTwitter className=" size-6" />
          </a>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-1 underline underline-offset-8  decoration-blue-800 tracking-text"
        >
          mohamedaminemoumen7@gmail.com
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-1"
        >
          ©MoumenMA 2024
        </motion.p>
      </div>
    </>
  );
}

export default Contact;
