import React from "react";
import "../styles/Leaderboard.css";

function Leaderboard() {
  const leaderboardData = [
    { rank: 1, username: "Player1", score: 1000 },
    { rank: 2, username: "Player2", score: 950 },
    { rank: 3, username: "Player3", score: 900 },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.username}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
