// src/components/About.js

import React from "react";
import "./About.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>
        <hr className="about-line" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          pariatur, eum veritatis minima tempore laborum ad aspernatur quod
          itaque. Nostrum.
        </p>
        <div className="about-details">
          <ul>
            <li>✓ Lorem ipsum dolor sit.</li>
            <li>✓ Lorem ipsum dolor sit.</li>
            <li>✓ Lorem ipsum dolor sit.</li>
          </ul>
          <ul>
            <li>✓ Lorem ipsum dolor sit.</li>
            <li>✓ Lorem ipsum dolor sit.</li>
            <li>✓ Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="stats">
          <div className="stat">
            <h2>2500</h2>
            <p>Travelled</p>
          </div>
          <div className="stat">
            <h2>500</h2>
            <p>Places</p>
          </div>
          <div className="stat">
            <h2>400</h2>
            <p>Guide</p>
          </div>
          <div className="stat">
            <h2>20</h2>
            <p>Sport</p>
          </div>
        </div>
        <div className="contact-us">
          <p>What are you waiting for, reach us right now.</p>
          <button onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
