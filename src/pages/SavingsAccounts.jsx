import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SavingsAccount.css";

const SavingsAccount = () => {
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: "",
    bankName: "",
    balance: 0,
  });

  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("deposit");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value,
    });
  };

  const handleTransactionChange = (e) => {
    const { name, value } = e.target;
    if (name === "transactionType") {
      setTransactionType(value);
    } else {
      setTransactionAmount(value);
    }
  };

  const handleTransaction = (e) => {
    e.preventDefault();
    const amount = parseFloat(transactionAmount);
    if (transactionType === "deposit") {
      setAccountDetails((prevDetails) => ({
        ...prevDetails,
        balance: prevDetails.balance + amount,
      }));
    } else if (
      transactionType === "withdraw" &&
      amount <= accountDetails.balance
    ) {
      setAccountDetails((prevDetails) => ({
        ...prevDetails,
        balance: prevDetails.balance - amount,
      }));
    } else {
      alert("Insufficient funds for withdrawal");
    }
    setTransactionAmount(0);
  };

  return (
    <div className="savings-account">
      <h2>Savings Account</h2>
      <form>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={accountDetails.accountNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={accountDetails.bankName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <h3>Current Balance: ${accountDetails.balance.toFixed(2)}</h3>
        </div>
      </form>

      <h3>Transaction</h3>
      <form onSubmit={handleTransaction}>
        <div>
          <label>Transaction Type:</label>
          <select
            name="transactionType"
            value={transactionType}
            onChange={handleTransactionChange}
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="transactionAmount"
            value={transactionAmount}
            onChange={handleTransactionChange}
            required
          />
        </div>
        <button type="submit">Submit Transaction</button>
      </form>
    </div>
  );
};

SavingsAccount.propTypes = {
  accountNumber: PropTypes.string,
  bankName: PropTypes.string,
  balance: PropTypes.number,
};

export default SavingsAccount;
