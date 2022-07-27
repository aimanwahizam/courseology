import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage";

const Dashboard = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getCoursesData = async () => {
    let url = "http://localhost:8080/courses";
    const response = await fetch(url);
    const data = await response.json();
    setCoursesData(data);
  };

  useEffect(() => {
    getCoursesData();
  }, []);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const searchResultArray = coursesData.filter((course) => {
    return (
      course.name.toLowerCase().includes(searchInput) ||
      course.category.toLowerCase().includes(searchInput) ||
      course.author.toLowerCase().includes(searchInput)
    );
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coursesData={searchResultArray}
              searchFunction={handleSearchInput}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default Dashboard;
