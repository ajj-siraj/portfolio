import React, { useEffect } from "react";
import { Nav, Row, Col, Tab, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Slider from "react-slick";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { getImgUrl } from "~/Utility.js";
import { NextArrow, PrevArrow } from "components/Arrows";

//images & vectors
const github = "/images/logos/github_logo.svg";
const globe = "/images/logos/globe.svg";

gsap.registerPlugin(ScrollTrigger);

const Technologies = (props) => {
  let techsInLC = props.techs.map((tech) => tech.toLowerCase());
  let foundTechs = props.skills.filter((skill, idx) => {
    return techsInLC.includes(skill.fields.techId.toLowerCase());
  });

  let techs = foundTechs.map((tech, idx) => {
    return (
      <OverlayTrigger
        key={Math.ceil(Math.random() * 100000)} //randomize keys to avoid conflict between project templates
        placement="top"
        overlay={<Tooltip>{tech.fields.techTitle}</Tooltip>}
      >
        <img className="techSvg" src={getImgUrl(tech.fields.techImage)} alt="tech-svg" />
      </OverlayTrigger>
    );
  });
  return <div className="techsContainer">{techs}</div>;
};

const ProjectsTemplate = (props) => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
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
        console.log("project: ", project);
        return (
          <Tab.Pane key={`project-tab-${idx}`} eventKey={`project--${idx}`}>
            <h2 className="tech-heading-large mt-3">{`{  ${project.title}  }`}</h2>
            <div>
              <Slider {...settings}>
                {project?.previews?.map((image) => {
                  let url = getImgUrl(image);
                  return <img key={url} className="project-img" src={url} alt="project-img" />;
                })}
              </Slider>
            </div>
            <Technologies techs={project.technologies} skills={props.skills} />
            <div className="project-status">
              {/* Used two conditionals to avoid showing status when completed is undefined */}
              {project.complete !== undefined && "STATUS: "}
              {project.complete === true && <div className="complete">COMPLETE</div>}
              {project.complete === false && <div className="incomplete">INCOMPLETE</div>}
            </div>
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
                  <img className="button-imgs" src={github} alt="visit-source" />
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
