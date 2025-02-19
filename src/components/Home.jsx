import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handlePlay = () => {
    if (name.trim()) {
      navigate("/play"); // Navigate to the game page
    } else {
      alert("Please enter your name!");
    }
  };

  const handleCreateRoom = () => {
    if (name.trim()) {
      const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      navigate(`/room/${roomCode}`); // Navigate to the private room
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="home">
      <h1>Play & Learn</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
      <div className="actions">
        <button onClick={handlePlay}>Play!</button>
        <button onClick={handleCreateRoom}>Create Private Room</button>
      </div>
    </div>
  );
}

export default Home;
