"use client";

import { io } from "socket.io-client";

export default function Home() {
  const socket = io("http://localhost:3001");

  const handleSendText = () => {
    socket.emit("text", { text: "Hello, world!" });
  };

  return <button onClick={handleSendText}>Send Text</button>;
}
