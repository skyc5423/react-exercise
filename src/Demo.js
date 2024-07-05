import React from "react";
import { Link } from "react-router-dom";
import "./Demo.css";

function Demo() {
  return (
    <div className="demo-container">
      <nav className="demo-sidebar">
        <h3>Demo Options</h3>
        <ul>
          <li>
            <Link to="/demo/option1">Option 1</Link>
          </li>
          <li>
            <Link to="/demo/option2">Option 2</Link>
          </li>
          <li>
            <Link to="/demo/option3">Option 3</Link>
          </li>
        </ul>
      </nav>
      <main className="demo-content">
        <h1>Demo Page</h1>
        <p>Select a demo option from the left sidebar.</p>
      </main>
    </div>
  );
}

export default Demo;
