// src/pages/Loan.jsx

import Navbar from "../components/Navbar";
import AutoLoans from "./AutoLoans";
import BusinessLoans from "./BusinessLoans";
import HomeLoans from "./HomeLoans";
import PersonalLoan from "./PersonalLoans";
import "./Loan.css"; // Importing CSS file for Loan component styling
import Footer from "../components/Footer";

function Loan() {
  return (
    <div className="loan-container">
      <Navbar />
      <div className="loan-section">
        <h2 className="loan-heading">Loan Types</h2>
        <div className="loan-types">
          <PersonalLoan />
          <HomeLoans />
          <AutoLoans />
          <BusinessLoans />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Loan;
