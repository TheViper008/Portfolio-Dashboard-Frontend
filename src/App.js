import React from "react";
import OverviewCards from "./components/OverviewCards";
import HoldingsTable from "./components/HoldingsTable";
import AllocationCharts from "./components/AllocationCharts";
import PerformanceChart from "./components/PerformanceChart";
import TopPerformers from "./components/TopPerformers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-6 space-y-8">
        <OverviewCards />
        <AllocationCharts />
        <HoldingsTable />
        <PerformanceChart />
        <TopPerformers />
      </div>
    </div>
  );
}
export default App;
