import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

export default function SmurfCard(props) {
  console.log("SmurfCard: ", props);
  return (
    <Card className="card">
      <CardTitle className="card-title">{props.smurf.name}</CardTitle>
      <CardText>
        <span className="bold">Age:</span> {props.smurf.age}
      </CardText>
      <CardText>
        <span className="bold">Height:</span> {props.smurf.height}
      </CardText>
    </Card>
  );
}
