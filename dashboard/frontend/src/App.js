import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Layers from "./components/Layers/Layers";
import Alerts from "./components/Alerts/Alerts";
import "./App.css";

function App() {
  return (
    <Router>
  <div className="app-container">
    <Sidebar />           {/* <-- only here */}
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/layers" element={<Layers />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </div>
  </div>
</Router>
  );
}

export default App;
