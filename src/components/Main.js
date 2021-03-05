
import React from "react"
import { Container, Row, Col } from "react-bootstrap"


//components
import HomeSection from "components/sections/HomeSection"
import AboutSection from "components/sections/AboutSection"
import ServiceSection from "components/sections/ServiceSection";
import SkillSection from "components/sections/SkillSection"
import ProjectSection from "components/sections/ProjectSection"
import ContactSection from "components/sections/ContactSection"
import Header from "components/Header"
import Footer from "components/Footer"

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
          {props.error ? "404" : <ProjectSection projects={props.projects} skills={props.skills}/>}
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
