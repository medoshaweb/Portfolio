
import React from "react";
import { SiMysql } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaNetworkWired,
  FaLock,
  FaHtml5,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import "./skills.css"; // We'll put circular progress styles here


export default function Skills() {
  const webSkills = [
    {
      name: "React",
      icon: <FaReact style={{ color: "#61DAFB" }} />,
      level: 80,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs style={{ color: "#339933" }} />,
      level: 75,
    },
    {
      name: "Express",
      icon: <span style={{ color: "#000", fontWeight: "bold" }}>EX</span>,
      level: 70,
    },
    {
      name: "MySQL",
      icon: <SiMysql style={{ color: "#4479A1" }} />,
      level: 85,
    },
    {
      name: "MongoDB",
      icon: <span style={{ color: "#47A248", fontWeight: "bold" }}>M</span>,
      level: 75,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 style={{ color: "#E34F26" }} />,
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <FaJs style={{ color: "#F7DF1E" }} />,
      level: 85,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap style={{ color: "#7952B3" }} />,
      level: 75,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt style={{ color: "#1572B6" }} />,
      level: 85,
    },
    {
      name: "Git & GitHub",
      icon: (
        <span className="d-flex align-items-center" style={{ gap: "6px" }}>
          <FaGitAlt style={{ color: "#F05032" }} />
          <FaGithub style={{ color: "#181717" }} />
        </span>
      ),
      level: 85,
    },
  ];

  const networkSkills = [
    {
      name: "Network Design",
      icon: <FaNetworkWired style={{ color: "#f1c40f" }} />,
      level: 75,
    },
    {
      name: "Firewalls & Security",
      icon: <FaLock style={{ color: "#e74c3c" }} />,
      level: 65,
    },
    {
      name: "VLANs, OSPF, BGP",
      icon: <FaNetworkWired style={{ color: "#2ecc71" }} />,
      level: 70,
    },
  ];
  
  const softSkills = [
    {
      name: "Detailed Oriented",
      
      level: 95,
    },
    {
      name: "Team Player",
    
      level: 90,
    },
    {
      name: "Strong Communication",
      
      level: 92,
    },
    {
      name: "Problem Solving",
      
      level: 94,
    },
    {
      name: "Critical Thinking",
      
      level: 85,
    },
    {
      name: "Time Management",
      
      level: 95,
    },
    {
      name: "Quick Learner",

      level: 98,
      
    },
  ];

  return (
    <section className="mb-5">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2" style={{ color: "#80db66", fontSize: "2.5rem" }}>
            Skills & Expertise
          </h2>
          <div className="divider mx-auto"></div>
          <p className="mt-3 lead">A comprehensive overview of my technical and professional capabilities</p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-12 mb-4">
            <h4 className="text-center mb-4" style={{ color: "#80db66" }}>
              Technical Skills
            </h4>
          </div>
          {/* Web Development */}
          <div className="col-md-6 d-flex flex-wrap justify-content-center gap-4">
            <h5 className="w-100 text-center mb-3" style={{ color: "#e0e9e3" }}>Web Development</h5>
            {webSkills.map((skill, i) => (
              <Motion.div
                key={i}
                className="circular-skill"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="circular-progress" viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <Motion.path
                    className="circle"
                    strokeDasharray={`${skill.level}, 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "0,100" }}
                    animate={{ strokeDasharray: `${skill.level}, 100` }}
                    transition={{ duration: 1 + i * 0.3 }}
                  />
                </svg>
                <div className="skill-label">
                  {skill.icon} {skill.name}
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Networking & Security */}
          <div className="col-md-6 d-flex flex-wrap justify-content-center gap-4">
            <h5 className="w-100 text-center mb-3" style={{ color: "#e0e9e3" }}>Network & Security</h5>
            {networkSkills.map((skill, i) => (
              <Motion.div
                key={i}
                className="circular-skill"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="circular-progress" viewBox="0 0 36 36">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <Motion.path
                    className="circle"
                    strokeDasharray={`${skill.level}, 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "0,100" }}
                    animate={{ strokeDasharray: `${skill.level}, 100` }}
                    transition={{ duration: 1 + i * 0.3 }}
                  />
                </svg>
                <div className="skill-label">
                  {skill.icon} {skill.name}
                </div>
              </Motion.div>
            ))}
          </div>
          <div className="row g-4 justify-content-center mt-4">
            <div className="col-12 mb-4">
              <h4 className="text-center mb-4" style={{ color: "#80db66" }}>
                Professional Skills
              </h4>
            </div>
            {/* Soft Skills */}
            <div className="col-md-12 d-flex flex-wrap justify-content-center gap-4">
              {softSkills.map((skill, i) => (
                <Motion.div
                  key={i}
                  className="circular-skill"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="circular-progress" viewBox="0 0 36 36">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <Motion.path
                      className="circle"
                      strokeDasharray={`${skill.level}, 100`}
                      d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ strokeDasharray: "0,100" }}
                      animate={{ strokeDasharray: `${skill.level}, 100` }}
                      transition={{ duration: 1 + i * 0.3 }}
                    />
                  </svg>
                  <div className="skill-label">
                    {skill.icon} {skill.name}
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
