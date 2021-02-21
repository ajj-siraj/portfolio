import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import cogoToast from "cogo-toast";
import Loading from "../components/Loading";

//utility functions
import * as Utility from "../Utility";

//dynamic import as quill does not support ssr
const ReactQuill = dynamic(() => import("react-quill"));

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
  const [descValue, setValue] = useState("");

  let formKey = useRef(null);
  let formTitle = useRef(null);
  let formImgTitle = useRef(null);
  let formCat = useRef(null);
  let formTechs = useRef(null);
  let formDemoLink = useRef(null);
  let formSrcLink = useRef(null);

  formTechs = [];

  useEffect(() => {
    if (!data) {
      Utility.readData("Projects")
        .then(res => {
          setData(res);
          window.scroll(0, 0);
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
        description: descValue,
        liveDemo: formDemoLink.current.value,
        sourceCode: formSrcLink.current.value,
      };
      console.log(dataToPush);
      Utility.writeData("Projects", dataToPush, formKey.current.value)
        .then(() => {
          setData(null);
          window.scroll(0, 0);
          cogoToast.success("Project added successfully.");
        })
        .catch(err =>
          cogoToast.error("Permission denied. Please enter a valid key.")
        );
    }
    //Handle editing a project, idk how to handle this atm so I'll leave it for the future
    else if (action === "Edit") {
      cogoToast.info("Edit unsupported at the moment.");
      return;
    }

    //Handle removing a project
    else if (action === "Remove") {
      Utility.deleteData("Projects", projectID, formKey.current.value)
        .then(res => {
          
          setData(null);
          cogoToast.success("Deleted Successfully.");
        })
        .catch(err =>
          cogoToast.error("Permission denied. Please enter a valid key.")
        );
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
  let dataLength;
  if (data) {
    //this will be used to conditional render "you have no projects" statement
    dataLength = data.length;

    projects = data.map((project, idx) => {
      return (
        <Row key={`project-${idx}`} className={`projectContainer`}>
          <Col md={2} className={`projectImg`}>
            <img
              className="img-fluid m-auto"
              src={`/projects/${project.imgTitle}`}
              alt={project.imgTitle}
            />
          </Col>
          <Col md={10}>
            <Row className={`projectTitle`}>
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
                  onClick={() => projectSubmit("Edit", project.objectId)}
                >
                  Edit
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  block
                  variant="outline-danger"
                  onClick={() => projectSubmit("Remove", project.objectId)}
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
      <h1 className={`heading`}>Your Projects</h1>
      {!data ? <Loading source="manager" /> : null}
      {dataLength < 1 ? (
        <h4 className="text-center">You have no projects. Add some.</h4>
      ) : null}

      <Row className="justify-content-center">
        <Col md={8}>{projects}</Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formGroupKey">
              <Form.Label className={`fieldLabel-manager`}>
                Authorization key
              </Form.Label>
              <Form.Control type="text" placeholder="Authorization key" ref={formKey} />
            </Form.Group>

            <Form.Group controlId="formGroupTitle">
              <Form.Label className={`fieldLabel-manager`}>
                Project Title
              </Form.Label>
              <Form.Control type="text" placeholder="Title" ref={formTitle} />
            </Form.Group>

            <Form.Group controlId="formGroupDemoLink">
              <Form.Label className={`fieldLabel-manager`}>
                Demo Website Link (if available);
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Demo link"
                ref={formDemoLink}
              />
            </Form.Group>

            <Form.Group controlId="formGroupSrcLink">
              <Form.Label className={`fieldLabel-manager`}>
                Source code link
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Source code link"
                ref={formSrcLink}
              />
            </Form.Group>

            <Form.Group controlId="formGroupImgTitle">
              <Form.Label className={`fieldLabel-manager`}>
                Image Filename
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Image filename"
                ref={formImgTitle}
              />
            </Form.Group>
            <Form.Group controlId="categories">
              <Form.Label className={`fieldLabel-manager`}>
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
              <Form.Label className={`fieldLabel-manager`}>
                Description
              </Form.Label>

              <ReactQuill theme="snow" value={descValue} onChange={setValue} />
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
