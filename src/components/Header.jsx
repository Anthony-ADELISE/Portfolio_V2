import React, { useState } from "react";

//import components
import NavBar from "./NavBar";

//import logo
import Logo from "../assets/img/logo.png";
import Logo2 from "../assets/img/logo_antho3.png";

// import icons
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import NavBarMobile from "./NavBarMobile";
import PlaySound from "./PlaySound";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div>
      <header
        className="py-6"
        // data-aos="fade-down"
        // data-aos-duration="2000"
        // data-aos-delay="500"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* logo */}
            <Link to="/">
              <img className="h-[60px]" src={Logo2} alt="logo" />
            </Link>
            {/* sound */}
            {/* <PlaySound /> */}
            {/* nav */}
            <NavBar />
            {/* nav mobile btn */}
            <HiMenu
              onClick={() => setNavMobile(true)}
              className="text-3xl cursor-pointer text-body dark:text-white lg:hidden"
            />
          </div>
        </div>
      </header>
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all z-10 `}
      >
        <NavBarMobile setNavMobile={setNavMobile} />
      </div>
    </div>
  );
};

export default Header;
