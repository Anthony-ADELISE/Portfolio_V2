import React from "react";
import { NavLink } from "react-router-dom";

//Import pdf
import CV from "../assets/img/cv.pdf";

// Import icon
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const NavBarMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-[#f5f5dc] dark:bg-[#000000d6] dark:text-white text-gray-600 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 font-secondary cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-12 h-full font-secondary cursor-pointer">
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

export default NavBarMobile;
