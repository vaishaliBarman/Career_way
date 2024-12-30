import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to Pathify</h1>
      <p>"Click start and begin your journey to a successful career"</p>
      <button className="start" onClick={() => navigate("/career")}>
        Start Now
      </button>
    </div>
  );
}

export default Home;
