import React from "react";
import { motion as Motion } from "framer-motion";
import aboutPic from "../../assets/about.jpg";
import networkAdmin from "../../assets/Brain.png";
import cybersecurity from "../../assets/cyber.png";
import mern from "../../assets/mern.png";
import "./about.css"; 

export default function About() {
  const achievements = [
    { icon: "🎓", title: "Education", desc: "Network Administration & Security Management" },
    { icon: "💻", title: "Specialization", desc: "Full-Stack MERN Development" },
    { icon: "🔐", title: "Focus Area", desc: "Cybersecurity & Network Management" },
  ];

  return (
    <section className="mb-5 mt-5">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2" style={{ color: "#80db66", fontSize: "2.5rem" }}>
            About Me
          </h2>
          <div className="divider mx-auto"></div>
        </div>

        <div className="row align-items-center g-4 mb-5">
          <div className="col-md-4 text-center">
            <Motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="about-image-wrapper">
                <img
                  src={aboutPic}
                  alt="Hailu"
                  className="about-image rounded-circle"
                />
                <div className="image-glow"></div>
              </div>
            </Motion.div>
          </div>
          <div className="col-md-8">
            <h3 className="fw-bold mb-3" style={{ color: "#80db66" }}>
              Full-Stack Developer | Cybersecurity & Network Management
            </h3>
            <p className="lead mb-3">
              Hi! I'm a junior full-stack web developer, graduating in Network
              Administration and Security Management, with a passion for building
              clean, responsive, and secure web applications.
            </p>
            <p>
              I'm completing my MERN development courses and have hands-on experience with
              JavaScript, React, Node.js, Express, MySQL, Postgresql, and Git/GitHub. I
              enjoy combining my web development skills with my knowledge of
              network administration and cybersecurity to create efficient and
              secure projects. I'm eager to contribute to real-world projects,
              internships, or freelance work to grow my experience and make an
              impact.
            </p>
            
            {/* Achievement Cards */}
            <div className="row g-3 mt-4">
              {achievements.map((achievement, i) => (
                <Motion.div
                  key={i}
                  className="col-md-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="achievement-card text-center p-3 h-100">
                    <div className="achievement-icon mb-2" style={{ fontSize: "2.5rem" }}>
                      {achievement.icon}
                    </div>
                    <h6 className="fw-bold mb-1" style={{ color: "#80db66" }}>
                      {achievement.title}
                    </h6>
                    <p className="small mb-0">{achievement.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Visual */}
        <Motion.div
          className="tech-visual mt-5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="mb-4" style={{ color: "#80db66" }}>My Expertise Areas</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="tech-badge">
              <img src={networkAdmin} alt="Network Admin" width={180} />
              <h4>Networking</h4>
            </div>
            <div className="tech-badge">
              <img src={cybersecurity} alt="Cybersecurity" width={180} />
              <h4>Cybersecurity</h4>
            </div>
            <div className="tech-badge">
              <img src={mern} alt="MERN Stack" width={180} />
              <h4>MERN Stack</h4>
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
