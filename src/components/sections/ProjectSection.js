import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//components
import ProjectsTemplate from "components/ProjectsTemplate.js";
import Loading from "components/Loading.js";

//utility
import * as Utility from "~/Utility.js";

//animations
import * as Animations from "components/animations.js";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = (props) => {
  let heading = useRef(null);
  let underlineRef = useRef(null);

  //animate svgs on hover
  const handleHover = (el) => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineHover);
    gsap.to(underline, Animations.lineHover);
  };
  const handleUnhover = (el) => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.to(upperline, Animations.lineUnhover);
    gsap.to(underline, Animations.lineUnhover);
  };

  const fullWidth = typeof window !== 'undefined' && window.innerWidth;
  const oneWidth = fullWidth / 3;
  const lineWidth = 200; //100px specified for the underline in projects.css
  const correction = oneWidth / 2 - lineWidth / 2 - 5;

  const navUnderlineAnim = (eventKey, ev) => {
    let idx;
    switch (eventKey) {
      case "front":
        idx = 0;
        break;
      case "full":
        idx = 1;
        break;
      case "misc":
        idx = 2;
        break;
      default:
        idx = 0;
    }
    //I was here trying to find a way to animate the underline smoothly

    const distance = oneWidth * idx + correction;
    gsap.to(underlineRef, { transform: `translateX(${distance}px)` });

    // gsap.to(ev.target.childNodes[1], {'translate3d(' + idx * 100 + '%,0,0)'})
    console.log(underlineRef, idx);
  };

  //on scroll animations
  useEffect(() => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.from(heading, Animations.headingFade(heading));
    gsap.from(upperline, Animations.lineEnterLeft(heading));
    gsap.from(underline, Animations.lineEnterRight(heading));
    gsap.from(".projects-body", Animations.fadeIn(".projects-body")); //using refs for this one didn't work for some reason so I'll just use classnames

    gsap.to(underlineRef, { transform: `translateX(${correction}px)` }); //projects underline position on first load
  }, []);

  //divide each received project category into its own variable:
  let front = [];
  let full = [];
  let misc = [];

  props?.projects?.forEach((proj) => {
    switch (proj.fields.category) {
      case "Front-end":
        front.push(proj.fields);
        return;
      case "Fullstack":
        full.push(proj.fields);
        return;
      default:
        misc.push(proj.fields);
    }
  });

  let projectsBody = (
    <div className="projects-body mt-5">
      <Tab.Container
        defaultActiveKey="front"
        variant="pills"
        onSelect={(eK, e) => navUnderlineAnim(eK, e)}
      >
        <Row className="position-relative">
          <div ref={(el) => (underlineRef = el)} className="project-tab-underline"></div>
          <Col className="p-0">
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="front">
                  Front-end
                  {/* <div className="project-tab-underline"></div> */}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="full">
                  Fullstack
                  {/* <div className="project-tab-underline"></div> */}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="misc">Misc projects</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="front">
                <div id="project-tab">
                  <ProjectsTemplate data={front} skills={props.skills} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="full">
                <div id="project-tab">
                  <ProjectsTemplate data={full} skills={props.skills} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="misc">
                <div id="project-tab">
                  <ProjectsTemplate data={misc} skills={props.skills} />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );

  let projectsCont = (
    <Container fluid className="mainDiv-projects">
      <Row className="justify-content-center text-center">
        <Col xs={2}>
          <div className="heading-container mb-5">
            <h1
              ref={(el) => {
                heading = el;
              }}
            >
              <span className="heading-upperline"></span>

              <span onMouseEnter={(el) => handleHover(el)} onMouseLeave={(el) => handleUnhover(el)}>
                Projects
              </span>

              <span className="heading-underline"></span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="align-items-center text-center" id="projects-body-col">
          {/* {loading ? <Loading /> : projectsBody} */}
          {projectsBody}
        </Col>
      </Row>
    </Container>
  );

  return <div>{projectsCont}</div>;
};

export default ProjectSection;
