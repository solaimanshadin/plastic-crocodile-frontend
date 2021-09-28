import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Debris = ({ image, _id }) => {
  return (
    <Link to={`/collection/${_id}`} className="col-md-3">
      <Card className="h-100 debris-card ">
        <Card.Img className="rounded" variant="top" src={image} />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
          <button className="btn btn-lg font-bold btn-outline-light">
            Details view
          </button>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
};

export default Debris;
