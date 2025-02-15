import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handlePlayNow = () => {
    navigate("/play"); // Navigate to the Game Lobby
  };

  const handlePracticeMode = () => {
    navigate("/practice"); // Navigate to the Practice Mode (to be implemented)
  };

  return (
    <div className="home">
      <section className="hero">
        <h2>Level Up Your NEET Preparation</h2>
        <p>Compete, Learn, Win!</p>
        <button onClick={handlePlayNow}>Play Now</button>
        <button onClick={handlePracticeMode}>Practice Mode</button>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Real-Time Battles</h3>
          <p>Compete with players in real-time.</p>
        </div>
        <div className="feature">
          <h3>Leaderboards</h3>
          <p>Climb the ranks and show your skills.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
