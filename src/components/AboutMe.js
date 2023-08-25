import author from "../images/Mahir.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <div id="about" className="container py-5 aboutMe">
        <div className="row">
          <div className="col-lg-4 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author" />
            </div>
          </div>
          <div className="col-lg-8 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
              Hi, I'm Mahir Khandaker—a recent Electrical and Biomedical
              Engineering graduate with a versatile skill set and a fervent
              passion for software development, technology innovation, and web
              solutions. My educational journey at McMaster University, combined
              with hands-on experiences at TD and Molex, has fueled a deep
              fascination with technology and a dedication to creating
              innovative solutions in every project I undertake.
              <br></br>
              <br></br>Throughout my time at McMaster University and my co-op
              terms, I meticulously honed my technical proficiencies, with a
              focus on communication systems, electronic circuits, and
              object-oriented and embedded systems programming. I'm adept in
              languages like Python, Java, C, and C++. Beyond formal education,
              I've also ventured into the realm of full-stack development,
              actively applying my skills to craft exceptional web and mobile
              applications.
              <br></br>
              <br></br>
              <h4>Technical Skills</h4>
            </p>
            <div className="row">
              <div class="col-md-4 col-sm-12">
                <p>
                  Programming Languages
                  <ul>
                    <li>C</li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>PostgreSQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </p>
              </div>
              <div class="col-md-4 col-sm-12">
                <p>
                  Technologies and Frameworks
                  <ul>
                    <li>Nodejs</li>
                    <li>React</li>
                    <li>Express.js</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>MongoDB</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Google Cloud</li>
                    <li>Android Studio</li>
                  </ul>
                </p>
              </div>
              <div class="col-md-4 col-sm-12">
                <p>
                  Tools
                  <ul>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                    <li>Arduino IDE</li>
                    <li>Cantata</li>
                    <li>Atlassian Development Tools</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* <p>
            <h3>Links</h3>
            <b>LinkedIn:</b>{" "}
            <a
              className="hyper-link"
              onClick={() =>
                window.open("https://www.linkedin.com/in/mahir-khandaker/")
              }
            >
              https://www.linkedin.com/in/mahir-khandaker
            </a>
            <br></br>
            <b>GitHub:</b>{" "}
            <a
              className="hyper-link"
              onClick={() => window.open("https://github.com/MahirKh")}
            >
              https://github.com/MahirKh
            </a>
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
