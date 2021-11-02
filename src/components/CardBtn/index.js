import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} className="card-btn">
      <i className="fas fa-arrow-right" aria-hidden="false"></i>
    </button>
  );
}

export default CardBtn;
