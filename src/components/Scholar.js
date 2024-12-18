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
                <a href="https://scholarships.gov.in/">1.National Scholarship Portal :</a>
              </li>
              <li>
                <a href="https://www.ugc.gov.in/">2.UGC Scholarships :</a>
              </li>
              <li>
                <a href="https://www.aicte-india.org/">3.AICTE Scholarships :</a>
              </li>
              <li>
                <a href="https://www.buddy4study.com/">4.Buddy4Study Platform :</a>
              </li>
              <li>
                <a href="https://www.vidyalakshmi.co.in/Students/">5.Vidya Lakshmi Portal :</a>
              </li>
              <li>
                <a href="https://schoolscholarship.cg.nic.in/">6.
              Explore state level :
            </a></li>
            </ul>
          </section>
        </div>

      </div>
    </>
  );
}

export default Scholar;
