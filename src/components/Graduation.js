import React, { useState } from "react";
import "./Graduation.css";

const Graduation = () => {
  // Graduation options data
  const graduationOptions = [
    {
      category: "Post-Graduation (Master's Degree)",
      courses: [
        {
          name: "Master of Arts (M.A.)",
          fields: ["History", "Political Science", "English", "Sociology", "Psychology"],
          duration: "2 years",
          careerOptions: ["Lecturer", "Writer", "Researcher", "Social Worker"],
          exams: ["NET", "SET", "Civil Services"]
        },
        {
          name: "Master of Science (M.Sc.)",
          fields: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
          duration: "2 years",
          careerOptions: ["Research Scientist", "Lab Technician", "Academic Professional"],
          exams: ["GATE", "NET"]
        },
        {
          name: "Master of Commerce (M.Com.)",
          fields: ["Accounting", "Finance", "Business Management"],
          duration: "2 years",
          careerOptions: ["Financial Analyst", "Auditor", "Tax Consultant"],
          exams: ["NET"]
        },
        {
          name: "Master of Business Administration (MBA)",
          specializations: ["HR", "Marketing", "Finance", "Operations", "IT"],
          duration: "2 years",
          careerOptions: ["Manager", "Consultant", "Entrepreneur"],
          exams: ["CAT", "MAT", "GMAT"]
        }
      ]
    },
    {
      category: "Professional Courses",
      courses: [
        {
          name: "Law (LLB)",
          duration: "3 years",
          careerOptions: ["Advocate", "Legal Advisor", "Judge"],
          exams: ["CLAT PG", "AIBE"]
        },
        {
          name: "Chartered Accountancy (CA)",
          stages: ["Foundation", "Intermediate", "Final"],
          duration: "4-5 years (including internship)",
          careerOptions: ["Chartered Accountant", "Auditor", "Finance Consultant"],
          exams: ["CA Foundation", "Intermediate", "Final"]
        },
        {
          name: "Company Secretary (CS)",
          stages: ["Foundation", "Executive", "Professional"],
          duration: "3-5 years",
          careerOptions: ["Company Secretary", "Legal Compliance Officer"],
          exams: ["CS Foundation", "Executive", "Professional"]
        },
        {
          name: "Bachelor of Education (B.Ed.)",
          duration: "2 years",
          careerOptions: ["School Teacher", "Academic Counselor"],
          exams: ["CTET", "TET"]
        },
        {
          name: "Design Courses",
          types: ["Fashion Designing", "Interior Designing", "Graphic Designing"],
          duration: "1-3 years",
          careerOptions: ["Designer", "Freelancer", "Brand Consultant"],
          exams: ["NIFT", "NID"]
        }
      ]
    },
    {
      category: "Competitive Exams (Government Jobs)",
      exams: [
        {
          name: "UPSC Civil Services",
          preparationTime: "1-2 years",
          careerOptions: ["IAS", "IPS", "IFS", "IRS"],
          examStructure: ["Prelims", "Mains", "Interview"]
        },
        {
          name: "State PCS (Provincial Civil Services)",
          preparationTime: "1-2 years",
          careerOptions: ["State-level Administrative Positions"],
          exams: ["State-specific PCS exams"]
        },
        {
          name: "Banking Exams",
          examples: ["IBPS PO", "SBI PO", "RBI Grade B"],
          preparationTime: "6 months-1 year",
          careerOptions: ["Bank PO", "Clerk", "RBI Officer"]
        },
        {
          name: "SSC Exams",
          examples: ["SSC CGL", "CHSL"],
          preparationTime: "6 months-1 year",
          careerOptions: ["Auditor", "Tax Assistant", "Inspector"]
        },
        {
          name: "Teaching Exams",
          examples: ["TET", "NET"],
          preparationTime: "6 months-1 year",
          careerOptions: ["School/College Teacher", "Lecturer"]
        }
      ]
    },
    {
      category: "Research & Academic Path",
      courses: [
        {
          name: "M.Phil. (Master of Philosophy)",
          duration: "1-2 years",
          careerOptions: ["Academic Researcher", "Lecturer"]
        },
        {
          name: "Ph.D. (Doctor of Philosophy)",
          duration: "3-5 years",
          careerOptions: ["Professor", "Research Scientist"],
          exams: ["NET-JRF", "GATE"]
        },
        {
          name: "Post-Doctoral Research",
          duration: "Varies based on research scope",
          careerOptions: ["Senior Scientist", "Research Director"]
        }
      ]
    }
  ];

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="container">
      <h1 className="main-title">Explore Graduation Options</h1>
      {graduationOptions.map((categoryData, index) => (
        <div key={index} className="category">
          <div
            className="category-header"
            onClick={() => toggleCategory(categoryData.category)}
          >
            <h2 className="category-title">{categoryData.category}</h2>
            <span className="toggle-icon">
              {expandedCategory === categoryData.category ? "←" : "→"}
            </span>
          </div>
          {expandedCategory === categoryData.category && (
            <div className="category-content">
              {categoryData.courses?.map((course, idx) => (
                <div key={idx} className="course-card">
                  <h3 className="course-title">{course.name}</h3>
                  {course.fields && (
                    <p className="fields">
                      <strong>Fields:</strong> {course.fields.join(", ")}
                    </p>
                  )}
                  <p className="details">
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p className="details">
                    <strong>Career Options:</strong> {course.careerOptions.join(", ")}
                  </p>
                  {course.exams && (
                    <p className="details">
                      <strong>Exams:</strong> {course.exams.join(", ")}
                    </p>
                  )}
                </div>
              ))}
              {categoryData.exams && (
                <div>
                  {categoryData.exams.map((exam, idx) => (
                    <div key={idx} className="course-card">
                      <h3 className="course-title">{exam.name}</h3>
                      <p className="details">
                        <strong>Preparation Time:</strong> {exam.preparationTime}
                      </p>
                      <p className="details">
                        <strong>Career Options:</strong> {exam.careerOptions.join(", ")}
                      </p>
                      {exam.examStructure && (
                        <p className="details">
                          <strong>Exam Structure:</strong> {exam.examStructure.join(", ")}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Graduation;
