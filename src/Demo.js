import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import "./Demo.css";
import DemoOption1 from "./DemoPages/DemoOption1";
import DemoOption2 from "./DemoPages/DemoOption2";
import DemoOption3 from "./DemoPages/DemoOption3";

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
        <Routes>
          <Route
            index
            element={<p>Select a demo option from the left sidebar.</p>}
          />
          <Route path="option1" element={<DemoOption1 />} />
          <Route path="option2" element={<DemoOption2 />} />
          <Route path="option3" element={<DemoOption3 />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}

export default Demo;
