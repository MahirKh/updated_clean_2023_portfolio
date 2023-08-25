import React from "react";
function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3> Embedded Software Developer Intern @ Molex </h3>
            <h4>January 2022 - August 2022</h4>
            <h5>Waterloo, Ontario, Canada</h5>
            <p>
              <p></p>
              Enhanced the reliability and performance of a multi-threaded
              legacy codebase by refactoring it into 2 single concurrent
              processes, resulting in a 10% decrease in runtime. This
              optimization led to more reliable results and significantly
              improved the overall performance of the codebase.
              <p></p>
              Designed and executed a comprehensive suite of unit and
              integration tests, covering various scenarios including edge cases
              and boundary conditions, to verify internal functionality, proper
              parameter usage, and accurate data handling. Successfully
              validated the code's internal functionality, ensuring robustness
              and accuracy in parameter handling and data management.
              <p></p>
              Demonstrated strong adherence to the AGILE methodology by actively
              participating in sprint planning, daily stand-ups, and backlog
              refinement, effectively utilizing Jira to meticulously organize
              and track sprint-related issues. Collaborated with team members to
              promptly identify and resolve issues, ensuring efficient workflow,
              and timely achievement of sprint goals.
              <p></p>
              Skills Utilized: C, Python, Cantata, Jira, Bitbucket.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3> Software Developer Intern @ TD </h3>
            <h4>September 2021 - December 2021</h4>
            <h5>Toronto, ON, Canada</h5>
            <p>
              <p></p>
              Leveraged the SSIS platform to seamlessly combine datasets from
              multiple departments, performing advanced data modeling and data
              profiling queries to extract valuable insights.
              <p></p>Developed customized functions within the RSA ARCHER
              application, tailoring solutions to meet the specific needs of TD
              Bank’s employees.
              <p></p>Collaborated closely with business partners to meticulously
              define detailed business requirements, enabling the development of
              innovative technologies aligned with TD Bank’s objectives.
              <p></p>
              Skills Utilized: C#, SQL, SSIS (SQL Server Integration Services),
              RSA ARCHER, Jira, Bitbucket.
            </p>
          </div>
        </div>
        {/* second job */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Software Developer Contract @ MAX Gala </h3>
            <h4>June 2021 - August 2021</h4>
            <h5>Toronto, ON, Canada</h5>
            <p>
              <p></p>
              Implemented a new feature on the MAX Aspire web application,
              empowering users to post and answer questions, fostering
              collaboration and knowledge sharing among experienced
              professionals and early-career individuals.
              <p></p>Enhanced the functionality and performance of the MAX
              Aspire web application, resulting in improved user experience and
              faster response times.
              <p></p>Skills Utilized: AWS (Amazon RDS, S3, Lambda), Docker,
              React.js, Express.js, Python PostgreSQL, GitHub, Git
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
