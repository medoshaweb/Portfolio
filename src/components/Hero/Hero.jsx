import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
  FaShieldAlt,
  FaBug,
  FaLock,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiNpm,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import "./hero.css";
import profilePic from "../../assets/firstimage.jpg";

export default function Hero() {
  const orbitIcons = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: SiExpress, color: "#FFFFFF" },
    { Icon: SiMysql, color: "#4479A1" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: FaHtml5, color: "#E34F26" },
    { Icon: FaCss3Alt, color: "#1572B6" },
    { Icon: FaJs, color: "#F7DF1E" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: FaBootstrap, color: "#7952B3" },
    { Icon: FaGitAlt, color: "#F05032" },
    { Icon: FaGithub, color: "#181717" },
    { Icon: SiNpm, color: "#CB3837" },
    { Icon: SiPostgresql, color: "#4169E1" },
    { Icon: SiMysql, color: "#15301c" },
    { Icon: BiLogoVisualStudio, color: "#3498DB" },
    { Icon: FaNetworkWired, color: "#F1C40F" },
    { Icon: FaShieldAlt, color: "#2ECC71" },
    { Icon: FaBug, color: "#E74C3C" },
    { Icon: FaLock, color: "#3498DB" },
  ];

  return (
    <section className="hero-section" id="home">
      {/* Left Side Decorative Elements */}
      <div className="hero-side-elements left-side">
        <motion.div
          className="floating-code-snippet"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="code-block">
            <div className="code-line">
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">developer</span> = {"{"}
            </div>
            <div className="code-line code-indent">
              <span className="code-property">name</span>:{" "}
              <span className="code-string">'Hailu'</span>,
            </div>
            <div className="code-line code-indent">
              <span className="code-property">role</span>:{" "}
              <span className="code-string">'Full-Stack'</span>,
            </div>
            <div className="code-line code-indent">
              <span className="code-property">passion</span>:{" "}
              <span className="code-string">'Coding'</span>
            </div>
            <div className="code-line">{"}"}</div>
          </div>
        </motion.div>

        <motion.div
          className="floating-icon-left"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaReact size={60} style={{ color: "#61DAFB", opacity: 0.2 }} />
        </motion.div>

        <motion.div
          className="floating-icon-left"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ marginTop: "150px" }}
        >
          <FaNodeJs size={50} style={{ color: "#339933", opacity: 0.2 }} />
        </motion.div>
      </div>

      {/* Right Side Decorative Elements */}
      <div className="hero-side-elements right-side">
        <motion.div
          className="floating-icon-right"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaNetworkWired
            size={55}
            style={{ color: "#F1C40F", opacity: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="floating-icon-right"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          style={{ marginTop: "180px" }}
        >
          <FaShieldAlt size={60} style={{ color: "#2ECC71", opacity: 0.2 }} />
        </motion.div>

        <motion.div
          className="floating-code-snippet right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="code-block">
            <div className="code-line">
              <span className="code-keyword">function</span>{" "}
              <span className="code-variable">buildProject</span>() {"{"}
            </div>
            <div className="code-line code-indent">
              <span className="code-keyword">return</span>{" "}
              <span className="code-string">'excellence'</span>;
            </div>
            <div className="code-line">{"}"}</div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrolling icons container */}
      <div className="scroll-container">
        <div className="scroll-icons-wrapper">
          {[...orbitIcons, ...orbitIcons, ...orbitIcons].map((iconData, i) => (
            <div key={i} className="scroll-icon">
              <iconData.Icon
                className="icon"
                style={{ color: iconData.color }}
              />
            </div>
          ))}
        </div>
      </div>

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

        <div className="hero-buttons">
          <motion.a
            href="#projects"
            className="hero-btn primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="hero-btn primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="/assets/resume.pdf"
            download="Hailu_Resume.pdf"
            className="hero-btn primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV 📄
          </motion.a>
        </div>

        {/* Stats Section */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="stat-item">
            <h3>15+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-item">
            <h3>18+</h3>
            <p>Technologies</p>
          </div>
          <div className="stat-item">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
