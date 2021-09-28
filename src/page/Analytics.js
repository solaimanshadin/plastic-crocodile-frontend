import React, { useState } from "react";
import { useQuery } from "react-query";
import Chart from "../components/Chart/Chart";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { getStatistics } from "../API";



const Analytics = () => {
  // const []

  const [showForDays, setShowForDays] = useState(7);
  const { data, isLoading } = useQuery(["detection-statistics", showForDays], getStatistics);

  return (
    <div className="p-3">
      <div className="rounded shadow-sm p-3">
        <h6 className="m-0 text-dark">Total detected : {data?.total}</h6>
      </div>
      <div className="card mt-4">
        <div className="card-header row m-0 align-items-center justify-content-between">
          <div className="col-md-9">
            <h6 className="m-md-0">Detection statistics</h6>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center justify-content-md-end">
               <select className="form-select"  onChange={(e) => setShowForDays(e.target.value)} name="" id="">
                   <option value="7">Last 7 days</option>
                   <option value="15">Last 15 days</option>
                   <option value="30">Last 30 days</option>
               </select>
              
            </div>
          </div>

          
        </div>

        <div className="card-body">
          <Chart days={showForDays} isLoading={isLoading} data={data?.data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
