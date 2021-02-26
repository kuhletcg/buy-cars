import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "White",
  };

  return (
    <nav>
      <h2>Car's shop</h2>
      <h1>
        We carry all makes and models not just FORDS Click & shop LUXURY
        PRE-OWNED
      </h1>
      <ul className="nav-links">
        <Link style={navStyle} to="/login">
          <li>LogIn</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
