import { X, CheckSquare, Square } from "lucide-react";
import { useState } from "react";

const leads = [
  {
    name: "Marcus Tipton",
    role: "Marketing Department",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Turner",
    role: "Sales Department",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Ethan Cole",
    role: "Finance Department",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

export default function CreateDepartmentModal({ onClose }) {
  const [selected, setSelected] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State for controlling dropdown visibility

  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState); // Toggle the dropdown visibility
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl w-full max-w-sm shadow-xl p-6 space-y-6 relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Department
          </h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Name Input */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Name Of Department <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Name Here"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D3752]"
          />
        </div>

        {/* Custom Team Lead Dropdown */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Select Team Lead <span className="text-red-500">*</span>
          </label>

          {/* Button to toggle dropdown visibility */}
          <div
            onClick={toggleDropdown}
            className="w-full bg-white border border-gray-300 rounded-md text-sm py-2 px-3 flex justify-between items-center"
          >
            <span>Select a Lead</span>
          </div>

          {/* Conditionally render dropdown */}
          {isDropdownVisible && (
            <div className="bg-white border border-gray-300 rounded-lg divide-y mt-2">
              {leads.map((lead, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleSelect(lead.name)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={lead.avatar}
                      alt={lead.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {lead.name}
                      </p>
                      <p className="text-xs text-gray-500">{lead.role}</p>
                    </div>
                  </div>
                  {selected.includes(lead.name) ? (
                    <CheckSquare className="text-[#FFA200] w-5 h-5" />
                  ) : (
                    <Square className="text-[#FFA200] w-5 h-5" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#1D3752] hover:bg-[#162b43] text-white text-sm font-semibold py-2 rounded-md transition">
          Create Department
        </button>
      </div>
    </div>
  );
}
