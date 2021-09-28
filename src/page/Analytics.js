import React from 'react';
import Chart from '../components/Chart/Chart';

const Analytics = () => {
    return (
        <div className="p-3">
            <div className="rounded shadow-sm p-3">
            <h6 className="m-0 text-dark">Total detected : 70000</h6>

            </div>
            <div className="card mt-4">
                <div className="card-body">
                <Chart />

                </div>
            </div>
        </div>
    );
};

export default Analytics;