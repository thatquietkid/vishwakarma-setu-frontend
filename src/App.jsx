import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MachineListing from "./pages/MachineListing";
import SearchResult from "./pages/SearchResult";

export default function App() {
  return (
    <div>
      <h2>Vishwakarma Setu App</h2>

      {/* Temporary navigation */}
      <nav>
        <Link to="/machines" style={{ marginRight: 10 }}>Machine Listing</Link>
        <Link to="/search">Search Results</Link>
      </nav>

      <Routes>
        <Route path="/machines" element={<MachineListing />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/" element={<MachineListing />} />
      </Routes>
    </div>
  );
}
