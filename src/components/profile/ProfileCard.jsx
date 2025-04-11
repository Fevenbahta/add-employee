import React from "react";
import profileImage from "../../assets/avatar.png"; // Use your actual path

const statusConfig = {
  "active": {
    label: "Active",
    bg: "bg-[#00B400]",
    icon: (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    ),
  },
  "on leave": {
    label: "On Leave",
    bg: "bg-[#C8102E]",
    icon: <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="2" fill="none" />,
  },
  "in a meeting": {
    label: "In a Meeting",
    bg: "bg-[#00B400]",
    icon: (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    ),
  },
  "on break": {
    label: "On Break",
    bg: "bg-[#FFA200]",
    icon: (
      <path
        d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 8.25V6h-1.5v4.25H14v-1.5h-3.25z"
        fill="white"
      />
    ),
  },
  "out of office": {
    label: "Out Of Office",
    bg: "bg-[#C837AB]",
    icon: (
      <path
        fill="white"
        d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13l-3-3 3-3v2h4v2H9v2z"
      />
    ),
  },
};

export default function ProfileCard({ name, title, status }) {
  const statusKey = status.toLowerCase();
  const currentStatus = statusConfig[statusKey] || statusConfig.active;

  return (
    <div className="w-full bg-[#F7F6FA] rounded-[4px] shadow-md p-5 relative">
      <div className="absolute top-4 right-4">
        <button className="text-gray-700 hover:text-gray-900">
          <div className="space-y-1">
            <span className="block w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
            <span className="block w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
            <span className="block w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
          </div>
        </button>
      </div>

      <div className="flex flex-col items-center text-center mt-2">
        <img
          className="w-20 h-20 rounded-full object-cover"
          src={profileImage}
          alt={name}
        />
        <h2 className="text-lg font-semibold mt-4">{name}</h2>
        <p className="text-gray-500 text-sm">{title}</p>

        <div
          className={`mt-4 ${currentStatus.bg} text-white px-4 py-1 rounded-full flex items-center gap-2 text-sm font-medium`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {currentStatus.icon}
          </svg>
          {currentStatus.label}
        </div>

        <div className="flex gap-3 mt-6 w-full">
            <button className="flex-1 bg-[#FFA200] hover:brightness-110 text-white font-semibold py-3 px-2 rounded-[6px] text-sm">
                Message
            </button>
            <button className="flex-1 bg-[#1D3752] hover:brightness-110 text-white font-semibold py-3 px-2 rounded-[6px] text-sm">
                See Profile
            </button>
        </div>

      </div>
    </div>
  );
}
