import { Link } from "gatsby"
import React, { useRef, useEffect } from "react"
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

//components
import ProjectsFrontend from "./ProjectsFrontend";
import ProjectsFullstack from "./ProjectsFullstack";
import ProjectsMisc from "./ProjectsMisc";

//animations
import * as Animations from "./animations"

//css modules
import "../css/projects.css"
gsap.registerPlugin(ScrollTrigger)

const ProjectSection = props => {
  
  let heading = useRef(null)
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

  useEffect(() => {
    gsap.from(".projects-body", Animations.projectsBody)
  })

  
  return (
    <Container fluid className="mainDiv">
      <Row className="justify-content-center text-center">
      <Col xs={2}>
          <div className="heading-container">
            <h1
              ref={el => {
                heading = el
              }}
            >
              <Tween
                from={Animations.lineEnterLeft}
              >
                <span className="heading-upperline"></span>
              </Tween>
              <span
                onMouseEnter={el => handleHover(el)}
                onMouseLeave={el => handleUnhover(el)}
              >
                Projects
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
      <Row className="justify-content-center">
        <Col className="align-items-center text-center" id="skills-col">
          <div className="projects-body">
            <Tabs defaultActiveKey="front" variant="pills">
              <Tab
                eventKey="front"
                title="Front-end"
                
              >
                <ProjectsFrontend />
              </Tab>
              <Tab
                eventKey="full"
                title="Fullstack"
                
              >
                <ProjectsFullstack />
              </Tab>
              <Tab
                eventKey="misc"
                title="Misc projects"
                
              >
                <ProjectsMisc />
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectSection
