import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import ATMHome from "./components/ATMHome";
import Operations from "./components/Operations";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import Balance from "./components/Balance";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<ATMHome />} />
            <Route
              path="/operations/:accountNumber"
              element={<OperationsNavbar />}
            />
            <Route path="/withdraw/:accountNumber" element={<Withdraw />} />
            <Route path="/deposit/:accountNumber" element={<Deposit />} />
            <Route path="/balance/:accountNumber" element={<Balance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function OperationsNavbar() {
  return (
    <>
      <div className="operations-nav">
        <Link to="#" className="nav-link">
          Withdraw
        </Link>
        <Link to="#" className="nav-link">
          Deposit
        </Link>
        <Link to="#" className="nav-link">
          Check Balance
        </Link>
      </div>
      <Operations />
    </>
  );
}

export default App;
