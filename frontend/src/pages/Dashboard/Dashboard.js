import React from "react";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="home-heading">
        <a href="/">
          <img src="./YoPo-logo.png" alt="Logo" height="30px"></img>
          <span className="first-text">Yo</span>Po
        </a>
      </h2>
      This is Dashboard for {localStorage.getItem("user-info")}
    </div>
  );
}

export default Dashboard;
