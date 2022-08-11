import React from "react";

// import icons
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div>
      {/* icons */}
      <div className=" flex space-x-4 text-3xl justify-center cursor-pointer lg:justify-start pb-4 lg:text-3xl ">
        <a className="text-3xl" href="https://www.instagram.com/tini972/">
          <FaFacebook className="socials" />
        </a>

        <a className="text-3xl" href="https://www.instagram.com/tini972/">
          <BsInstagram className="socials" />
        </a>
        <a className="text-3xl" href="https://twitter.com/AdeliseAnthony">
          <BsTwitter className="socials" />
        </a>
        <a className="text-3xl" href="https://github.com/Anthony-ADELISE">
          <BsGithub className="socials" />
        </a>
      </div>
    </div>
  );
};

export default Social;
