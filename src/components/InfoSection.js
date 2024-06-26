// src/components/InfoSection.js
import React from "react";
import "./InfoSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHiking,
  faDollarSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-box info1">
        <FontAwesomeIcon icon={faHiking} size="2x" />
        <h3>Adventure</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info-box info2">
        <FontAwesomeIcon icon={faDollarSign} size="2x" />
        <h3>Less Price</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info-box info1">
        <FontAwesomeIcon icon={faStar} size="2x" />
        <h3>Experience</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default InfoSection;
