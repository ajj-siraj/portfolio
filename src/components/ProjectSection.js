import { Link } from "gatsby"
import React, { useRef, useEffect } from "react"
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

//animations
import * as Animations from "./animations"

//css modules
import projectStyles from "../css/projects.css"
gsap.registerPlugin(ScrollTrigger)

const ProjectSection = props => {
  // let targetDiv = React.useRef(null);

  // React.useEffect(() => {
  //   //added to allow scrollTrigger to reference the element directly
  //   //doesn't actually do anything anymore but I'll leave it (jic)
  //   props.toggleNavTheme(targetDiv)
  //   // console.log("THE TARGET: ", targetDiv)
  // }, [])

  const handleClick = el => {
    console.log("the target: ", el.target)
    gsap.to(el.target, Animations.tabButtonHover)
  }

  return (
    <Container fluid className="mainDiv">
      <Row className="justify-content-center">
        <Col className="align-items-center text-center" id="skills-col">
          <h2 className="projects-heading">Here are some of my projects!</h2>
          <Tabs defaultActiveKey="profile" variant="pills" onClick={el => handleClick(el)}>
            <Tab
              eventKey="front"
              title="Front-end"
              id="tab-home"
              
            >
              <div>RANDOM TEXT</div>
            </Tab>
            <Tab
              eventKey="full"
              title="Fullstack"
              onClick={el => handleClick(el)}
            >
              <div>RANDOM TEXT{" "}</div>
            </Tab>
            <Tab
              eventKey="misc"
              title="Misc projects"
              onClick={el => handleClick(el)}
            ><div>RANDOM TEXT{" "}</div>
              
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectSection
