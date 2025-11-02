
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

  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "network", "cybersecurity"];

  const getCategory = (project) => {
    if (project.title.toLowerCase().includes("network") || project.title.toLowerCase().includes("packet")) return "network";
    if (project.title.toLowerCase().includes("offensive") || project.title.toLowerCase().includes("defensive")) return "cybersecurity";
    return "web";
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => getCategory(p) === filter);

  return (
    <section className="mb-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-2" style={{ color: "#80db66", fontSize: "2.5rem" }}>
          My Projects
        </h2>
        <div className="divider mx-auto"></div>
        <p className="mt-3 lead">Showcasing my work across web development, networking, and cybersecurity</p>
      </div>

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn ${filter === cat ? 'btn-success' : 'btn-outline-success'}`}
            style={{
              backgroundColor: filter === cat ? "#80db66" : "transparent",
              borderColor: "#80db66",
              color: filter === cat ? "#fff" : "#80db66",
              textTransform: "capitalize",
              borderRadius: "25px",
              padding: "8px 20px",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredProjects.map((p, i) => (
          <Motion.div
            key={i}
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="card bg-secondary bg-opacity-25 h-100 border-0 shadow-sm project-card"
              style={{
                backgroundColor: theme === "dark" ? "#1e1e1e" : "#f9f9f9",
                color: theme === "dark" ? "#fff" : "#000",
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(128, 219, 102, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
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
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div 
                    className="project-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to bottom, transparent, rgba(128, 219, 102, 0.1))",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  ></div>
                </a>
              </div>

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
