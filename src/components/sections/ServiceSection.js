import React, { useRef, useEffect } from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import {getImgUrl} from "~/Utility.js";
//animations
import * as Animations from "components/animations.js";

gsap.registerPlugin(TextPlugin);

const ServiceSection = (props) => {
  let heading = useRef(null);

  //animate svgs on hover
  const handleHover = (el) => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineHover);
    gsap.to(underline, Animations.lineHover);
  };
  const handleUnhover = (el) => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineUnhover);
    gsap.to(underline, Animations.lineUnhover);
  };

  //on scroll animations
  useEffect(() => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.from(heading, Animations.headingFade(heading));
    gsap.from(upperline, Animations.lineEnterLeft(heading));
    gsap.from(underline, Animations.lineEnterRight(heading));
  }, []);

  let serviceCards = props.services.map((service, idx) => {
    return (
      <Col md="4" className="mx-auto mb-5" key={`service-card-${idx}`}>
        <Card className="mx-auto">
          <Card.Img className="mx-auto d-block mt-5" variant="top" src={getImgUrl(service.fields.image)} />
          <Card.Body>
            <Card.Title>{service.fields.title}</Card.Title>
            <div dangerouslySetInnerHTML={{
              __html: documentToHtmlString(service.fields.description),
            }}></div>
          </Card.Body>
          <Card.Footer>
            <a href="#contact" className="btn btn-outline-success btn-block text-white">Request</a>
          </Card.Footer>
        </Card>
      </Col>
    );
  });
  return (
    <Container fluid className={`mainDiv`}>
      <Row className="justify-content-center text-center">
        <Col xs={2}>
          <div className="heading-container mb-5">
            <h1
              ref={(el) => {
                heading = el;
              }}
            >
              <span className="heading-upperline"></span>

              <span onMouseEnter={(el) => handleHover(el)} onMouseLeave={(el) => handleUnhover(el)}>
                Services
              </span>

              <span className="heading-underline"></span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="justify-content-center">
          <Row className="justify-content-around">
            <CardDeck>{serviceCards}</CardDeck>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceSection;
