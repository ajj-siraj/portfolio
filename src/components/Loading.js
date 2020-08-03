import React from "react";

import { Container, Row, Col, Spinner } from "react-bootstrap";

import loading from "../css/loading.css";

const Loading = props => {
  let cN =
    props.source === "manager" ? "loadingContainerManager" : "loadingContainer";

  return (
    <Container fluid className={cN}>
      <Row className="justify-content-center align-items-center text-center">
        <Col xs={2}>
          <Spinner animation="grow" variant="warning" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center text-center">
        <Col>
          <p>Loading... Please wait.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
