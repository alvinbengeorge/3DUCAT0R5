"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
});

const username="alvin";
const password="alvin"

export default function Home() {
  const [screen, setScreen] = useState("loggedOut");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (screen === "loggedOut") {
      setUsername("");
      setPassword("");
    }
  }, [screen]);
  useEffect(() => {
    if (username === "alvin" && password === "alvin") {
      setScreen("home");
    }
  }, [username, password]);

  return (
    <main className="p-4">
      <div className="navbar bg-base-300 shadow-slate-500 shadow-lg w-full rounded-full">
        <div className="flex-1">
          <a className={orbitron.className + " btn btn-ghost text-xl"}>
            skillUP
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {screen !== "loggedOut" && (
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <button onClick={() => setScreen("home")}>Home</button>
                    </li>
                    <li>
                      <button onClick={() => setScreen("about")}>About</button>
                    </li>
                  </ul>
                </details>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4">
        {screen === "loggedOut" && (
          <div className="flex flex-col items-center justify-center h-screen p-4">
            <div className="flex flex-col items-center justify-center w-96 p-4 bg-base-100 rounded-lg shadow-lg">
              <h1 className={orbitron.className + " text-4xl font-bold"}>Welcome</h1>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mt-2 bg-base-200 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-2 bg-base-200 rounded-lg"
              />

              <button
                onClick={() => setScreen("home")}
                className="w-full p-2 mt-2 bg-base-200 rounded-lg"
              >
                Login
              </button>
            </div>
          </div>
        )}
        {screen === "home" && (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Home</h1>
          </div>
        )}
        {screen === "about" && (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">About</h1>
          </div>
        )}
      </div>
    </main>
  );
}
