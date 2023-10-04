import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Text = () => {
  const [color, setColor] = useState("");
  const [ishow, setIshow] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  const handleOnClick = () => {
    setIshow(!ishow);
    setColor("red");
    if (ishow) {
      setColor("");
    }
  };

  return (
    <div className="text">
      <button className="btn btn-primary" onClick={() => handleOnClick()}>
        Click
      </button>
    </div>
  );
};

export default Text;
