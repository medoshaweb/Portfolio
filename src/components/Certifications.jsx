import React from "react";
import { motion as Motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { name: "CompTIA Network+", year: "2024" },
    { name: "CompTIA Security+", year: "2025" },
    { name: "Cisco CCNA (in progress)", year: "2025" },
  ];

  return (
    <section className="mb-5">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="fw-bold mb-3">Certifications</h3>
        <div className="row g-3">
          {certs.map((c, i) => (
            <div key={i} className="col-md-4">
              <div className="p-3 bg-secondary bg-opacity-25 rounded-4 text-center h-100">
                <h5 className="fw-bold">{c.name}</h5>
                <p className="mb-0">{c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
