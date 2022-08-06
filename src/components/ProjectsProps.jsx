import React, { useState } from "react";
import { projects } from "../data/data";
// import icons
import { FiArrowDownRight } from "react-icons/fi";

console.log(projects);

const ProjectsProps = () => {
  return (
    <section className="container mx-auto">
      {/* {projects.map((project) => ( */}
      <div className="">
        <img src="" alt="" />
        <div>
          <p>Antonhy</p>
          <p>Full Stack dev</p>
        </div>
        <div>
          <FiArrowDownRight />
        </div>
      </div>
      {/* ))} */}
    </section>
  );
};

export default ProjectsProps;
