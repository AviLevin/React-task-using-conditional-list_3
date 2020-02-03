import React from "react";

const validation = ( props ) => {
  let validationText = "text long enough";

  if (props.inputLength <= 7) {
    validationText = "text tooooo short";
  
  }

  const style = {
color:"red"


  };

  return (
    <div>
      <p style={style}> {validationText} </p>
    </div>
  );
};

export default validation;
