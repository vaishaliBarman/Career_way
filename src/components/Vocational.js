import React from "react";
import "./Voc.css"; // For styling the page

function Vocational() {
  return (
    <div className="vocational-container">
      <h1>Vocational Courses after 10th in Chhattisgarh</h1>
      <p>
        Vocational courses offer skill-based training and practical knowledge,
        enabling students to start a career early. Here are the top vocational
        courses available in Chhattisgarh:
      </p>

      <div className="course-section">
        <h2>1. ITI (Industrial Training Institute) Courses</h2>
        <p><strong>Duration:</strong> 6 months to 2 years</p>
        <p><strong>Trades Available:</strong> Electrician, Fitter, Welder, Plumber, Mechanic (Motor Vehicle), Refrigeration and Air Conditioning, Carpentry.</p>
        <p><strong>Institutes:</strong> Government ITI Colleges in Raipur, Bilaspur, Durg, and other districts.</p>
        <p><strong>Career Opportunities:</strong> Technician roles in industries, self-employment (plumbing, electrical repairs, vehicle mechanics), and apprenticeships with PSUs and private companies.</p>
      </div>

      <div className="course-section">
        <h2>2. Polytechnic Diploma in Engineering</h2>
        <p><strong>Duration:</strong> 3 years</p>
        <p><strong>Specializations:</strong> Civil, Mechanical, Electrical, Computer Science, and Automobile Engineering.</p>
        <p><strong>Institutes:</strong> Government Polytechnic Colleges (Raipur, Bilaspur, Durg) and CSVTU-affiliated institutes.</p>
        <p><strong>Career Opportunities:</strong> Junior Engineer roles, or lateral entry into B.Tech programs.</p>
      </div>

      <div className="course-section">
        <h2>3. Paramedical Courses</h2>
        <p><strong>Duration:</strong> 1–2 years</p>
        <p><strong>Courses Available:</strong> Diploma in Medical Lab Technology (DMLT), Diploma in Radiology, Diploma in Pharmacy (D.Pharm).</p>
        <p><strong>Institutes:</strong> Raipur Institute of Paramedical Sciences, AIIMS Raipur.</p>
        <p><strong>Career Opportunities:</strong> Medical Lab Technician, Radiology Assistant, Nursing Assistant.</p>
      </div>

      <div className="course-section">
        <h2>4. Vocational Courses in Agriculture and Horticulture</h2>
        <p><strong>Duration:</strong> 1–2 years</p>
        <p><strong>Specializations:</strong> Horticulture, Organic Farming, Soil Science and Crop Production.</p>
        <p><strong>Institutes:</strong> Indira Gandhi Agricultural University, Government Krishi Vigyan Kendras (KVKs).</p>
        <p><strong>Career Opportunities:</strong> Agricultural Technician, Horticulturist, jobs in agro-industries, or self-employment in farming.</p>
      </div>

      <div className="course-section">
        <h2>5. Beauty and Wellness Courses</h2>
        <p><strong>Duration:</strong> 6 months to 1 year</p>
        <p><strong>Specializations:</strong> Beauty Therapy, Hairdressing, Makeup Artistry, Nail Art.</p>
        <p><strong>Institutes:</strong> VLCC Institute of Beauty and Nutrition, Raipur.</p>
        <p><strong>Career Opportunities:</strong> Beautician, Makeup Artist, Hair Stylist, opening your own salon.</p>
      </div>

      <div className="course-section">
        <h2>6. Fashion Designing and Garment Technology</h2>
        <p><strong>Duration:</strong> 1–3 years</p>
        <p><strong>Specializations:</strong> Fashion Design, Textile Design, Garment Manufacturing.</p>
        <p><strong>Institutes:</strong> LISAA School of Design, private institutes in Raipur and Bilaspur.</p>
        <p><strong>Career Opportunities:</strong> Fashion Designer, Textile Designer, Garment Technician, jobs with clothing brands or boutiques.</p>
      </div>

      <div className="course-section">
        <h2>7. Computer and IT Courses</h2>
        <p><strong>Duration:</strong> 6 months to 2 years</p>
        <p><strong>Courses Available:</strong> Diploma in Computer Applications (DCA), Web Designing, Data Entry, and Office Automation.</p>
        <p><strong>Institutes:</strong> Government ITI centers, private institutes like NIIT and Aptech.</p>
        <p><strong>Career Opportunities:</strong> Data Entry Operator, Web Designer, IT support staff.</p>
      </div>

      <div className="course-section">
        <h2>8. Hospitality and Hotel Management</h2>
        <p><strong>Duration:</strong> 1–3 years</p>
        <p><strong>Courses Available:</strong> Diploma in Hotel Management, Food and Beverage Service.</p>
        <p><strong>Institutes:</strong> Government Hotel Management Institute, Raipur.</p>
        <p><strong>Career Opportunities:</strong> Chef, Hospitality Manager, jobs in hotels, resorts, and catering companies.</p>
      </div>

      <div className="course-section">
        <h2>9. Handicrafts and Handloom Training</h2>
        <p><strong>Duration:</strong> 6 months to 1 year</p>
        <p><strong>Courses Available:</strong> Weaving, Embroidery, Pottery.</p>
        <p><strong>Institutes:</strong> Chhattisgarh Handicrafts Development Board (CGHDC).</p>
        <p><strong>Career Opportunities:</strong> Work with handicraft cooperatives or start your own business.</p>
      </div>

      <p>
        Chhattisgarh also has government initiatives like the **Pradhan Mantri Kaushal Vikas Yojana (PMKVY)** and **Chhattisgarh Skill Development Mission (CSDM)** that offer free or subsidized vocational training programs.
      </p>
    </div>
  );
}

export default Vocational;
