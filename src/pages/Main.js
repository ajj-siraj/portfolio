import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

//components
import HomeSection from "../components/HomeSection";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Main = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="m-0 p-0">
            <HomeSection />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Main
