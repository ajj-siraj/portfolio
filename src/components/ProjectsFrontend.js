import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//utility functions


//animations
import * as Animations from "./animations";

//css modules
import projectStyles from "../css/projects.css";
gsap.registerPlugin(ScrollTrigger);

const ProjectsFrontend = props => {
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
        <Tab.Pane key={`projectfronttab-${idx}`} eventKey={`projectfront-${idx}`}>
          <div>{project.id}</div>
        </Tab.Pane>
      );
    });
  }
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {projectNavs}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {projectTabs}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ProjectsFrontend;
