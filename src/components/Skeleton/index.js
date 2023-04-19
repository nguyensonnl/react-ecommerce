import React from "react";
import "./Skeleton.scss";

const LoadingSkeleton = ({ className = "" }) => {
  return <div className={`skeleton ${className}`}></div>;
};

export default LoadingSkeleton;
