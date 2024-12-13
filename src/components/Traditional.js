import React from "react";
import './Tradi.css';

function CareerGuidance() {
  const careerPaths = [
    {
      title: "Science Stream",
      description: "The Science stream offers courses related to technology, engineering, research, and medical fields.",
      subjects: ["PCM (Physics, Chemistry, Mathematics)", "PCB (Physics, Chemistry, Biology)"],
      careers: [
        "Engineering (Various branches like Mechanical, Civil, Computer Science, etc.)",
        "Medical (MBBS, BDS, Nursing, Physiotherapy)",
        "Pharmacy, Biotechnology, Forensic Science",
        "Aerospace, Robotics, AI, Data Science",
      ],
    },
    {
      title: "Commerce Stream",
      description: "The Commerce stream is perfect for students interested in business, finance, and economics.",
      subjects: ["Accountancy, Business Studies, Economics", "Mathematics (Optional)"],
      careers: [
        "Chartered Accountancy (CA)",
        "Company Secretary (CS)",
        "Banking and Finance, Business Administration (MBA)",
        "Stock Market Analysis, Actuarial Science",
      ],
    },
    {
      title: "Humanities (Arts) Stream",
      description:
        "The Humanities stream offers a wide range of career opportunities for those interested in history, psychology, sociology, and more.",
      subjects: ["History, Geography, Political Science, Sociology", "Psychology, Philosophy, Literature"],
      careers: [
        "Civil Services (IAS, IPS, PCS, etc.)",
        "Teaching (School, College Professors)",
        "Law (LLB, Legal Services)",
        "Social Work, Psychology, Journalism",
      ],
    },
    {
      title: "Vocational Courses",
      description: "Vocational courses are ideal for students who want to start working right after completing their education.",
      subjects: ["Hotel Management, Fashion Designing, Interior Designing", "Tourism, Agriculture, Food Technology", "Animation, Graphic Designing"],
      careers: [
        "Hospitality Industry, Event Management",
        "Fashion Industry, Graphic Design, Animation",
        "IT and Networking, Photography",
      ],
    },
  ];

  return (
    <div className="career-guidance-container">
      <header className="career-guidance-header">
        <h1>CAREER PATH AFTER 10th CLASS</h1>
        <p>Explore the career options after completing 10th grade, especially tailored for students in Chhattisgarh.</p>
      </header>

      <div className="career-guidance-cards">
        {careerPaths.map((path, index) => (
          <div className="Aard" key={index}>
            <h3>{path.title}</h3>
            <p>{path.description}</p>
            <h4>Subjects:</h4>
            <ul>
              {path.subjects.map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
            <h4>Career Options:</h4>
            <ul>
              {path.careers.map((career, idx) => (
                <li key={idx}>{career}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerGuidance;
 