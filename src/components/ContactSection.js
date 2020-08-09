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
const plugins = [ScrollTrigger];

//animate svgs on hover
const handleSvgHover = el => {
  gsap.to(el.target, { scale: 2, ease: "bounce" });
};
const handleSvgUnhover = el => {
  gsap.to(el.target, { scale: 1, ease: "bounce" });
};

const ContactSection = props => {
  let contactHeading = useRef(null);
  let formRef = useRef(null);

  useEffect(() => {
    let targetRef = formRef.current.formRef.current;
    console.log(formRef.current.formRef.current); //this looks weird but it's fine.
    gsap.from(contactHeading, Animations.headingFlip);
    gsap.from(targetRef.childNodes, Animations.fadeIn(contactHeading));
  },[]);

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
          <ContactForm ref={formRef}/>
        </Col>
      </Row>
    </Container>
  );
};


export default ContactSection;
