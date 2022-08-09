import React from "react";
import { projects } from "../data/data";
// import icons
import { DiGithubBadge } from "react-icons/di";
import { TbExternalLink } from "react-icons/tb";

console.log(projects);

const ProjectsProps = () => {
  return (
    <section className="container mx-auto">
      <div className="pt-20">
        {/* Text */}
        <div className="text-4xl text-center">
          <h1>
            Mes Projets <span className="spans">Récents</span>
          </h1>
        </div>
        {/* Cards projects */}
        <ul className="pt-8 flex justify-center lg:justify-around ">
          {projects.map((project) => (
            <li className="border-[1.7px] px-10 ml-10 border-[#D9B99B]">
              <div className="w-[150px]">
                <img src={project.img} alt="img project" />
              </div>
              <h1>title</h1>
              <p>
                Lorem ipsum dolor sit amet consecteur adipisicing elit. Iste
                doloribus inventore harum cumque blanditiis minima.
              </p>
              <div className="flex items-center justify-center">
                <DiGithubBadge />
                <TbExternalLink />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsProps;
