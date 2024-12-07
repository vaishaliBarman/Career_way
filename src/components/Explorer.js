
import React from 'react';
import './Explorer.css'; // Assuming you will style it in this file

function Explorer() {
  const courses = [
    {
      id: 1,
      title: "Diploma in Engineering (Polytechnic)",
      duration: "3 years",
      skills: "Mechanical, Civil, Electrical, and Computer Science engineering.",
      careers: "Junior Engineer, Technical Assistant, or further B.Tech studies.",
    },
    {
      id: 2,
      title: "Diploma in Graphic Designing",
      duration: "6 months to 1 year",
      skills: "Graphic tools like Photoshop, Illustrator, and InDesign.",
      careers: "Graphic Designer, UI/UX Designer, or Freelancer.",
    },
    {
      id: 3,
      title: "Diploma in Web Designing",
      duration: "6 months to 1 year",
      skills: "HTML, CSS, JavaScript, and responsive web design.",
      careers: "Web Designer, Front-End Developer, or Freelance Web Developer.",
    },
    {
      id: 4,
      title: "Diploma in Computer Applications (DCA)",
      duration: "6 months to 1 year",
      skills: "MS Office, basic programming, and internet operations.",
      careers: "Data Entry Operator, Office Assistant, or IT Support.",
    },
    {
      id: 5,
      title: "Diploma in Digital Marketing",
      duration: "6 months to 1 year",
      skills: "SEO, SEM, social media, and content marketing.",
      careers: "Digital Marketing Specialist, Social Media Manager, or Freelancer.",
    },
    {
      id: 6,
      title: "Diploma in Hospitality Management",
      duration: "6 months to 1 year",
      skills: "Customer service, hotel management, and event planning.",
      careers: "Hotel Manager, Event Coordinator, or Hospitality Consultant.",
    },
    {
      id: 7,
      title: "Diploma in Fashion Designing",
      duration: "1 year",
      skills: "Fabric selection, design patterns, and stitching techniques.",
      careers: "Fashion Designer, Boutique Owner, or Costume Designer.",
    },
    {
      id: 8,
      title: "Diploma in Beauty Culture and Cosmetology",
      duration: "6 months to 1 year",
      skills: "Skincare, makeup, and beauty treatments.",
      careers: "Beautician, Salon Owner, or Makeup Artist.",
    },
    {
      id: 9,
      title: "Diploma in Animation and Multimedia",
      duration: "1 to 2 years",
      skills: "2D/3D animation, character design, and video editing.",
      careers: "Animator, Video Editor, or Game Designer.",
    },
    {
      id: 10,
      title: "Diploma in Event Management",
      duration: "6 months to 1 year",
      skills: "Event planning, budgeting, and coordination.",
      careers: "Event Manager, Wedding Planner, or Corporate Event Organizer.",
    },
    {
      id: 11,
      title: "Diploma in Interior Designing",
      duration: "1 year",
      skills: "Space planning, color theory, and furniture design.",
      careers: "Interior Designer, Decor Consultant, or Freelancer.",
    },
    {
      id: 12,
      title: "Diploma in Photography",
      duration: "6 months to 1 year",
      skills: "Camera handling, photo editing, and composition techniques.",
      careers: "Photographer, Photojournalist, or Freelancer.",
    },
    {
      id: 13,
      title: "Diploma in Culinary Arts",
      duration: "1 year",
      skills: "Cooking, food presentation, and menu planning.",
      careers: "Chef, Baker, or Restaurant Owner.",
    },
    {
      id: 14,
      title: "Diploma in Mobile Repairing",
      duration: "6 months to 1 year",
      skills: "Repairing hardware and software of mobile devices.",
      careers: "Mobile Repair Technician or Service Center Owner.",
    },
    {
      id: 15,
      title: "Diploma in Healthcare and Nursing",
      duration: "1 to 2 years",
      skills: "Patient care, first aid, and healthcare support.",
      careers: "Nursing Assistant, Hospital Staff, or Home Care Provider.",
    },
    {
      id: 16,
      title: "Diploma in Entrepreneurship and Startup Management",
      duration: "6 months to 1 year",
      skills: "Business planning, market research, and funding strategies.",
      careers: "Entrepreneur, Startup Founder, or Business Consultant.",
    },
    {
      id: 17,
      title: "Diploma in E-Commerce and Online Business",
      duration: "6 months to 1 year",
      skills: "E-commerce platform management and digital marketing.",
      careers: "E-Commerce Business Owner, Online Sales Manager.",
    },
    {
      id: 18,
      title: "Diploma in Financial Accounting and Business Analytics",
      duration: "1 year",
      skills: "Accounting, tax laws, and business data analysis.",
      careers: "Financial Analyst, Accountant, or Tax Consultant.",
    },
    {
      id: 19,
      title: "Diploma in Digital Entrepreneurship",
      duration: "6 months to 1 year",
      skills: "Content creation, affiliate marketing, and monetization.",
      careers: "Content Creator, Blogger, or Digital Advertiser.",
    },
    {
      id: 20,
      title: "Diploma in Business Communication",
      duration: "6 months to 1 year",
      skills: "Professional communication and presentation skills.",
      careers: "Business Development Executive or PR Specialist.",
    },
    {
      id: 21,
      title: "Diploma in Retail Management",
      duration: "6 months to 1 year",
      skills: "Retail operations, CRM, and merchandising.",
      careers: "Store Manager, Visual Merchandiser, or Retail Consultant.",
    },
    {
      id: 22,
      title: "Diploma in Marketing and Sales Management",
      duration: "6 months to 1 year",
      skills: "Sales strategies and customer relationship management.",
      careers: "Sales Manager, Marketing Specialist, or Business Developer.",
    },
    {
      id: 23,
      title: "Diploma in Social Media Management",
      duration: "6 months to 1 year",
      skills: "Social media marketing, branding, and analytics.",
      careers: "Social Media Manager or Digital Strategist.",
    },
    {
      id: 24,
      title: "Diploma in Business Leadership",
      duration: "6 months to 1 year",
      skills: "Leadership, decision-making, and team management.",
      careers: "Business Manager or Team Leader.",
    },
    {
      id: 25,
      title: "Diploma in Franchise Management",
      duration: "6 months to 1 year",
      skills: "Franchise operations and agreements.",
      careers: "Franchise Owner or Consultant.",
    },
    {
      id : 26,
      title : "Diploma in Political Leadership and Governance",
      duration : "1-2 year",
      skills : "Public campaigning techniques, leadership and stategic planning .",
      careers : "Political Campaign manager, Political Consultant, Grassroots Organizer."
    },
    {
      id : 27,
      title : "Diploma in Public Relations and Corporate Communication",
      duration : "6 months to 1 year",
      skills : "Media relations, crisis management and corporate branding.",
      careers : "Public Relations Specialist, Corporate Communication Manager."
    },
    {
      id : 28,
      title : "Diploma in Sports Management",
      duration : "6 months to 1 year",
      skills : "Sports marketing, event management and sports administration.",
      careers : "Sports Manager, Sports Event Coordinator."
    },
    {
      id : 29,
      title : "Diploma in NGO Management",
      duration : "6 months to 1 year",
      skills : "Fundraising, project management and community development.",
      careers : "NGO Manager, Project Coordinator."
    },
    {
      id : 30,
      title : "Diploma in Cyber Security",
      duration : "1 year",
      skills : "Network security, cryptography and ethical hacking.",
      careers : "Cyber Security Analyst, Information Security Specialist."
    }
  ];

  return (
    <div className="explorer-container">
      <h1>Explore Vocational Education Options</h1>
      <p>Select the right path and build your career with skill-based courses!</p>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3 className='title'>{course.title}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Key Skills:</strong> {course.skills}</p>
            <p><strong>Career Opportunities:</strong> {course.careers}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorer;
