import React, { useState } from 'react';
import sample from './sample.jpg'; // Import the image
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome globally
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'; // Import the circle-plus icon

const EmployeeForm = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0" style={{ backgroundColor: "#EBEBEB" }}>
        {/* Left Column: Image, Tools, Skills */}
        <div className="flex flex-col  space-y-6">
          {/* Image */}
          <div >
          <img
  src={sample}
  alt="Employee"
  className="w-80 ml-5 h-80 rounded-lg shadow-md bg-white border-8 border-white"
/>


          
          </div>

          {/* Tools Section */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-lg font-bold text-[#1c3654]">Tools</h3>
            {['Figma', 'Sketch', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD'].map(tool => (
              <button
                key={tool}
                className="flex items-center justify-start mb-2 py-2 px-6 !bg-white !text-[#1c3654] !border-2 !border-[#1c3654] rounded-md shadow-md w-full max-w-[350px]"
              >
                <span className="mr-2">{tool}</span> {/* Tool name */}
                <FontAwesomeIcon icon={faCirclePlus} style={{ color: '#1c3654' }} className="ml-auto" /> {/* Icon on right */}
              </button>
            ))}
          </div>

          {/* Skills Section */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-lg font-bold text-[#1c3654]">Skills</h3>
            {['Web Design', 'Logo Design', 'Mobile App Design', 'Landing Page Design', 'Product Design'].map(skill => (
              <button
                key={skill}
                className="flex items-center justify-start mb-2 py-2 px-6 !bg-white !text-[#1c3654] !border-2 !border-[#1c3654] rounded-md shadow-md w-full max-w-[350px]"
              >
                <span className="mr-2">{skill}</span> {/* Skill name */}
                <FontAwesomeIcon icon={faCirclePlus} style={{ color: '#1c3654' }} className="ml-auto" /> {/* Icon on right */}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="col-span-2 space-y-6">
          {/* Form Inputs */}
          <div className="grid grid-cols-2 gap-x-0 mb-4">
            <div className="flex flex-col">
              <label className="font-semibold text-black">Employee Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Name here"
                className="text-black w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black">Department <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Graphics"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-0 mb-4">
            <div className="flex flex-col">
              <label className="font-semibold text-black">Gender <span className="text-red-500">*</span></label>
              <select className="w-full p-2 border rounded-lg max-w-[400px]">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black">Designation <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Senior UI/UX Design"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-0 mb-4">
            <div className="flex flex-col">
              <label className="font-semibold text-black">Father's Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Name here"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black">Work Experience <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="9 years"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-0 mb-4">
            <div className="flex flex-col">
              <label className="font-semibold text-black">Mobile Number <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="+9045433445"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black">Alternative Mobile Number <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="+9045433445"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-0 mb-4">
            <div className="flex flex-col">
              <label className="font-semibold text-black">Email Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="loremipsum@gmail.com"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black">Complete Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="115, 1st Floor, Street no12, New York City"
                className="w-full p-2 border rounded-lg max-w-[400px] placeholder-black"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mr-60 space-x-2">
        <button
          className={`px-9 m-10 rounded text-white`}
          style={{ backgroundColor: '#1c3654' }}
          disabled={!active}
        >
          Save Changes
        </button>
        <button
          className="py-2 px-9 m-10 rounded text-black"
          style={{ backgroundColor: '#d3d3d3' }} // light grey
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;
