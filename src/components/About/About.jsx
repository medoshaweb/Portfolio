import React from "react";
 
import { motion as Motion } from "framer-motion";
import aboutPic from "../../assets/about.jpg";
import networkAdmin from "../../assets/network administration.png";
import cybersecurity from "../../assets/cybersecurity.png";
import mern from "../../assets/mern.png"; 

export default function About() {
  return (
    <section className="mb-5 mt-5">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="row align-items-center bg-secondary bg-opacity-25 rounded-4 p-4"
      >
        <div className="col-md-3 text-center">
          <img
            src={aboutPic}
            alt="Hailu"
            className="rounded-circle img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3 className="fw-bold mb-3" style={{ color: "#80db66" }}>
            About Me
          </h3>
          <h4>
            Full-Stack Developer | Cybersecurity & Network Management | MERN
            Projects in Action
          </h4>
          <p>
            Hi! I’m a junior full-stack web developer, graduating in Network
            Administration and Security Management, with a passion for building
            clean, responsive, and secure web applications. I’m completing my
            MERN development courses and have hands-on experience with
            JavaScript, React, Node.js, Express, Mysql2, and Git/GitHub. I
            enjoy combining my web development skills with my knowledge of
            network administration and cybersecurity to create efficient and
            secure projects. I’m eager to contribute to real-world projects,
            internships, or freelance work to grow my experience and make an
            impact.
          </p>
          <div className="mt-3 d-flex flex-wrap gap-5">
            <span className=""><img src={networkAdmin} alt="Network Admin" width={200} /></span>
            <span className=""><img src={cybersecurity} alt="Cybersecurity" width={200}/></span>
            <span className=""><img src={mern} alt="MERN Stack" width={200} /></span>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
