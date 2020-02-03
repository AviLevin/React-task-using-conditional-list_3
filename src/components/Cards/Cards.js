import React from "react";

const card = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "2px solid black",
    textAlign: "center",
    color:"blue"
  };

  return (
    <div style={style} onClick={props.clicked}>
      {props.cards}
    </div>
  );
};

export default card;
