//  import React, { useState } from 'react';
// import './CareerOption.css'; // Assuming you will style it in this file

// function CareerOption() {
//   const [activeTab, setActiveTab] = useState('science');

//   // Function to change active tab
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="career-option-container">
//       <h1 className="page-title">Career Options After 12th (Traditional Education)</h1>
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
//           <p>After completing your B.Tech, you can go for further studies like M.Tech, or explore opportunities through competitive exams like GATE or UPSC.</p>
//         </div>

//         <div className="career-section">
//           <h3>B. Medical (MBBS/BDS/BAMS/BHMS)</h3>
//           <p><strong>Duration:</strong> MBBS: 5.5 years, BDS: 5 years, BAMS/BHMS: 5.5 years</p>
//           <p><strong>Career Opportunities:</strong> Doctor, Surgeon, Dentist, Specialist (Cardiologist, Neurologist), or Medical Researcher.</p>
//           <p>Once you're done, you can pursue higher studies like MD/MS, or even practice in clinics or hospitals.</p>
//         </div>

//         <div className="career-section">
//           <h3>C. Basic Sciences (B.Sc)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Specializations:</strong> Physics, Chemistry, Biology, Biotechnology, etc.</p>
//           <p><strong>Career Opportunities:</strong> Research Scientist, Lab Technician, Academic Researcher.</p>
//           <p>Great option if you love theoretical studies and want to go into research or academia.</p>
//         </div>

//         <div className="career-section">
//           <h3>D. Pharmacy (B.Pharm)</h3>
//           <p><strong>Duration:</strong> 4 years</p>
//           <p><strong>Career Opportunities:</strong> Pharmacist, Clinical Researcher, Pharmaceutical Industry Professional.</p>
//           <p>Explore the world of medicines and healthcare by joining the pharmaceutical industry or doing clinical research.</p>
//         </div>

//         <div className="career-section">
//           <h3>E. Architecture (B.Arch)</h3>
//           <p><strong>Duration:</strong> 5 years</p>
//           <p><strong>Career Opportunities:</strong> Architect, Urban Planner, Interior Designer.</p>
//           <p>Design the future with your creativity and technical skills! You can work in construction companies, or even start your own architectural firm.</p>
//         </div>
//       </div>

//       {/* Commerce Stream Content */}
//       <div className={`tab-content ${activeTab === 'commerce' ? 'active' : ''}`}>
//         <h2>2. Commerce Stream Ke Options</h2>
//         <p>If you’ve taken Commerce, there are several paths focusing on finance, business, and management. Let’s take a look:</p>

//         <div className="career-section">
//           <h3>A. Bachelor of Commerce (B.Com)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Specializations:</strong> Accounting, Taxation, Finance, etc.</p>
//           <p><strong>Career Opportunities:</strong> Accountant, Tax Consultant, Auditor, or you can go for jobs in the banking sector.</p>
//           <p>After completing B.Com, you can pursue further studies like CA, CS, CMA, or even MBA.</p>
//         </div>

//         <div className="career-section">
//           <h3>B. Chartered Accountancy (CA)</h3>
//           <p><strong>Duration:</strong> 4-5 years</p>
//           <p><strong>Career Opportunities:</strong> Chartered Accountant, Financial Consultant, Auditing Expert.</p>
//           <p>This is a prestigious career path if you love numbers and finance! You can work in audit firms or start your own practice.</p>
//         </div>

//         <div className="career-section">
//           <h3>C. Company Secretary (CS)</h3>
//           <p><strong>Duration:</strong> 3-4 years</p>
//           <p><strong>Career Opportunities:</strong> Company Secretary, Legal Advisor, Corporate Compliance Officer.</p>
//           <p>Perfect for someone who loves law and corporate governance.</p>
//         </div>

//         <div className="career-section">
//           <h3>D. Bachelor of Business Administration (BBA)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Career Opportunities:</strong> Management roles, Marketing, Finance, HR jobs.</p>
//           <p>BBA is the stepping stone to an MBA, and can get you management roles in companies after you complete your higher studies.</p>
//         </div>
//       </div>

//       {/* Arts Stream Content */}
//       <div className={`tab-content ${activeTab === 'arts' ? 'active' : ''}`}>
//         <h2>3. Arts Stream Ke Options</h2>
//         <p>If you're into creativity, writing, or helping people understand the world around them, Arts has a lot of options for you!</p>

