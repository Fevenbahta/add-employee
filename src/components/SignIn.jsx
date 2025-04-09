import React from "react";

export default function SignIn() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="w-full max-w-sm bg-white/30 backdrop-blur-xl rounded-xl p-6 shadow-lg text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6">Welcome Back</h2>

        {/* Form */}
        <form className="space-y-4 text-left">
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
              Enter Your Password <span className="text-orange-400">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Type Password"
                className="w-full px-4 py-2 rounded bg-white text-black text-sm outline-none"
              />
              <a
                href="#"
                className="absolute top-2 right-3 text-xs text-white/70 hover:text-white"
              >
                Forgot Password
              </a>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded"
          >
            Continue
          </button>
        </form>

        {/* Terms and Privacy */}
        <p className="text-[11px] text-white/70 mt-4 leading-tight">
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
