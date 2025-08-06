import React, { useEffect, useState } from "react";
import { getHoldings } from "../api";
import Loader from "./Loader";

function HoldingsTable() {
  const [holdings, setHoldings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSector, setFilterSector] = useState("All");
  const [filterCap, setFilterCap] = useState("All");
  const [sortField, setSortField] = useState("gainLossPercent");
  const [sortDirection, setSortDirection] = useState("desc");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHoldings()
      .then((res) => {
        setHoldings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch holdings");
        setLoading(false);
      });
  }, []);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filtered = holdings
    .filter(
      (h) =>
        (filterSector === "All" || h.sector === filterSector) &&
        (filterCap === "All" || h.marketCap === filterCap) &&
        (h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          h.symbol.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      return sortDirection === "asc" ? valA - valB : valB - valA;
    });

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Holdings</h2>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or symbol"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-2 text-center rounded w-full sm:w-1/3"
        />

        <select
          value={filterSector}
          onChange={(e) => setFilterSector(e.target.value)}
          className="border px-3 py-2 text-center rounded"
        >
          <option>All</option>
          {[...new Set(holdings.map((h) => h.sector))].map((sec) => (
            <option key={sec}>{sec}</option>
          ))}
        </select>

        <select
          value={filterCap}
          onChange={(e) => setFilterCap(e.target.value)}
          className="border px-3 py-2 text-center rounded"
        >
          <option>All</option>
          {[...new Set(holdings.map((h) => h.marketCap))].map((cap) => (
            <option key={cap}>{cap}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              {[
                "symbol",
                "name",
                "quantity",
                "avgPrice",
                "currentPrice",
                "gainLoss",
                "gainLossPercent",
              ].map((field) => (
                <th
                  key={field}
                  className="px-3 py-2 text-center cursor-pointer whitespace-nowrap"
                  onClick={() => handleSort(field)}
                >
                  {field}{" "}
                  {sortField === field
                    ? sortDirection === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((h) => (
              <tr
                key={h.symbol}
                className={h.gainLoss >= 0 ? "text-green-600" : "text-red-600"}
              >
                <td className="px-3 py-2 text-center">{h.symbol}</td>
                <td className="px-3 py-2 text-center">{h.name}</td>
                <td className="px-3 py-2 text-center">{h.quantity}</td>
                <td className="px-3 py-2 text-center">{h.avgPrice}</td>
                <td className="px-3 py-2 text-center">{h.currentPrice}</td>
                <td className="px-3 py-2 text-center">{h.gainLoss}</td>
                <td className="px-3 py-2 text-center">{h.gainLossPercent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HoldingsTable;
