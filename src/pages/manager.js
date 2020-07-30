import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Tween } from "react-gsap";
import Parse from "parse";
import cogoToast from "cogo-toast";

//utility functions
import * as Utility from "../Utility";

import managerStyles from "../css/manager.module.css";

const techs = [
  "html5",
  "css3",
  "bootstrap4",
  "javascript",
  "react",
  "react native",
  "redux",
  "jquery",
  "nodejs",
  "express",
  "mongodb",
  "nextjs",
  "mysql",
  "php",
  "python",
  "typescript",
  "xamarin",
  "angular",
  "gatsbyjs",
];

//utility functions

const Manager = props => {
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  let formTitle = useRef(null);
  let formImgTitle = useRef(null);
  let formCat = useRef(null);
  let formTechs = useRef(null);
  let formDesc = useRef(null);

  formTechs = [];

  useEffect(() => {
    if (!data) {
      Utility.readData("Projects")
        .then(res => JSON.parse(res))
        .then(res => {
          setData(res);
          setSuccess(true);
        })
        .catch(err => console.log(err));
    }
  }, [data]);

  //Button actions
  const projectSubmit = (action, projectID) => {
    let techsToPush = [];

    //Check which checkboxes are checked. She sells sea shells on the sea shore.
    formTechs.forEach(tech => {
      if (tech.checked) {
        techsToPush.push(tech.value);
      }
    });

    //Submitting a new project
    if (action === "Submit") {
      const dataToPush = {
        title: formTitle.current.value,
        imgTitle: formImgTitle.current.value,
        categories: formCat.current.value,
        technologies: techsToPush,
        description: formDesc.current.value,
      };
      console.log(dataToPush);
      Utility.writeData("Projects", "title", formTitle.current.value).then(
        setData(null)
      );
    }
    //Handle editing a project, idk how to handle this atm so I'll leave it for the future
    // else if (action === "Edit") {
    // }

    //Handle removing a project
    else if (action === "Remove") {
    }
  };

  const techsMapped = techs.map((tech, idx) => {
    return (
      <Form.Check
        key={`tech-${tech}-${idx}`}
        id={`tech-${tech}-${idx}`}
        type="checkbox"
        label={Utility.capitalizeFirstLetter(tech)}
        custom
        value={tech}
        ref={el => {
          formTechs.push(el);
        }}
      />
    );
  });

  let projects = [];
  if (data) {
    console.log("DATA: ", data);
    // let dataValues = Object.values(data);
    // let dataKeys = Object.keys(data);
    projects = data.map((project, idx) => {
      return (
        <Row key={`project-${idx}`} className={managerStyles.projectContainer}>
          <Col md={2} className={managerStyles.projectImg}>
            image here
          </Col>
          <Col md={10}>
            <Row className={managerStyles.projectTitle}>
              <Col>{project.title}</Col>
            </Row>
            {/* <Row className={managerStyles.projectDesc}>
              <Col>{project.description}</Col>
            </Row> */}
          </Col>
          <Col>
            <Row>
              <Col xs={6}>
                <Button
                  block
                  variant="outline-secondary"
                  onClick={() => projectSubmit("Edit", project[idx].id)}
                >
                  Edit
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  block
                  variant="outline-danger"
                  onClick={() => projectSubmit("Remove", project[idx].id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    });
  }

  return (
    <Container>
      <h1 className={managerStyles.heading}>Your Projects</h1>
      {!data ? (
        <Row className="justify-content-center">
          <h3>Loading...</h3>
        </Row>
      ) : null}

      <Row className="justify-content-center">
        <Col md={8}>{projects}</Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formGroupTitle">
              <Form.Label className={managerStyles.fieldLabel}>
                Project Title
              </Form.Label>
              <Form.Control type="text" placeholder="Title" ref={formTitle} />
            </Form.Group>
            <Form.Group controlId="formGroupImgTitle">
              <Form.Label className={managerStyles.fieldLabel}>
                Image Filename
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Image filename"
                ref={formImgTitle}
              />
            </Form.Group>
            <Form.Group controlId="categories">
              <Form.Label className={managerStyles.fieldLabel}>
                Categories
              </Form.Label>
              <Form.Control as="select" ref={formCat}>
                <option>Front-end</option>
                <option>Back-end</option>
                <option>Fullstack</option>
                <option>Mobile</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            {/* <Form.Group id="technologies"> */}
            {techsMapped}
            {/* </Form.Group> */}
            <Form.Group controlId="formGroupDescription">
              <Form.Label className={managerStyles.fieldLabel}>
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                rows="10"
                ref={formDesc}
              />
            </Form.Group>
            <Form.Group controlId="submitButton">
              <Button
                variant="success"
                block
                onClick={() => projectSubmit("Submit")}
              >
                Submit New Project
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Manager;
