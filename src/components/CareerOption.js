 
// import React, { useState } from 'react';
// import './CareerOption.css'; // Assuming you will style it in this file

// function CareerOption() {
//   const [activeTab, setActiveTab] = useState('science');

//   // Function to change active tab
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="career-option-container">
//       <h1 className="page-title">Career Options After 12th  </h1>
//       <p className="intro-text">
//         Hey there! If you're looking for information on the courses you can pursue after 12th in the traditional education system, you’re in the right place. Let’s dive into your options based on the stream you choose (Science, Commerce, or Arts). So, let’s get started!
//       </p>

//       {/* Tab Navigation */}
//       <div className="tab-nav">
//         <button 
//           className={`tab-button ${activeTab === 'science' ? 'active' : ''}`} 
//           onClick={() => handleTabChange('science')}
//         >
//           Science Stream
//         </button>
//         <button 
//           className={`tab-button ${activeTab === 'commerce' ? 'active' : ''}`} 
//           onClick={() => handleTabChange('commerce')}
//         >
//           Commerce Stream
//         </button>
//         <button 
//           className={`tab-button ${activeTab === 'arts' ? 'active' : ''}`} 
//           onClick={() => handleTabChange('arts')}
//         >
//           Arts Stream
//         </button>
//       </div>

//       {/* Science Stream Content */}
//       <div className={`tab-content ${activeTab === 'science' ? 'active' : ''}`}>
//         <h2>1. Science Stream Options</h2>
//         <p>If you’ve taken Science in 12th, you have several exciting career paths in both technical and medical fields. Here’s a breakdown:</p>

//         <div className="career-section">
//           <h3>A. Engineering (B.Tech/B.E)</h3>
//           <p><strong>Duration:</strong> 4 years</p>
//           <p><strong>Specializations:</strong> Computer Science, Civil, Mechanical, Electronics, Biotechnology, etc.</p>
//           <p><strong>Career Opportunities:</strong> Software Engineer, Civil Engineer, Data Scientist, Project Manager, etc.</p>
//         </div>

//         <div className="career-section">
//           <h3>B. Medical (MBBS/BDS/BAMS/BHMS)</h3>
//           <p><strong>Duration:</strong> MBBS: 5.5 years, BDS: 5 years, BAMS/BHMS: 5.5 years</p>
//           <p><strong>Career Opportunities:</strong> Doctor, Surgeon, Dentist, Specialist (Cardiologist, Neurologist), or Medical Researcher.</p>
//         </div>

//         <div className="career-section">
//           <h3>C. Basic Sciences (B.Sc)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Specializations:</strong> Physics, Chemistry, Biology, Biotechnology, Forensic Science, Data Science, etc.</p>
//           <p><strong>Career Opportunities:</strong> Research Scientist, Lab Technician, Academic Researcher, Data Analyst.</p>
//         </div>

//         <div className="career-section">
//           <h3>D. Pharmacy (B.Pharm)</h3>
//           <p><strong>Duration:</strong> 4 years</p>
//           <p><strong>Career Opportunities:</strong> Pharmacist, Clinical Researcher, Pharmaceutical Industry Professional.</p>
//         </div>

//         <div className="career-section">
//           <h3>E. Architecture (B.Arch)</h3>
//           <p><strong>Duration:</strong> 5 years</p>
//           <p><strong>Career Opportunities:</strong> Architect, Urban Planner, Interior Designer.</p>
//         </div>

//         <div className="career-section">
//           <h3>F. Bachelor of Computer Applications (BCA)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Specializations:</strong> Software Development, Cybersecurity, Data Science, Artificial Intelligence.</p>
//           <p><strong>Career Opportunities:</strong> Software Developer, Data Analyst, IT Consultant.</p>
//         </div>

//         <div className="career-section">
//           <h3>G. Biotechnology (B.Tech/B.Sc in Biotechnology)</h3>
//           <p><strong>Duration:</strong> 3-4 years</p>
//           <p><strong>Career Opportunities:</strong> Biotechnologist, Research Scientist, Bioinformatics Specialist.</p>
//         </div>

//         <div className="career-section">
//           <h3>H. Aviation (B.Sc in Aviation)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Career Opportunities:</strong> Pilot, Air Traffic Controller, Aviation Manager.</p>
//         </div>
//       </div>

//       {/* Commerce Stream Content */}
//       <div className={`tab-content ${activeTab === 'commerce' ? 'active' : ''}`}>
//         <h2>2. Commerce Stream Options</h2>
//         <p>If you’ve taken Commerce, there are several paths focusing on finance, business, and management. Let’s take a look:</p>

//         <div className="career-section">
//           <h3>A. Bachelor of Commerce (B.Com)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Specializations:</strong> Accounting, Taxation, Finance, etc.</p>
//           <p><strong>Career Opportunities:</strong> Accountant, Tax Consultant, Auditor, or jobs in banking.</p>
//         </div>

//         <div className="career-section">
//           <h3>B. Chartered Accountancy (CA)</h3>
//           <p><strong>Duration:</strong> 4-5 years</p>
//           <p><strong>Career Opportunities:</strong> Chartered Accountant, Financial Consultant, Auditor.</p>
//         </div>

//         <div className="career-section">
//           <h3>C. Company Secretary (CS)</h3>
//           <p><strong>Duration:</strong> 3-4 years</p>
//           <p><strong>Career Opportunities:</strong> Company Secretary, Legal Advisor, Corporate Compliance Officer.</p>
//         </div>

//         <div className="career-section">
//           <h3>D. Bachelor of Business Administration (BBA)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Specializations:</strong> Marketing, Finance, HR.</p>
//           <p><strong>Career Opportunities:</strong> Managerial roles, Marketing Specialist, HR Specialist.</p>
//         </div>

