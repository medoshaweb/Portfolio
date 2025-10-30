
import React from "react";
import  {motion}  from "framer-motion";
import {ReactTyped} from "react-typed";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFileCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import "./hero.css";
import profilePic from "../../assets/firstimage.jpg";

export default function Hero() {
  const orbitIcons = [
    FaReact,
    FaNodeJs,
    FaBootstrap,
    FaFileCode,
    FaHtml5,
    FaCss3Alt,
    FaJs,
  ];
  const radius = 180; // distance from profile image

  return (
    <section className="hero-section" id="home">
      {/* Orbit icons container */}
      <motion.div
        className="orbit-container"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {orbitIcons.map((Icon, i) => {
          const angle = (i / orbitIcons.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <motion.div key={i} className="orbit-icon" style={{ x, y }}>
              <Icon className="icon" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.img
          src={profilePic}
          alt="Hailu"
          className="profile-pic"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        <h1 className="hero-title">
          Hi, I’m <span className="highlight">Hailu</span>
        </h1>

        <h2 className="hero-subtitle">
          <ReactTyped
            strings={[
              "Full-Stack Web Developer 💻",
              "Cybersecurity Enthusiast 🔐",
              "Problem Solver 🧠",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <motion.a
          href="#projects"
          className="hero-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>

        <motion.a
          href="/assets/resume.pdf"
          download="Hailu_Resume.pdf"
          className="hero-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV 📄
        </motion.a>
      </div>
    </section>
  );
}