//         <div className="career-section">
//           <h3>A. Bachelor of Arts (B.A)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Specializations:</strong> History, Political Science, Psychology, Literature, Sociology, etc.</p>
//           <p><strong>Career Opportunities:</strong> Historian, Psychologist, Sociologist, Political Analyst.</p>
//           <p>After your B.A, you can go for higher studies or appear for exams like UPSC or State PSC.</p>
//         </div>

//         <div className="career-section">
//           <h3>B. Bachelor of Fine Arts (BFA)</h3>
//           <p><strong>Duration:</strong> 3-4 years</p>
//           <p><strong>Career Opportunities:</strong> Artist, Animator, Designer, Illustrator, Art Director.</p>
//           <p>If you're passionate about art and creativity, BFA will open many doors in the creative industry.</p>
//         </div>

//         <div className="career-section">
//           <h3>C. Journalism and Mass Communication (BJMC)</h3>
//           <p><strong>Duration:</strong> 3 years</p>
//           <p><strong>Career Opportunities:</strong> Journalist, News Reporter, PR Specialist, Content Creator.</p>
//           <p>This course will help you understand the media world and create impactful stories for the public.</p>
//         </div>

//         <div className="career-section">
//           <h3>D. Law (LLB)</h3>
//           <p><strong>Duration:</strong> 5 years (Integrated BA LLB) or 3 years after graduation.</p>
//           <p><strong>Career Opportunities:</strong> Lawyer, Legal Advisor, Corporate Law Consultant.</p>
//           <p>If you have a flair for law, a career in this field can lead to great success, whether in courts or in corporate law firms.</p>
//         </div>
//       </div>