//         <div className="career-section">
//           <h3>E. Bachelor of Economics (BA in Economics)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Career Opportunities:</strong> Economist, Policy Analyst, Data Analyst.</p>
//         </div>

//         <div className="career-section">
//           <h3>F. Actuarial Science</h3>
//           <p><strong>Duration:</strong> Varies (professional certification)</p>
//           <p><strong>Career Opportunities:</strong> Actuary, Risk Analyst, Insurance Consultant.</p>
//         </div>
//       </div>

//       {/* Arts Stream Content */}
//        {/* Arts Stream Content */}
// <div className={`tab-content ${activeTab === 'arts' ? 'active' : ''}`}>
//   <h2>3. Arts Stream Options</h2>
//   <p>If you're into creativity, writing, or helping people understand the world around them, Arts has a lot of options for you!</p>

//   <div className="career-section">
//     <h3>1. Bachelor of Arts (B.A)</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Specializations:</strong> History, Political Science, Sociology, Literature, etc.</p>
//     {/* <p><strong>Career Opportunities:</strong> Historian, Sociologist, Political Analyst, Academic Writer.</p> */}
//   </div>

//   <div className="career-section">
//     <h3>2. Journalism and Mass Communication (BJMC)</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Career Opportunities:</strong> Journalist, PR Specialist, Media Analyst.</p>
//   </div>

//   <div className="career-section">
//     <h3>3. Bachelor of Social Work (BSW)</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Career Opportunities:</strong> Social Worker, Welfare Officer, Community Development Specialist.</p>
//   </div>
//   {/* Newly Added Courses */}
//   <div className="career-section">
//     <h3>4. BA in Political Science</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Key Skills Gained:</strong></p>
//     <ul>
//       <li>Political theories (democracy, socialism, etc.)</li>
//       <li>Government and policy-making</li>
//       <li>Analytical thinking and research</li>
//       <li>Communication and debating skills</li>
//     </ul>
//     <p><strong>Career Opportunities:</strong></p>
//     <ul>
//       <li>Political Analyst</li>
//       <li>Civil Services (IAS, IPS, IFS)</li>
//       <li>Political Campaign Manager</li>
//       <li>Journalist (Political Reporting)</li>
//       <li>Research Analyst in think tanks</li>
//       <li>Public Relations Specialist</li>
//     </ul>
//   </div>

//   <div className="career-section">
//     <h3>5. BA in Sociology</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Key Skills Gained:</strong></p>
//     <ul>
//       <li>Understanding social structures (caste, gender, family)</li>
//       <li>Community development techniques</li>
//       <li>Data analysis in social sciences</li>
//       <li>Problem-solving skills for societal issues</li>
//     </ul>
//     <p><strong>Career Opportunities:</strong></p>
//     <ul>
//       <li>Social Researcher</li>
//       <li>NGO Worker</li>
//       <li>Human Resource Manager</li>
//       <li>Community Service Manager</li>
//       <li>Urban Planner</li>
//     </ul>
//   </div>

//   <div className="career-section">
//     <h3>6. BA in Public Administration</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Key Skills Gained:</strong></p>
//     <ul>
//       <li>Governance and administration</li>
//       <li>Public policy design and implementation</li>
//       <li>Leadership and decision-making</li>
//       <li>Conflict resolution and mediation</li>
//     </ul>
//     <p><strong>Career Opportunities:</strong></p>
//     <ul>
//       <li>Civil Services</li>
//       <li>Policy Analyst</li>
//       <li>Public Sector Manager</li>
//       <li>Urban Development Officer</li>
//       <li>Administrative roles in NGOs and government organizations</li>
//     </ul>
//   </div>

//   <div className="career-section">
//     <h3>7. BA in International Relations</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Key Skills Gained:</strong></p>
//     <ul>
//       <li>Geopolitical analysis</li>
//       <li>Diplomacy and negotiation skills</li>
//       <li>International law and organizations (UN, WTO, etc.)</li>
//       <li>Cultural sensitivity</li>
//     </ul>
//     <p><strong>Career Opportunities:</strong></p>
//     <ul>
//       <li>Diplomat (via IFS)</li>
//       <li>Foreign Policy Analyst</li>
//       <li>International NGO Worker</li>
//       <li>Global Affairs Journalist</li>
//     </ul>
//   </div>

//   <div className="career-section">
//     <h3>8. BA in Economics</h3>
//     <p><strong>Duration:</strong> 3 years</p>
//     <p><strong>Key Skills Gained:</strong></p>
//     <ul>
//       <li>Political economy understanding</li>
//       <li>Statistical and economic analysis</li>
//       <li>Policy impact assessment</li>
//     </ul>
//     <p><strong>Career Opportunities:</strong></p>
//     <ul>
//       <li>Economist</li>
//       <li>Data Analyst</li>
//       <li>Public Policy Advisor</li>
//       <li>Banking and Financial Services</li>
//     </ul>
//   </div>

//   <div className="career-section">
//     <h3>9. Law Degrees (BA LLB or LLB)</h3>
//     <p><strong>Duration:</strong> 5 years (BA LLB) or 3 years (LLB after graduation)</p>
//     <p><strong>Key Skills Gained:</strong></p>
//     <ul>
//       <li>Legal drafting and interpretation</li>
//       <li>Public speaking and advocacy</li>
//       <li>Policy and governance framework knowledge</li>
//     </ul>
//     <p><strong>Career Opportunities:</strong></p>
//     <ul>
//       <li>Legal Advisor for political parties or NGOs</li>
//       <li>Human Rights Lawyer</li>
//       <li>Corporate Governance Specialist</li>
//       <li>Judicial Services</li>
//     </ul>
//   </div>
// </div>

//     </div>
//   );
// }

// export default CareerOption;


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

