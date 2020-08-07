import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Tab, Button } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//animations
import * as Animations from "./animations";

//images & vectors
import github from "../images/logos/github_logo.svg";
import globe from "../images/logos/globe.svg";
//technologies
import html5 from "../images/logos/HTML5_logo.svg";
import css3 from "../images/logos/css3_logo.svg";
import bootstrap4 from "../images/logos/bootstrap4_logo.svg";
import express from "../images/logos/express_logo.svg";
import git from "../images/logos/git_logo.svg";
import javascript from "../images/logos/javascript_logo.svg";
import jquery from "../images/logos/jquery_logo.svg";
import angular from "../images/logos/angular_logo.svg";
import mongodb from "../images/logos/mongodb_logo.svg";
import mysql from "../images/logos/mysql_logo.svg";
import nextjs from "../images/logos/nextjs_logo.svg";
import nodejs from "../images/logos/nodejs_logo.svg";
import php from "../images/logos/php_logo.svg";
import python from "../images/logos/python_logo.svg";
import react from "../images/logos/react_logo.svg";
import reactNative from "../images/logos/react_logo.svg";
import redux from "../images/logos/redux_logo.svg";
import typescript from "../images/logos/typescript_logo.svg";
import xamarin from "../images/logos/xamarin_logo.svg";
import gatsbyjs from "../images/logos/gatsby.svg";

//css modules
import projectStyles from "../css/projects.css";

const imgs = {
  html5: html5,
  css3: css3,
  bootstrap4: bootstrap4,
  javascript: javascript,
  react: react,
  reactNative: reactNative,
  redux: redux,
  git: git,
  jquery: jquery,
  nodejs: nodejs,
  express: express,
  mongodb: mongodb,
  nextjs: nextjs,
  mysql: mysql,
  php: php,
  python: python,
  typescript: typescript,
  xamarin: xamarin,
  angular: angular,
  gatsbyjs: gatsbyjs,
};


const plugins = [gsap, ScrollTrigger];
const Technologies = props => {
  let imgKeys = Object.keys(imgs);
  let foundTechs = imgKeys.filter((imgKey, idx) => {
    return props.techs.includes(imgKey.toString());
  });
  let techs = foundTechs.map((tech, idx) => {
    return (
      <img
        className="techSvg"
        src={imgs[tech]}
        key={Math.ceil(Math.random() * 1000)}
      />
    );
  });
  return <div className="techsContainer">{techs}</div>;
};

const ProjectsTemplate = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(props.data);
  });

  //conditionals to avoid missing data errors
  let projectNavs = [];
  let projectTabs = [];
  if (data) {
    if (data.length > 0) {
      projectNavs = data.map((project, idx) => {
        return (
          <Nav.Item key={`project-nav-${idx}`}>
            <Nav.Link eventKey={`project--${idx}`}>{project.title}</Nav.Link>
          </Nav.Item>
        );
      });

      projectTabs = data.map((project, idx) => {
        return (
          <Tab.Pane key={`project-tab-${idx}`} eventKey={`project--${idx}`}>
            <Technologies techs={project.technologies} />
            <img
              className="project-img"
              src={`/projects/${project.imgTitle}`}
            />
            <div
              dangerouslySetInnerHTML={{ __html: project.description }}
              className="project-description"
            ></div>
            <Row>
              <Col>
                <Button
                  id="project-btn1"
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
                  id="project-btn2"
                  block
                  variant="outline-warning"
                  as={"a"}
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener"
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
