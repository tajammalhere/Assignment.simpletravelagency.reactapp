// src/components/Contact.js

import React from "react";
import "./Contact.css";
import Footer from "./Footer";
import contactImage from "../images/travel-image3.jpg"; // Update the path according to your image location

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-info-item">
            <h3>Location</h3>
            <p>123 Travel Road, Wanderlust City, 12345</p>
          </div>
          <div className="contact-info-item">
            <h3>Email</h3>
            <p>info@worldtravel.com</p>
          </div>
          <div className="contact-info-item">
            <h3>Call</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-info-image">
            <img src={contactImage} alt="Contact" />
          </div>
        </div>
        <div className="contact-form-section">
          <h1>Contact Us</h1>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="14"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
