
import React from "react"
import { Container, Row, Col } from "react-bootstrap"


//components
import HomeSection from "components/sections/HomeSection"
import AboutSection from "components/sections/AboutSection"
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
            <AboutSection content={props.content}/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="skills">
            <SkillSection skills={props.skills} content={props.content}/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="projects">
            <ProjectSection projects={props.projects}/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="contact">
            <ContactSection />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default Main
