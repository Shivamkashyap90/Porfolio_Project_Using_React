import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import my_pic from "../../assets/mypic.jpg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={my_pic} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              I am an exprienced web developer with a passion for creating
              user-friendly and visually appealing websites. With a strong
              background in HTML , CSS, and JavaScript, I have a solid
              understanding of the front-end development process. I am excited
              to bring my skills and experience to a new role and contribute to
              the success of a dynamic team. I am a quick learner, a team
              player, and a creative problem solver.{" "}
            </p>
            <p>
              {" "}
              My passion for frontend development is not only to create a good
              UI/UX but also to make the user experience as seamless as
              possible. I am always looking for ways to improve my skills and
              knowledge. I am excited to bring my skills and experience to a new
              role and contribute to the success of a dynamic team.
            </p>
          </div>{" "}
          <div className="about-skills">
            <div className="about-skill">
              <p>Html,Css</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Sql</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
