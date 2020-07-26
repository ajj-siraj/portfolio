import { Link } from "gatsby"
import React, { useRef, useEffect } from "react"
import { Container, Row, Col, Tab, Tabs, Nav } from "react-bootstrap"
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
import skillStyles from "../css/skills.css"

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

const SkillSection = props => {
  let heading = useRef(null)
  let text = useRef(null)

  useEffect(() => {
    gsap.from(text, Animations.skillHeading)
  })
  //animate svgs on hover
  const handleHover = el => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineHover)
    gsap.to(underline, Animations.lineHover)
  }
  const handleUnhover = el => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineUnhover)
    gsap.to(underline, Animations.lineUnhover)
  }

  return (
    <Container fluid className="text-center align-items-center">
      <Row className="justify-content-center text-center">
        <Col xs={2}>
          <div className="heading-container">
            <h1 ref={el => { heading = el}}>
              <Tween
                from={Animations.lineEnterLeft}
              >
                <span className="heading-upperline"></span>
              </Tween>
              <span
                onMouseEnter={el => handleHover(el)}
                onMouseLeave={el => handleUnhover(el)}
                ref={el => {text = el}}
              >
                Skills
              </span>
              <Tween
                from={Animations.lineEnterRight}
              >
                <span className="heading-underline"></span>
              </Tween>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SkillSection
