
import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Projects() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.body.classList.contains("bg-dark");
      setTheme(isDark ? "dark" : "light");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Evangadi Forum",
      desc: "A full-stack MERN discussion platform with JWT authentication.",
      image: "/projects/evangadi.png", 
      link: "https://github.com/medoshaweb/evangadi-frontend",
      backendLink: "https://github.com/medoshaweb/evangadi-backend",
      live: "https://evangadi-frontend-sand.vercel.app/",
    },
    {
      title: "Netflix Website Clone",
      desc: "Responsive React + Bootstrap replica with animations and product carousel.",
      image: "/projects/netflix.png",
      link: "https://github.com/medoshaweb/Netflix-Clone",
      live: "https://medoshaweb.github.io/Netflix-Clone/",
    },
    {
      title: "Amazon Website Clone",
      desc: "Full-stack Amazon clone (MERN) with user login, product catalog, shopping cart, and backend order management.",
      image: "/projects/amazon.png",
      link: "https://github.com/medoshaweb/amazon-clone",
      live: "https://amazon-clone-hailu.netlify.app/",
    },
    {
      title: "Apple Website Clone",
      desc: "Responsive React + Bootstrap replica with animations and product carousel.",
      image: "/projects/apple.png",
      link: "https://github.com/medoshaweb/apple-react-routing.git",
    },
    
    {
      title: "Network Lab",
      desc: "Cisco Packet Tracer lab with VLANs, routing, and firewall setup.",
      image: "/projects/packet-tracer.png",
      link: "./labs/network-lab/index.html",
      live: "/labs/network-lab/",
    },
    {
      title: "Offensive Cybersecurity Lab",
      desc: "Ethical hacking lab: recon, vuln discovery, exploitation, reporting.",
      image: "/projects/offensive.png",
      link: "/labs/offensive-lab/index.html",
      live: "/labs/offensive-lab/",
      fit: "contain",
    },
    {
      title: "Defensive Cybersecurity Lab",
      desc: "Blue team lab: Suricata, SIEM dashboards, detection engineering.",
      image: "/projects/Defensive.png",
      link: "/labs/defensive-lab/index.html",
      live: "/labs/defensive-lab/",
      fit: "contain",
    },
  ];

  return (
    <section className="mb-5">
      <h3 className="fw-bold mb-3" style={{ color: "#80db66" }}>
        Projects
      </h3>
      <div className="row g-4">
        {projects.map((p, i) => (
          <Motion.div
            key={i}
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="card bg-secondary bg-opacity-25 h-100 border-0 shadow-sm"
              style={{
                backgroundColor: theme === "dark" ? "#1e1e1e" : "#f9f9f9",
                color: theme === "dark" ? "#fff" : "#000",
              }}
            >
              <a href={p.live || p.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={p.image}
                  alt={p.title}
                  className="card-img-top rounded-top"
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: p.fit || "cover",
                    objectPosition: "center",
                    cursor: "pointer",
                  }}
                />
              </a>

              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ color: "#80db66" }}>
                  {p.title}
                </h5>
                <p className="card-text">{p.desc}</p>
                <div className="d-flex gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-success"
                      style={{ backgroundColor: "#80db66", borderColor: "#80db66" }}
                    >
                      Live
                    </a>
                  )}
                  {p.backendLink ? (
                    <>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm"
                        style={{ color: "#80db66" }}
                      >
                        Frontend Code
                      </a>
                      <a
                        href={p.backendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm"
                        style={{ color: "#80db66" }}
                      >
                        Backend Code
                      </a>
                    </>
                  ) : (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light btn-sm"
                      style={{ color: "#80db66" }}
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
