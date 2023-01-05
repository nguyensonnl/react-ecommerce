import React from "react";
import "./Col.scss";

const Col = (props) => {
  return <div className={`col-${props.col}`}>{props.children}</div>;
};

export default Col;
