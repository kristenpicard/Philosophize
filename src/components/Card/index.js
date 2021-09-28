import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <>
      <div
        className="card"
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none",
        }}
      >
        {!props.image && (
          <i className="fa fa-spinner fa-spin" aria-hidden="false" />
        )}
        <CardBtn onClick={props.handleBtnClick} />
      </div>
      <div>
        Drink Name: {props.name}
        <br></br>
        Ingredients:
        {props.ingredients}
        <br></br>
        Instructions:
        {props.instructions}
      </div>
    </>
  );
}

export default Card;
