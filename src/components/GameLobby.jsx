import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GameLobby.css";

function GameLobby() {
  const navigate = useNavigate();

  const handleJoinGroup = (groupSize) => {
    navigate("/game", { state: { groupSize } }); // Navigate to the Game Interface
  };

  return (
    <div className="game-lobby">
      <h2>Choose a Group</h2>
      <div className="group-cards">
        <div className="group-card">
          <h3>5 Players</h3>
          <p>Average Difficulty: Medium</p>
          <button onClick={() => handleJoinGroup(5)}>Join Group</button>
        </div>
        <div className="group-card">
          <h3>10 Players</h3>
          <p>Average Difficulty: Hard</p>
          <button onClick={() => handleJoinGroup(10)}>Join Group</button>
        </div>
      </div>
    </div>
  );
}

export default GameLobby;
