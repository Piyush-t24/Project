import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Lobby.css";

function Lobby() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const newRoomCode = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    navigate(`/room/${newRoomCode}`);
  };

  const handleJoinRoom = () => {
    if (roomCode) {
      navigate(`/room/${roomCode}`);
    }
  };

  return (
    <div className="lobby">
      <h1>NEET Battleground</h1>
      <div className="lobby-actions">
        <button onClick={handleCreateRoom}>Create Room</button>
        <div className="join-room">
          <input
            type="text"
            placeholder="Enter Room Code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <button onClick={handleJoinRoom}>Join Room</button>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
