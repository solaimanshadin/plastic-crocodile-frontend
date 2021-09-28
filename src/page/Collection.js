import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";
import Debris from "../components/Debris";
import Pagination from "react-js-pagination";

const getDebrisData = async (params) => {
  const result = await fetch(process.env.REACT_APP_BASE_URL + `/debris?perPage=8&page=${params.page}`);
  const data = await result.json();
  return data;
};
const Collection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useQuery(["debris", currentPage], () =>
    getDebrisData({ page: currentPage })
  );

  return (
    <div className="p-3">
      <div className="rounded shadow-sm p-3">
        <h6 className="m-0 text-dark">Detection Gallery</h6>
      </div>
      <Row className="g-3 my-4 mt-2">
        {data?.data?.map((debris) => (
          <Debris key={debris._id} {...debris} />
        ))}
      </Row>
      <div className="d-flex justify-content-center">
      <Pagination
          activePage={currentPage}
          itemsCountPerPage={8}
          totalItemsCount={data?.total}
          pageRangeDisplayed={5}
          onChange={e => setCurrentPage(e)}
        />
      </div>
      

    </div>
  );
};

export default Collection;
