import React, {useState, useEffect} from "react";

import { Container, Row, Col, Spinner } from "react-bootstrap";

import loading from "../css/loading.css";

const Loading = props => {
  const [error, setError] = useState(false);

  //timeout duration after which show warning to user
  useEffect(() => {
    setTimeout(() => {
      setError(true);
    }, 30000);
  })

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
          <p className="tech-heading-large">Loading... Please wait.</p>
          {error ? <p>
            It would seem your connection is weak, if nothing shows up in a few
            seconds, refresh the page.
          </p> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
