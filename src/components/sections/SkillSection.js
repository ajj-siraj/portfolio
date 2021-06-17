import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";

//animations
import * as Animations from "components/animations.js";
import { getImgUrl } from "~/Utility.js";

gsap.registerPlugin(ScrollTrigger);

const SkillSection = (props) => {
  let heading = useRef(null);
  let text = useRef(null);
  let skilltechs = useRef(null);

  useEffect(() => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.from(text, Animations.fadeIn(heading));
    gsap.from(upperline, Animations.lineEnterLeft(heading));
    gsap.from(underline, Animations.lineEnterRight(heading));
    gsap.from(skilltechs, Animations.fadeIn(heading));
  }, []);
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

  //map the techs svgs to add to the sliders
  let learned = props.skills
    .filter((skill) => skill.fields.learning === false)
    .map((skill, idx) => {
      return (
        <div key={`tech-svg-${idx}`}>
          <img
            className="techSvg m-auto text-center"
            src={getImgUrl(skill.fields.techImage)}
            alt={`tech-svg-${idx}`}
            //invert white text svgs to be visible for the dark background
            style={
              skill.fields.techId === "express" || skill.fields.techId === "nextjs"
                ? { width: "150px", filter: "invert(100%)" }
                : { width: "150px" }
            }
          />
          <h3 className="tech-heading">{skill.fields.techTitle}</h3>
        </div>
      );
    });

  // let toLearn = props.skills
  //   .filter((skill) => skill.fields.learning === true)
  //   .map((skill, idx) => {
  //     return (
  //       <div key={`tech-svg2-${idx}`}>
  //         <img
  //           className="techSvg m-auto text-center"
  //           src={getImgUrl(skill.fields.techImage)}
  //           alt={`tech-svg2-${idx}`}
  //         />
  //         <h3 className="tech-heading">{skill.fields.techTitle}</h3>
  //       </div>
  //     );
  //   });

  return (
    <Container fluid className="text-center">
      {/* This Row is reserved for the heading */}
      <Row className="justify-content-center text-center">
        <Col xs={2}>
          <div className="heading-container">
            <h1
              ref={(el) => {
                heading = el;
              }}
            >
              <span className="heading-upperline"></span>
              <span
                onMouseEnter={(el) => handleHover(el)}
                onMouseLeave={(el) => handleUnhover(el)}
                ref={(el) => {
                  text = el;
                }}
              >
                Skills
              </span>
              <span className="heading-underline"></span>
            </h1>
          </div>
        </Col>
      </Row>
      <Container fluid ref={(el) => (skilltechs = el)}>
        <Row className="mt-5 mb-5">
          <Col xs={12} className=" mb-5">
            <h2 className="tech-heading-large mb-3">{props.content.fields.skillsSubheading1}</h2>
          </Col>
          <Col xs={12}>
            <Slider {...settings1}>{learned}</Slider>
          </Col>
        </Row>
        {/* <Row className="mt-5 mb-5">
          <Col xs={12} className="mt-5 mb-5">
            <h2 className="tech-heading-large">{props.content.fields.skillsSubheading2}</h2>
          </Col>
          <Col xs={12}>
            <Slider {...settings2}>{toLearn}</Slider>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
};

export default SkillSection;

const responsiveSettings = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

const settings1 = {
  arrows: false,
  swipe: true,
  draggable: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1500,
  easing: "none",
  cssEase: "linear",
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: responsiveSettings,
};

const settings2 = {
  arrows: false,
  swipe: true,
  drag: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1500,
  easing: "none",
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: responsiveSettings,
};
