import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../App.css";

function ATMHome() {
  const [accountNumber, setAccountNumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/operations/${accountNumber}`);
  };

  return (
    <div className="atm-machine">
      <h1>Welcome to ATM</h1>
      <input
        type="number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Enter Account Number"
      />
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
}

export default ATMHome;
