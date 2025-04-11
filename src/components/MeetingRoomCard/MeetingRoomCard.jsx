import React from "react";
import userImg from "../../assets/user.png";
import extraImg from "../../assets/other.png";

export default function MeetingRoomCard({ roomName = "Meeting Room #2", users = [] }) {
  return (
    <div className="bg-white rounded-sm shadow p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{roomName}</h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Users */} 
      <div className="grid grid-cols-4 gap-4">
        {users.slice(0, 7).map((user, index) => (
          <div key={index} className="flex flex-col items-center text-center my-4">
            <img
              src={user.image || userImg}
              alt={user.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <p className="text-sm font-medium truncate w-full">{user.name}</p>
            <p className="text-xs text-gray-500 truncate w-full">{user.title}</p>
          </div>
        ))}

        {users.length > 7 && (
          <div className="flex flex-col items-center text-center my-4">
            <img
              src={extraImg}
              alt="others"
              className="w-14 h-14 rounded-full object-cover"
            />
            <p className="text-sm font-medium truncate w-full mt-1">10+ Other</p>
          </div>
        )}
      </div>
    </div>
  );
}
