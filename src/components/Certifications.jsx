import React from "react";
import { motion as Motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { name: "Information System", year: "2009" },
    { name: "Network Administration and Security Management", year: "2020" },
    { name: "Fullstack Development", year: "2025" },
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
            Certifications & Education
          </h2>
          <div className="divider mx-auto"></div>
          <p className="mt-3 lead">Professional certifications and educational achievements</p>
        </div>
        <div className="row g-4 justify-content-center">
          {certs.map((c, i) => (
            <Motion.div
              key={i}
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="certification-card p-4 bg-secondary bg-opacity-25 rounded-4 text-center h-100">
                <div className="cert-icon mb-3" style={{ fontSize: "3rem" }}>🏆</div>
                <h5 className="fw-bold mb-2" style={{ color: "#80db66" }}>{c.name}</h5>
                <p className="mb-0 text-muted">{c.year}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
