import React, { useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

//animations
import * as Animations from "components/animations.js";

//css modules

gsap.registerPlugin(ScrollTrigger);

const AboutSection = (props) => {
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
          ref={(el) => {
            aboutHeading = el;
          }}
        >
          Who am I?
        </h3>
        <div ref={(el) => (parasRef = el)}>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.content.fields.aboutContent),
            }}
            className="about-paragraph"
          ></div>
        </div>
      </Row>
    </Container>
  );
};

export default AboutSection;
