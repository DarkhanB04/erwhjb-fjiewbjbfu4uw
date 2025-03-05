import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-block">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-title">
              Navigating the digital landscape for success
            </h1>
            <p className="hero-subtitle">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <button className="hero-btn">Book a consultation</button>
        </div>
        <div className="hero-right">
          <img src="hero-right.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
