import React, { useState, useEffect, useRef } from 'react';
import Card from "../MeetingRoomCard/MeetingRoomCard";  // Importing MeetingRoomCard
import Sidebar from "../common/Sidebar";  // Importing Sidebar
import Header from "../common/Header";  // Importing Header
import KnockCallModal from "../modal/KnockCallModal";  // Importing KnockCallModal
import lobbyImage from '../../assets/lobby.jpeg';
import AddVideoIcon from '../../assets/add_video.svg';  // Importing Add Video Icon
import AssignReceptionistIcon from '../../assets/assign_receptionist.svg';  // Importing Assign Receptionist Icon
import StartMeetingIcon from '../../assets/start_meeting.svg';  // Importing Start New Meeting Icon
import DropIntoMeetingIcon from '../../assets/drop_into_meeting.svg';  // Importing Drop Into Meeting Icon
import MoveToOfficeIcon from '../../assets/move_to_office.svg';  // Importing Move to My Office Icon

const sampleUsers = Array.from({ length: 9 }).map(() => ({
  name: "Jerome Bell",
  title: "Senior Marketing Expert",
  status: "Active",
}));

const meetingUsers = Array.from({ length: 9 }).map(() => ({
  name: "Marcus Tipton",
  title: "Senior Developer",
}));

const Lobby = () => {
  const [knockModal, setKnockModal] = useState(false);
  const [activeSmallDropdown, setActiveSmallDropdown] = useState(null); // Track small menu dropdowns
  const [activeLargeDropdown, setActiveLargeDropdown] = useState(null); // Track large menu dropdown
  const dropdownRef = useRef(null); // Ref to detect clicks outside any dropdown

  // Close the dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveSmallDropdown(null); // Close small dropdown if clicked outside
        setActiveLargeDropdown(null); // Close large dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSmallDropdown = (dropdownId) => {
    setActiveSmallDropdown((prevState) => (prevState === dropdownId ? null : dropdownId));
  };

  const toggleLargeDropdown = () => {
    setActiveLargeDropdown((prevState) => (prevState ? null : 'largeMenu')); // Toggle large menu
  };

  return (
    <div className="flex min-h-screen bg-[#E9EBEA] text-gray-900">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full overflow-y-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="ml-[260px] flex-1 p-6 overflow-y-auto">
        <Header />

        <div className="flex gap-6">
          {/* Left Column: Team Members Cards */}
          <div className="bg-white shadow-lg rounded-xl p-4 mb-6">
            {/* Big Card Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Visitor In Queue</h2>
              {/* Menu Icon for Big Card */}
              <button className="p-4 ml-0" onClick={toggleLargeDropdown}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

{/* Large Menu Dropdown (Outside Card) */}
{activeLargeDropdown && (
  <div ref={dropdownRef} className="absolute bg-white shadow-lg rounded-md w-70 mt-2 right-120">
    <div className="mt-4 bg-white p-4 rounded-md shadow-md z-20 absolute">
      <ul className="text-sm space-y-2">
        <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
          <img src={AddVideoIcon} alt="Add Video" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
          <span>Add Video for Visitors</span>
        </li>
        <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
          <img src={AssignReceptionistIcon} alt="Assign Receptionist" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
          <span>Assign Receptionist</span>
        </li>

      </ul>
    </div>
  </div>
)}


            </div>

            {/* Card Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative flex justify-center items-center" style={{ width: '230px', height: '240px', border: '0.477105px solid #d5d6d6', borderRadius: '3.81684px', backgroundColor: '#fff', padding: '6px' }}>
                  {/* Content Inside the Card */}
                  <div className="text-center w-full h-full flex flex-col justify-center items-center">
                    <img src={lobbyImage} alt="Alexander Mate" className="rounded-full w-25 h-25 mb-3 object-cover shadow-md" />
                    <div className="font-semibold text-sm text-gray-800 mb-2">Alexander Mate</div>
                    <button style={{ background: '#FFA200', borderRadius: '5px', fontFamily: 'SF Pro Display, sans-serif', fontSize: '14px', color: '#FFFFFF', fontWeight: 500, padding: '6px 12px', display: 'inline-block' }}>
                      Message
                    </button>
                  </div>

                  {/* Menu Icon Inside Small Card */}
                  <button className="absolute top-2 right-2 p-1" onClick={() => toggleSmallDropdown(`smallMenu-${item}`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>

                  {/* Small Card Dropdown Menu */}
                  {activeSmallDropdown === `smallMenu-${item}` && (
                    
                    <div ref={dropdownRef} className="absolute bg-white shadow-lg rounded-md w-60 mt-45 left-auto right-0">
                 <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-2-[10px] border-transparent border-5-[#d5d6d6] shadow-lg"></div>
                 <div className="mt-4 bg-white p-4 rounded-md shadow-md z-20 relative">
                    
                        <ul className="text-sm space-y-2">
                          {/* <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
                            <img src={AddVideoIcon} alt="Add Video" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
                            <span>Add Video for Visitors</span>
                          </li>
                          <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
                            <img src={AssignReceptionistIcon} alt="Assign Receptionist" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
                            <span>Assign Receptionist</span>
                          </li> */}
                          <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
                            <img src={StartMeetingIcon} alt="Start New Meeting" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
                            <span>Start New Meeting</span>
                          </li>
                          <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
                            <img src={DropIntoMeetingIcon} alt="Drop into Meeting" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
                            <span>Drop into Meeting</span>
                          </li>
                          <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
                            <img src={MoveToOfficeIcon} alt="Move to My Office" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
                            <span>Move to My Office</span>
                          </li>

                                  <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
                            <img src={AddVideoIcon} alt="Add Video" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
                            <span>Add Video for Visitors</span>
                          </li>
                          <li className="bg-[#f4f5ef] p-2 rounded hover:opacity-80 flex items-center justify-center space-x-3">
                            <img src={AssignReceptionistIcon} alt="Assign Receptionist" className="w-8 h-8" style={{ filter: 'brightness(1.2)' }} />
                            <span>Assign Receptionist</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>


          </div>

          {/* Right Column: Meeting Rooms */}
          <div className="flex flex-col gap-6 flex-grow w-1/3">
            {knockModal && <KnockCallModal OnClose={() => setKnockModal(false)} />}
            {meetingUsers.map((user, index) => (
              <div key={index} onClick={() => setKnockModal(true)}>
                <Card roomName={`Meeting Room #${index + 1}`} users={meetingUsers} />
              </div>
            ))}
          </div>
        </div>

      
      </main>
    </div>
  );
};

export default Lobby;
