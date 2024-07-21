import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CheckingAccounts.css";

const CheckingAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [accountDetails, setAccountDetails] = useState({
    bankName: "",
    accountNumber: "",
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

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      id: Date.now(),
      ...accountDetails,
      balance: parseFloat(accountDetails.balance),
    };
    setAccounts([...accounts, newAccount]);
    setAccountDetails({ bankName: "", accountNumber: "", balance: 0 });
  };

  const handleTransaction = (e) => {
    e.preventDefault();
    const amount = parseFloat(transactionAmount);
    const accountIndex = accounts.findIndex(
      (acc) => acc.accountNumber === accountDetails.accountNumber
    );

    if (accountIndex === -1) {
      alert("Account not found!");
      return;
    }

    if (transactionType === "deposit") {
      setAccounts((prevAccounts) => {
        const updatedAccounts = [...prevAccounts];
        updatedAccounts[accountIndex].balance += amount;
        return updatedAccounts;
      });
    } else if (transactionType === "withdraw") {
      if (amount > accounts[accountIndex].balance) {
        alert("Insufficient funds for withdrawal");
      } else {
        setAccounts((prevAccounts) => {
          const updatedAccounts = [...prevAccounts];
          updatedAccounts[accountIndex].balance -= amount;
          return updatedAccounts;
        });
      }
    }
    setTransactionAmount(0);
  };

  return (
    <div className="checking-accounts">
      <h2>Checking Accounts</h2>

      <form onSubmit={handleAccountSubmit}>
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
          <label>Initial Balance ($):</label>
          <input
            type="number"
            name="balance"
            value={accountDetails.balance}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>

      <h3>Existing Checking Accounts</h3>
      <table>
        <thead>
          <tr>
            <th>Bank Name</th>
            <th>Account Number</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.bankName}</td>
              <td>{account.accountNumber}</td>
              <td>${account.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Transaction</h3>
      <form onSubmit={handleTransaction}>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="transactionAccountNumber"
            value={accountDetails.accountNumber}
            onChange={handleInputChange}
            required
          />
        </div>
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
          <label>Amount ($):</label>
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

CheckingAccounts.propTypes = {
  bankName: PropTypes.string,
  accountNumber: PropTypes.string,
  balance: PropTypes.number,
};

export default CheckingAccounts;
