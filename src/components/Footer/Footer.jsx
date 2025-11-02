// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="py-4 text-center text-secondary">
//       <div>
//         © {new Date().getFullYear()} Hailu — Network Admin & Full-Stack Dev
//       </div>
//       <div>Built with React, Bootstrap & Framer Motion</div>
//     </footer>
//   );
// }
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3" style={{ color: "#80db66" }}>Hailu</h5>
            <p className="text-muted">
              Full-Stack Developer | Cybersecurity & Network Management skills
            </p>
            <p className="text-muted">
              Building secure, scalable web applications with a focus on excellence.
            </p>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-3" style={{ color: "#80db66" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" style={{ color: "#e0e9e3", textDecoration: "none" }}>Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" style={{ color: "#e0e9e3", textDecoration: "none" }}>About</a>
              </li>
              <li className="mb-2">
                <a href="#projects" style={{ color: "#e0e9e3", textDecoration: "none" }}>Projects</a>
              </li>
              <li className="mb-2">
                <a href="#contact" style={{ color: "#e0e9e3", textDecoration: "none" }}>Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-3" style={{ color: "#80db66" }}>Connect</h5>
            <div className="social-icons d-flex gap-3 mb-3">
              <a
                href="https://linkedin.com/in/hailu-hailu2009"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                style={{ color: "#80db66", fontSize: "1.5rem" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/medoshaweb"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                style={{ color: "#80db66", fontSize: "1.5rem" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="text-muted small">
              Email: <a href="mailto:hailugs19742009@gmail.com" style={{ color: "#80db66" }}>hailugs19742009@gmail.com</a>
            </p>
          </div>
        </div>
        
        <hr className="my-4" style={{ borderColor: "rgba(128, 219, 102, 0.3)" }} />
        
        <div className="text-center">
          <p className="mb-0 text-muted">
            © {new Date().getFullYear()} Hailu — All Rights Reserved | Network Admin & Full-Stack Dev
          </p>
          <p className="mt-2 text-muted small">
            Built with React, Bootstrap & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
