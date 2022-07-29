import React, { useEffect, useState } from "react";

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
      className=" text-lg p1 rounded-md nav-link"
    >
      {theme === "dark" ? "🌝 Light" : "🌚 Dark"}
    </button>
  );
};

export default Button;
