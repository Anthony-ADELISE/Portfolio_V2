import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

// import image
import Ghost from "../assets/img/ghost.png";

const NotFound = () => {
  return (
    <div className="max-w-screen">
      <div className="container mx-auto ">
        <Header />
        {/* text */}
        <div className="flex flex-col lg:flex-row lg:justify-center items-center pt-10 lg:pt-20 space-x-5  lg:space-x-32">
          <div
            className="text-center lg:text-left pb-6 "
            data-aos="fade-down-right"
            data-aos-duration="2000"
            data-aos-delay="500"
            style={{ fontFamily: "Space Grotesk" }}
          >
            <p className="pb-5 font-semibold">Error 404</p>
            <h1
              className="text-6xl font-bold"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Hey Dude
            </h1>
            <p className="text-sm py-6 font-semibold">
              Where are you going like this ?
            </p>
            {/* button */}
            <Link
              className="text-white text-md bg-gray-700 h-10 hover:bg-gradient-to-l hover:from-[#fffb] hover:to-[#b936f5] rounded-full p-2 text-center"
              to="/"
            >
              Go Home
            </Link>
          </div>

          {/* image */}
          <div className="w-[350px] animate-pulse">
            <img
              src={Ghost}
              alt="ghost img"
              data-aos="flip-right"
              data-aos-duration="2000"
              data-aos-delay="500"
            />
            <div className="w-[215px] h-[25px] bg-shadow dark:bg-whiteshadow my-0 mx-auto blur-[7px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
