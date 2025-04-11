import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import DepartmentModal from "../modal/DepartmentModal";
import KnockCallModal from "../modal/KnockCallModal";
import CreateDepartmentModal from "../modal/CreateDepartmentModal";
import MeetingRoomCard from "../MeetingRoomCard/MeetingRoomCard";
import { MoreVertical } from "lucide-react";

// SortableCard component
function SortableCard({ dept, id, onClick }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:ring-2 hover:ring-[#FFA200] transition-all duration-200 w-full"
        onClick={() => onClick(dept)}
      >
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-[#1D3752]">{dept.title}</h4>
          <MoreVertical className="text-gray-500 w-5 h-5" />
        </div>

        <div className="flex flex-col items-center mb-4">
          <img
            src={dept.leadAvatar}
            alt={dept.head}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#E9EBEA]"
          />
          <p className="font-semibold mt-2">{dept.head}</p>
          <p className="text-sm text-gray-500">{dept.role}</p>
        </div>

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
}

export default function MainContent({ roomTitles }) {
  const [activeDept, setActiveDept] = useState(null);
  const [knockModal, setKnockModal] = useState(false);
  const [createDepartmentModal, setCreateDepartmentModal] = useState(false);

  const [departments, setDepartments] = useState([
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
  ]);

  const meetingUsers = Array.from({ length: 9 }).map(() => ({
    name: "Marcus Tipton",
    title: "Senior Developer",
  }));

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = departments.findIndex((d) => d.title === active.id);
      const newIndex = departments.findIndex((d) => d.title === over.id);
      setDepartments((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex w-full h-full relative">
      {activeDept && (
        <DepartmentModal
          department={activeDept}
          onClose={() => setActiveDept(null)}
        />
      )}

      {createDepartmentModal && (
        <CreateDepartmentModal
          onClose={() => setCreateDepartmentModal(false)}
        />
      )}

      {/* Left Side: Department Grid */}
      <div className="flex-1 py-5 px-4 overflow-y-auto">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setCreateDepartmentModal(true)}
            className="w-14 h-14 bg-[#FFA200] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 ring-2 ring-white hover:ring-[#FFD580]"
          >
            <span className="text-3xl font-bold leading-none">+</span>
          </button>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={departments.map((d) => d.title)}
            strategy={verticalListSortingStrategy}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept) => (
                <SortableCard
                  key={dept.title}
                  id={dept.title}
                  dept={dept}
                  onClick={setActiveDept}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      {/* Right Side: Meeting Rooms */}
      <div
        className="w-[360px] flex flex-col gap-5 h-screen overflow-y-auto pt-4 pr-1 "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {knockModal && <KnockCallModal OnClose={() => setKnockModal(null)} />}
        {roomTitles.map((title, index) => (
          <div key={index} onClick={() => setKnockModal(true)}>
            <MeetingRoomCard roomName={title} users={meetingUsers} />
          </div>
        ))}
      </div>
    </div>
  );
}
