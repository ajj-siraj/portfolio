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
  // let targetDiv = React.useRef(null);

  // React.useEffect(() => {
  //   //added to allow scrollTrigger to reference the element directly
  //   //doesn't actually do anything anymore but I'll leave it (jic)
  //   props.toggleNavTheme(targetDiv)
  //   // console.log("THE TARGET: ", targetDiv)
  // }, [])

  useEffect(() => {
    gsap.from(".projects-heading", Animations.projectsHeading)
    gsap.from(".projects-body", Animations.projectsBody)
  })

  
  return (
    <Container fluid className="mainDiv">
      <Row className="justify-content-center">
        <Col className="align-items-center text-center" id="skills-col">
          <h2 className="projects-heading">Projects</h2>
          <div className="projects-body">
            <Tabs defaultActiveKey="profile" variant="pills">
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
