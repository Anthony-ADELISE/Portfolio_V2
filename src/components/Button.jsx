import React, { useEffect, useState } from "react";

//import icon
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Button = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      type="button"
      onClick={handleThemeSwitch}
      className=" text-2xl p1 rounded-md nav-link"
    >
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default Button;
