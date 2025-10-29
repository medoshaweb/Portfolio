import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="mb-5">
      <h3 className="fw-bold mb-3" style={{ color: "#80db66" }}>
        Contact Me
      </h3>
      <Motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-4 rounded-4 bg-secondary bg-opacity-25 col-md-6 mx-auto"
      >
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
          <button type="submit" className="btn btn-light fw-semibold">
            Send Message
          </button>
        </form>

        <div className="mt-3">
          {status === "sending" && <div>Sending…</div>}
          {status === "sent" && (
            <div className="text-success">Message sent successfully!</div>
          )}
          {status === "error" && (
            <div className="text-danger">
              Failed to send. Please check EmailJS settings.
            </div>
          )}
        </div>
      </Motion.div>
    </section>
  );
}
