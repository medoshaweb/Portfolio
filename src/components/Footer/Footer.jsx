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
    <footer className="footer text-center py-3">
      <div className="social-icons" style={{ color: "#80db66" }}>
        <a
          href="https://linkedin.com/in/hailu-hailu2009"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/medoshaweb"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} Hailu — Network Admin & Full-Stack Dev{" "}
      </div>
      {/* <p>© 2025 Your Name | All Rights Reserved</p> */}
    </footer>
  );
}
