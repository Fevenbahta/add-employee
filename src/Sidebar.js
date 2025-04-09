import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-6 fixed">
      <div className="mb-10">
        <img src="logo.png" alt="Company Logo" className="w-32" />
      </div>
      <div className="mb-4">
        <button className="w-full py-2 bg-blue-600 text-white mb-2">Reception</button>
        <button className="w-full py-2 bg-blue-600 text-white">Design</button>
      </div>
      <div className="mt-auto">
        <button className="w-full text-yellow-500">Lobby</button>
        <button className="w-full text-yellow-500">Livechat</button>
        <button className="w-full text-yellow-500">Meeting Room</button>
        <button className="w-full text-yellow-500">Email</button>
        <button className="w-full text-yellow-500">Calendar</button>
        <button className="w-full text-yellow-500">Settings</button>
        <button className="w-full text-yellow-500">Help</button>
        <button className="w-full text-yellow-500">Sign Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
