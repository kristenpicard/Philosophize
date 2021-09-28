import React from "react";
import "./style.css";
import CardBtn from "../CardBtn";

function Card(props) {
  return (
    <>
    <div
      className="card"
      style={{
        backgroundImage: props.image
          ? `url(${props.image})` : "none"
      }}
      
    >
      {/* {props.image} */}
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      
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
