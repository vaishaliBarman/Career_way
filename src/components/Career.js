import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import "./Career.css";

function Career() {
  const navigate = useNavigate();

  const handleClass10thClick = () => {
    navigate('/study'); // Navigate to the Study page
  };
  const handleClass12thClick = () => {
    navigate('/study1'); // Navigate to the Study page
  };
  const handleGraduationClick = () => {
    navigate('/study1'); // Navigate to the Study page
  }
  return (
    <>
      <div className="card-row">
        {/* Level 1 Card */}
        <div className="level-1 card">
          <img 
            src="https://prodigy.narayanagroup.com/workshop_img/10th_class_01-01-1970-04-57-44.jpg" 
            alt="10th Class" 
            className="card-image" 
          />
          <button className="btn" onClick={handleClass10thClick}>10th Class</button>
        </div>
        
        {/* Level 2 Card */}
        <div className="level-2 card">
          <img 
            src="https://www.creativefabrica.com/wp-content/uploads/2022/04/05/science-doodle-design-Graphics-28478624-2-580x387.jpg" 
            alt="12th Class" 
            className="card-image" 
          />
          <button className="btn" onClick={ handleClass12thClick} >12th Class</button>
        </div>
        
        {/* Level 3 Card */}
        <div className="level-3 card">
          <img 
            src="https://clipart-library.com/2023/boy-girl-graduation-gown_1308-28330.jpg" 
            alt="Graduation" 
            className="card-image" 
          />
          <button className="btn"onClick={handleGraduationClick}>Graduation</button>
        </div>
        <div className="level-4 card">
          <img 
            src="https://img.freepik.com/free-vector/books-with-money-loans-scholarships_603843-826.jpg" 
            alt="Graduation" 
            className="card-image" 
          />
          <button className="btn">Scholarship</button>
        </div>
      </div>
    </>
  );
}

export default Career;
