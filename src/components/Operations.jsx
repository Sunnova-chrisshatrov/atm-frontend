import React from "react";
import { useParams, Link } from "react-router-dom";

function Operations() {
  const { accountNumber } = useParams();

  return (
    <div>
      <h1>ATM Operations</h1>
      <div>Select an option for account {accountNumber}</div>
      <ul>
        <li>
          <Link to={`/withdraw/${accountNumber}`}>Withdraw Money</Link>
        </li>
        <li>
          <Link to={`/deposit/${accountNumber}`}>Deposit Money</Link>
        </li>
        <li>
          <Link to={`/balance/${accountNumber}`}>Check Balance</Link>
        </li>
      </ul>
    </div>
  );
}

export default Operations;
