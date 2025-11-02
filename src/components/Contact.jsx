import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion as Motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are set
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS environment variables are missing:", {
        SERVICE_ID: SERVICE_ID ? "Set" : "Missing",
        TEMPLATE_ID: TEMPLATE_ID ? "Set" : "Missing",
        PUBLIC_KEY: PUBLIC_KEY ? "Set" : "Missing",
      });
      setStatus("error");
      return;
    }

    // Add timeout to prevent infinite "sending" state
    const timeout = setTimeout(() => {
      setStatus("error");
    }, 15000); // 15 second timeout

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        clearTimeout(timeout);
        console.log("Email sent successfully:", result);
        setStatus("sent");
        formRef.current.reset();
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      })
      .catch((error) => {
        clearTimeout(timeout);
        console.error("EmailJS error details:", {
          status: error.status,
          text: error.text,
          error: error,
        });

        // Provide more specific error messages
        let errorMessage = "Failed to send message.";
        if (error.status === 400) {
          errorMessage +=
            " The form data is invalid. Please check that your EmailJS template variables match the form field names (from_name, reply_to, message).";
        } else if (error.status === 401) {
          errorMessage +=
            " Authentication failed. Please check your EmailJS Public Key.";
        } else if (error.status === 404) {
          errorMessage +=
            " Service or Template not found. Please check your EmailJS Service ID and Template ID.";
        } else if (error.status === 429) {
          errorMessage += " Too many requests. Please try again later.";
        }

        console.error("Full error:", errorMessage, error);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="mb-5">
      <div className="text-center mb-5">
        <h2
          className="fw-bold mb-2"
          style={{ color: "#80db66", fontSize: "2.5rem" }}
        >
          Get In Touch
        </h2>
        <div className="divider mx-auto"></div>
        <p className="mt-3 lead">
          Have a project in mind or want to collaborate? Let's connect!
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Info */}
        <Motion.div
          className="col-md-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info-card p-4 h-100">
            <h4 className="mb-4" style={{ color: "#80db66" }}>
              Contact Information
            </h4>
            <div className="contact-item mb-3">
              <div className="contact-icon">📧</div>
              <div>
                <strong>Email</strong>
                <p className="mb-0">lesewamelanesew374@gmail.com</p>
              </div>
            </div>
            <div className="contact-item mb-3">
              <div className="contact-icon">💼</div>
              <div>
                <strong>LinkedIn</strong>
                <p className="mb-0">
                  <a
                    href="https://linkedin.com/in/hailu-hailu2009"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#80db66", textDecoration: "none" }}
                  >
                    linkedin.com/in/hailu-hailu2009
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div>
                <strong>GitHub</strong>
                <p className="mb-0">
                  <a
                    href="https://github.com/medoshaweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#80db66", textDecoration: "none" }}
                  >
                    github.com/medoshaweb
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Contact Form */}
        <Motion.div
          className="col-md-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-4 rounded-4 bg-secondary bg-opacity-25 h-100">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="d-flex flex-column gap-3"
            >
              <input
                name="from_name"
                placeholder="Your Name"
                className="form-control"
                required
              />
              <input
                name="reply_to"
                placeholder="Your Email"
                type="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="form-control"
                required
              ></textarea>
              <button
                type="submit"
                className="btn fw-semibold"
                disabled={status === "sending"}
                style={{
                  backgroundColor: status === "sending" ? "#6ba876" : "#80db66",
                  color: "#fff",
                  border: "none",
                  padding: "12px 30px",
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending") {
                    e.currentTarget.style.backgroundColor = "#6ba876";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 15px rgba(128, 219, 102, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending") {
                    e.currentTarget.style.backgroundColor = "#80db66";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="mt-3">
              {status === "sending" && (
                <div
                  className="d-flex align-items-center gap-2"
                  style={{ color: "#80db66" }}
                >
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                    style={{ color: "#80db66" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span>Sending your message...</span>
                </div>
              )}
              {status === "sent" && (
                <div
                  className="alert alert-success d-flex align-items-center gap-2"
                  role="alert"
                >
                  <span>✓</span>
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger" role="alert">
                  <strong>Failed to send message (Error 400).</strong>
                  <br />
                  <small>
                    This usually means your EmailJS template variables don't
                    match the form fields.
                    <br />
                    <strong>Fix this:</strong>
                    <ul
                      className="mt-2 mb-2"
                      style={{ textAlign: "left", fontSize: "0.9rem" }}
                    >
                      <li>Go to EmailJS → Templates → Edit your template</li>
                      <li>
                        Ensure variables are: <code>{"{{from_name}}"}</code>,{" "}
                        <code>{"{{reply_to}}"}</code>,{" "}
                        <code>{"{{message}}"}</code>
                      </li>
                      <li>
                        Set "To Email" field to:{" "}
                        <code>lesewamelanesew374@gmail.com</code>
                      </li>
                      <li>
                        Check browser console (F12) for detailed error messages
                      </li>
                    </ul>
                    Or contact me directly at{" "}
                    <a
                      href="mailto:lesewamelanesew374@gmail.com"
                      style={{ color: "#dc3545", fontWeight: "bold" }}
                    >
                      Click here toe send me an email
                    </a>
                  </small>
                </div>
              )}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
