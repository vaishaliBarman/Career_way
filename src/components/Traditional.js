import React from "react";
import './Tradi.css';

function CareerGuidance() {
  return (
    <div className="career-guidance-container">
      <header className="career-guidance-header">
        <h1>CAREER PATH AFTER 10th CLASS</h1>
        <p>Explore the career options after completing 10th grade, especially tailored for students in Chhattisgarh.</p>
      </header>

       
         
        <div className="career-guidance-cards">
          <div className="card">
            <h3>Science Stream</h3>
            <p>The Science stream offers courses related to technology, engineering, research, and medical fields.</p>
            <ul>
              <li>PCM (Physics, Chemistry, Mathematics)</li>
              <li>PCB (Physics, Chemistry, Biology)</li>
            </ul>
            <h4>Career Options:</h4>
            <ul>
              <li>Engineering (Various branches like Mechanical, Civil, Computer Science, etc.)</li>
              <li>Medical (MBBS, BDS, Nursing, Physiotherapy)</li>
              <li>Pharmacy, Biotechnology, Forensic Science</li>
              <li>Aerospace, Robotics, AI, Data Science</li>
            </ul>
          </div>

          <div className="card">
            <h3>Commerce Stream</h3>
            <p>The Commerce stream is perfect for students interested in business, finance, and economics.</p>
            <ul>
              <li>Accountancy, Business Studies, Economics</li>
              <li>Mathematics (Optional)</li>
            </ul>
            <h4>Career Options:</h4>
            <ul>
              <li>Chartered Accountancy (CA)</li>
              <li>Company Secretary (CS)</li>
              <li>Banking and Finance, Business Administration (MBA)</li>
              <li>Stock Market Analysis, Actuarial Science</li>
            </ul>
          </div>

          <div className="card">
            <h3>Humanities (Arts) Stream</h3>
            <p>The Humanities stream offers a wide range of career opportunities for those interested in history, psychology, sociology, and more.</p>
            <ul>
              <li>History, Geography, Political Science, Sociology</li>
              <li>Psychology, Philosophy, Literature</li>
            </ul>
            <h4>Career Options:</h4>
            <ul>
              <li>Civil Services (IAS, IPS, PCS, etc.)</li>
              <li>Teaching (School, College Professors)</li>
              <li>Law (LLB, Legal Services)</li>
              <li>Social Work, Psychology, Journalism</li>
            </ul>
          </div>

          <div className="card">
            <h3>Vocational Courses</h3>
            <p>Vocational courses are ideal for students who want to start working right after completing their education.</p>
            <ul>
              <li>Hotel Management, Fashion Designing, Interior Designing</li>
              <li>Tourism, Agriculture, Food Technology</li>
              <li>Animation, Graphic Designing</li>
            </ul>
            <h4>Career Options:</h4>
            <ul>
              <li>Hospitality Industry, Event Management</li>
              <li>Fashion Industry, Graphic Design, Animation</li>
              <li>IT and Networking, Photography</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default CareerGuidance;
