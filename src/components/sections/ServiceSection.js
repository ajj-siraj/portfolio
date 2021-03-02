
import React, {useRef, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"

import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

//css modules


gsap.registerPlugin(TextPlugin);

const HomeSection = () => {

  let heading = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      delay: 2,
      repeat: -1, // number of repeats (-1 for infinite)
      repeatDelay: 2, // seconds between repeats
    });
    tl.to(heading, {text: "React Developer", delay: 2});
    tl.to(heading, {text: "Javascript Developer", delay: 2});
    tl.to(heading, {text: "Nodejs Developer", delay: 2});
    tl.to(heading, {text: "Web Developer", delay: 2});
    tl.to(heading, {text: "Hi, I'm Siraj"});
  }, [])
  return (
    <Container fluid className={`mainDiv`}>
      <Row className="align-items-center">
        <Col className="justify-content-center">
          <div>
          <h1 className={`homeHeading`} ref={el => heading = el}>Hi, I'm Siraj</h1>
          </div>
          <div>
            {/* <Timeline target={<h1 className={homeStyles.homeHeading}>Hi, I'm Siraj</h1>} repeat={-1} repeatDelay={2}>
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
          </Timeline> */}
          </div>
          
        </Col>
      </Row>
    </Container>
  )
}

export default HomeSection
