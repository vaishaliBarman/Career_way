 

import React, { useState } from "react";
import "./About.css";

function About() {
  const [visibleSection, setVisibleSection] = useState(null); // Tracks the visible section

  const handleMouseEnter = (section) => {
    setVisibleSection(section); // Show the corresponding section
  };

  const handleMouseLeave = () => {
    setVisibleSection(null); // Hide all sections when not hovering
  };

  return (
    <div className="about">
      <h1>Welcome to the Career Guidance Platform</h1>

      <h2
        onMouseEnter={() => handleMouseEnter("howItWorks")}
        onMouseLeave={handleMouseLeave}
      >
        *** How It Works:
      </h2>
      {visibleSection === "howItWorks" && (
        <p>
          This website is designed to assist students and graduates in
          exploring various career paths, providing valuable insights into
          courses, streams, and career options based on their academic level.
        </p>
      )}

      <h3
        onMouseEnter={() => handleMouseEnter("careerButton")}
        onMouseLeave={handleMouseLeave}
      >
        1. Start with the Start Now Button :
      </h3>
      {visibleSection === "careerButton" && (
        <p>
          On the homepage, click the Start Now Button to begin your journey of
          career exploration.
        </p>
      )}

      <h3
        onMouseEnter={() => handleMouseEnter("academicLevel")}
        onMouseLeave={handleMouseLeave}
      >
        2. Select Your Academic Level :
      </h3>
      {visibleSection === "academicLevel" && (
        <p>
          A screen with three levels will appear: Class 10, Class 12, and
          Graduate. Select the level that applies to you.
        </p>
      )}

      <h3
        onMouseEnter={() => handleMouseEnter("careerOptions")}
        onMouseLeave={handleMouseLeave}
      >
        3.Explore Career Options :
      </h3>
      {visibleSection === "careerOptions" && (
        <p>
          After selecting your academic level, the screen will display a variety
          of streams, fields, or courses relevant to you.
        </p>
      )}

      <h3
        onMouseEnter={() => handleMouseEnter("careerPaths")}
        onMouseLeave={handleMouseLeave}
      >
        4.Learn About Career Paths :
      </h3>
      {visibleSection === "careerPaths" && (
        <p>
          For each stream or course, you will receive basic knowledge about the
          opportunities it offers.
        </p>
      )}

      <h3
        onMouseEnter={() => handleMouseEnter("planFuture")}
        onMouseLeave={handleMouseLeave}
      >
        5. Plan Your Future :
      </h3>
      {visibleSection === "planFuture" && (
        <p>
          Use the insights provided to make an informed decision about your
          career path.
        </p>
      )}

      <h3
        onMouseEnter={() => handleMouseEnter("thankYou")}
        onMouseLeave={handleMouseLeave}
      >
        Thank you for using our platform :)
      </h3>
      {visibleSection === "thankYou" && (
        <p>We hope you find your dream career through our guidance platform.</p>
      )}
    </div>
  );
}

export default About;
