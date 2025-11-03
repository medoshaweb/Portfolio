import React from "react";
import {
  SiMysql,
  SiReactrouter,
  SiAxios,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiNpm,
  SiExpress,
  SiAuth0,
  SiPhpmyadmin,
  SiPostman,
} from "react-icons/si";
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
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { FcLinux } from "react-icons/fc";
import { BsFiletypeJson } from "react-icons/bs";
import { motion as Motion } from "framer-motion";
import "./skills.css";

export default function Skills() {
  // Organized by categories
  const skillsByCategory = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
        { name: "HTML5", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
        { name: "CSS3", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
        { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
        {
          name: "Bootstrap/Tailwind CSS",
          icon: <FaBootstrap style={{ color: "#7952B3" }} />,
        },
        {
          name: "React Router & Context API",
          icon: <SiReactrouter style={{ color: "#CC3333" }} />,
        },
        {
          name: "Responsive Design & UI/UX",
          icon: <DiResponsive style={{ color: "#4CAF50" }} />,
        },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
        {
          name: "Express",
          icon: <SiExpress style={{ color: "#FFFFFF" }} />,
        },
        {
          name: "JWT Authentication",
          icon: <SiAuth0 style={{ color: "#FFFFFF" }} />,
        },
        {
          name: "REST API",
          icon: <SiAxios style={{ color: "#5A29E4" }} />,
        },
      ],
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql style={{ color: "#4169E1" }} />,
        },
        {
          name: "PHPMyAdmin",
          icon: <SiPhpmyadmin style={{ color: "#47A248" }} />,
        },
        {
          name: "SQL Queries",
          icon: <PiFileSql style={{ color: "#a27047" }} />,
        },
      ],
    },
    {
      category: "Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git & GitHub",
          icon: (
            <span className="d-flex align-items-center" style={{ gap: "6px" }}>
              <FaGitAlt style={{ color: "#F05032" }} />
              <FaGithub style={{ color: "#181717" }} />
            </span>
          ),
        },
        {
          name: "VS Code",
          icon: <BiLogoVisualStudio style={{ color: "#244877" }} />,
        },
        {
          name: "VS Code",
          icon: <SiPostman style={{ color: "#ff6c37" }} />,
        },
        { name: "NPM", icon: <SiNpm style={{ color: "#CB3837" }} /> },
      ],
    },
    {
      category: "Network & Security",
      icon: "🔐",
      skills: [
        {
          name: "Networking",
          icon: <FaNetworkWired style={{ color: "#F1C40F" }} />,
        },
        {
          name: "Firewall & Security",
          icon: <FaShieldAlt style={{ color: "#2ECC71" }} />,
        },
        {
          name: "Security Management",
          icon: <FaLock style={{ color: "#3498DB" }} />,
        },
        {
          name: "Routing, switching, wireless network",
          icon: <FaNetworkWired style={{ color: "#2ecc71" }} />,
        },
        {
          name: "Network Tools and Troubleshooting",
          icon: <FaTools style={{ color: "#cc2e48" }} />,
        },
      ],
    },
    {
      category: "Professional Skills",
      icon: "⭐",
      skills: [
        { name: "Detail Oriented", icon: "📋" },
        { name: "Team Player", icon: "🤝" },
        { name: "Strong Communication", icon: "💬" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Critical Thinking", icon: "🧠" },
        { name: "Time Management", icon: "⏰" },
        { name: "Quick Learner", icon: "🚀" },
      ],
    },
    {
      category: "Other",
      icon: "🔧",
      skills: [
        {
          name: "Linux",
          icon: <FcLinux style={{ color: "#3178C6" }} />,
        },
        {
          name: "API and JSON",
          icon: <BsFiletypeJson style={{ color: "#3498DB" }} />,
        },
      ],
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
          <h2
            className="fw-bold mb-2"
            style={{ color: "#80db66", fontSize: "2.5rem" }}
          >
            Skills & Expertise
          </h2>
          <div className="divider mx-auto"></div>
          <p className="mt-3 lead">
            A comprehensive overview of my technical and professional
            capabilities
          </p>
        </div>
        {/* Skills Table Grid by Category */}
        <div className="skills-table-grid">
          {skillsByCategory.map((category, catIdx) => (
            <Motion.div
              key={catIdx}
              className="skill-category-table"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-table-header">
                <h5 className="category-table-title">
                  <span className="category-table-icon">{category.icon}</span>
                  {category.category}
                </h5>
              </div>
              <div className="skills-table-body">
                {category.skills.map((skill, skillIdx) => (
                  <Motion.div
                    key={skillIdx}
                    className="skill-table-row"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + skillIdx * 0.03,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-table-icon">
                      {typeof skill.icon === "string" ? (
                        <span style={{ fontSize: "1.5rem" }}>{skill.icon}</span>
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <div className="skill-table-name">{skill.name}</div>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
