import React from "react";
import { NavLink } from "react-router-dom";
import CV from "../assets/img/cv.pdf";

import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex lg:pt-4">
      <ul className="flex items-center space-x-12 font-secondary cursor-pointer ">
        <NavLink
          to="/about"
          className="nav-link font-bold"
          activeClasseName="active"
        >
          About
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
        <NavLink to="/resume" className="nav-link font-bold">
          Resume
        </NavLink>
        <Button />
      </ul>
    </nav>
  );
};

export default NavBar;
