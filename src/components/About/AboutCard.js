import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { getExperience } from "../../utils";

function AboutCard() {
  const experience = getExperience("2023-02-13");

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is{" "}
            <span>Chandraprakash Kushwaha</span> from{" "}
            <span >Bhopal, Madhya Pradesh</span>.
            <br />I completed my B.Tech in{" "}
            <span >Electronics and Communication</span> from{" "}
            <span >
              Bansal Institute of Research & Technology - Bhopal
            </span>
            , 2023 batch.
            <br />
            <br />
            I am a <span >Front-End Developer</span> with{" "}
            <span >{experience} years</span> of hands-on coding
            experience in{" "}
            <span >React.js, Next.js, Node.js, and JavaScript</span>.
            I have worked on large-scale projects using{" "}
            <span>React.js, Redux, Node.js</span>, focusing on
            developing new features and optimizing existing ones with efficient
            code, data structures, and query optimizations.
            <br />
            <br />
            I follow Agile methodology, participate in daily scrums, and ensure
            timely delivery of tasks—working both independently and as part of a
            team.
            <br />
            <br />
            <span >Technologies & Tools:</span>
            <br />
            ✔ React.js, Next.js, Redux Toolkit, Context API
            <br />
            ✔ JavaScript (ES6+), TypeScript
            <br />
            ✔ Node.js, Express.js, RESTful APIs
            <br />
            ✔ MongoDB, PostgreSQL, Redis
            <br />
            ✔ HTML5, CSS3, SCSS/SASS, Tailwind CSS
            <br />
            ✔ Docker, GitHub Actions, Azure DevOps, AWS (EC2, S3)
            <br />
            ✔ Jest, Enzyme, React Testing Library
            <br />
            ✔ Git, GitHub | VS Code | Linux, MacOS, Windows
            <br />
            <br />
            I’m passionate about building user-friendly, scalable, and modern web
            applications. I constantly explore new technologies and industry
            trends to stay updated and grow professionally.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket / Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Tutoring & Mentoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer ">
            Chandraprakash Kushwaha
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
