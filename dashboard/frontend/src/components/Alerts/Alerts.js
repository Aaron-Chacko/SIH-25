import React from "react";
import "./Alerts.css";

const Alerts = () => {
  // fake demo alerts — later fetch from backend
  const alerts = [
    { id: 1, village: "Village X", message: "60% pattas pending", severity: "high" },
    { id: 2, village: "Village Y", message: "120 hectares farmland, 0 irrigation", severity: "medium" },
    { id: 3, village: "Village Z", message: "Forest cover shrinking rapidly", severity: "high" },
    { id: 4, village: "Village Q", message: "10 pending FRA claims need verification", severity: "low" },
  ];

  return (
    <div className="alerts-page">
      <h2>⚠️ Alerts Center</h2>

      <table className="alerts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Village</th>
            <th>Message</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((a) => (
            <tr key={a.id} className={a.severity}>
              <td>{a.id}</td>
              <td>{a.village}</td>
              <td>{a.message}</td>
              <td>{a.severity.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alerts;
