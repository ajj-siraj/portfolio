import { Link } from "gatsby"
import React, { useRef, useEffect } from "react"
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

//images
import html5 from "../images/logos/HTML5_logo.svg"
import css3 from "../images/logos/css3_logo.svg"
import bootstrap4 from "../images/logos/bootstrap4_logo.svg"
import express from "../images/logos/express_logo.svg"
import git from "../images/logos/git_logo.svg"
import javascript from "../images/logos/javascript_logo.svg"
import jquery from "../images/logos/jquery_logo.svg"
import angular from "../images/logos/angular_logo.svg"
import mongodb from "../images/logos/mongodb_logo.svg"
import mysql from "../images/logos/mysql_logo.svg"
import nextjs from "../images/logos/nextjs_logo.svg"
import nodejs from "../images/logos/nodejs_logo.svg"
import php from "../images/logos/php_logo.svg"
import python from "../images/logos/python_logo.svg"
import react from "../images/logos/react_logo.svg"
import redux from "../images/logos/redux_logo.svg"
import typescript from "../images/logos/typescript_logo.svg"
import xamarin from "../images/logos/xamarin_logo.svg"

//animations
import * as Animations from "./animations"

//css modules
import aboutStyles from "../css/about.css"

gsap.registerPlugin(ScrollTrigger)

const imgs = [
  html5,
  css3,
  bootstrap4,
  javascript,
  react,
  redux,
  git,
  jquery,
  nodejs,
  express,
  mongodb,
  nextjs,
  mysql,

  php,
  python,

  typescript,
  xamarin,
  angular,
]

//animate svgs on hover
const handleSvgHover = el => {
  gsap.to(el.target, { scale: 2, ease: "bounce" })
}
const handleSvgUnhover = el => {
  gsap.to(el.target, { scale: 1, ease: "bounce" })
}



const skills1 = imgs.map((img, idx) => {
  if (idx >= 0 && idx < 3) {
    return (
      <Tween from={Animations.svg}>
        <Col xs={4} md={4}>
          <img
            src={img}
            alt={`skills-${idx}`}
            onMouseEnter={el => handleSvgHover(el)}
            onMouseLeave={el => handleSvgUnhover(el)}
          />
        </Col>
      </Tween>
    )
  }
})

const skills2 = imgs.map((img, idx) => {
  if (idx >= 3 && idx < 5) {
    return (
      <Tween from={Animations.svg}>
        <Col xs={{ span: 8 }} md={{ span: 6 }}>
          <img
            src={img}
            alt={`skills-${idx}`}
            onMouseEnter={el => handleSvgHover(el)}
            onMouseLeave={el => handleSvgUnhover(el)}
          />
        </Col>
      </Tween>
    )
  }
})

const skills3 = imgs.map((img, idx) => {
  if (idx >= 5 && idx < 8) {
    return (
      <Tween from={Animations.svg}>
        <Col xs={{ span: 4 }} md={{ span: 4 }}>
          <img
            src={img}
            alt={`skills-${idx}`}
            onMouseEnter={el => handleSvgHover(el)}
            onMouseLeave={el => handleSvgUnhover(el)}
          />
        </Col>
      </Tween>
    )
  }
})

const skills4 = imgs.map((img, idx) => {
  if (idx >= 8 && idx < 11) {
    return (
      <Tween from={Animations.svg}>
        <Col xs={{ span: 8 }} md={{ span: 6 }}>
          <img
            src={img}
            alt={`skills-${idx}`}
            onMouseEnter={el => handleSvgHover(el)}
            onMouseLeave={el => handleSvgUnhover(el)}
          />
        </Col>
      </Tween>
    )
  }
})

const AboutSection = props => {
  return (
    <Container fluid className="about-section text-center align-items-center">
      <Row className="justify-content-center text-center about-row">
        <h3 className="about-heading text-center">Who am I?</h3>
        <p className="about-paragraph">
          My name is Siraj. I'm a graduate of Electrical Engineering, and
          currently a Web Developer. I enjoy the process of problem solving,
          and use whatever means in my disposal to do it as efficiently as I
          can. Of course, that includes learning new approaches as well.
        </p>
        <p className="about-paragraph">
          In my free time I enjoy gaming, chess, playing guitar, and
          reading. I also speak Arabic, English, and Japanese, and tremendously
          enjoy learning new languages. Which also happens to apply to
          programming languages :)
        </p>
        <p className="about-paragraph">
          For an overview of my skills and a collection of my projects, scroll
          down this page.
        </p>
      </Row>
      <Row>{skills1}</Row>
      <Row>{skills2}</Row>
      <Row>{skills3}</Row>
      <Row>{skills4}</Row>
    </Container>
  )
}

export default AboutSection
