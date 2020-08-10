import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//components
import ProjectsTemplate from "./ProjectsTemplate";
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

  //on scroll animations
  useEffect(() => {
    const upperline = heading.childNodes[0];
    const underline = heading.childNodes[2];
    gsap.from(heading, Animations.headingFade(heading));
    gsap.from(upperline, Animations.lineEnterLeft(heading));
    gsap.from(underline, Animations.lineEnterRight(heading));
  }, []);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!data) {
      Utility.readData("Projects")
        .then(res => {
          setData(res);
          setLoading(false);
          gsap.from(".projects-body", Animations.fadeIn(".projects-body")); //using refs for this one didn't work for some reason so I'll just use classnames
        })
        .catch(err => console.log(err));
    }
  }, [data]);

  //divide each received project category into its own variable:
  let front = [];
  let full = [];
  let misc = [];
  if (data) {
    data.forEach(proj => {
      switch (proj.categories) {
        case "Front-end":
          front.push(proj);
          return;
        case "Fullstack":
          full.push(proj);
          return;
        default:
          misc.push(proj);
      }
    });
  }
  let projectsBody = (
    <div className="projects-body mt-5">
      <Tabs defaultActiveKey="front" variant="pills">
        <Tab eventKey="front" title="Front-end">
          <div id="project-tab">
            <ProjectsTemplate data={front} />
          </div>
        </Tab>
        <Tab eventKey="full" title="Fullstack">
          <div id="project-tab">
            <ProjectsTemplate data={full} />
          </div>
        </Tab>
        <Tab eventKey="misc" title="Misc projects">
          <div id="project-tab">
            <ProjectsTemplate data={misc} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );

  let projectsCont = (
    <Container fluid className="mainDiv">
      <Row className="justify-content-center text-center">
        <Col xs={2}>
          <div className="heading-container mb-5">
            <h1
              ref={el => {
                heading = el;
              }}
            >
              
              <span className="heading-upperline"></span>
              
              <span
                onMouseEnter={el => handleHover(el)}
                onMouseLeave={el => handleUnhover(el)}
                
              >
                Projects
              </span>
              
              <span className="heading-underline"></span>
              
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="align-items-center text-center" id="skills-col">
          {loading ? <Loading /> : projectsBody}
        </Col>
      </Row>
    </Container>
  );

  return <div>{projectsCont}</div>;
};

export default ProjectSection;
