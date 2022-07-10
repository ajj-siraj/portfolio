
import React from "react"
import { Container, Row, Col } from "react-bootstrap"


//components
import HomeSection from "components/sections/HomeSection.js"
import AboutSection from "components/sections/AboutSection.js"
import ServiceSection from "components/sections/ServiceSection.js";
import SkillSection from "components/sections/SkillSection.js"
import ProjectSection from "components/sections/ProjectSection.js"
import ContactSection from "components/sections/ContactSection.js"
import Header from "components/header.js"
import Footer from "components/Footer.js"

const Main = (props) => {

  return (
    <>
    
      <Header/>
      <Container fluid>
        <Row>
          <Col className="m-0 p-0" id="home">
            <HomeSection/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="about">
            {props.error ? "404" : <AboutSection content={props.content}/>}
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0 mb-5" id="services">
            <ServiceSection content={props.content} services={props.services}/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="skills">
              {props.error ? "404" : <SkillSection skills={props.skills} content={props.content}/>}
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="projects">
          {props.error ? "404" : <ProjectSection projects={props.projects} skills={props.skills} query={props.query}/>}
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="contact">
          {props.error ? "404" : <ContactSection />}
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Main
