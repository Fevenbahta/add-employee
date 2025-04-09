import React from "react";

export default function StupOffice() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="w-full max-w-sm bg-white/30 backdrop-blur-xl rounded-xl p-6 shadow-lg text-center text-white">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">Set Up Your Office</h2>

        {/* Logo Circle */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-900 flex items-center justify-center text-sm font-medium text-white border-2 border-white">
          Logo here
        </div>

        {/* Form */}
        <form className="space-y-4 text-left">
          {/* Name */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Enter Your Name <span className="text-orange-400">*</span>
            </label>
            <input
              type="text"
              placeholder="First & Last Name"
              className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Enter Your Email <span className="text-orange-400">*</span>
            </label>
            <input
              type="email"
              placeholder="Email Here"
              className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Your Company Name <span className="text-orange-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Name Here"
              className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>

          {/* Company Website */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Your Company Website <span className="text-orange-400">*</span>
            </label>
            <input
              type="url"
              placeholder="Website Here"
              className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>

          {/* Company Size */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Company Size <span className="text-orange-400">*</span>
            </label>
            <select className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none">
              <option>Choose Your Company Size</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>200+</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Create Password <span className="text-orange-400">*</span>
            </label>
            <input
              type="password"
              placeholder="Type Password"
              className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Confirm Password <span className="text-orange-400">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
