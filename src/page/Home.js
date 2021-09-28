import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Map from "../components/DebrisMap/Map";
export const getDebrisData = async (params) => {
  const result = await fetch(process.env.REACT_APP_BASE_URL + "/debris?perPage=500");
  const data = await result.json();
  return data;
};
const Home = () => {
  const [currentPage ] = useState(1);
  const { data, isLoading } = useQuery("debris_map", () => getDebrisData({page: currentPage}));

  return (
    <div>
      {/* <DebrisMap />
       */}
       <Map data={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
