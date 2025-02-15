import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Result.css";

function Result() {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/play"); // Navigate back to the Game Lobby
  };

  return (
    <div className="result">
      <h2>Game Over!</h2>
      <p>Your score: 85/100</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}

export default Result;
