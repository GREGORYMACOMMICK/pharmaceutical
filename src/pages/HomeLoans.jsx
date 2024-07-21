// src/components/HomeLoans.jsx

import { useState } from "react";
import "./HomeLoans.css";

const HomeLoans = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    // Perform loan calculation logic here
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const periods = parseFloat(loanTerm) * 12;
    const payment = (principal * rate) / (1 - Math.pow(1 + rate, -periods));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="home-loans-container">
      <h2>Home Loan Calculator</h2>
      <form onSubmit={handleCalculate}>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount ($)</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {monthlyPayment && (
        <div className="result">
          <h3>Estimated Monthly Payment</h3>
          <p>${monthlyPayment}</p>
        </div>
      )}
    </div>
  );
};

export default HomeLoans;
