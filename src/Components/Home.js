import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="2">
          <Link to="/sign-up">
            <Button variant="primary" size="lg">
              SignUp
            </Button>
          </Link>
        </Col>
        <Col lg="2">
          <Link to="/login">
            <Button variant="primary" size="lg">
              LogIn
            </Button>
          </Link>
        </Col>
        <Col lg="2">
          <Link to="/folder">
            <Button variant="primary" size="lg">
              Folder
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
