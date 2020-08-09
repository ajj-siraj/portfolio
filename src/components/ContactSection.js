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

  useEffect(() => {
    // if (contactHeading) gsap.from(contactHeading, Animations.headingFlip);
    // gsap.from(".about-paragraph", Animations.fadeIn(".about-paragraph"));
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
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

const validateForm = values => {
  {
    const keys = Object.keys(values);
    const vals = Object.values(values);

    const errors = {};

    keys.forEach((value, idx) => {
      if (!vals[idx]) errors[value] = "Required";
    });

    if (values.email) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        errors.email = "Invalid email address";
    }

    if (values.name.length > 50) {
      errors.name = "Name too long.";
    }

    if (values.subject.length > 100) {
      errors.subject = "Message subject is too long.";
    }

    if (values.msg.length > 2000) {
      errors.msg = "Message is too long.";
    }
    return errors;
  }
};

const submitForm = (values, setSubmitting, resetForm) => {
  setSubmitting(true);

  let data = new FormData();

  Object.keys(values).forEach((field, idx) => {
    data.append(field.toString(), values[field]);
  });

  const xhr = new XMLHttpRequest();
  xhr.open("POST", formEndpoint);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      resetForm();
      cogoToast.success("Message sent successfully.");
      setSubmitting(false);
    } else {
      cogoToast.error("There was an error. Please try again.");
      setSubmitting(false);
    }
  };
  xhr.send(data);
};

const ContactForm = () => (
  <Formik
    initialValues={{ name: "", subject: "", email: "", msg: "" }}
    validate={values => validateForm(values)}
    onSubmit={(values, { setSubmitting, resetForm }) =>
      submitForm(values, setSubmitting, resetForm)
    }
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className={contactStyles.fieldLabel}>Name</Form.Label>

          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            disabled={isSubmitting}
          />
          {errors.name && touched.name ? (
            <div className={contactStyles.errMsg}>{errors.name}</div>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label className={contactStyles.fieldLabel}>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            disabled={isSubmitting}
          />
          {errors.email && touched.email ? (
            <div className={contactStyles.errMsg}>{errors.email}</div>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label className={contactStyles.fieldLabel}>Subject</Form.Label>
          <Form.Control
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            disabled={isSubmitting}
          />
          {errors.subject && touched.subject ? (
            <div className={contactStyles.errMsg}>{errors.subject}</div>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label className={contactStyles.fieldLabel}>Message</Form.Label>
          <Form.Control
            name="msg"
            as="textarea"
            rows="3"
            placeholder="Enter your message..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.msg}
            disabled={isSubmitting}
          />
          {errors.msg && touched.msg ? (
            <div className={contactStyles.errMsg}>{errors.msg}</div>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Button variant="success" type="submit" disabled={isSubmitting}>
            Send Message
          </Button>
        </Form.Group>
      </Form>
    )}
  </Formik>
);
export default ContactSection;
