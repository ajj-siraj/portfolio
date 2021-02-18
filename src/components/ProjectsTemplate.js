import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Tab, Button } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//images & vectors
let github = "/images/logos/github_logo.svg";
let globe = "/images/logos/globe.svg";
//technologies
let html5 = "/images/logos/HTML5_logo.svg";
let css3 = "/images/logos/css3_logo.svg";
let bootstrap4 = "/images/logos/bootstrap4_logo.svg";
let express = "/images/logos/express_logo.svg";
let git = "/images/logos/git_logo.svg";
let javascript = "/images/logos/javascript_logo.svg";
let jquery = "/images/logos/jquery_logo.svg";
let angular = "/images/logos/angular_logo.svg";
let mongodb = "/images/logos/mongodb_logo.svg";
let mysql = "/images/logos/mysql_logo.svg";
let nextjs = "/images/logos/nextjs_logo.svg";
let nodejs = "/images/logos/nodejs_logo.svg";
let php = "/images/logos/php_logo.svg";
let python = "/images/logos/python_logo.svg";
let react = "/images/logos/react_logo.svg";
let reactNative = "/images/logos/react_logo.svg";
let redux = "/images/logos/redux_logo.svg";
let typescript = "/images/logos/typescript_logo.svg";
let xamarin = "/images/logos/xamarin_logo.svg";
let gatsbyjs = "/images/logos/gatsby.svg";


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

gsap.registerPlugin(ScrollTrigger)

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
        alt="tech-svg"
      />
    );
  });
  return <div className="techsContainer">{techs}</div>;
};

const ProjectsTemplate = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(props.data);
  }, []);

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
              alt="project-img"
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
