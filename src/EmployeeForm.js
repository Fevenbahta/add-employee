import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import sample from './sample.jpg';  // Import the image
const EmployeeForm = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side (Image) */}
      <div className="flex justify-center items-center col-span-1">
        <img src={sample} alt="Employee" className="w-24 h-24 rounded-full object-cover" />
      </div>

      {/* Right Side (Form Fields) */}
      <div className="col-span-2 space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Employee Name" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Father's Name" className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Department" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Designation" className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Gender" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Work Experience" className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Mobile Number" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Alternative Mobile Number" className="w-full p-2 border rounded" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <input type="text" placeholder="Email Address" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Complete Address" className="w-full p-2 border rounded" />
        </div>

        {/* Tools Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Tools</h3>
          {['Figma', 'Sketch', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD'].map(tool => (
            <div key={tool} className="flex items-center justify-between mt-2">
              <span>{tool}</span>
              <button className="text-blue-600"><AiOutlinePlus /></button>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Skills</h3>
          {['Web Design', 'Logo Design', 'Mobile App Design', 'Landing Page Design', 'Product Design'].map(skill => (
            <div key={skill} className="flex items-center justify-between mt-2">
              <span>{skill}</span>
              <button className="text-blue-600"><AiOutlinePlus /></button>
            </div>
          ))}
        </div>

        {/* Save and Cancel Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className={`py-2 px-4 rounded bg-blue-600 text-white ${!active && 'opacity-50 cursor-not-allowed'}`}
            disabled={!active}
          >
            Save
          </button>
          <button className="py-2 px-4 rounded bg-gray-400 text-white">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
