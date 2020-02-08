import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Form, FormGroup, Input, Button } from "reactstrap";

export default function SmurfForm() {
  const [newSmurf, setNewSmurf] = useState({});

  const handleChange = event => {
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    axios.post("http://localhost:3333/smurfs", newSmurf).then(res => {
      console.log(res);
    });
    e.preventDefault();
  };

  return (
    <Container className="App">
      <Form className="form">
        <Col>
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="name"
              value={newSmurf.name}
              placeholder="Name"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Input
              type="text"
              name="age"
              id="age"
              value={newSmurf.age}
              placeholder="Age"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Input
              type="text"
              name="height"
              id="height"
              value={newSmurf.height}
              placeholder="Height"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Button color="primary" type="submit" onClick={handleSubmit}>
          Add Smurf
        </Button>
      </Form>
    </Container>
  );
}
