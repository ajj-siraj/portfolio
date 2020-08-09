import { Link } from "gatsby";
import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Formik } from "formik";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cogoToast from "cogo-toast";

//components
import ContactForm from "./ContactForm";

//animations
import * as Animations from "./animations";

//css modules
import contactStyles from "../css/contact.module.css";
import managerStyles from "../css/manager.module.css";

//other
import { formEndpoint } from "../config";

//imgs
import github from "../images/logos/github_logo.svg";
import linkedin from "../images/logos/linkedin_logo.svg";
import gmail from "../images/logos/gmail_logo.svg";

const plugins = [ScrollTrigger];

//animate svgs on hover
const handleSvgHover = el => {
  gsap.to(el.target, {
    scale: 2,
    ease: "bounce",
    duration: 0.3,
    cursor: "pointer",
  });
};
const handleSvgUnhover = el => {
  gsap.to(el.target, { scale: 1, ease: "bounce" });
};

const ContactSection = props => {
  let contactHeading = useRef(null);
  let formRef = useRef(null);
  let svgRefs = [];
  useEffect(() => {
    let targetRef = formRef.current.formRef.current; //this looks weird but it's fine.

    if (contactHeading)
      gsap.from(contactHeading, Animations.headingFade(contactHeading));
    if (targetRef)
      gsap.from(targetRef.childNodes, Animations.fadeIn(contactHeading));
  }, []);

  let svgs = [github, gmail, linkedin];
  let hrefs = [
    "https://github.com/ajj-siraj",
    "mailto:ajj.siraj@gmail.com",
    "https://linkedin.com/sirageldin-ahmed",
  ];
  let contactLinks = svgs.map((svg, idx) => {
    return (
      <Col key={`svg-contact-${idx}`}>
        <a href={hrefs[idx]} target="_blank" rel="noopener">
          <img
            className="techSvg"
            src={svg}
            alt={`contact-${idx}`}
            ref={el => svgRefs.push(el)}
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
          ref={el => {
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
      <div className="mb-5 mt-5">
        <Row className="mb-5 mt-5">
          <Col xs={12}>
            <h3>Or get in touch through...</h3>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">{contactLinks}</Row>
      </div>
    </Container>
  );
};

export default ContactSection;
