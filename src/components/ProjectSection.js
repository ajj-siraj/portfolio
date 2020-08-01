import { Link } from "gatsby";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//components
import ProjectsFrontend from "./ProjectsFrontend";
import ProjectsFullstack from "./ProjectsFullstack";
import ProjectsMisc from "./ProjectsMisc";
import Loading from "./Loading";

//utility
import * as Utility from "../Utility";

//animations
import * as Animations from "./animations";

//css modules
import "../css/projects.css";
gsap.registerPlugin(ScrollTrigger);

const ProjectSection = props => {
  let heading = useRef(null);
  let projectsRef = useRef(null);

  //animate svgs on hover
  const handleHover = el => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineHover);
    gsap.to(underline, Animations.lineHover);
  };
  const handleUnhover = el => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineUnhover);
    gsap.to(underline, Animations.lineUnhover);
  };

  useEffect(() => {
    // gsap.from(projectsRef.current, Animations.projectsBody);
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      props.fetchingData();
      Utility.readData("Projects")
        .then(res => JSON.parse(res))
        .then(res => {
          setData(res);
          props.fetchingDone();
        })
        .catch(err => console.log(err));
    }
  });

  let projectsCont = (
    <Container fluid className="mainDiv">
      <Row className="justify-content-center text-center">
        <Col xs={2}>
          <div className="heading-container">
            <h1
              ref={el => {
                heading = el;
              }}
            >
              <Tween from={Animations.lineEnterLeft}>
                <span className="heading-upperline"></span>
              </Tween>
              <span
                onMouseEnter={el => handleHover(el)}
                onMouseLeave={el => handleUnhover(el)}
              >
                Projects
              </span>
              <Tween from={Animations.lineEnterRight}>
                <span className="heading-underline"></span>
              </Tween>
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="align-items-center text-center" id="skills-col">
          <div className="projects-body" ref={projectsRef}>
            <Tabs defaultActiveKey="front" variant="pills">
              <Tab eventKey="front" title="Front-end">
                <div id="front-end-tab">
                  <ProjectsFrontend data={data} />
                </div>
              </Tab>
              <Tab eventKey="full" title="Fullstack">
                <ProjectsFullstack data={data} />
              </Tab>
              <Tab eventKey="misc" title="Misc projects">
                <ProjectsMisc data={data} />
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );

  return <div>{props.loading ? <Loading /> : projectsCont}</div>;
};

export default ProjectSection;
