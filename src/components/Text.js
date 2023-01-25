import React from "react";

const Text = (props) => {
  return (
    <div className="text">
      <p>Texxt</p>
      <div>{props.name}</div>
      <div>{props.brand}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default Text;
