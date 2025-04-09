import React, { useState } from "react";
import { X } from "lucide-react"; // You can use the 'X' icon from lucide-react for the close button

const NotificationDropdown = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // Manage visibility of the notification

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose(); // Optional callback for closing
  };

  return (
    isOpen && (
      <div className="fixed top-5 right-5 z-50 w-80 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg" // Use a dynamic profile image here
              alt="User"
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="font-semibold text-gray-800">John Smith</p>
              <p className="text-sm text-gray-500">
                Inviting You To Meeting Room #3
              </p>
            </div>
          </div>
          <button onClick={handleClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className="px-4 py-2 bg-gray-50 text-sm text-gray-400">
          <span>3 minutes ago</span>
        </div>

        <div className="flex justify-between p-4 bg-gray-100 rounded-b-lg">
          <button className="w-24 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Join
          </button>
          <button className="w-24 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Deny
          </button>
        </div>
      </div>
    )
  );
};

export default NotificationDropdown;
