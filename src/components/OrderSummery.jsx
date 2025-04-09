import React from "react";

export default function OrderSummery() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16 text-white"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Your Order <span className="text-orange-500">Summary</span>
        </h1>

        {/* Plan Selection */}
        <h2 className="text-xl font-semibold mb-4">Select Plan</h2>

        {/* Toggle Buttons */}
        <div className="flex space-x-2 mb-6">
          <button className="bg-orange-500 text-white px-5 py-1.5 rounded-full text-sm font-medium shadow">
            Monthly
          </button>
          <button className="bg-blue-900 text-white px-5 py-1.5 rounded-full text-sm font-medium shadow">
            Yearly Plan
          </button>
        </div>

        {/* Plan Options */}
        <div className="space-y-4">
          {/* Standard */}
          <div className="flex items-center justify-between bg-white/20 rounded-lg px-4 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Standard</h3>
                <p className="text-xs text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">$1000</div>
              <div className="text-xs text-white/70">Per Month</div>
            </div>
          </div>

          {/* Premium */}
          <div className="flex items-center justify-between bg-white/20 rounded-lg px-4 py-4 border border-orange-500">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold text-white mr-2">Premium</h3>
                  <span className="text-xs bg-white text-black px-2 py-0.5 rounded-full font-medium">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">$1800</div>
              <div className="text-xs text-white/70">Per Month</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-between text-xs text-white/60">
          <span>Term & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </section>
  );
}
