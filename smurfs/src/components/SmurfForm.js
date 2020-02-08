import React from "react";
import { Container, Col, Form, FormGroup, Input, Button } from "reactstrap";

export default function SmurfForm() {
  return (
    <Container className="App">
      <Form className="form">
        <Col>
          <FormGroup>
            <Input type="text" name="name" id="name" placeholder="Name" />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Input type="text" name="age" id="age" placeholder="Age" />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Input type="text" name="height" id="height" placeholder="Height" />
          </FormGroup>
        </Col>

        <Button color="primary" type="submit">
          Add Smurf
        </Button>
      </Form>
    </Container>
  );
}
