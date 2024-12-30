 

import React, { useState } from 'react';
import './CareerOption.css'; // Assuming you will style it in this file

function CareerOption() {
  const [activeTab, setActiveTab] = useState('science');

  // Function to change active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="career-option-container">
      <h1 className="page-title">Career Options After 12th</h1>
      <p className="intro-text">
        Hey there! If you're looking for information on the courses you can pursue after 12th in the traditional education system, you’re in the right place. Let’s dive into your options based on the stream you choose (Science, Commerce, or Arts). So, let’s get started!
      </p>

      {/* Tab Navigation */}
      <div className="tab-nav">
        <button 
          className={`tab-button ${activeTab === 'science' ? 'active' : ''}`} 
          onClick={() => handleTabChange('science')}
        >
          Science Stream
        </button>
        <button 
          className={`tab-button ${activeTab === 'commerce' ? 'active' : ''}`} 
          onClick={() => handleTabChange('commerce')}
        >
          Commerce Stream
        </button>
        <button 
          className={`tab-button ${activeTab === 'arts' ? 'active' : ''}`} 
          onClick={() => handleTabChange('arts')}
        >
          Arts Stream
        </button>
      </div>

      {/* Tab Content */}
      <div className={`tab-content ${activeTab === 'science' ? 'active' : ''}`}>
        <h2>1. Science Stream Options</h2>
        <p>If you’ve taken Science in 12th, you have several exciting career paths in both technical and medical fields. Here’s a breakdown:</p>
        <CareerOptionDetails title="A. Engineering (B.Tech/B.E)" duration="4 years" specializations="Computer Science, Civil, Mechanical, Electronics, Biotechnology" opportunities="Software Engineer, Civil Engineer, Data Scientist, Project Manager" />
        <CareerOptionDetails title="B. Medical (MBBS/BDS/BAMS/BHMS)" duration="MBBS: 5.5 years, BDS: 5 years, BAMS/BHMS: 5.5 years" opportunities="Doctor, Surgeon, Dentist, Specialist (Cardiologist, Neurologist), or Medical Researcher." />
        <CareerOptionDetails title="C. Basic Sciences (B.Sc)" duration="3 years" specializations="Physics, Chemistry, Biology, Biotechnology, Forensic Science, Data Science" opportunities="Research Scientist, Lab Technician, Academic Researcher, Data Analyst." />
        <CareerOptionDetails title="D. Pharmacy (B.Pharm)" duration="4 years" opportunities="Pharmacist, Clinical Researcher, Pharmaceutical Industry Professional." />
        <CareerOptionDetails title="E. Architecture (B.Arch)" duration="5 years" opportunities="Architect, Urban Planner, Interior Designer." />
        <CareerOptionDetails title="F. Bachelor of Computer Applications (BCA)" duration="3 years" specializations="Software Development, Cybersecurity, Data Science, Artificial Intelligence" opportunities="Software Developer, Data Analyst, IT Consultant." />
        <CareerOptionDetails title="G. Biotechnology (B.Tech/B.Sc in Biotechnology)" duration="3-4 years" opportunities="Biotechnologist, Research Scientist, Bioinformatics Specialist." />
        <CareerOptionDetails title="H. Aviation (B.Sc in Aviation)" duration="3 years" opportunities="Pilot, Air Traffic Controller, Aviation Manager." />
      </div>

      <div className={`tab-content ${activeTab === 'commerce' ? 'active' : ''}`}>
        <h2>2. Commerce Stream Options</h2>
        <p>If you’ve taken Commerce, there are several paths focusing on finance, business, and management. Let’s take a look:</p>
        <CareerOptionDetails title="A. Bachelor of Commerce (B.Com)" duration="3 years" specializations="Accounting, Taxation, Finance" opportunities="Accountant, Tax Consultant, Auditor, jobs in banking." />
        <CareerOptionDetails title="B. Chartered Accountancy (CA)" duration="4-5 years" opportunities="Chartered Accountant, Financial Consultant, Auditor." />
        <CareerOptionDetails title="C. Company Secretary (CS)" duration="3-4 years" opportunities="Company Secretary, Legal Advisor, Corporate Compliance Officer." />
        <CareerOptionDetails title="D. Bachelor of Business Administration (BBA)" duration="3 years" specializations="Marketing, Finance, HR" opportunities="Managerial roles, Marketing Specialist, HR Specialist." />
        <CareerOptionDetails title="E. Bachelor of Economics (BA in Economics)" duration="3 years" opportunities="Economist, Policy Analyst, Data Analyst." />
        <CareerOptionDetails title="F. Actuarial Science" duration="Varies (professional certification)" opportunities="Actuary, Risk Analyst, Insurance Consultant." />
      </div>

      <div className={`tab-content ${activeTab === 'arts' ? 'active' : ''}`}>
        <h2>3. Arts Stream Options</h2>
        <p>If you're into creativity, writing, or helping people understand the world around them, Arts has a lot of options for you!</p>
        <CareerOptionDetails title="1. Bachelor of Arts (B.A)" duration="3 years" specializations="History, Political Science, Sociology, Literature" opportunities="Historian, Sociologist, Political Analyst, Academic Writer." />
        <CareerOptionDetails title="2. Journalism and Mass Communication (BJMC)" duration="3 years" opportunities="Journalist, PR Specialist, Media Analyst." />
        <CareerOptionDetails title="3. Bachelor of Social Work (BSW)" duration="3 years" opportunities="Social Worker, Welfare Officer, Community Development Specialist." />
        <CareerOptionDetails title="4. BA in Political Science" duration="3 years" skills={["Political theories (democracy, socialism, etc.)", "Government and policy-making", "Analytical thinking and research", "Communication and debating skills"]} opportunities={["Political Analyst", "Civil Services (IAS, IPS, IFS)", "Political Campaign Manager", "Journalist (Political Reporting)", "Research Analyst in think tanks", "Public Relations Specialist"]} />
        <CareerOptionDetails title="5. BA in Sociology" duration="3 years" skills={["Understanding social structures (caste, gender, family)", "Community development techniques", "Data analysis in social sciences", "Problem-solving skills for societal issues"]} opportunities={["Social Researcher", "NGO Worker", "Human Resource Manager", "Community Service Manager", "Urban Planner"]} />
        <CareerOptionDetails title="6. BA in Public Administration" duration="3 years" skills={["Governance and administration", "Public policy design and implementation", "Leadership and decision-making", "Conflict resolution and mediation"]} opportunities={["Civil Services", "Policy Analyst", "Public Sector Manager", "Urban Development Officer", "Administrative roles in NGOs and government organizations"]} />
        <CareerOptionDetails title="7. BA in International Relations" duration="3 years" skills={["Geopolitical analysis", "Diplomacy and negotiation skills", "International law and organizations (UN, WTO, etc.)", "Cultural sensitivity"]} opportunities={["Diplomat (via IFS)", "Foreign Policy Analyst", "International NGO Worker", "Global Affairs Journalist"]} />
        <CareerOptionDetails title="8. BA in Economics" duration="3 years" skills={["Political economy understanding", "Statistical and economic analysis", "Policy impact assessment"]} opportunities={["Economist", "Data Analyst", "Public Policy Advisor", "Banking and Financial Services"]} />
        <CareerOptionDetails title="9. Law Degrees (BA LLB or LLB)" duration="5 years (BA LLB) or 3 years (LLB after graduation)" skills={["Legal drafting and interpretation", "Public speaking and advocacy", "Policy and governance framework knowledge"]} opportunities={["Legal Advisor for political parties or NGOs", "Human Rights Lawyer", "Corporate Governance Specialist", "Judicial Services"]} />
      </div>
    </div>
  );
}

// Reusable CareerOptionDetails Component
function CareerOptionDetails({ title, duration, specializations, opportunities, skills }) {
  return (
    <div className="career-section">
      <h3>{title}</h3>
      <p><strong>Duration:</strong> {duration}</p>
      {specializations && <p><strong>Specializations:</strong> {specializations}</p>}
      {skills && (
        <div>
          <strong>Key Skills Gained:</strong>
          <ul>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
      )}
      <p><strong>Career Opportunities:</strong></p>
      <ul>
        {Array.isArray(opportunities) ? opportunities.map((opportunity, index) => <li key={index}>{opportunity}</li>) : <li>{opportunities}</li>}
      </ul>
    </div>
  );
}

export default CareerOption;

