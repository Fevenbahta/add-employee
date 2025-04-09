import React from 'react';
import { FaBell, FaEnvelope, FaCog, FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <input type="text" placeholder="Search here..." className="p-2 border rounded-lg w-1/3" />
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-xl" />
        <FaBell className="text-xl" />
        <FaCog className="text-xl" />
        <FaUserCircle className="text-xl" />
      </div>
    </div>
  );
};

export default Navigation;
