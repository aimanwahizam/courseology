import React from "react";
import "./HomePage.scss";
import CoursesList from "../CoursesList/CoursesList";

const HomePage = ({ coursesData, searchFunction }) => {
  return (
    <div className="home-page">
      <div className="home-page__top">
        <h1 className="home-page__title">Find your next course...</h1>
        <input
          type="text"
          className="home-page__search-bar"
          onInput={searchFunction}
        />
      </div>
      <div className="home-page__bottom">
        <h2 className="home-page__subheading">Course Results...</h2>
        <CoursesList coursesData={coursesData} />
      </div>
    </div>
  );
};

export default HomePage;
