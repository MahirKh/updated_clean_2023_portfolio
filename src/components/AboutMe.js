import author from "../images/Mahir_Iron_Ring.jpg";

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
              Hi, my name is Mahir Khandaker - a recent Electrical and
              Biomedical Engineering graduate with over a year of industry
              experience working as a software developer. During these roles I
              have worked on full-stack, database and embedded development. My
              educational journey at McMaster University, combined with hands-on
              experiences at Molex, TD, and MAX Gala has fueled a deep
              fascination with technology and a dedication to creating
              innovative solutions in every project I undertake.
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
                  Technologies, Libraries and Frameworks
                  <ul>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>React Native</li>
                    <li>Express.js</li>
                    <li>Expo</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>MongoDB</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Google Cloud</li>
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
                    <li>Android Studio IDE</li>
                    <li>Cantata</li>
                    <li>Jenkins</li>
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
