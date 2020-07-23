import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {Tween} from "react-gsap"

//components
import HomeSection from "../components/HomeSection";
import ProjectSection from "../components/ProjectSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = (props) => {
  return (
    <>
      <Header {...props}/>
      <Container fluid>
        <Row>
          <Col className="m-0 p-0">
            <HomeSection {...props}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectSection {...props}/>
          </Col>
        </Row>
      </Container>
      <Footer {...props}/>
    </>
  )
}

export default Main
