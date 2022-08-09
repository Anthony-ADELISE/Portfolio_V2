import React from "react";
import { Link } from "react-router-dom";

// import components
import Social from "./Social";

// import image
import Avatar from "../assets/img/avatar.png";

const Presentation = () => {
  return (
    <section className="min-h-[600px] pt-20 text-center">
      <div className="container mx-auto">
        {/* Text */}
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          <div
            className="lg:text-left "
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="500"
            style={{ fontFamily: "" }}
          >
            <h1 className="text-3xl font-bold mb-8 lg:text-4xl lg:leading-snug">
              Hello👋🏾, Moi c'est <span className="spans">Anthony</span>. <br />{" "}
              Developpeur Front-end.
            </h1>
            <p className="font-secondary mb-10 max-w-[440px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consecteur adipisicing elit. Iste
              doloribus inventore harum cumque blanditiis minima.
            </p>
            {/* btn */}
            <div className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start">
              <button className="btn">
                <Link to="/contact" className="font-bold">
                  Contactez moi
                </Link>
              </button>
            </div>
            <Social />
          </div>
          {/* Image */}
          <div
            className="bg-[#D9B99B] rounded-full"
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
