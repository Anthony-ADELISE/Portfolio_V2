import React from "react";
import "./Social.css";

// import icons
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div>
      {/* icons */}
      <div className=" flex space-x-4 text-4xl justify-center pb-6 lg:justify-start lg:text-4xl ">
        <FaFacebook className="hover:text-[#b936f5]" />
        <BsInstagram className="hover:text-[#b936f5]" />
        <BsTwitter className="hover:text-[#b936f5]" />
        <BsGithub className="hover:text-[#b936f5]" />
      </div>
    </div>
  );
};

export default Social;
