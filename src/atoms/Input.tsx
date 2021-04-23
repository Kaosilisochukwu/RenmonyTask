import React from "react";
import "./styles.css";

const Input = (props: InputProps) => {
  const {name, label, type, placeholder, styles, conainerStyle, error, errorMessage, register } = props;
  return (
    <div className="input-container" style={conainerStyle}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className={error ? "input errored" : "input"}
        style={styles}
        type={type}
        placeholder={placeholder}
        ref={register}
      />
      <small>{errorMessage}</small>
    </div>
  );
};

export default Input;
