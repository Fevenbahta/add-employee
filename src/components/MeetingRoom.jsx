import { MoreVertical } from "lucide-react";
import React from "react";

export default function MeetingRoom({ users, title }) {
  return (
    <div className="w-[350px] flex flex-col gap-4">
      <div className="bg-white shadow-xl rounded-2xl p-5 border border-gray-100 hover:shadow-2xl transition duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-lg text-[#1D3752]">{title}</h4>
          <MoreVertical className="w-5 h-5 text-gray-400 hover:text-gray-600 transition" />
        </div>

        {/* Avatars Grid */}
        <div className="grid grid-cols-4 gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-200"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover shadow border-2 border-white"
              />
              <p className="text-sm font-medium mt-1 text-[#1D3752]">
                {user.name.split(" ")[0]}
              </p>
              <p className="text-[11px] text-gray-500">{user.role}</p>
            </div>
          ))}

          {/* Overflow indicator */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 36 36" className="w-12 h-12 rounded-full">
                <path fill="#1D3752" d="M18 2a16 16 0 0 1 11.3 27.3L18 18z" />
                <path fill="#FFA200" d="M29.3 29.3A16 16 0 1 1 18 2l0 16z" />
              </svg>
              <img
                src="/avatar1.png"
                alt="Group"
                className="absolute inset-0 w-12 h-12 rounded-full object-cover opacity-80 border-2 border-white"
              />
            </div>
            <p className="text-sm font-semibold mt-1 text-[#1D3752]">
              10+ Others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
