
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaArrowUp } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./navbar.css";
import logo from "../../assets/logo-no-background.png"
  
const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowTopBtn(scrollTop > 300); // show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);

    // Apply saved theme
    document.body.className =
      theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className =
      newTheme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: "easeInOutQuart" });
  };

  const links = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Skills", link: "skills" },
    { id: 4, name: "Projects", link: "projects" },
    { id: 5, name: "Certifications", link: "certifications" },
    { id: 6, name: "Contact", link: "contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm ${
          theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
        data-aos="fade-down"
      >
        <div className="container">
          <a href="#home" className="navbar-brand fw-bold text-primary fs-4">
            <img
              src={logo}
              width="150"
              alt="medoshaweb"
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              {links.map(({ id, name, link }) => (
                <li className="nav-item mx-2" key={id}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="active-link"
                    className={`nav-link position-relative fw-medium ${
                      theme === "dark" ? "text-light" : "text-dark"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Icons & Theme */}
            <div className="d-flex align-items-center ms-3">
              <a
                href="https://linkedin.com/in/hailu-hailu2009"
                target="_blank"
                rel="noopener noreferrer"
                className={`me-3 fs-5 ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                <FaLinkedin style={{ color: "#80db66" }} />
              </a>
              <a
                href="https://github.com/medoshaweb"
                target="_blank"
                rel="noopener noreferrer"
                className={`me-3 fs-5 ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                <FaGithub style={{ color: "#80db66" }} />
              </a>

              <button
                onClick={toggleTheme}
                className="btn btn-outline-primary btn-sm rounded-circle"
                title="Toggle theme"
              >
                {theme === "light" ? (
                  <FaMoon style={{ color: "#80db66" }} className="moonsun" />
                ) : (
                  <IoIosSunny
                    style={{ color: "#80db66" }}
                    className="moonsun"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          backgroundColor: "#80db66",
          width: `${scrollProgress}%`,
          zIndex: 1000,
          transition: "width 0.2s ease-out",
        }}
      ></div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary rounded-circle border-0"
          style={{
            backgroundColor: "#80db66",
            color: "white",
            position: "fixed",
            bottom: "25px",
            right: "25px",
            zIndex: 1000,
            transition: "opacity 0.3s ease",
          }}
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Custom CSS */}
      <style>{`
        .nav-link.active-link {
    color: #80db66 !important;
    font-weight: 600;
  }

        .nav-link.active-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background-color: #80db66;
          transition: width 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background-color: #80db66;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-nav .nav-link {
          transition: color 0.3s ease;
          position: relative;
        }

        .navbar-nav .nav-link:hover {
          color: #80db66 !important;
        }

        .btn-primary:hover {
          background-color: #80db66;
        }
      `}</style>
    </>
  );
};

export default Navbar;
