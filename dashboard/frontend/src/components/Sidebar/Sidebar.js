import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <h2>FRA Dashboard</h2>
    <ul>
      <li><Link to="/">🏠 Dashboard</Link></li>
      <li><Link to="/layers">🗺️ Layers</Link></li>
      <li><Link to="/alerts">⚠️ Alerts</Link></li>
    </ul>
  </div>
);

export default Sidebar;
