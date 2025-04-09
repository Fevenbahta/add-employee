import React from "react";

export default function Landing() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-6"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight">
        Welcome To Your <span className="text-orange-500">Virtual Office</span>
      </h1>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded">
          Instant Demo
        </button>
        <button className="bg-transparent border-2 border-white text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-black">
          Setup Your Company
        </button>
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-4 w-full flex justify-between px-6 text-xs text-white/70">
        <span>Term & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </section>
  );
}
