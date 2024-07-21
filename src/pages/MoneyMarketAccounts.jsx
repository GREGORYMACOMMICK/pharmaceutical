import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MoneyMarketAccount.css";

const MoneyMarketAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [accountDetails, setAccountDetails] = useState({
    bankName: "",
    balance: "",
    interestRate: "",
    minBalance: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({
      ...accountDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      id: Date.now(),
      ...accountDetails,
      balance: parseFloat(accountDetails.balance),
      interestRate: parseFloat(accountDetails.interestRate),
      minBalance: parseFloat(accountDetails.minBalance),
    };
    setAccounts([...accounts, newAccount]);
    setAccountDetails({
      bankName: "",
      balance: "",
      interestRate: "",
      minBalance: "",
    });
  };

  return (
    <div className="money-market-account">
      <h2>Money Market Account</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Balance ($):</label>
          <input
            type="number"
            name="balance"
            value={accountDetails.balance}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input
            type="number"
            name="interestRate"
            value={accountDetails.interestRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Minimum Balance ($):</label>
          <input
            type="number"
            name="minBalance"
            value={accountDetails.minBalance}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>

      <h3>Existing Money Market Accounts</h3>
      <table>
        <thead>
          <tr>
            <th>Bank Name</th>
            <th>Balance</th>
            <th>Interest Rate</th>
            <th>Minimum Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.bankName}</td>
              <td>${account.balance.toFixed(2)}</td>
              <td>{account.interestRate.toFixed(2)}%</td>
              <td>${account.minBalance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MoneyMarketAccount.propTypes = {
  bankName: PropTypes.string,
  balance: PropTypes.number,
  interestRate: PropTypes.number,
  minBalance: PropTypes.number,
};

export default MoneyMarketAccount;
