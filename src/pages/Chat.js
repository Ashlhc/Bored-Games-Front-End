import React, { useEffect, useState, useId } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:9000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState(
    `User - ${Math.floor(Math.random() * 1000)}`
  );

  const sendMessage = () => {
    socket.emit("send_message", username + " " + message);
  };

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat-box">
        <h1>Chat</h1>
        <div className="messages">
          {messages.map((m, index) => {
            return (
              <div key={index}>
                <div className="message">{m}</div>
                {index < messages.length - 1 && <div className="divider"></div>}
              </div>
            );
          })}
        </div>
        <div>
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyDown={(e) => {
              if(e.key === 'Enter') {
                sendMessage(message);
                setMessage("");
              }
            }}
            placeholder="Message ..."
          />
          <button
            onClick={() => {
              sendMessage(message);
              setMessage("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
