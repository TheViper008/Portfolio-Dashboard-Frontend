import React, { useEffect, useState } from "react";
import { getAllocation } from "../api";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Loader from "./Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

function AllocationCharts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllocation()
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <Loader />;

  const sectorLabels = Object.keys(data.bySector);
  const sectorData = sectorLabels.map((key) => data.bySector[key].value);

  const capLabels = Object.keys(data.byMarketCap);
  const capData = capLabels.map((key) => data.byMarketCap[key].value);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Sector Allocation</h2>
        <Pie
          data={{
            labels: sectorLabels,
            datasets: [
              {
                data: sectorData,
                backgroundColor: ["#60a5fa", "#fbbf24", "#f87171", "#34d399"],
              },
            ],
          }}
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Market Cap Allocation</h2>
        <Pie
          data={{
            labels: capLabels,
            datasets: [
              {
                data: capData,
                backgroundColor: ["#a78bfa", "#fcd34d", "#38bdf8"],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
export default AllocationCharts;
