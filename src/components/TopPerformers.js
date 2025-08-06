import React, { useEffect, useState } from "react";
import { getSummary } from "../api";
import Loader from "./Loader";

function TopPerformers() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="font-bold">Top Performer</h3>
        <p>
          {data.topPerformer.name} ({data.topPerformer.symbol})
        </p>
        <p>Gain: {data.topPerformer.gainPercent}%</p>
      </div>
      <div className="bg-red-100 p-4 rounded shadow">
        <h3 className="font-bold">Worst Performer</h3>
        <p>
          {data.worstPerformer.name} ({data.worstPerformer.symbol})
        </p>
        <p>Loss: {data.worstPerformer.gainPercent}%</p>
      </div>
    </div>
  );
}
export default TopPerformers;
