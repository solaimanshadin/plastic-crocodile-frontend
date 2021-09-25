import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import Debris from "../components/Debris";

const getDebrisData = async () => {
  const result = await fetch(process.env.REACT_APP_BASE_URL + "/debris");
  const data = await result.json();
  return data;
};
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useQuery(["debris", currentPage], getDebrisData);

  return (
    <Container>
      <Row className="g-3 my-4">
        {data?.data?.map((debris) => (
          <Debris key={debris._id} {...debris} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
