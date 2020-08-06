import { Link } from "gatsby";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//animations
import * as Animations from "./animations";

//css modules
import aboutStyles from "../css/about.css";

gsap.registerPlugin(ScrollTrigger);

//animate svgs on hover
const handleSvgHover = el => {
  gsap.to(el.target, { scale: 2, ease: "bounce" });
};
const handleSvgUnhover = el => {
  gsap.to(el.target, { scale: 1, ease: "bounce" });
};

const AboutSection = props => {
  let aboutHeading = useRef(null);

  useEffect(() => {
    if(aboutHeading) gsap.from(aboutHeading, Animations.headingFlip);
    gsap.from(".about-paragraph", Animations.fadeIn(".about-paragraph"))
  })
  return (
    <Container
      fluid
      className="about-section text-center align-items-center"
      
    >
      <Row className="justify-content-center text-center about-row">
        <h3 className="display-4 about-heading text-center" ref={(el) => {aboutHeading = el}}>
          Who am I?
        </h3>
        <p className="about-paragraph">
          My name is Siraj. I'm a graduate of Electrical Engineering, and
          currently a Web Developer. I enjoy the process of problem solving, and
          creating new things.
        </p>
        <p className="about-paragraph">
          In my free time I enjoy gaming, chess, playing guitar, and reading. I
          also speak Arabic, English, and Japanese, and tremendously enjoy
          learning new languages.
        </p>
        <p className="about-paragraph">
          For an overview of my skills and a collection of my projects, scroll
          down this page. If you'd like to work together,{" "}
          <a href="#contact">send me a message.</a>
        </p>
      </Row>
    </Container>
  );
};

export default AboutSection;

//idea scrapped for now, might bring back later:

// <Row>{skills1}</Row>
// <Row>{skills2}</Row>
// <Row>{skills3}</Row>
// <Row>{skills4}</Row>
// const skills1 = imgs.map((img, idx) => {
//   if (idx >= 0 && idx < 3) {
//     return (
//       <Tween from={Animations.svg}>
//         <Col xs={4} md={4}>
//           <img
//             src={img}
//             alt={`skills-${idx}`}
//             onMouseEnter={el => handleSvgHover(el)}
//             onMouseLeave={el => handleSvgUnhover(el)}
//           />
//         </Col>
//       </Tween>
//     )
//   }
// })

// const skills2 = imgs.map((img, idx) => {
//   if (idx >= 3 && idx < 5) {
//     return (
//       <Tween from={Animations.svg}>
//         <Col xs={{ span: 8 }} md={{ span: 6 }}>
//           <img
//             src={img}
//             alt={`skills-${idx}`}
//             onMouseEnter={el => handleSvgHover(el)}
//             onMouseLeave={el => handleSvgUnhover(el)}
//           />
//         </Col>
//       </Tween>
//     )
//   }
// })

// const skills3 = imgs.map((img, idx) => {
//   if (idx >= 5 && idx < 8) {
//     return (
//       <Tween from={Animations.svg}>
//         <Col xs={{ span: 4 }} md={{ span: 4 }}>
//           <img
//             src={img}
//             alt={`skills-${idx}`}
//             onMouseEnter={el => handleSvgHover(el)}
//             onMouseLeave={el => handleSvgUnhover(el)}
//           />
//         </Col>
//       </Tween>
//     )
//   }
// })

// const skills4 = imgs.map((img, idx) => {
//   if (idx >= 8 && idx < 11) {
//     return (
//       <Tween from={Animations.svg}>
//         <Col xs={{ span: 8 }} md={{ span: 6 }}>
//           <img
//             src={img}
//             alt={`skills-${idx}`}
//             onMouseEnter={el => handleSvgHover(el)}
//             onMouseLeave={el => handleSvgUnhover(el)}
//           />
//         </Col>
//       </Tween>
//     )
//   }
// })
