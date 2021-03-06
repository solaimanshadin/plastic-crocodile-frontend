import React from "react";
import { Card, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Map from "../components/DebrisMap/Map";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { getDetails } from "../API";

const DebrisDetails = () => {
  const { id } = useParams();
  const { data } = useQuery(["debris_details", id], () => getDetails(id));

  return (
    <div className="">
      <div className="d-flex flex-md-row">
        <Col md={6} className="p-4 ">
          <div className="rounded shadow-sm p-3 mb-4">
            <Link to="/collection" className="btn btn-light">
             <HiOutlineArrowNarrowLeft /> Go Back
            </Link>
          </div>
          <Card className="border-0">
            <Card.Img variant="top" src={data?.data?.image} />
            <Card.Body>
              <Card.Title>{data?.data?.note}</Card.Title>
              <Card.Text>Detected At: {data?.data?.created_at}</Card.Text>
              <Card.Text>Depth: {data?.data?.depth}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Map 
            data={data?.data && [data?.data]} 
            latitude={data?.data?.latitude} 
            longitude={data?.data?.longitude} 
            zoom={6}
          />
        </Col>
      </div>
    </div>
  );
};

export default DebrisDetails;
