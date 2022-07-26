import React from "react";
import "./Button.scss";

const Button = ({ buttonText, clickFunction }) => {
  return (
    <button className="button" onClick={clickFunction}>
      <div className="button__text">{buttonText}</div>
    </button>
  );
};

export default Button;
