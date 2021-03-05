import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Particles from "react-particles-js";

gsap.registerPlugin(TextPlugin);

const HomeSection = () => {
  let heading = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      delay: 2,
      repeat: -1, // number of repeats (-1 for infinite)
      repeatDelay: 2, // seconds between repeats
    });
    tl.to(heading, { text: "React Developer" });
    tl.to(heading, { text: "Javascript Developer", delay: 2 });
    tl.to(heading, { text: "Nodejs Developer", delay: 2 });
    tl.to(heading, { text: "Web Developer", delay: 2 });
    tl.to(heading, { text: "Hi, I'm Siraj", delay: 2 });
  }, []);
  return (
    <Container fluid className={`mainDiv`}>
      <Particles height="90vh" />
      <Row className="w-100 justify-content-center mainDiv-overlay text-center">
        <Col>
          <h1 className="nameHeading">Siraj Ahmed</h1>
          <h1 className={`homeHeading`} ref={(el) => (heading = el)}>
            Web Developer
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSection;
