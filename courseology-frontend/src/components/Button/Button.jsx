import React from "react";
import "./Button.scss";

const Button = ({ buttonText }) => {
  return (
    <button className="button">
      <div className="button__text">{buttonText}</div>
    </button>
  );
};

export default Button;
