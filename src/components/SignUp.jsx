import React from "react";

export default function SignUp() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="w-full max-w-sm bg-white/30 backdrop-blur-xl rounded-xl p-6 shadow-lg text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6">Complete Your Signup</h2>

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
            className="w-full mt-2 bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded"
          >
            Continue
          </button>
        </form>

        {/* Footer Legal */}
        <p className="text-[11px] text-white/70 mt-4 leading-tight text-center">
          By proceeding you are agreeing to the
          <br />
          <a href="#" className="underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
