import React from "react";
import "./Courses.scss";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__top">
        <h1 className="courses__title">Find your next course...</h1>
        <input type="text" className="courses__search-bar" />
      </div>
      <div className="courses__bottom">
        <h2 className="courses__subheading">Course Results...</h2>
        <div className="courses__grid"></div>
      </div>
    </div>
  );
};

export default Courses;
