import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import GameLobby from "./components/GameLobby";
import GameInterface from "./components/GameInterface";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<GameLobby />} />
          <Route path="/game" element={<GameInterface />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
