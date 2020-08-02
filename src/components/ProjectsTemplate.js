import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Tab, Button } from "react-bootstrap";
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//animations
import * as Animations from "./animations";

//images & vectors
import github from "../images/logos/github_logo.svg";
import globe from "../images/logos/globe.svg";

//css modules
import projectStyles from "../css/projects.css";

gsap.registerPlugin(ScrollTrigger);

const Technologies = (props) => {
  console.log(props);
  return <div></div>
}
const ProjectsTemplate = props => {
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setData(props.data);
  });

  let projectNavs = [];
  let projectTabs = [];
  if (data) {
    let dataValues = Object.values(data);
    let dataKeys = Object.keys(data);
    console.log(dataValues);
    projectNavs = dataValues.map((project, idx) => {
      return (
        <Nav.Item key={`projectfrontnav-${idx}`}>
          <Nav.Link eventKey={`projectfront-${idx}`}>{project.title}</Nav.Link>
        </Nav.Item>
      );
    });

    projectTabs = dataValues.map((project, idx) => {
      return (
        <Tab.Pane
          key={`projectfronttab-${idx}`}
          eventKey={`projectfront-${idx}`}
        >
          <Technologies techs={project.technologies}/>
          <img className="project-img" src={`/projects/${project.imgTitle}`} />
          <div
            dangerouslySetInnerHTML={{ __html: project.description }}
            className="project-description"
          ></div>
          <Row>
            <Col>
              <Button
                block
                variant="outline-warning"
                as={"a"}
                href={project.liveDemo}
                target="_blank"
                rel="noopener"
              >
                <img className="button-imgs" src={globe} alt="visit-site" />
                Visit Website
              </Button>
            </Col>
            <Col>
              <Button
                block
                variant="outline-success"
                as={"a"}
                href={project.sourceCode}
                target="_blank"
                rel="noopener"
              >
                <img className="button-imgs" src={github} alt="visit-source" />
                Source Code
              </Button>
            </Col>
          </Row>
        </Tab.Pane>
      );
    });
  }
  return (
    <Tab.Container defaultActiveKey="projectfront-0">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {projectNavs}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>{projectTabs}</Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ProjectsTemplate;
