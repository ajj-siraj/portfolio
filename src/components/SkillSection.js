
import React, { useRef, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";

//utility
import { capitalizeFirstLetter } from "../Utility";

//images
import html5 from "../images/logos/HTML5_logo.svg";
import css3 from "../images/logos/css3_logo.svg";
import bootstrap4 from "../images/logos/bootstrap4_logo.svg";
import express from "../images/logos/express_logo.svg";
import git from "../images/logos/git_logo.svg";
import javascript from "../images/logos/javascript_logo.svg";
import jquery from "../images/logos/jquery_logo.svg";
import angular from "../images/logos/angular_logo.svg";
import mongodb from "../images/logos/mongodb_logo.svg";
import mysql from "../images/logos/mysql_logo.svg";
import nextjs from "../images/logos/nextjs_logo.svg";
import nodejs from "../images/logos/nodejs_logo.svg";
import php from "../images/logos/php_logo.svg";
import python from "../images/logos/python_logo.svg";
import react from "../images/logos/react_logo.svg";
import reactNative from "../images/logos/react_logo.svg";
import redux from "../images/logos/redux_logo.svg";
import typescript from "../images/logos/typescript_logo.svg";
import xamarin from "../images/logos/xamarin_logo.svg";
import gatsbyjs from "../images/logos/gatsby.svg";

//animations
import * as Animations from "./animations";

//css
import "../css/skills.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const learnedTech = {
  html5: html5,
  css3: css3,
  bootstrap4: bootstrap4,
  javascript: javascript,
  react: react,
  redux: redux,
  git: git,
  jquery: jquery,
  nodejs: nodejs,
  express: express,
  mongodb: mongodb,
  gatsbyjs: gatsbyjs,
  mysql: mysql,
};

const toLearnTech = {
  reactNative: reactNative,
  nextjs: nextjs,
  php: php,
  python: python,
  typescript: typescript,
  xamarin: xamarin,
  angular: angular,
};

gsap.registerPlugin(ScrollTrigger);

const SkillSection = props => {
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
  const handleHover = el => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineHover);
    gsap.to(underline, Animations.lineHover);
  };
  const handleUnhover = el => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineUnhover);
    gsap.to(underline, Animations.lineUnhover);
  };

  //map the techs svgs to add to the sliders
  let learnedValues = Object.values(learnedTech);
  let learnedKeys = Object.keys(learnedTech);
  let learned = learnedValues.map((svg, idx) => (
    <div key={`tech-svg-${idx}`}>
      <img
        className="techSvg m-auto text-center"
        src={svg}
        alt={`tech-svg-${idx}`}
        // scale down the obnoxiously large text svgs
        style={
          learnedKeys[idx] === "express" || "mongodb" || "jquery"
            ? { width: "150px" }
            : null
        }
      />
      <h3 className="tech-heading">
        {capitalizeFirstLetter(learnedKeys[idx])}
      </h3>
    </div>
  ));

  let toLearnKeys = Object.keys(toLearnTech);
  let toLearnValues = Object.values(toLearnTech);

  let toLearn = toLearnValues.map((svg, idx) => {
    return (
      <div key={`tech-svg2-${idx}`}>
        <img
          className="techSvg m-auto text-center"
          src={svg}
          alt={`tech-svg2-${idx}`}
        />
        <h3 className="tech-heading">
          {capitalizeFirstLetter(toLearnKeys[idx])}
        </h3>
      </div>
    );
  });

  return (
    <Container fluid className="text-center">
      {/* This Row is reserved for the heading */}
      <Row className="justify-content-center text-center">
        <Col xs={2}>
          <div className="heading-container">
            <h1
              ref={el => {
                heading = el;
              }}
            >
              <span className="heading-upperline"></span>
              <span
                onMouseEnter={el => handleHover(el)}
                onMouseLeave={el => handleUnhover(el)}
                ref={el => {
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
      <Container fluid ref={el => (skilltechs = el)}>
        <Row className="mt-5 mb-5">
          <Col xs={12} className=" mb-5">
            <h2 className="tech-heading-large mb-3">
              Technologies I feel comfortable with...
            </h2>
          </Col>
          <Col xs={12}>
            <Slider {...settings1}>{learned}</Slider>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col xs={12} className="mt-5 mb-5">
            <h2 className="tech-heading-large">
              Basic literacy or currently learning...
            </h2>
          </Col>
          <Col xs={12}>
            <Slider {...settings2}>{toLearn}</Slider>
          </Col>
        </Row>
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
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: responsiveSettings,
};
