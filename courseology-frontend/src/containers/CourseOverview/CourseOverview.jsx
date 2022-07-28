import React, { useEffect, useState } from "react";
import "./CourseOverview.scss";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";

const CourseOverview = () => {
  const [dataSet, setDataSet] = useState({});
  const { courseID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/courses/${courseID}`, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setDataSet(data);
      });
  }, [dataSet]);

  return (
    <div className="course-overview">
      <h1 className="course-overview__title">{dataSet.name}</h1>
      <div className="course-overview__content">
        <div className="course-overview__information">
          <h2>Category:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {dataSet.category}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Completion Time (hours):</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {dataSet.completionTime}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Price:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            ${dataSet.price}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Syllabus:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {dataSet.syllabus}
          </h3>
        </div>
        <div className="course-overview__information">
          <h2>Author:</h2>
          <h3 className="course-overview__information course-overview__information--entry">
            {dataSet.author}
          </h3>
        </div>
      </div>
      <Button
        buttonText="Back to Search"
        clickFunction="window.location.href='http://localhost:3000/courses'"
      />
    </div>
  );
};

export default CourseOverview;
