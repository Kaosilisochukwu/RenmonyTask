import React from "react";
import Button from "../atoms/Button";
import "./styles.css";
import { useHistory } from "react-router-dom";
import * as styles from "../constants/styles";

const WelcomePage = () => {
  let history = useHistory();
  const handlePay = () => history.push("/pay");
  return (
    <div className="onboarding-container">
      <div className="onboarding">
        <h2>Welcome To RenMoney Payment Widget</h2>
        <div className="logo">
          <img src="YG4Wqd47_400x400.jpg" alt="Logo" />
        </div>
        <div style={{ marginBottom: 20 }}>
          <p>
            We offer you leverage through ttechnology to make financial
            inclusion count
          </p>
        </div>
        <Button
          styles={styles.buttonStyles}
          title="Pay with Renmoney"
          handleClicked={handlePay}
        />
      </div>
    </div>
  );
};

export default WelcomePage;
