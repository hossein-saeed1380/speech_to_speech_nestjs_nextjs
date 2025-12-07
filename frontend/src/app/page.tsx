"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Home() {
  const [socket, setSocket] = useState<Socket | null>(null);

  const [textResponse, setTextResponse] = useState<any>([]);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    setSocket(socket);

    socket.on("text", (message: any) => {
      setTextResponse((prev: any) => [...prev, message]);
    });

    return () => {
      setSocket(null);
      socket.disconnect();
    };
  }, []);

  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTextResponse([]);
    if (input.trim() !== "") {
      socket?.emit("text", input);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-700">
      <div className="w-full max-w-md bg-stone-600 rounded shadow p-6 flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your message"
            className="flex-1 px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-stone-800 text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col gap-2">
          {textResponse.map((text: any, idx: number) => (
            <>{text}</>
          ))}
        </div>
      </div>
    </div>
  );
}
