import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lobby from "./components/Lobby";
import GameRoom from "./components/GameRoom";
import Leaderboard from "./components/Leaderboard";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomCode" element={<GameRoom />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
