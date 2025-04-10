import React, { useState } from 'react';
import { FaConciergeBell, FaPaintBrush, FaHome, FaEnvelope, FaCalendarAlt, FaCog, FaQuestionCircle } from 'react-icons/fa'; // Import icons
import logo from './logo.jpg'; // Import logo

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState("design"); // Track the selected section

  return (
    <div className="w-96 h-screen bg-[#e9ebea] p-6 fixed">
      {/* Logo */}
      <div className="mb-10">
        <img src={logo} alt="Company Logo" className="w-32 h-32 object-contain mx-auto" />
      </div>

      {/* Space above the horizontal line */}
      <div className="mb-6"></div>

      {/* Reception and Design Buttons */}
      <div className="mb-4">
        {/* Reception Button */}
        <button
        className={`w-full py-2 mb-2 rounded-full flex items-center justify-center 
          ${selectedSection === "reception" ? "bg-[#1c3654] text-white" : "bg-[#e9ebea] text-[#1c3654]"}`}
        onClick={() => setSelectedSection("reception")}
      >
        <FaConciergeBell className={`inline mr-2 ${selectedSection === "reception" ? "text-yellow-500" : "text-[#1c3654]"}`} />
        <span className={`${selectedSection === "reception" ? "text-yellow-500" : "text-[#1c3654]"}`}>Reception</span>
      </button>
      
      {/* Design Button */}
      <button
        className={`w-full py-2 mb-2 rounded-full flex items-center justify-center 
          ${selectedSection === "design" ? "bg-[#1c3654] text-white" : "bg-[#e9ebea] text-[#1c3654]"}`}
        onClick={() => setSelectedSection("design")}
      >
        <FaPaintBrush className={`inline mr-2 ${selectedSection === "design" ? "text-yellow-500" : "text-[#1c3654]"}`} />
        <span className={`${selectedSection === "design" ? "text-yellow-500" : "text-[#1c3654]"}`}>Design</span>
      </button>
      </div>

      {/* Horizontal Line below buttons */}
      <hr className="border-t-2 border-gray-300 mb-8 mt-40" /> {/* Increased space below the line */}

      {/* List of other options (Aligned below center) */}
      <div className="mt-auto space-y-4"> {/* Adjusting margin-top to push the list items below the center */}
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaHome className="mr-2 text-yellow-500" />
          Lobby
        </button>
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaEnvelope className="mr-2 text-yellow-500" />
          Livechat
        </button>
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaCalendarAlt className="mr-2 text-yellow-500" />
          Meeting Room
        </button>
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaEnvelope className="mr-2 text-yellow-500" />
          Email
        </button>
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaCalendarAlt className="mr-2 text-yellow-500" />
          Calendar
        </button>
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaCog className="mr-2 text-yellow-500" />
          Settings
        </button>
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaQuestionCircle className="mr-2 text-yellow-500" />
          Help
        </button>
        <button className="w-full text-[#1c3654] font-bold flex items-center rounded-full py-2 px-4">
          <FaHome className="mr-2 text-yellow-500" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
