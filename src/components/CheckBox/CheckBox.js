import { useRef } from "react";
import "./CheckBox.scss";

const CheckBox = (props) => {
  const inputRef = useRef(null);
  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="custom-checkbox__checkmark">
        <i className="fa-solid fa-check"></i>
      </span>
      <span className="custom-checkbox__title">{props.label}</span>
    </label>
  );
};

export default CheckBox;
