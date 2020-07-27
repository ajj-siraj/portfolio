import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Tween } from "react-gsap"
import firebase from "gatsby-plugin-firebase"

import managerStyles from "../css/manager.module.css"

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
]

const Manager = props => {
  const [data, setData] = useState(null)
  let formTitle = useRef(null)
  let formImgTitle = useRef(null)
  let formCat = useRef(null)
  let formTechs = useRef(null)
  let formDesc = useRef(null)

  formTechs = [];

  useEffect(() => {
    firebase
      .database()
      .ref("/en/-MCDVrFJ8cqOkUZ_xU41/projects")
      .once("value")
      .then(snapshot => {
        if (!data) {
          setData(snapshot.val())
          return
        }
        return
      })
      .then(console.log("Data from Firebase: ", data))
  })

  //Button actions
  const projectSubmit = (action, projectID) => {
    //Submitting a new project
    let techsToPush = [];
    //Check which checkboxes are checked. She sells sea shells on the sea shore.
    formTechs.forEach((tech) => {
      if(tech.checked){
        techsToPush.push(tech.value);
      }
    })
    if (action === "Submit") {
      const dataToPush = {
        Title: formTitle.current.value,
        ImgTitle: formImgTitle.current.value,
        Categories: formCat.current.value,
        Technologies: techsToPush,
        Description: formDesc.current.value,
      }
      console.log(dataToPush);
      firebase.database().ref("/en/-MCDVrFJ8cqOkUZ_xU41/projects").push(dataToPush)
    } 
    //Handle editing a project
    else if (action === "Edit") {
    } 
    //Handle removing a project
    else if (action === "Remove") {
    }
  }
  const techsMapped = techs.map((tech, idx) => {
    return (
      <Form.Check
        key={`tech-${tech}-${idx}`}
        id={`tech-${tech}-${idx}`}
        type="checkbox"
        label={tech.toUpperCase()}
        custom
        value={tech}
        ref={el => {formTechs.push(el)}}
      />
    )
  })

  let projects = []
  if (data) {
    let dataValues = Object.values(data)
    let dataKeys = Object.keys(data)
    console.log(dataValues)
    projects = dataValues.map((project, idx) => {
      return (
        <Row key={`project-${idx}`} className="p-5">
          <Col md={2}>image here</Col>
          <Col md={10}>
            <Row>
              <Col>{project.title}</Col>
            </Row>
            <Row>
              <Col>{project.description}</Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={6}>
                <Button
                  block
                  variant="outline-secondary"
                  onClick={() => projectSubmit("Edit", dataKeys[idx])}
                >
                  Edit
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  block
                  variant="outline-danger"
                  onClick={() => projectSubmit("Remove", dataKeys[idx])}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      )
    })
  }

  return (
    <Container>
      <h1 className={managerStyles.heading}>Your Projects</h1>
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
              <Form.Control
                type="text"
                placeholder="Title"
                ref={formTitle}
              />
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
              <Button variant="success" block onClick={() => projectSubmit("Submit")}>
                Submit New Project
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Manager
