import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Debris = ({ image, _id }) => {
  return (
    <Link to={`/collection/${_id}`} className="col-md-3">
      <Card className="h-100">
        <Card.Img className="rounded" variant="top" src={image} />
      </Card>
    </Link>
  );
};

export default Debris;
