import React, { useState } from "react";
import "../styles/Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { username: "You", text: inputMessage }]);
      setInputMessage("");
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.username}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
