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
        <ul className="pt-8 flex flex-wrap justify-center lg:justify-around ">
          {projects.map((project) => (
            <div className="card">
              <li className=" flex flex-col items-center space-y-4">
                <div className="w-[300px] pt-5">
                  <img src={project.img} alt="img project" />
                </div>
                <h1>title</h1>
                <p className="text-left">
                  Lorem ipsum dolor sit amet consecteur adipisicing elit. Iste
                  doloribus inventore harum cumque blanditiis minima.
                </p>
              </li>
              <div className="flex justify-around pt-10 pb-10">
                <button className="btn flex justify-center items-center">
                  <DiGithubBadge className="text-2xl " />
                  <p>Github</p>
                </button>
                <button className="btn">
                  <TbExternalLink className="text-2xl " href={project.link} />
                  <p>lien</p>
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsProps;
