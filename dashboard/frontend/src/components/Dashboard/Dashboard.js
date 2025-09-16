import React, { useState } from "react";
import MapView from "../MapView";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedVillage, setSelectedVillage] = useState(null);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>FRA Dashboard</h2>
        <ul>
          <li>🏠 Dashboard</li>
          <li>🗺️ Layers</li>
          <li>⚠️ Alerts</li>
        </ul>
      </div>

      {/* Main Map + Info */}
      <div className="main">
        <MapView onVillageSelect={setSelectedVillage} />
        
        {/* Info Panel */}
        {selectedVillage && (
          <div className="info-panel">
            <h3>{selectedVillage.name}</h3>
            <p><b>Family:</b> {selectedVillage.family}</p>
            <p><b>Land Size:</b> {selectedVillage.land_size}</p>
            <p><b>Claim Date:</b> {selectedVillage.claim_date}</p>
            <p><b>Status:</b> {selectedVillage.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
