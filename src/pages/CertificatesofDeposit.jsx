import { useState } from "react";
import PropTypes from "prop-types";
import "./CertificatesofDeposit.css";

const CertificatesOfDeposit = () => {
  const [cds, setCds] = useState([]);
  const [cdDetails, setCdDetails] = useState({
    bankName: "",
    principalAmount: "",
    interestRate: "",
    term: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCdDetails({
      ...cdDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCd = {
      id: Date.now(),
      ...cdDetails,
      principalAmount: parseFloat(cdDetails.principalAmount),
      interestRate: parseFloat(cdDetails.interestRate),
      term: parseInt(cdDetails.term),
      maturityAmount: calculateMaturityAmount(
        parseFloat(cdDetails.principalAmount),
        parseFloat(cdDetails.interestRate),
        parseInt(cdDetails.term)
      ),
    };
    setCds([...cds, newCd]);
    setCdDetails({
      bankName: "",
      principalAmount: "",
      interestRate: "",
      term: "",
    });
  };

  const calculateMaturityAmount = (principal, rate, term) => {
    return principal * (1 + (rate / 100) * (term / 12));
  };

  return (
    <div className="certificates-of-deposit">
      <h2>Certificates of Deposit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={cdDetails.bankName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Principal Amount ($):</label>
          <input
            type="number"
            name="principalAmount"
            value={cdDetails.principalAmount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input
            type="number"
            name="interestRate"
            value={cdDetails.interestRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Term (Months):</label>
          <input
            type="number"
            name="term"
            value={cdDetails.term}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create CD</button>
      </form>

      <h3>Existing Certificates of Deposit</h3>
      <table>
        <thead>
          <tr>
            <th>Bank Name</th>
            <th>Principal Amount</th>
            <th>Interest Rate</th>
            <th>Term (Months)</th>
            <th>Maturity Amount</th>
          </tr>
        </thead>
        <tbody>
          {cds.map((cd) => (
            <tr key={cd.id}>
              <td>{cd.bankName}</td>
              <td>${cd.principalAmount.toFixed(2)}</td>
              <td>{cd.interestRate.toFixed(2)}%</td>
              <td>{cd.term} months</td>
              <td>${cd.maturityAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CertificatesOfDeposit.propTypes = {
  bankName: PropTypes.string,
  principalAmount: PropTypes.number,
  interestRate: PropTypes.number,
  term: PropTypes.number,
};

export default CertificatesOfDeposit;
