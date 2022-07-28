import React from "react";
import "./CoursesCard.scss";
import { Link } from "react-router-dom";

const CoursesCard = ({ name, category, author, id }) => {
  return (
    <>
      <Link className="card__link" to={"/courses/" + id}>
        <div className="card">
          <h2 className="card__text card__text--title">{name}</h2>
          <h3 className="card__text">{category}</h3>
          <h4 className="card__text card__text--author">{author}</h4>
        </div>
      </Link>
    </>
  );
};

export default CoursesCard;
