// components/DashboardLayout.tsx
import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import MainContent from "./MainContent";
import Employees from "../../containers/HR/Employees"; 
const dummyUsers = new Array(6).fill({
  name: "Marcus Tipton",
  role: "Senior Developer",
  avatar:
    "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});

const roomTitles = [
  "Meeting Room #1",
  "Meeting Room #2",
  "Meeting Room #3",
  "Meeting Room #4",
];

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen  font-sans bg-[#E9EBEA] text-[#1e1f27]">
      <Sidebar />
      <main className="flex-1 relative p-6 overflow-hidden">
        <Header />
        {/* <MainContent users={dummyUsers} roomTitles={roomTitles} /> */}
        <Employees />
      </main>
    </div>
  );
}
