import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Withdraw() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const { accountNumber } = useParams();

  const handleWithdraw = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5432/api/withdraw`, {
        accountNumber,
        amount: parseInt(amount, 10),
      });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response?.data.error);
    }
  };

  return (
    <div>
      <h1>Withdraw Money</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to Withdraw"
      />
      <button onClick={handleWithdraw}>Withdraw</button>
      <div>{message}</div>
    </div>
  );
}

export default Withdraw;
