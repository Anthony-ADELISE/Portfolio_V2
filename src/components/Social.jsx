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
        <FaFacebook className="hover:text-[#b936f5]" />
        <BsInstagram className="hover:text-[#b936f5]" />
        <BsTwitter className="hover:text-[#b936f5]" />
        <BsGithub className="hover:text-[#b936f5]" />
      </div>
    </div>
  );
};

export default Social;
