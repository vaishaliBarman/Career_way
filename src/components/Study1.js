import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Study.css";

function Study() {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle click for Traditional Education
  const handleTraditionalLearnMoreClick = () => {
    navigate('/careerOption'); // Navigate to /traditional when button is clicked
  };

  // Function to handle click for Vocational Education
  const handleVocationalLearnMoreClick = () => {
    navigate('/explorer'); // Navigate to /vocational when button is clicked
  };

  return (
    <>
       <div className="sanjeevni">
         {/* Traditional Education Box */}
         <div className="box">
          <img
            src="https://st2.depositphotos.com/1017986/10982/i/450/depositphotos_109827304-stock-photo-close-up-of-books-on.jpg"
            alt="Traditional Education"
            className="card-image"
          />
          <h3>Traditional Education</h3>
          <p>Gain a solid foundation through structured learning.</p>
          <button className="btn" onClick={handleTraditionalLearnMoreClick}>Learn More</button>
        </div>
        
        {/* Vocational Education Box */}
        <div className="box">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/176/789/non_2x/education-is-the-way-to-success-3d-render-illustration-free-photo.jpg"
            alt="Vocational Education"
            className="card-image"
          />
          <h3>Vocational Education</h3>
          <p>Hands-on training for specialized careers.</p>
          <button className="btn" onClick={handleVocationalLearnMoreClick}>Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Study;
