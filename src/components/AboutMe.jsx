import React from "react";

// import icon
import { FaHandHoldingHeart } from "react-icons/fa";

// import image
import Dev from "../assets/img/programming.svg";

const AboutMe = () => {
  return (
    <section className="min-h-[540px] pt-24 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-5">
          {/* text */}
          <div className="space-y-5 lg:text-left">
            <h1
              className="text-center text-3xl font-bold lg:text-4xl"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              Qui <span className="spans">Suis-Je ?</span>
            </h1>
            <p
              className=" text-lg lg:text-xl"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              Bonjour tout le monde, je m'appelle{" "}
              <span className="spans">Anthony ADELISE</span> et je suis de la{" "}
              <span className="spans">Martinique</span>. <br />
              Je suis actuellement en Master 2{" "}
              <span className="spans">Architech Digital</span> à Digital school
              of <span className="spans">Paris</span>.
            </p>

            <p
              className="text-lg lg:text-xl"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              Hormis coder, voici les activités que j'aime faire :
            </p>
            <div
              className="text-lg lg:text-xl"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <div className="flex items-center space-x-2 pl-5">
                <FaHandHoldingHeart />
                <p>Jouer aux jeux vidéos</p>
              </div>
              <div className="flex items-center space-x-2 pl-5">
                <FaHandHoldingHeart />
                <p>Jouer au Football</p>
              </div>
              <div className="flex items-center  space-x-2 pl-5">
                <FaHandHoldingHeart />
                <p>Les nouvelles technologies</p>
              </div>
            </div>
          </div>
          {/* image */}
          <div
            className="py-6 w-[325px] lg:w-[475px] mx-auto "
            // data-aos="flip-left"
            // data-aos-duration="2000"
            // data-aos-delay="500"
          >
            <img src={Dev} alt="programming" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
