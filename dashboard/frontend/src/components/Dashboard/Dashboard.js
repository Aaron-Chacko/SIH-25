import React from "react";
import "./Dashboard.css";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  // Fake demo data for now (replace with backend later)
  const pattaData = {
    labels: ["Granted", "Pending", "Rejected"],
    datasets: [
      {
        data: [1200, 350, 50],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"]
      }
    ]
  };

  const villageData = {
    labels: ["Village A", "Village B", "Village C", "Village D"],
    datasets: [
      {
        label: "Pending Claims",
        data: [50, 20, 35, 10],
        backgroundColor: "#2196F3"
      }
    ]
  };

  return (
    <div className="dashboard-layout">

      {/* Main Content */}
      <div className="dashboard-content">
        <h2>📊 Dashboard Overview</h2>

        {/* Summary Cards */}
        <div className="cards">
          <div className="card green">Pattas Granted: 1200</div>
          <div className="card yellow">Pattas Pending: 350</div>
          <div className="card red">Pattas Rejected: 50</div>
          <div className="card blue">Villages w/o Water: 22</div>
        </div>

        {/* Charts */}
        <div className="charts">
          <div className="chart-card">
            <h3>Patta Distribution</h3>
            <Pie data={pattaData} />
          </div>

          <div className="chart-card">
            <h3>Pending Claims by Village</h3>
            <Bar data={villageData} />
          </div>
        </div>

        {/* Alerts Snapshot */}
        <div className="alerts">
          <h3>⚠️ Recent Alerts</h3>
          <ul>
            <li>Village X: 60% pattas pending</li>
            <li>Village Y: 120 hectares farmland, 0 irrigation</li>
            <li>Village Z: Forest cover shrinking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
