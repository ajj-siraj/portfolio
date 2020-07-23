import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Tween, Reveal, Timeline} from "react-gsap"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

//animations
import * as Animations from "./animations"

//css modules
import homeStyles from "../css/home.module.css"

gsap.registerPlugin(TextPlugin)
const HomeSection = () => {
  return (
    <Container fluid className={homeStyles.mainDiv}>
      <Row className="align-items-center">
        <Col className="justify-content-center">
          <div>
            <Timeline target={<h1 className={homeStyles.homeHeading}>Hi, I'm Siraj</h1>} repeat={-1} repeatDelay={2}>
            <Tween
              to={{
                text: "Hi, I'm a JavaScript Developer",
                speed: "0.5",
                type: "diff",
                delay: "1",
              }}
            />
            <Tween
              to={{
                text: "Hi, I'm a React Developer",
                speed: "0.5",
                type: "diff",
                delay: "1",
              }}
            />
            <Tween
              to={{
                text: "Hi, I'm a Nodejs Developer",
                speed: "0.5",
                type: "diff",
                delay: "1",
              }}
            />

            <Tween
              to={{
                text: "Hi, I'm a Web Developer",
                speed: "0.5",
                type: "diff",
                delay: "1",
              }}
            />

            <Tween
              to={{
                text: "Hi, I'm Siraj",
                speed: "0.5",
                type: "diff",
                delay: "1",
              }}
            />
          </Timeline>
          </div>
          
        </Col>
      </Row>
    </Container>
  )
}

export default HomeSection
