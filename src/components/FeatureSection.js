// src/components/FeatureSection.js
import React from "react";
import "./FeatureSection.css";

const FeatureSection = ({ image, title, description }) => {
  return (
    <div className="feature-section">
      <img src={image} alt={title} />
      <div className="feature-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="more-button">More</button>
      </div>
    </div>
  );
};

export default FeatureSection;
