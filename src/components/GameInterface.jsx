import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateNEETQuestion } from "../utils/openai";
import "../styles/GameInterface.css";

function GameInterface() {
  const location = useLocation();
  const navigate = useNavigate();
  const { groupSize } = location.state || { groupSize: 5 };

  const [timeLeft, setTimeLeft] = useState(60);
  const [question, setQuestion] = useState("Loading question...");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const { question, options, correctAnswer } =
          await generateNEETQuestion();
        setQuestion(question);
        setOptions(options);
        setCorrectAnswer(correctAnswer);
        setError("");
      } catch (err) {
        setError("Failed to fetch question. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/result");
    }
  }, [timeLeft, navigate]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === correctAnswer) {
      console.log("Correct Answer!");
    } else {
      console.log("Wrong Answer!");
    }
  };

  return (
    <div className="game-interface">
      <h2>Time Left: {timeLeft}s</h2>
      {loading ? (
        <p>Loading question...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <h3>{question}</h3>
          <div className="options">
            {options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default GameInterface;
