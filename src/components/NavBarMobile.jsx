import React from "react";
import { NavLink } from "react-router-dom";

//Import pdf
import CV from "../assets/img/cv.pdf";

// Import icon
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const NavBarMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-[#501f66] text-white w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 font-secondary cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-12 h-full font-secondary cursor-pointer">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/resume" className="nav-link">
          Resume
        </NavLink>
        <Button />
      </ul>
    </nav>
  );
};

export default NavBarMobile;
