import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//components
import ContactForm from "components/ContactForm.js";

//animations
import * as Animations from "components/animations.js";

//imgs
let github = "/images/logos/github_logo.svg";
let linkedin = "/images/logos/linkedin_logo.svg";
let gmail = "/images/logos/gmail_logo.svg";

gsap.registerPlugin(ScrollTrigger);

//animate svgs on hover
const handleSvgHover = (el) => {
  gsap.to(el.target, {
    scale: 2,
    ease: "bounce",
    duration: 0.3,
    cursor: "pointer",
  });
};
const handleSvgUnhover = (el) => {
  gsap.to(el.target, { scale: 1, ease: "bounce", duration: 0.5 });
};

const ContactSection = (props) => {
  let contactHeading = useRef(null);
  let formRef = useRef(null);
  // let svgRefs = useRef([]);
  let contactFooter = useRef(null);
  let contactSvgs = useRef(null);

  useEffect(() => {
    console.log(contactSvgs.childNodes);
    let targetRef = formRef.current.formRef.current; //this looks weird but it's fine.

    gsap.from(contactFooter.childNodes[0], { x: -50, duration: 2, stagger: 1 });

    //for some reason stagger didn't work here so I have to use this method:
    contactSvgs.childNodes.forEach((svg, idx) => {
      gsap.from(svg, Animations.svgEnter(contactHeading, idx));
    });

    if (contactHeading) gsap.from(contactHeading, Animations.headingFade(contactHeading));
    if (targetRef) gsap.from(targetRef.childNodes, Animations.fadeIn(contactHeading));
  }, []);

  let svgs = [github, gmail, linkedin];
  let hrefs = [
    "https://github.com/ajj-siraj",
    "mailto:ajj.siraj@gmail.com",
    "https://linkedin.com/in/sirageldin-ahmed",
  ];
  let contactLinks = svgs.map((svg, idx) => {
    return (
      <Col key={`svg-contact-${idx}`}>
        <a href={hrefs[idx]} target="_blank" rel="noopener noreferrer">
          <img
            className="techSvg"
            src={svg}
            alt={`contact-${idx}`}
            // ref={el => svgRefs.push(el)}
            onMouseEnter={handleSvgHover}
            onMouseLeave={handleSvgUnhover}
          />
        </a>
      </Col>
    );
  });
  return (
    <Container fluid className="contact-section text-center align-items-center">
      <Row className="justify-content-center text-center">
        <h3
          className="display-4 about-heading text-center"
          ref={(el) => {
            contactHeading = el;
          }}
        >
          Contact Me
        </h3>
      </Row>
      <Row className="justify-content-center text-left">
        <Col md="6">
          <ContactForm ref={formRef} />
        </Col>
      </Row>
      <div className="mb-5 mt-5" ref={(el) => (contactFooter = el)}>
        <Row className="mb-5 mt-5">
          <Col xs={12}>
            <h3>Or get in touch through...</h3>
          </Col>
        </Row>
        <Row className="mb-5 mt-5" ref={(el) => (contactSvgs = el)}>
          {contactLinks}
        </Row>
      </div>
    </Container>
  );
};

export default ContactSection;
