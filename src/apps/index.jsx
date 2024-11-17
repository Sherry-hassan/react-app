import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppDetails = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          md={4}
          className="text-center border border-primary rounded p-3 mb-3 shadow"
        >
          <h2>Counter App</h2>
          <Link to="/counterapp">
            <button className="btn btn-primary">Go to Counter App</button>
          </Link>
        </Col>
        <Col
          md={4}
          className="text-center border border-success rounded p-3 mb-3 shadow"
        >
          <h2>Todo App</h2>
          <Link to="/todoapp">
            <button className="btn btn-primary">Click Me</button>
          </Link>
        </Col>
        <Col
          md={4}
          className="text-center border border-danger rounded p-3 mb-3 shadow"
        >
          <h2>Submit Items</h2>
          <button className="btn btn-primary">Click Me</button>
        </Col>
      </Row>
    </Container>
  );
};

export default AppDetails;
