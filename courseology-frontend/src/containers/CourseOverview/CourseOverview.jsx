import React from "react";
import "./CourseOverview.scss";
import Button from "../../components/Button/Button";

const CourseOverview = ({
  name,
  category,
  completionTime,
  price,
  syllabus,
  author,
}) => {
  return (
    <div className="course-overview">
      <h1 className="course-overview__title">{name}</h1>
      <div className="course-overview__content">
        <div className="course-overview__information">
          <h2>Category:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {category}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Completion Time (hours):</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {completionTime}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Price:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            ${price}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Syllabus:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {syllabus}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Author:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {author}
          </h3>
        </div>
      </div>
      <Button
        buttonText="Back to Search"
        clickFunction="window.location.href='http://localhost:3000/'"
      />
    </div>
  );
};

export default CourseOverview;
