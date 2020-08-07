import { Link } from "gatsby";
import React, { useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//animations
import * as Animations from "./animations";

//css modules
import aboutStyles from "../css/about.css";

const plugins = [gsap, ScrollTrigger];

//animate svgs on hover
const handleSvgHover = el => {
  gsap.to(el.target, { scale: 2, ease: "bounce" });
};
const handleSvgUnhover = el => {
  gsap.to(el.target, { scale: 1, ease: "bounce" });
};

const ContactSection = props => {
  let contactHeading = useRef(null);

  useEffect(() => {
    if(contactHeading) gsap.from(contactHeading, Animations.headingFlip);
    gsap.from(".about-paragraph", Animations.fadeIn(".about-paragraph"))
  })
  return (
    <Container
      fluid
      className="contact-section text-center align-items-center"
      
    >
      <Row className="justify-content-center text-center">
        <h3 className="display-4 about-heading text-center" ref={(el) => {contactHeading = el}}>
          Contact Me
        </h3>
        
      </Row>
    </Container>
  );
};

export default ContactSection;