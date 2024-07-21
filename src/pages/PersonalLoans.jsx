import { useState } from "react";
import "./PersonalLoans.css";

const PersonalLoan = () => {
  // State variables (if needed)
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Function to handle form submission (example)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform calculations or submit data
    calculateMonthlyPayment();
  };

  // Function to calculate monthly payment (example)
  const calculateMonthlyPayment = () => {
    // Example calculation (replace with your logic)
    const interestRate = 5; // Example interest rate
    const months = parseInt(loanTerm) * 12; // Convert years to months
    const monthlyInterestRate = interestRate / 100 / 12;
    const loanAmountNum = parseFloat(loanAmount);

    const monthlyPaymentResult =
      (loanAmountNum * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -months));
    setMonthlyPayment(monthlyPaymentResult.toFixed(2)); // Update state with result
  };

  return (
    <div className="personal-loan-container">
      <h2>Personal Loan Calculator</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate Monthly Payment</button>
      </form>
      {monthlyPayment > 0 && (
        <div className="result">
          <h3>Monthly Payment</h3>
          <p>${monthlyPayment}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalLoan;
