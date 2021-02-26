import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "Black",
  };

  return (
    <nav>
      <h2>Car's shop</h2>
      <h1>
        We carry all makes and models not just FORDS Click & shop LUXURY
        PRE-OWNED
      </h1>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
