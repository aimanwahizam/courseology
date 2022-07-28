import React from "react";
import "./CoursesList.scss";
import CoursesCard from "../../components/CoursesCard/CoursesCard";

const CoursesList = ({ coursesData }) => {
  const coursesJSX = coursesData.map((course, index) => {
    return (
      <CoursesCard
        name={course.name}
        category={course.category}
        author={course.author}
        id={course.id}
        key={index}
      />
    );
  });

  return <div className="courses-list">{coursesJSX}</div>;
};

export default CoursesList;
