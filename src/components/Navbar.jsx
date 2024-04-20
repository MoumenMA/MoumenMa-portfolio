import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center ">
        <h1 className=" text-2xl ">MoumenMA</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-2 text-2xl ">
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
      </div>
    </nav>
  );
}

export default Navbar;
