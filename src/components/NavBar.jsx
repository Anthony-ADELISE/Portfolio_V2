import React from "react";
import { NavLink } from "react-router-dom";
import CV from "../assets/img/cv.pdf";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex lg:pt-4">
      <ul className="flex items-center space-x-12 font-secondary cursor-pointer">
        <NavLink
          to="/skills"
          className="nav-link font-bold"
          activeClasseName="active"
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link font-bold"
          activeClasseName="active"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link font-bold"
          activeClasseName="active"
        >
          Contact
        </NavLink>
        <a
          href={CV}
          downlaod="cv"
          className="btn font-bold"
          activeClasseName="active"
        >
          Donwload CV
        </a>
        <Button />
      </ul>
    </nav>
  );
};

export default NavBar;
