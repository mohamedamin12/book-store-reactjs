/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ left: toggle && "0" }} >
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          Home
        </Link>
        <Link to="/about" onClick={() => setToggle(false)} className="navbar-link">
          About Us
        </Link>
        <Link to="/contact-us" onClick={() => setToggle(false)} className="navbar-link">
          Contact Us
        </Link>
        <Link to="/register" onClick={() => setToggle(false)} className="navbar-link">
          Register
        </Link>
      </ul>
    </nav>
  );
};
