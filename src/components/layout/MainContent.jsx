import React, { useState } from "react";
import MeetingRoom from "../MeetingRoom";
import { MoreVertical } from "lucide-react";
import DepartmentModal from "../modal/DepartmentModal";
import KnockCallModal from "../modal/KnockCallModal";
import CreateDepartmentModal from "../modal/CreateDepartmentModal";

export default function MainContent({ users, roomTitles }) {
  const [activeDept, setActiveDept] = useState(null);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [knockModal, setKnockModal] = useState(false);
  const [createDepartmentModal, setCreateDepartmentModal] = useState(true);
  const departments = [
    {
      title: "Digital Marketing",
      head: "Alexander Mate",
      role: "Team Lead",
      leadAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      members: [
        {
          name: "Thomas",
          position: "Senior Marketer",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
          name: "Andris Lois",
          position: "Junior Marketer",
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
        {
          name: "Mariana",
          position: "Intern",
          avatar: "https://randomuser.me/api/portraits/women/47.jpg",
        },
      ],
    },
    {
      title: "Human Resource",
      head: "Laura Bright",
      role: "HR Manager",
      leadAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
      members: [
        {
          name: "Kevin Stone",
          position: "Recruiter",
          avatar: "https://randomuser.me/api/portraits/men/40.jpg",
        },
        {
          name: "Nina Hart",
          position: "HR Assistant",
          avatar: "https://randomuser.me/api/portraits/women/52.jpg",
        },
        {
          name: "Leo Wayne",
          position: "HR Intern",
          avatar: "https://randomuser.me/api/portraits/men/53.jpg",
        },
      ],
    },
    {
      title: "Design",
      head: "Emily Frost",
      role: "UI/UX Lead",
      leadAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
      members: [
        {
          name: "Jason Hill",
          position: "Senior Designer",
          avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        },
        {
          name: "Megan Lee",
          position: "Graphic Designer",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        {
          name: "Chris Lin",
          position: "Design Intern",
          avatar: "https://randomuser.me/api/portraits/men/27.jpg",
        },
      ],
    },
    {
      title: "Web Development",
      head: "David Kim",
      role: "Lead Developer",
      leadAvatar: "https://randomuser.me/api/portraits/men/10.jpg",
      members: [
        {
          name: "Sarah Park",
          position: "Frontend Dev",
          avatar: "https://randomuser.me/api/portraits/women/20.jpg",
        },
        {
          name: "Daniel Green",
          position: "Backend Dev",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        {
          name: "Lara Smith",
          position: "Intern",
          avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        },
      ],
    },
  ];

  return (
    <div className="flex w-full h-full relative">
      {/* Modal */}
      {activeDept && (
        <DepartmentModal
          department={activeDept}
          onClose={() => setActiveDept(null)}
        />
      )}

      {showMeetingModal && (
        <DepartmentModal
          department={departments[0]}
          onClose={() => setShowMeetingModal(false)}
        />
      )}
      {createDepartmentModal && (
        <CreateDepartmentModal
          onClose={() => setCreateDepartmentModal(false)}
        />
      )}

      {/* Timeline Container */}
      <div className="flex-1 relative py-12 mr-5">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#D1D5DB] transform -translate-x-1/2" />

        {/* Add Department Button */}
        <div
          onClick={() => setCreateDepartmentModal(true)}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
        >
          <button
            onClick={() => setCreateDepartmentModal(true)}
            className="w-14 h-14 bg-[#FFA200] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 ring-2 ring-white hover:ring-[#FFD580]"
          >
            <span className="text-3xl font-bold leading-none">+</span>
          </button>
        </div>

        {/* Department Cards */}
        {departments.map((dept, idx) => {
          const isLeft = idx % 2 === 0;
          const topOffset = idx * 320;

          return (
            <div
              key={dept.title}
              className="absolute w-full mt-[30px]"
              style={{ top: `${topOffset}px` }}
            >
              {/* Connector Circle from timeline to card */}
              <div
                className={`absolute top-[50%] w-4 h-4 bg-[#1D3752] rounded-full z-10 ${
                  isLeft
                    ? "left-[calc(50%-2px)] -translate-x-[calc(100%+12px)]"
                    : "right-[calc(50%-2px)] translate-x-[calc(100%+12px)]"
                }`}
              />

              {/* Department Card */}
              <div
                onClick={() => setActiveDept(dept)}
                className={`w-[330px] bg-white shadow-lg rounded-xl p-6 absolute cursor-pointer hover:ring-2 hover:ring-[#FFA200] transition-all duration-200 ${
                  isLeft ? "left-0" : "right-0"
                } animate-slide-in`}
              >
                {/* Card Content */}
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-[#1D3752]">
                    {dept.title}
                  </h4>
                  <MoreVertical className="text-gray-500 w-5 h-5" />
                </div>

                {/* Lead Avatar */}
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={dept.leadAvatar}
                    alt={dept.head}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#E9EBEA]"
                  />
                  <p className="font-semibold mt-2">{dept.head}</p>
                  <p className="text-sm text-gray-500">{dept.role}</p>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center relative mb-6">
                  <div className="w-[200px] h-[1px] bg-[#1D3752] relative">
                    <div className="absolute top-[-6px] left-0 w-1 h-6 bg-[#1D3752]" />
                    <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-1 h-6 bg-[#1D3752]" />
                    <div className="absolute top-[-6px] right-0 w-1 h-6 bg-[#1D3752]" />
                  </div>
                </div>

                {/* Subordinates */}
                <div className="flex justify-around items-start text-center mb-4">
                  {dept.members.map((m, i) => (
                    <div key={i}>
                      <img
                        src={m.avatar}
                        className="w-12 h-12 rounded-full object-cover mx-auto"
                        alt={m.name}
                      />
                      <p className="text-sm font-medium mt-1">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.position}</p>
                    </div>
                  ))}
                </div>

                {/* Initials Circle Summary */}
                <div className="flex justify-center gap-2 mt-2 text-xs font-medium">
                  <div className="w-7 h-7 rounded-full bg-[#FBBF24] text-white flex items-center justify-center">
                    LW
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#FCD34D] text-white flex items-center justify-center">
                    EH
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#A78BFA] text-white flex items-center justify-center">
                    GW
                  </div>
                  <span className="text-gray-500">+5 Others</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right: Meeting Rooms */}
      <div className="w-[360px] flex flex-col gap-4 overflow-y-auto pt-4 pr-1 ">
        {knockModal && <KnockCallModal OnClose={() => setKnockModal(null)} />}
        {roomTitles.map((title, index) => (
          <div key={index} onClick={() => setKnockModal(true)}>
            <MeetingRoom title={title} users={users} />
          </div>
        ))}
      </div>
    </div>
  );
}
