import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Pagenotfound from "./pages/Pagenotfound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Banking from "./pages/Banking";
import Loan from "./pages/Loan";
import CheckingAccounts from "./pages/CheckingAccounts";
import SavingsAccounts from "./pages/SavingsAccounts";
import CertificatesOfDeposit from "./pages/CertificatesofDeposit";
import MoneyMarketAccounts from "./pages/MoneyMarketAccounts";
import PersonalLoan from "./pages/PersonalLoans";
import HomeLoans from "./pages/HomeLoans";
import AutoLoans from "./pages/AutoLoans";
import BusinessLoans from "./pages/BusinessLoans";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="Loan" element={<Loan />} />
          <Route path="Personal Loans" element={<PersonalLoan />} />
          <Route path="Home Loans" element={<HomeLoans />} />
          <Route path="Auto Loans" element={<AutoLoans />} />
          <Route path="Business Loans" element={<BusinessLoans />} />
          <Route />
          <Route path="Banking" element={<Banking />} />
          <Route path="Checking Accounts" element={<CheckingAccounts />} />
          <Route path="Savings Accounts" element={<SavingsAccounts />} />
          <Route
            path="Certificates of Deposit (CDs)"
            element={<CertificatesOfDeposit />}
          />
          <Route
            path="Money Market Accounts"
            element={<MoneyMarketAccounts />}
          />

          <Route />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
