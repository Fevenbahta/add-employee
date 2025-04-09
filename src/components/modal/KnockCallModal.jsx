import React from "react";
import {
  MicOff,
  Video,
  Upload,
  MessageCircle,
  MoreHorizontal,
  PhoneOff,
} from "lucide-react";

const participants = [
  {
    name: "Malina James",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    isMuted: true,
    isVideo: true,
  },
  {
    name: "Marcus Tipton",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    isMuted: true,
    isVideo: false,
  },
  {
    name: "Christian Wong (You)",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    isMuted: true,
    isVideo: false,
  },
];

export default function KnockCallModal({ OnClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl p-6 space-y-6">
        {/* Participants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {participants.map((user, i) => (
            <div
              key={i}
              className="relative h-72 bg-[#1D3752] rounded-2xl flex items-center justify-center overflow-hidden shadow-md"
            >
              {/* Video or Avatar */}
              {user.isVideo ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover z-10"
                />
              )}

              {/* Name Label */}
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full font-medium">
                {user.name}
              </div>

              {/* Mute Indicator */}
              {user.isMuted && (
                <div className="absolute bottom-3 right-3 bg-red-500 text-white p-2 rounded-full shadow">
                  <MicOff className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Control Bar */}
        <div className="flex justify-center items-center flex-wrap gap-4">
          <button className="w-12 h-12 rounded-full bg-[#1D3752] text-white flex items-center justify-center hover:scale-105 hover:bg-[#172c45] transition">
            <MicOff className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#1D3752] text-white flex items-center justify-center hover:scale-105 hover:bg-[#172c45] transition">
            <Video className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#E9EBEA] text-[#1D3752] flex items-center justify-center hover:scale-105 transition">
            <Upload className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#E9EBEA] text-[#1D3752] flex items-center justify-center hover:scale-105 transition">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#E9EBEA] text-[#1D3752] flex items-center justify-center hover:scale-105 transition">
            <MoreHorizontal className="w-5 h-5" />
          </button>
          <button
            onClick={OnClose}
            className="ml-4 px-6 py-2 rounded-full bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
          >
            End Call
          </button>
        </div>
      </div>
    </div>
  );
}
