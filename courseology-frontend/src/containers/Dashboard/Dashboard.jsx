import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage";

const Dashboard = () => {
  const [coursesData, setCoursesData] = useState([]);

    const getCoursesData = async () => {
        let url = "http://localhost:8080/courses";
        const response = await fetch(url);
        const data = response.json();
        setCoursesData(data);
    }

    useEffect(() => {
        getCoursesData();
    }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage courses={coursesData}/>} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
