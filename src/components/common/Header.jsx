import React, { useState } from "react";
import { Bell, Mail, MoreVertical, PlusIcon, SearchIcon } from "lucide-react";
import NotificationDropdown from "./ui/NotificationDropdown ";
import avatar from "../../assets/avatar.png"; // Replace with your path


export default function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // State to control notification visibility

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen); // Toggle the notification visibility
  };

  return (
    <div className="flex justify-between bg-[#E9EBEA] mb-6">
    {/* Title + Lock */}
    <div className="flex items-center gap-4">
    <h1 className="text-xl font-bold text-[#212121]">Employee Details</h1>
      <button className="flex items-center bg-[#1D3752] text-white text-lg font-[400] px-3 py-1 rounded-sm">
        Edit Details
      </button>
    </div>

    {/* Right Section */}
    <div className="flex items-center gap-8">
      {/* Search Box */}
      <div className="relative mr-4">
        <input
          type="text"
          placeholder="Search Here"
          className="pl-4 pr-30 py-2 rounded-full border border-[1] border-[#1D3752] text-sm focus:outline-none"
        />
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1D3752]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
      </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <div className="relative bg-[#1D3752] p-1.5 rounded-md cursor-pointer">
            <PlusIcon className="w-4 h-4 text-white" />
          </div>
          <div className="relative bg-[#1D3752] p-1.5 rounded-md cursor-pointer">
            <Mail className="w-4 h-4 text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#FFA200] rounded-full" />
          </div>
          <div
            className="relative bg-[#1D3752] p-1.5 rounded-md cursor-pointer"
            onClick={handleNotificationClick}
          >
            <Bell className="w-4 h-4 text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#FFA200] rounded-full" />
          </div>

          {/* Avatar */}
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            className="w-10 h-10 rounded-full object-cover"
            alt="User Avatar"
          />

          {/* Menu */}
          <MoreVertical className="w-6 h-6 text-[#1D3752] cursor-pointer" />
        </div>
    </div>
  </div>
  );
}
