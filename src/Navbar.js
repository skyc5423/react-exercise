import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/demo">Demo</Link>
      <Link to="/board">Board</Link>
    </nav>
  );
}

export default Navbar;
