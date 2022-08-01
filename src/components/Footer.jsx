import React from "react";
import Social from "./Social";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="lg:px-20  mt-[60px] mb-3 bottom-0 items-center font-bold flex flex-col justify-center space-y-2 lg:flex-row lg:justify-between lg:space-y-0">
      <div>
        <p>Developed by Anthony ADELISE </p>
      </div>
      <div>
        <p>Copyright © {year} A.A</p>
      </div>
      <div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
