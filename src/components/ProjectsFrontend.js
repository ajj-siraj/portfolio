import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import { Tween, Reveal, Timeline, Controls, PlayState } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import firebase from "firebase";

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
    firebase
      .database()
      .ref("/en/-MCDVrFJ8cqOkUZ_xU41/projects")
      .once("value")
      .then(snapshot => {
        if (data === null) {
          let projects = Object.values(snapshot.val())
          let filteredList = projects.filter((proj) => {
            return proj.categories === "Front-end"
          });
          setData(filteredList);
          setSuccess(true);
          return;
        }
        setSuccess(false);
        return;
      })
      .then(console.log("Data from Firebase: ", data))
      .catch(err => console.log(err));
  });

  let projectNavs = [];
  let projectTabs = [];
  if (data) {
    let dataValues = Object.values(data);
    let dataKeys = Object.keys(data);
    console.log(dataValues);
    projectNavs = dataValues.map((project, idx) => {
      return (
        <Nav.Item>
          <Nav.Link eventKey={`project-${idx}`}>{project.title}</Nav.Link>
        </Nav.Item>
      );
    });

    projectTabs = dataValues.map((project, idx) => {
      return (
        <Tab.Pane eventKey={`project-${idx}`}>
          <div>{project.description}</div>
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
