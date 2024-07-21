import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        <h1>Welcome to Our Bank</h1>
        <p>
          Our bank offers a variety of services to meet your financial needs.
          Whether you are looking to open a savings account, apply for a loan,
          or manage your investments, we are here to help.
        </p>

        <div className="cards-container">
          <section className="card">
            <h2>Banking Services</h2>
            <ul>
              <li>
                <Link to="/banking">Checking Accounts</Link>
              </li>
              <li>
                <Link to="/banking">Savings Accounts</Link>
              </li>
              <li>
                <Link to="/banking">Certificates of Deposit (CDs)</Link>
              </li>
              <li>
                <Link to="/banking">Money Market Accounts</Link>
              </li>
            </ul>
          </section>

          <section className="card">
            <h2>Loan Execution</h2>
            <p>
              We offer various loan options to help you achieve your financial
              goals:
            </p>
            <ul>
              <li>
                <Link to="/loan">Personal Loans</Link>
              </li>
              <li>
                <Link to="/loan">Home Loans</Link>
              </li>
              <li>
                <Link to="/loan">Auto Loans</Link>
              </li>
              <li>
                <Link to="/loan">Business Loans</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
