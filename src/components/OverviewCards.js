import React, { useEffect, useState } from "react";
import { getSummary } from "../api";
import Loader from "./Loader";

function OverviewCards() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSummary()
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <Loader />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 bg-white rounded shadow">
        Total Value: ₹{data.totalValue}
      </div>
      <div className="p-4 bg-white rounded shadow">
        Gain/Loss:{" "}
        <span
          className={
            data.totalGainLoss >= 0 ? "text-green-500" : "text-red-500"
          }
        >
          ₹{data.totalGainLoss}
        </span>
      </div>
      <div className="p-4 bg-white rounded shadow">
        Performance: {data.totalGainLossPercent}%
      </div>
      <div className="p-4 bg-white rounded shadow">
        Invested: ₹{data.totalInvested}
      </div>
    </div>
  );
}
export default OverviewCards;
