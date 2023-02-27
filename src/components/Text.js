import React from "react";
import { useState } from "react";

const Text = () => {
  const [check, setCheck] = useState(false);

  const handleChangeCheckbox = (e) => {
    setCheck(e.target.checked);
  };
  console.log(check);
  return (
    <div className="text">
      <input
        checked={check}
        type="checkbox"
        onChange={(e) => handleChangeCheckbox(e)}
      />
    </div>
  );
};

export default Text;
