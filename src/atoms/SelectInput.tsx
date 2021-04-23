import React from "react";
import "./styles.css";

const SelectInput = ({
  items,
  styles,
  label,
  conainerStyle,
  name,
  onSelect,
  error,
  errorMessage,
  register,
}: SelectProps) => {
  return (
    <div className="input-container" style={conainerStyle}>
      <label htmlFor={name}>{label}</label>
      <select
        className={error? "select errored": "select"}
        style={styles}
        required
        name={name}
        ref={register}     
        onChange={onSelect && onSelect.bind(this)}
      >
        <option value="Choose Tagging" defaultValue="Choose Tagging" disabled>
          Choose Tagging
        </option>
        {items &&
          items.length > 1 &&
          items.map((item: any, i: number) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
      </select>
      <small>{errorMessage}</small>
    </div>
  );
};

export default SelectInput;
