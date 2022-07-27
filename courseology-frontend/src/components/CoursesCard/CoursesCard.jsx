import React from "react";
import "./CoursesCard.scss";

const CoursesCard = ({title, category, author}) => {
  return (
    <div className="card">
      <h2 className="card__text card__text--title">{title}</h2>
      <h3 className="card__text">{category}</h3>
      <h4 className="card__text card__text--author">{author}</h4>
    </div>
  );
};

export default CoursesCard;
