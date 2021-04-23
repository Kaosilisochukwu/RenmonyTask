import React from "react";
import "./styles.css";

const Button = ({ styles, title, type, disable, handleClicked}: any) => {
  return (
    <button type={type} style={styles} disabled={disable} onClick={handleClicked}>
      {title}
    </button>
  );
};

export default Button;