//       {/* General Career Options */}
//       <h2><i>4. General Career Options Across Streams</i> </h2>
//       <p>No matter which stream you choose, there are some career options that cross all borders:</p>
//       <ul>
//         <li><strong>Teaching:</strong> After your degree, you can pursue a B.Ed and become a teacher. There’s always a demand for good teachers.</li>
//         <li><strong>Civil Services:</strong> You can appear for UPSC, State PSC exams, and join the Indian Administrative Services (IAS), Indian Police Services (IPS), or other government sectors.</li>
//         <li><strong>Banking:</strong> Appear for IBPS, SBI PO exams to work in public or private banks as a probationary officer (PO).</li>
//       </ul>

      
//       </div>
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
      <h1 className="page-title">Career Options After 12th (Traditional Education)</h1>
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

      {/* Science Stream Content */}
      <div className={`tab-content ${activeTab === 'science' ? 'active' : ''}`}>
        <h2>1. Science Stream Options</h2>
        <p>If you’ve taken Science in 12th, you have several exciting career paths in both technical and medical fields. Here’s a breakdown:</p>

        <div className="career-section">
          <h3>A. Engineering (B.Tech/B.E)</h3>
          <p><strong>Duration:</strong> 4 years</p>
          <p><strong>Specializations:</strong> Computer Science, Civil, Mechanical, Electronics, Biotechnology, etc.</p>
          <p><strong>Career Opportunities:</strong> Software Engineer, Civil Engineer, Data Scientist, Project Manager, etc.</p>
        </div>

        <div className="career-section">
          <h3>B. Medical (MBBS/BDS/BAMS/BHMS)</h3>
          <p><strong>Duration:</strong> MBBS: 5.5 years, BDS: 5 years, BAMS/BHMS: 5.5 years</p>
          <p><strong>Career Opportunities:</strong> Doctor, Surgeon, Dentist, Specialist (Cardiologist, Neurologist), or Medical Researcher.</p>
        </div>

        <div className="career-section">
          <h3>C. Basic Sciences (B.Sc)</h3>
          <p><strong>Duration:</strong> 3 years</p>
          <p><strong>Specializations:</strong> Physics, Chemistry, Biology, Biotechnology, Forensic Science, Data Science, etc.</p>
          <p><strong>Career Opportunities:</strong> Research Scientist, Lab Technician, Academic Researcher, Data Analyst.</p>
        </div>

        <div className="career-section">
          <h3>D. Pharmacy (B.Pharm)</h3>
          <p><strong>Duration:</strong> 4 years</p>
          <p><strong>Career Opportunities:</strong> Pharmacist, Clinical Researcher, Pharmaceutical Industry Professional.</p>
        </div>

        <div className="career-section">
          <h3>E. Architecture (B.Arch)</h3>
          <p><strong>Duration:</strong> 5 years</p>
          <p><strong>Career Opportunities:</strong> Architect, Urban Planner, Interior Designer.</p>
        </div>

        <div className="career-section">
          <h3>F. Bachelor of Computer Applications (BCA)</h3>
          <p><strong>Duration:</strong> 3 years</p>
          <p><strong>Specializations:</strong> Software Development, Cybersecurity, Data Science, Artificial Intelligence.</p>
          <p><strong>Career Opportunities:</strong> Software Developer, Data Analyst, IT Consultant.</p>
        </div>

        <div className="career-section">
          <h3>G. Biotechnology (B.Tech/B.Sc in Biotechnology)</h3>
          <p><strong>Duration:</strong> 3-4 years</p>
          <p><strong>Career Opportunities:</strong> Biotechnologist, Research Scientist, Bioinformatics Specialist.</p>
        </div>

        <div className="career-section">
          <h3>H. Aviation (B.Sc in Aviation)</h3>
          <p><strong>Duration:</strong> 3 years</p>
          <p><strong>Career Opportunities:</strong> Pilot, Air Traffic Controller, Aviation Manager.</p>
        </div>
      </div>

      {/* Commerce Stream Content */}
      <div className={`tab-content ${activeTab === 'commerce' ? 'active' : ''}`}>
        <h2>2. Commerce Stream Options</h2>
        <p>If you’ve taken Commerce, there are several paths focusing on finance, business, and management. Let’s take a look:</p>

        <div className="career-section">
          <h3>A. Bachelor of Commerce (B.Com)</h3>
          <p><strong>Duration:</strong> 3 years</p>
          <p><strong>Specializations:</strong> Accounting, Taxation, Finance, etc.</p>
          <p><strong>Career Opportunities:</strong> Accountant, Tax Consultant, Auditor, or jobs in banking.</p>
        </div>

        <div className="career-section">
          <h3>B. Chartered Accountancy (CA)</h3>
          <p><strong>Duration:</strong> 4-5 years</p>
          <p><strong>Career Opportunities:</strong> Chartered Accountant, Financial Consultant, Auditor.</p>
        </div>

        <div className="career-section">
          <h3>C. Company Secretary (CS)</h3>
          <p><strong>Duration:</strong> 3-4 years</p>
          <p><strong>Career Opportunities:</strong> Company Secretary, Legal Advisor, Corporate Compliance Officer.</p>
        </div>

        <div className="career-section">
          <h3>D. Bachelor of Business Administration (BBA)</h3>
          <p><strong>Duration:</strong> 3 years</p>
          <p><strong>Specializations:</strong> Marketing, Finance, HR.</p>
          <p><strong>Career Opportunities:</strong> Managerial roles, Marketing Specialist, HR Specialist.</p>
        </div>

        <div className="career-section">
          <h3>E. Bachelor of Economics (BA in Economics)</h3>
          <p><strong>Duration:</strong> 3 years</p>
          <p><strong>Career Opportunities:</strong> Economist, Policy Analyst, Data Analyst.</p>
        </div>

        <div className="career-section">
          <h3>F. Actuarial Science</h3>
          <p><strong>Duration:</strong> Varies (professional certification)</p>
          <p><strong>Career Opportunities:</strong> Actuary, Risk Analyst, Insurance Consultant.</p>
        </div>
      </div>

      {/* Arts Stream Content */}
       {/* Arts Stream Content */}
