import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-intro">
        I'm currently seeking new opportunities and roles. Feel free to reach
        out!
      </p>

      <div className="contact-details-card">
        <div className="social-links-list">
          {/* Email Item */}
          <div className="social-item">
            <a href="mailto:devangjain1221@gmail.com">
              <i className="fas fa-envelope contact-icon"></i>
            </a>
            <a href="mailto:devangjain1221@gmail.com" className="link-text">
              devangjain1221@gmail.com
            </a>
          </div>
          {/* LinkedIn Item */}
          <div className="social-item">
            <a
              href="https://linkedin.com/in/devangjain10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin contact-icon"></i>
            </a>
            <a
              href="https://linkedin.com/in/devangjain10"
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
            >
              linkedin.com/in/devangjain10
            </a>
          </div>
          {/* GitHub Item */}
          <div className="social-item">
            <a
              href="https://github.com/Devang-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github contact-icon"></i>
            </a>
            <a
              href="https://github.com/Devang-10"
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
            >
              github.com/Devang-10
            </a>
          </div>
          {/* Phone Number Item (New) */}
          <div className="social-item">
            <a href="tel:+917828377910">
              <i className="fas fa-phone contact-icon"></i>
            </a>
            <a href="tel:+917828377910" className="link-text">
              +91-7828377910
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;