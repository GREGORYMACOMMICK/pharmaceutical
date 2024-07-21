import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" exact activeClassName="active">
            Homepage
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Banking" activeClassName="active">
            Banking
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Loan" activeClassName="active">
            Loan
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Signup" activeClassName="active">
            Signup
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
