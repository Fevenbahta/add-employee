// File: pages/TeamifyDashboard.jsx
import React, { useState } from "react";
import ProfileCard from "./profile/ProfileCard";
import MeetingRoomCard from "./MeetingRoomCard/MeetingRoomCard";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
import KnockCallModal from "./modal/KnockCallModal";

const sampleUsers = Array.from({ length: 9 }).map(() => ({
  name: "Jerome Bell",
  title: "Senior Marketing Expert",
  status: "Active",
}));

const meetingUsers = Array.from({ length: 9 }).map(() => ({
  name: "Marcus Tipton",
  title: "Senior Developer",
}));

const TeamifyDashboard = () => {
  const [knockModal, setKnockModal] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#E9EBEA] text-gray-900">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-full overflow-y-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="ml-[260px] flex-1 p-6 overflow-y-auto justify-content-center">
        {/* Header */}
        <Header />

        {/* Profile Cards */}
        <div className="flex gap-6 items-start pl-2">
          {/* Left Column: Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow w-2/3">
            {sampleUsers.map((user, index) => (
              <ProfileCard
                key={index}
                name={user.name}
                title={user.title}
                status={
                  index === 1
                    ? "On Break"
                    : index === 2
                    ? "In a Meeting"
                    : index === 5
                    ? "Out Of Office"
                    : index === 6
                    ? "On Leave"
                    : "Active"
                }
              />
            ))}
          </div>

          {/* Right Column: Meeting Rooms */}
          <div className="flex flex-col gap-6 flex-grow w-1/3">
            {knockModal && (
              <KnockCallModal OnClose={() => setKnockModal(null)} />
            )}
            <div onClick={() => setKnockModal(true)}>
              <MeetingRoomCard
                roomName="Meeting Room #1"
                users={meetingUsers}
              />
            </div>
            <div>
              <MeetingRoomCard
                roomName="Meeting Room #2"
                users={meetingUsers}
              />
            </div>
            <div>
              <MeetingRoomCard
                roomName="Meeting Room #3"
                users={meetingUsers}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamifyDashboard;
