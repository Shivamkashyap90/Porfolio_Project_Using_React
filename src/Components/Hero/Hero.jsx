import React from "react";
import "./Hero.css";
import my_pic from "../../assets/mypic.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Hero() {
  return (
    <div className="hero-section">
      <img src={my_pic} alt="mypicture" />
      <h1>
        <span>I'm a Shivam kumar,</span> <span>F</span>rontend <span>D</span>
        eveloper<span>!</span>
      </h1>
      <p>
        Hi, I'm a frontend developer with a passion for creating user-friendly
        and visually appealing web applications .
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>

        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
