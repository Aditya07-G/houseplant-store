import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ backgroundImage: "url('/background.jpg')", backgroundSize: "cover", height: "90vh", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Welcome to GreenLeaf Plants</h1>
      <p>Your one-stop shop for healthy, beautiful houseplants.</p>
      <Link to="/products">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;