<div className={`tab-content ${activeTab === 'arts' ? 'active' : ''}`}>
  <h2>3. Arts Stream Options</h2>
  <p>If you're into creativity, writing, or helping people understand the world around them, Arts has a lot of options for you!</p>

  <div className="career-section">
    <h3>1. Bachelor of Arts (B.A)</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Specializations:</strong> History, Political Science, Sociology, Literature, etc.</p>
    <p><strong>Career Opportunities:</strong> Historian, Sociologist, Political Analyst, Academic Writer.</p>
  </div>

  <div className="career-section">
    <h3>2. Journalism and Mass Communication (BJMC)</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Career Opportunities:</strong> Journalist, PR Specialist, Media Analyst.</p>
  </div>

  <div className="career-section">
    <h3>3. Bachelor of Social Work (BSW)</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Career Opportunities:</strong> Social Worker, Welfare Officer, Community Development Specialist.</p>
  </div>
  {/* Newly Added Courses */}
  <div className="career-section">
    <h3>4. BA in Political Science</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Key Skills Gained:</strong></p>
    <ul>
      <li>Political theories (democracy, socialism, etc.)</li>
      <li>Government and policy-making</li>
      <li>Analytical thinking and research</li>
      <li>Communication and debating skills</li>
    </ul>
    <p><strong>Career Opportunities:</strong></p>
    <ul>
      <li>Political Analyst</li>
      <li>Civil Services (IAS, IPS, IFS)</li>
      <li>Political Campaign Manager</li>
      <li>Journalist (Political Reporting)</li>
      <li>Research Analyst in think tanks</li>
      <li>Public Relations Specialist</li>
    </ul>
  </div>

  <div className="career-section">
    <h3>5. BA in Sociology</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Key Skills Gained:</strong></p>
    <ul>
      <li>Understanding social structures (caste, gender, family)</li>
      <li>Community development techniques</li>
      <li>Data analysis in social sciences</li>
      <li>Problem-solving skills for societal issues</li>
    </ul>
    <p><strong>Career Opportunities:</strong></p>
    <ul>
      <li>Social Researcher</li>
      <li>NGO Worker</li>
      <li>Human Resource Manager</li>
      <li>Community Service Manager</li>
      <li>Urban Planner</li>
    </ul>
  </div>

  <div className="career-section">
    <h3>6. BA in Public Administration</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Key Skills Gained:</strong></p>
    <ul>
      <li>Governance and administration</li>
      <li>Public policy design and implementation</li>
      <li>Leadership and decision-making</li>
      <li>Conflict resolution and mediation</li>
    </ul>
    <p><strong>Career Opportunities:</strong></p>
    <ul>
      <li>Civil Services</li>
      <li>Policy Analyst</li>
      <li>Public Sector Manager</li>
      <li>Urban Development Officer</li>
      <li>Administrative roles in NGOs and government organizations</li>
    </ul>
  </div>

  <div className="career-section">
    <h3>7. BA in International Relations</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Key Skills Gained:</strong></p>
    <ul>
      <li>Geopolitical analysis</li>
      <li>Diplomacy and negotiation skills</li>
      <li>International law and organizations (UN, WTO, etc.)</li>
      <li>Cultural sensitivity</li>
    </ul>
    <p><strong>Career Opportunities:</strong></p>
    <ul>
      <li>Diplomat (via IFS)</li>
      <li>Foreign Policy Analyst</li>
      <li>International NGO Worker</li>
      <li>Global Affairs Journalist</li>
    </ul>
  </div>

  <div className="career-section">
    <h3>8. BA in Economics</h3>
    <p><strong>Duration:</strong> 3 years</p>
    <p><strong>Key Skills Gained:</strong></p>
    <ul>
      <li>Political economy understanding</li>
      <li>Statistical and economic analysis</li>
      <li>Policy impact assessment</li>
    </ul>
    <p><strong>Career Opportunities:</strong></p>
    <ul>
      <li>Economist</li>
      <li>Data Analyst</li>
      <li>Public Policy Advisor</li>
      <li>Banking and Financial Services</li>
    </ul>
  </div>

  <div className="career-section">
    <h3>9. Law Degrees (BA LLB or LLB)</h3>
    <p><strong>Duration:</strong> 5 years (BA LLB) or 3 years (LLB after graduation)</p>
    <p><strong>Key Skills Gained:</strong></p>
    <ul>
      <li>Legal drafting and interpretation</li>
      <li>Public speaking and advocacy</li>
      <li>Policy and governance framework knowledge</li>
    </ul>
    <p><strong>Career Opportunities:</strong></p>
    <ul>
      <li>Legal Advisor for political parties or NGOs</li>
      <li>Human Rights Lawyer</li>
      <li>Corporate Governance Specialist</li>
      <li>Judicial Services</li>
    </ul>
  </div>
</div>

    </div>
  );
}

export default CareerOption;
