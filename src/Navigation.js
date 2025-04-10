import React from 'react';
import { FaBell, FaEnvelope, FaCog, FaUserCircle, FaSearch, FaEllipsisV } from 'react-icons/fa'; // Added FaEllipsisV for the three dots
import sample from './sample.jpg'; // Import the profile image
const Navigation = () => {
  return (
   
   
   <div><h1 className="text-[#1c3654] text-xl font-semibold">Add Employee Detail</h1>
     <div className="flex justify-end items-center  mb-6">
      {/* Search Box on the Left */}
        <div className="relative w-1/3 mr-4">
        <input 
          type="text" 
          placeholder="Search here..." 
          className="p-2 pl-4 pr-10 border rounded-lg w-full" 
          style={{
            backgroundColor: '#e9ebea',  // Set the background color for the search input
            color: '#1c3654',  // Text color inside the input
            borderColor: '#d1d5db', // Light gray border
          }} 
        />
        <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#1c3654]" />
      </div>

      {/* Icons on the Right */}
      <div className="flex items-center space-x-4">
          <div className="relative">
          <FaEnvelope className="text-xl text-[#1c3654]" />
          {/* Yellow dot on the message icon */}
          <span className="absolute top-0 right-0 block w-3 h-3 bg-yellow-500 rounded-full"></span>
        </div>
        <div className="relative">
          <FaBell className="text-xl text-[#1c3654]" />
          <span className="absolute top-0 right-0 block w-3 h-3 bg-yellow-500 rounded-full"></span>
        </div>
        
        <FaEllipsisV className="text-xl text-[#1c3654]" />

        {/* Profile Image */}
        <img 
          src={sample} // Using the imported image
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-[#1c3654]" 
        />
      </div>
    </div></div>
   
  );
};

export default Navigation;
