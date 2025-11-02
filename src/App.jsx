
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your pages/components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // Initialize AOS animations
  useEffect(() => {
    
    AOS.init({
      duration: 1000,  // how long the animation lasts (ms)
      once: true,      // only animate once per scroll
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="app-container ">
      <section id="hero" data-aos="fade-up">
        <Hero />
      </section>
      <section id="about" data-aos="fade-right">
        <About />
      </section>
      <section id="skills" data-aos="zoom-in">
        <Skills />
      </section>
      <section id="projects" data-aos="flip-left">
        <Projects />
      </section>
      <section id="certifications" data-aos="fade-up">
        <Certifications />
      </section>
      <section id="contact" data-aos="fade-up" style={{ minHeight: "80vh"}}>
        <Contact />
      </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
