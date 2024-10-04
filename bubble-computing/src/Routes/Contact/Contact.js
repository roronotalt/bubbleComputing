import React from "react";
import Navbar from "../../Components/Navbar";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-info">
          <center>
            <h2>Contact Us </h2>
            <p>We'd love to hear from you!</p>
          </center>
          <a
            href="mailto:contact@bubble-computing.com"
            className="contact-item"
          >
            <span className="icon email-icon" aria-hidden="true"></span>
            <span>contact@bubble-computing.com</span>
          </a>
          <a href="tel:+15551234567" className="contact-item">
            <span className="icon phone-icon" aria-hidden="true"></span>
            <span>+1 (555) 123-4567</span>
          </a>
          <a
            href="https://maps.google.com/?q=476 5th Ave, New York, NY 10018"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="icon location-icon" aria-hidden="true"></span>
            <span>476 5th Ave, New York, NY 10018</span>
          </a>
        </div>
      </div>
    </>
  );
}
