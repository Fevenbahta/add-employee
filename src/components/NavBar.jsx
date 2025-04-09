import React from "react";

export default function NavBar({ setActivePage, activePage }) {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 text-white font-medium">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <span className="text-xl font-semibold">teamify</span>
      </div>

      <div className="flex space-x-6">
        <button
          onClick={() => setActivePage("home")}
          className={`pb-1 ${
            activePage === "home"
              ? "border-b-2 border-white"
              : "hover:opacity-80"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActivePage("plans")}
          className={`pb-1 ${
            activePage === "plans"
              ? "border-b-2 border-white"
              : "hover:opacity-80"
          }`}
        >
          Features
        </button>
        <button
          onClick={() => setActivePage("order")}
          className={`pb-1 ${
            activePage === "order"
              ? "border-b-2 border-white"
              : "hover:opacity-80"
          }`}
        >
          About Us
        </button>
        <button
          onClick={() => setActivePage("setup")}
          className={`pb-1 ${
            activePage === "setup"
              ? "border-b-2 border-white"
              : "hover:opacity-80"
          }`}
        >
          Contact Us
        </button>
      </div>

      <button
        onClick={() => setActivePage("signin")}
        className="bg-gradient-to-r from-orange-400 to-orange-600 px-4 py-1.5 rounded text-sm font-semibold hover:opacity-90"
      >
        Sign In
      </button>
    </nav>
  );
}
