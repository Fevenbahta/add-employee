import React from "react";

export default function Plans() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center text-white px-3 py-10 flex flex-col items-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Flexible <span className="text-orange-500">Plans</span>
      </h2>
      <p className="mt-2 text-lg text-center max-w-xl">
        Choose a plan that work best for you & your team
      </p>

      {/* Billing Toggle */}
      <div className="mt-6 flex items-center space-x-2 bg-white/10 p-1 rounded-full shadow-lg">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm">
          Monthly
        </button>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold text-sm">
          Yearly <span className="text-white/70 text-xs ml-1">(Save 60%)</span>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Standard */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center shadow-md transform translate-y-4 transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold mb-2">Standard</h3>
          <p className="text-sm text-white/70 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="text-4xl font-bold mb-1">$99</div>
          <div className="text-sm text-white/70 mb-6">/Per Month</div>
          <ul className="space-y-2 mb-6 text-sm text-left">
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
          </ul>
          <button className="bg-blue-900 px-6 py-2 rounded font-medium hover:bg-blue-800">
            Choose Plan
          </button>
        </div>

        {/* Premium (center elevated) */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center shadow-xl border border-orange-500 transform -translate-y-6 scale-105 transition-all duration-300 hover:-translate-y-8">
          <h3 className="text-xl font-semibold mb-2">
            Premium{" "}
            <span className="text-sm text-orange-400">(Recommended)</span>
          </h3>
          <p className="text-sm text-white/70 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="text-4xl font-bold mb-1">$299</div>
          <div className="text-sm text-white/70 mb-6">/Per Month</div>
          <ul className="space-y-2 mb-6 text-sm text-left">
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
          </ul>
          <button className="bg-orange-500 px-6 py-2 rounded font-medium hover:bg-orange-600">
            Choose Plan
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center shadow-md transform translate-y-4 transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-sm text-white/70 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="text-xl font-semibold mb-1">Custom Plan</div>
          <div className="text-sm text-white/70 mb-6">&nbsp;</div>
          <ul className="space-y-2 mb-6 text-sm text-left">
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
            <li>• Lorem ipsum</li>
          </ul>
          <button className="bg-blue-900 px-6 py-2 rounded font-medium hover:bg-blue-800">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-12 w-full flex justify-between text-xs text-white/70 max-w-6xl">
        <span>Term & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </section>
  );
}
