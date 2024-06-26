// src/components/Home.js

import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import InfoSection from "./InfoSection";
import Footer from "./Footer";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection
        image={img1}
        title="DEGANVY, U.K"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet."
      />
      <FeatureSection
        image={img2}
        title="DESERT, EGYPT"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet."
      />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;
