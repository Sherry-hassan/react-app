import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          md={4}
          className="text-center border border-primary rounded p-3 mb-3 shadow"
        >
          <h2>Counter App</h2>
          <Button variant="primary" size="lg">
            Click Me
          </Button>
        </Col>
        <Col
          md={4}
          className="text-center border border-success rounded p-3 mb-3 shadow"
        >
          <h2>Todo App</h2>
          <Button variant="primary" size="lg">
            Click Me
          </Button>
        </Col>
        <Col
          md={4}
          className="text-center border border-danger rounded p-3 mb-3 shadow"
        >
          <h2>Submit Items</h2>
          <Button variant="primary" size="lg">
            Click Me
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
