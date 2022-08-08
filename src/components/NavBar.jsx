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
          className={({ isActive }) =>
            isActive ? "active" : "nav-link font-bold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "active" : "nav-link font-bold"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active" : "nav-link font-bold"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "active" : "nav-link font-bold"
          }
        >
          Resume
        </NavLink>
        <Button />
      </ul>
    </nav>
  );
};

export default NavBar;
