
const Experience = () => {
  return (
    <div>
      {/* Resume Section */}
      <section id="resume" className="resume section">

        {/* Section Title */}
        <div className="container section-title">
          <h2>Experience</h2>
        </div>{/* End Section Title */}

        <div className="container">

          <div className="row">

            <div className="col-lg-12">
              {/* Experience Section */}
              <div className="resume-item">

                <div className="resume-content">
                  <article className="experience-item">
                    <h4>Software Development Intern</h4>
                    <h5>May 2025 - June 2025</h5>
                    <p className="company">PwC <em> (Telfair, Mauritius)</em></p>
                    <ul>
                      <li>Engineered a task-management system in <strong>C# ASP.NET</strong>, with an SQL database saving <strong>250 hours annually.</strong></li>
                      <li>Implemented automated flow of data and tasks using <strong>roles and access control</strong> and integration to the database</li>
                      <li><strong>Planned and led</strong> an on-site <strong>training session</strong> for employees regarding the delegation system</li>
                      <li>Designed and implemented a <strong>large-scale data transformation algorithm</strong> across <strong>1,000,000+ records</strong> in SQL,
                      liaising with clients to define requirements and allow for <strong>extensibility</strong> of the system.</li>
                      <li><strong>Peer-reviewed code</strong> to enforce best practices, consistency, and future-proofing.</li>
                    </ul>
                  </article>

                  <article className="experience-item">
                    <h4>I.T Advisory Intern</h4>
                    <h5>March 2025 - April 2025</h5>
                    <p className="company">KPMG <em> (Ebene, Mauritius)</em></p>
                    <ul>
                      <li>Assisted in conducting <strong>internal and external IT audits</strong> for multinational clients, performing <strong>completeness and accuracy testing</strong> on system records and user data.</li>
                      <li><strong>Audited</strong> onboarding/offboarding protocols to validate <strong>compliance with regulations</strong></li>
                      <li>Documented and evaluated <strong>data extractions</strong> using <strong>SQL and Microsoft Office Suite</strong></li>
                      <li><strong>Researched and planned</strong> IT infrastructure implementation/upgrade proposals for clients</li>
                    </ul>
                  </article>
                </div>
              </div>{/* End Experience Section */}
            </div>
          </div>

        </div>

      </section>{/* /Resume Section */}

    </div>
  )
}

export default Experience