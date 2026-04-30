
const Education = () => {
  return (
    <div>
      {/* Resume Section */}
      <section id="resume" className="resume section">

        {/* Section Title */}
        <div className="container section-title">
          <h2>Education</h2>
        </div>{/* End Section Title */}

        <div className="container">

          <div className="row">
            <div className="col-lg-12">

              {/* Education Section */}
              <div className="resume-item">

                <div className="resume-content">

                  <article className="education-item">
                    <h4>BSc in Computer Science</h4>
                    <h5>2025 - Present <small> <em>(Expected Graduation: 2028)</em> </small></h5>
                    <p className="institution">University of Warwick <em> (United Kingdom)</em></p>
                    <ul>
                      <li> On-track for a First Class (1st) </li>
                      <li> Selected as Course Representative for Computer Science in First Year</li>
                      <li> Computing Society and Coding Society Member </li>
                      <li> Organiser for Warwick Hackathon (WHACK) 2026 </li>
                    </ul>
                  </article>

                  <article className="education-item">
                    <h4>International Baccalaureate (IB)</h4>
                    <h5>2023 - 2024</h5>
                    <p className="institution">Le Bocage International School <em> (Mauritius) </em></p>
                    <ul>
                      <li> Achieved a 44/45 in the IB Diploma.</li>
                      <li> Deputy Head Boy </li>
                      <li> Achieved highest marks in the cohort </li>
                      <li> Recipient of prizes for excellence in Maths AA HL, Physics HL and Computer Science HL </li>
                      <li> Recipient of Student of the Year award </li>
                      <li> Founder and President of LBIS Chess Club </li>
                      <li> Vice President of Gavel (Toastmasters) Club </li>
                      <li> Vice President of Eco-Schools Club </li>
                    </ul>
                  </article>

                  <article className="education-item">
                    <h4>IGCSE </h4>
                    <h5>2021 - 2022</h5>
                    <p className="institution">Le Bocage International School <em> (Mauritius) </em></p>
                    <ul>
                      <li> Achieved 9 A*s</li>
                      <li> Achieved highest marks in the cohort </li>
                    </ul>
                  </article>

                </div>
              </div>{/* End Education Section */}

            </div>
          </div>

        </div>

      </section>{/* /Resume Section */}

    </div>
  )
}

export default Education