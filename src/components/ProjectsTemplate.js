import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Tab, Button } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import {getImgUrl} from "~/Utility";

//images & vectors
let github = "/images/logos/github_logo.svg";
let globe = "/images/logos/globe.svg";

gsap.registerPlugin(ScrollTrigger)

const Technologies = props => {

  let techsInLC = props.techs.map((tech) => tech.toLowerCase())
  let foundTechs = props.skills.filter((skill, idx) => {
    return techsInLC.includes(skill.fields.techId.toLowerCase());
  });
  console.log(foundTechs);
  let techs = foundTechs.map((tech, idx) => {
    return (
      <img
        className="techSvg"
        src={getImgUrl(tech.fields.techImage)}
        key={Math.ceil(Math.random() * 1000)}
        alt="tech-svg"
      />
    );
  });
  return <div className="techsContainer">{techs}</div>;
};

const ProjectsTemplate = props => {

  //conditionals to avoid missing data errors
  let projectNavs = [];
  let projectTabs = [];
  if (props.data) {
    if (props.data.length > 0) {
      projectNavs = props.data.map((project, idx) => {
        return (
          <Nav.Item key={`project-nav-${idx}`}>
            <Nav.Link eventKey={`project--${idx}`}>{project.title}</Nav.Link>
          </Nav.Item>
        );
      });

      projectTabs = props.data.map((project, idx) => {
        return (
          <Tab.Pane key={`project-tab-${idx}`} eventKey={`project--${idx}`}>
            <Technologies techs={project.technologies} skills={props.skills}/>
            <img
              className="project-img"
              src={getImgUrl(project.image)}
              alt="project-img"
            />
            <div
              dangerouslySetInnerHTML={{ __html: documentToHtmlString(project.description) }}
              className="project-description"
            ></div>
            <Row>
              <Col>
                <Button
                  id="project-btn1"
                  block
                  variant="success"
                  as={"a"}
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener"
                  disabled={project.demoLink.toLowerCase() === "unavailable"}
                >
                  <img className="button-imgs" src={globe} alt="visit-site" />
                  Visit Website
                </Button>
              </Col>
              <Col>
                <Button
                  id="project-btn2"
                  block
                  variant="success"
                  as={"a"}
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener"
                  disabled={project.sourceLink.toLowerCase() === "unavailable"}
                >
                  <img
                    className="button-imgs"
                    src={github}
                    alt="visit-source"
                  />
                  Source Code
                </Button>
              </Col>
            </Row>
          </Tab.Pane>
        );
      });
    }
    //else if no projects found:
    else {
      projectNavs = <div></div>;
      projectTabs = (
        <div className="msg-container">
          Nothing here at the moment. Please check back another time!
        </div>
      );
    }
  }

  return (
    <Tab.Container defaultActiveKey={`project--0`}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {projectNavs}
          </Nav>
        </Col>
        <Col sm={9}>
          <div className="projects-container">
            <Tab.Content>{projectTabs}</Tab.Content>
          </div>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ProjectsTemplate;
