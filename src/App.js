// Import router
import { Routes, Route } from "react-router-dom";

// Import pages for router
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

// import useEffect
import { useEffect } from "react";

// Import Aos from animation on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  useEffect(() => {
    Aos.init({});
  });

  return (
    <div className="">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
      <ParticlesComponent />
    </div>
  );
}

export default App;
