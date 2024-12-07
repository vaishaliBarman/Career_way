 import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Study.css";

function Study() {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle click for Traditional Education
  const handleTraditionalLearnMoreClick = () => {
    navigate('/traditional'); // Navigate to /traditional when button is clicked
  };

  // Function to handle click for Vocational Education
  const handleVocationalLearnMoreClick = () => {
    navigate('/vocational'); // Navigate to /vocational when button is clicked
  };

  return (
    <>
       <div className="sanjeevni">
         {/* Traditional Education Box */}
         <div className="box">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/733/467/small_2x/cartoon-school-children-with-chalkboard-vector.jpg"
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
            src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/06/10213900/Vocational-Courses-after-12th.jpg"
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
