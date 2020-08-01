import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import {Tween} from "react-gsap"
import ScrollLock from "react-scrolllock";

//components
import HomeSection from "./HomeSection"
import AboutSection from "./AboutSection"
import SkillSection from "./SkillSection"
import ProjectSection from "./ProjectSection"
import Header from "./Header"
import Footer from "./Footer"

const Main = (props) => {

  return (
    <>
    
      <Header {...props}/>
      {/* <ScrollLock isActive={props.loading}> */}
      <Container fluid>
        <Row>
          <Col className="m-0 p-0">
            <HomeSection {...props}/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0">
            <AboutSection {...props}/>
          </Col>
        </Row>
        <Row>
          <Col className="m-0 p-0">
            <SkillSection {...props}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectSection {...props}/>
          </Col>
        </Row>
      </Container>
      {/* </ScrollLock> */}
      <Footer {...props}/>
    </>
  )
}

export default Main
