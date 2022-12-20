import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FileTable from "./FileTable";

function AllRoutes() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/file" element={<FileTable />} />
        </Routes>
      </Router>
  )
}

export default AllRoutes