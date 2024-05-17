import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Balance() {
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");
  const { accountNumber } = useParams();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5432/api/account/${accountNumber}`
        );
        setBalance(`Current Balance: $${response?.data.amount}`);
        setError("");
      } catch (error) {
        setError("Unable to fetch balance. Please try again.");
        setBalance("");
      }
    };

    fetchBalance();
  }, [accountNumber]);

  return (
    <div>
      <h1>Check Balance</h1>
      <div>{balance}</div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Balance;
