import Card from "./Card";
import React from "react";

const Cards = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <Card />
    </div>
  );
};

export default Cards;
