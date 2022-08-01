import React from "react";

// import icon
import { FaHandHoldingHeart } from "react-icons/fa";

// import image
import Dev from "../assets/img/programming.svg";

const AboutMe = () => {
  return (
    <section className="min-h-[600px] pt-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
          {/* text */}
          <div className="space-y-3 lg:text-left">
            <h1 className="text-center text-3xl font-bold lg:text-3xl">
              Qui <span className="span">Je Suis ?</span>
            </h1>
            <p className="font-semibold lg:text-lg">
              Bonjour tout le monde, je m'appelle{" "}
              <span className="span">Anthony ADELISE</span> et je suis de la{" "}
              <span className="span">Martinique</span>. <br />
              Je suis actuellement en Master 2{" "}
              <span className="span">Architech Digital</span> à Digital school
              of Paris !
            </p>

            <p className="font-semibold lg:text-lg">
              Hormis coder, voici les activités que j'aime faire :
            </p>
            <div className="text-lg pb-4 lg:pb-4">
              <div className="flex items-center font-semibold space-x-2 pl-5">
                <FaHandHoldingHeart />
                <p>Jouer aux jeux vidéos</p>
              </div>
              <div className="flex items-center font-semibold space-x-2 pl-5">
                <FaHandHoldingHeart />
                <p>Jouer au Football</p>
              </div>
              <div className="flex items-center font-semibold space-x-2 pl-5">
                <FaHandHoldingHeart />
                <p>Les nouvelles technologies</p>
              </div>
            </div>
          </div>
          {/* image */}
          <div>
            <img src={Dev} alt="programming" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
