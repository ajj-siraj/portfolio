
import React, { useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//animations
import * as Animations from "./animations";

//css modules
import "../css/about.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = props => {
  let aboutHeading = useRef(null);
  let parasRef = useRef(null);

  useEffect(() => {
      
      gsap.from(aboutHeading, Animations.headingFade(aboutHeading));
      gsap.from(parasRef, Animations.fadeIn(aboutHeading));
    
  }, []);
  return (
    <Container fluid className="about-section text-center align-items-center">
      <Row className="justify-content-center text-center about-row">
        <h3
          className="display-4 about-heading text-center"
          ref={el => {
            aboutHeading = el;
          }}
        >
          Who am I?
        </h3>
        <div ref={el => (parasRef = el)}>
          <p className="about-paragraph">
            My name is Siraj. I'm a graduate of Electrical Engineering, and
            currently a Web Developer. I enjoy the process of problem solving,
            and creating new things.
          </p>
          <p className="about-paragraph">
            In my free time I enjoy gaming, chess, playing guitar, and reading.
            I also speak Arabic, English, and Japanese, and
            learning new languages.
          </p>
          <p className="about-paragraph">
            For an overview of my skills and a collection of my projects, scroll
            down this page. If you'd like to work together,{" "}
            <a href="#contact">send me a message.</a>
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default AboutSection;