import React, { useEffect, useState } from "react";
import { getPerformance } from "../api";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import Loader from "./Loader";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function PerformanceChart() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPerformance()
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <Loader />;

  const labels = data.timeline.map((d) => d.date);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">Performance Over Time</h2>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Portfolio",
              data: data.timeline.map((d) => d.portfolio),
              borderColor: "blue",
              fill: false,
            },
            {
              label: "Nifty50",
              data: data.timeline.map((d) => d.nifty50),
              borderColor: "green",
              fill: false,
            },
            {
              label: "Gold",
              data: data.timeline.map((d) => d.gold),
              borderColor: "orange",
              fill: false,
            },
          ],
        }}
      />
    </div>
  );
}
export default PerformanceChart;
