
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
      icon: <FaReact style={{ color: "#2aadd1" }} />,
      level: 80,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs style={{ color: "#3c873a" }} />,
      level: 70,
    },
    {
      name: "MySQL",
      icon: <SiMysql style={{ color: "#264de4" }} />,
      level: 85,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 style={{ color: "#e34c26" }} />,
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <FaJs style={{ color: "#f0db4f" }} />,
      level: 85,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap style={{ color: "#563d7c" }} />,
      level: 75,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt style={{ color: "#264de4" }} />,
      level: 85,
    },
    {
      name: "Git & GitHub",
      icon: (
        <span className="d-flex align-items-center" style={{ gap: "6px" }}>
          <FaGitAlt style={{ color: "#f1502f" }} />
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
        <h3 className="fw-bold mb-4" style={{ color: "#80db66" }}>
          Skills
        </h3>
        <div className="row g-4 justify-content-center">
          <h4>Technical Skills</h4>
          {/* Web Development */}
          <div className="col-md-6 d-flex flex-wrap justify-content-center gap-4">
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
          <div className="row g-4 justify-content-center">
            <h4>Soft Skills</h4>
            {/* Soft Skills */}
            <div className="col-md-6 d-flex flex-wrap justify-content-center gap-4">
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
