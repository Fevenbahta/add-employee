import React from "react";

export default function TeamChartCard({ data }) {
  const { department, manager, members, others } = data;

  return (
    <div className="relative w-[320px] bg-white rounded-lg shadow-md border border-gray-200 px-4 pt-4 pb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-sm text-gray-800">{department}</h2>
        <div className="text-gray-500 text-xl cursor-pointer">≡</div>
      </div>

      {/* Manager */}
      <div className="flex flex-col items-center mb-2">
        <img
          src={manager.image}
          alt={manager.name}
          className="w-16 h-16 rounded-full object-cover mb-2 border-4 border-white shadow"
        />
        <p className="font-semibold text-sm">{manager.name}</p>
        <p className="text-xs text-gray-500">{manager.title}</p>
      </div>

      {/* SVG Line */}
      <div className="relative h-6 mt-2 mb-4">
        <svg width="100%" height="100%">
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#2c3e50"
            strokeWidth="2"
          />
          <line
            x1="15%"
            y1="100%"
            x2="85%"
            y2="100%"
            stroke="#2c3e50"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Team Members */}
      <div className="flex justify-between px-4">
        {members.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-10 h-10 rounded-full mb-1 object-cover"
            />
            <p className="text-xs font-medium">{member.name}</p>
            <p className="text-[10px] text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>

      {/* Others */}
      <div className="flex justify-center mt-4 gap-2">
        {others.slice(0, 3).map((initial, i) => (
          <span
            key={i}
            className="rounded-full px-2 py-1 text-xs font-semibold text-white"
            style={{
              backgroundColor: ["#facc15", "#86efac", "#c084fc"][i % 3],
            }}
          >
            {initial}
          </span>
        ))}
        {others.length > 3 && (
          <span className="text-xs text-gray-600">
            +{others.length - 3} Others
          </span>
        )}
      </div>
    </div>
  );
}
