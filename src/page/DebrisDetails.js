import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import ReactMapGL, { Marker } from "react-map-gl";

const getDetails = async (id) => {
  const result = await fetch(process.env.REACT_APP_BASE_URL + "/debris/" + id);
  const data = await result.json();
  return data;
};
const DebrisDetails = () => {
  const { id } = useParams();
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 9,
  });

  const { data } = useQuery(["debris_details", id], () => getDetails(id));

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}></Col>
        <Col md={6}>
          <ReactMapGL
            mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
            {...viewport}
            {...data?.data}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          >
            {data?.data?.latitude && (
              <Marker
                longitude={data?.data?.longitude}
                latitude={data?.data?.latitude}
              >
                  {" ."}
                <svg
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Marker>
            )}
          </ReactMapGL>
        </Col>
      </Row>
    </Container>
  );
};

export default DebrisDetails;
