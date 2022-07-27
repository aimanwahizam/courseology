import React from "react";
import "./Dashboard.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage";

const Dashboard = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
