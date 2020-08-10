
import React from "react"
import { Container, Row, Col } from "react-bootstrap"


//components
import HomeSection from "./HomeSection"
import AboutSection from "./AboutSection"
import SkillSection from "./SkillSection"
import ProjectSection from "./ProjectSection"
import ContactSection from "./ContactSection"
import Header from "./Header"
import Footer from "./Footer"

const Main = (props) => {

  return (
    <>
    
      <Header/>
      {/* <ScrollLock isActive={props.loading}> */}
      <Container fluid>
        <Row>
          <Col className="m-0 p-0" id="home">
            <HomeSection/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="about">
            <AboutSection/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="skills">
            <SkillSection/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="projects">
            <ProjectSection {...props}/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0" id="contact">
            <ContactSection />
          </Col>
        </Row>
      </Container>
      {/* </ScrollLock> */}
      <Footer/>
    </>
  )
}

export default Main
