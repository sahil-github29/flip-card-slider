import React from "react";

const Card = props => (
  <div className="cardWidth" style={{ backgroundColor: "orange" }}>
    {props.card}
  </div>
);

export default Card;
