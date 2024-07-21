// src/pages/Banking.jsx

import Navbar from "../components/Navbar";
import CertificatesOfDeposit from "./CertificatesofDeposit";
import CheckingAccounts from "./CheckingAccounts";
import MoneyMarketAccounts from "./MoneyMarketAccounts";
import SavingsAccounts from "./SavingsAccounts";
import "./Banking.css";
import Footer from "../components/Footer";

function Banking() {
  return (
    <div className="banking-page">
      <Navbar />

      <div className="banking-content">
        <div className="section">
          <CheckingAccounts />
        </div>

        <div className="section">
          <SavingsAccounts />
        </div>

        <div className="section">
          <CertificatesOfDeposit />
        </div>

        <div className="section">
          <MoneyMarketAccounts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Banking;
