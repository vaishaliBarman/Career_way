import '../App.css';

function Scholar() {
  return (
    <>
      <div className="scholar-main">
        <header className="header">
          <h1>🎓 Scholarships Portal</h1>
          <p>Explore State and National Level Scholarships</p>
        </header>
        <div className="scholar-container">
          <section className="national-level">
            <h2>🌐 National Level Scholarships</h2>
            <p>Access scholarships offered across India.</p>
            <ul className="national-links">
              <li>
                <a href="https://scholarships.gov.in/">National Scholarship Portal</a>
              </li>
              <li>
                <a href="https://www.ugc.gov.in/">UGC Scholarships</a>
              </li>
              <li>
                <a href="https://www.aicte-india.org/">AICTE Scholarships</a>
              </li>
              <li>
                <a href="https://www.buddy4study.com/">Buddy4Study Platform</a>
              </li>
              <li>
                <a href="https://www.vidyalakshmi.co.in/Students/">Vidya Lakshmi Portal</a>
              </li>
              <li>
                <a href="https://schoolscholarship.cg.nic.in/">
              Explore More
            </a></li>
            </ul>
          </section>
        </div>

      </div>
    </>
  );
}

export default Scholar;
