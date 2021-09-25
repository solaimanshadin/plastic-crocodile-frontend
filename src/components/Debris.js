import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Debris = ({ image, _id }) => {
  return (
    <Link to={`/debris/${_id}`} className="col-md-4">
      <Card className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Debris;
