import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/GameRoom.css";

function GameRoom() {
  const { roomCode } = useParams();
  const [timeLeft, setTimeLeft] = useState(60);
  const [question, setQuestion] = useState(
    "What is the chemical formula of water?"
  );
  const [options, setOptions] = useState(["H2O", "CO2", "NaCl", "O2"]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    // Add logic to check the answer and update the score
  };

  return (
    <div className="game-room">
      <h2>Room Code: {roomCode}</h2>
      <div className="game-content">
        <h3>Time Left: {timeLeft}s</h3>
        <h4>{question}</h4>
        <div className="options">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={selectedAnswer === option ? "selected" : ""}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameRoom;
