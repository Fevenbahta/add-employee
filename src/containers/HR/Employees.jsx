import React, { useState } from 'react';
import sample from '../../AssetS/sample.jpg';
import { Plus } from 'lucide-react';

const Employees = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="p-5">
      {/* Add Employee Header */}
      <h1 className="text-2xl font-semibold text-[#1c3654] mb-4">Add Employee Detail</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <div>
            <img
              src={sample}
              alt="Employee"
              className="w-60 ml-5 h-60 rounded-lg shadow-md bg-white border-8 border-white"
            />
          </div>

          {/* Tools */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-sm font-semibold text-[#1c3654]">Tools</h3>
            {['Figma', 'Sketch', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD'].map(tool => (
              <button
                key={tool}
                className="flex items-center justify-between mb-2 py-1.5 px-4 bg-white text-[#1c3654] rounded-md shadow-md w-full max-w-[300px] text-xs"
              >
                <span>{tool}</span>
                <Plus
                  size={12}  // Smaller icon size
                  className="text-white bg-[#1c3654] rounded-full p-1 w-5 h-5"  // Adjusted size for icon
                />
              </button>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-sm font-semibold text-[#1c3654]">Skills</h3>
            {['Web Design', 'Logo Design', 'Mobile App Design', 'Landing Page Design', 'Product Design'].map(skill => (
              <button
                key={skill}
                className="flex items-center justify-between mb-2 py-1.5 px-4 bg-white text-[#1c3654] rounded-md shadow-md w-full max-w-[300px] text-xs"
              >
                <span>{skill}</span>
                <Plus
                  size={12}  // Smaller icon size
                  className="text-white bg-[#1c3654] rounded-full p-1 w-5 h-5"  // Adjusted size for icon
                />
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="col-span-2 space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-x-2 mb-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Employee Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Name here"
                className="text-black w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Department <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Graphics"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-x-2 mb-5">
          <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Gender <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-1.5 rounded-lg max-w-[350px] text-sm bg-white">  {/* Removed border */}
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Senior UI/UX Design"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-x-2 mb-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Father's Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Name here"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Work Experience <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="9 years"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-2 gap-x-2 mb-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+9045433445"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Alternative Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+9045433445"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-2 gap-x-2 mb-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="loremipsum@gmail.com"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">
                Complete Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="115, 1st Floor, Street no12, New York City"
                className="w-full p-1.5 rounded-lg max-w-[350px] placeholder-black text-sm bg-white"  // Removed border
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mr-40 space-x-2">
        <button
          className="px-7 py-2 rounded text-white bg-[#1c3654] text-xs"
          disabled={!active}
        >
          Save Changes
        </button>
        <button className="py-2 px-7 rounded text-black bg-gray-300 text-xs">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Employees;
