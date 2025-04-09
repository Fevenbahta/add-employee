import React, { useState } from "react";
import { Bell, Mail, MoreVertical, PlusIcon, SearchIcon } from "lucide-react";
import NotificationDropdown from "./ui/NotificationDropdown ";

export default function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // State to control notification visibility

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen); // Toggle the notification visibility
  };

  return (
    <div className="flex justify-between items-center py-2 px-2">
      {/* Left: Location Dropdown */}
      <h2 className="text-xl font-bold text-[#1D3752] flex items-center gap-1">
        1st Floor
        <span className="text-sm">▾</span>
      </h2>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center gap-2 border border-[#1D3752] rounded-full px-4 py-1 w-[280px] bg-white">
          <input
            type="text"
            placeholder="Search Here"
            className="flex-1 text-sm text-[#1D3752] placeholder:text-[#1D3752] bg-transparent focus:outline-none"
          />
          <SearchIcon className="w-4 h-4 text-[#1D3752]" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
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
            className="w-8 h-8 rounded-full object-cover"
            alt="User Avatar"
          />

          {/* Menu */}
          <MoreVertical className="w-4 h-4 text-[#1D3752] cursor-pointer" />
        </div>
      </div>

      {/* Conditionally render the notification dropdown */}
      {isNotificationOpen && <NotificationDropdown />}
    </div>
  );
}
