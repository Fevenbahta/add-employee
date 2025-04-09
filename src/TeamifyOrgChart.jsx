// TeamifyOrgChart.tsx - Pixel Perfect Org Chart UI
import React from "react";
import {
  UserIcon,
  PlusIcon,
  SearchIcon,
  MoreVertical,
  MessageSquare,
  DoorOpen,
} from "lucide-react";
import {
  Lock,
  Users,
  UserCircle,
  Palette,
  Megaphone,
  Code,
  Smartphone,
  LayoutDashboard,
  MessageCircle,
  Calendar,
  Mail,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react";
import MeetingRoom from "./components/MeetingRoom";

export default function TeamifyOrgChart() {
  const mainNav = [
    { label: "Reception", icon: <Lock className="w-4 h-4 text-yellow-400" /> },
    {
      label: "Higher Management",
      icon: <Users className="w-4 h-4 text-yellow-400" />,
    },
    {
      label: "Human Resource",
      icon: <UserCircle className="w-4 h-4 text-yellow-400" />,
    },
    { label: "Design", icon: <Palette className="w-4 h-4 text-yellow-400" /> },
    {
      label: "Digital Marketing",
      icon: <Megaphone className="w-4 h-4 text-yellow-400" />,
    },
    {
      label: "Web Development",
      icon: <Code className="w-4 h-4 text-yellow-400" />,
    },
    {
      label: "Mobile App Development",
      icon: <Smartphone className="w-4 h-4 text-yellow-400" />,
    },
  ];
  const roomTitles = [
    "Meeting Room #1",
    "Meeting Room #2",
    "Meeting Room #3",
    "Meeting Room #4",
  ];
  const utilityNav = [
    {
      label: "Lobby",
      icon: <LayoutDashboard className="w-4 h-4 text-yellow-400" />,
    },
    {
      label: "Live Chat",
      icon: <MessageCircle className="w-4 h-4 text-yellow-400" />,
    },
    {
      label: "Meeting Room",
      icon: <ChevronDown className="w-4 h-4 text-yellow-400" />,
    },
    { label: "Email", icon: <Mail className="w-4 h-4 text-yellow-400" /> },
    {
      label: "Calendar",
      icon: <Calendar className="w-4 h-4 text-yellow-400" />,
    },
    {
      label: "Settings",
      icon: <Settings className="w-4 h-4 text-yellow-400" />,
    },
    { label: "Help", icon: <HelpCircle className="w-4 h-4 text-yellow-400" /> },
    { label: "Sign Out", icon: <LogOut className="w-4 h-4 text-yellow-400" /> },
  ];
  const users = [
    {
      name: "Marcus Tipton",
      role: "Senior Developer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marcus Tipton",
      role: "Senior Developer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marcus Tipton",
      role: "Senior Developer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marcus Tipton",
      role: "Senior Developer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marcus Tipton",
      role: "Senior Developer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marcus Tipton",
      role: "Senior Developer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marcus Tipton",
      role: "Senior Developer",
      avatar:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="flex min-h-screen bg-[#f5f6fa] font-sans text-[#1e1f27]">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-white/70 backdrop-blur-sm p-6 border-r border-gray-200 shadow-xl font-sans text-[#1e1f27] relative">
        {/* Logo */}
        <h1 className="text-3xl font-black text-[#2d2f7f] tracking-tight mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          teamify
        </h1>

        {/* Main Navigation */}
        <nav className="space-y-2 text-[15px]">
          {mainNav.map(({ label, icon }) => (
            <div
              key={label}
              className={`group flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
                label === "Reception"
                  ? "bg-[#2d2f7f] text-white shadow-inner"
                  : "text-gray-700 hover:bg-[#f0f3ff] hover:text-[#2d2f7f]"
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200 ${
                  label === "Reception"
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-100 group-hover:bg-yellow-400 group-hover:text-black"
                }`}
              >
                {icon}
              </div>
              <span className="truncate">{label}</span>
            </div>
          ))}
        </nav>

        <div className="border-t border-gray-200 my-6" />

        {/* Utilities */}
        <div className="space-y-2 text-[15px]">
          {utilityNav.map(({ label, icon }) => (
            <div
              key={label}
              className="group flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-gray-700 hover:bg-[#fff9eb] hover:text-[#d97706] transition-all duration-200"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-yellow-100 group-hover:bg-yellow-400 group-hover:text-black rounded-full transition-colors duration-200">
                {icon}
              </div>
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>

        {/* Footer Glow Effect */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </aside>

      {/* Main Area */}
      <main className="flex-1 relative p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base font-semibold">1st Floor ▾</h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search here..."
              className="px-4 py-2 border border-gray-300 rounded-md w-64 text-sm"
            />
            <SearchIcon className="w-5 h-5 text-gray-600" />
            <UserIcon className="w-5 h-5 text-gray-600" />
          </div>
        </div>
        {/* Add Department Button */}
        <div className="flex gap-6 p-2 w-full h-full bg-[#f9fafe] relative">
          {/* Left: Department Hierarchy (relative container for absolute children) */}
          <div className="relative flex-1 bg-white rounded-lg shadow-sm min-h-[800px] ml-[-230px] overflow-hidden">
            {/* Add Department Button */}
            <div className="absolute top-[80px] left-[200px] flex flex-col items-center z-10">
              <div className="w-12 h-12 border-2 border-dashed border-[#2d2f7f] rounded-full flex items-center justify-center">
                <PlusIcon className="text-[#f6b400] w-5 h-5" />
              </div>
              <span className="text-sm text-[#2d2f7f] mt-2 font-semibold">
                Add Department
              </span>
            </div>

            {/* SVG Lines */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              <path
                d="M300 160 C300 240, 500 240, 500 300"
                stroke="#1c2434"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M500 420 C500 480, 400 480, 400 560"
                stroke="#1c2434"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M500 420 C500 480, 600 480, 600 560"
                stroke="#1c2434"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Department Cards */}
            <div className="absolute z-10">
              {/* HR */}
              <div className="absolute top-[200px] left-[450px] w-[220px] bg-white rounded-xl shadow p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-sm">Human Resource</p>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="/broken-image.jpg"
                    className="w-10 h-10 rounded-full bg-gray-100"
                  />
                  <div>
                    <p className="text-sm font-bold">Alex</p>
                    <p className="text-xs text-gray-500">HR Manager</p>
                  </div>
                </div>

                {/* Popup */}
                <div className="absolute top-[50px] left-[240px] w-48 bg-white rounded-md shadow-md p-2 z-50">
                  <div className="flex items-center gap-2 hover:bg-gray-100 p-2 text-sm rounded">
                    <MessageSquare className="w-4 h-4 text-gray-600" /> Send
                    Message
                  </div>
                  <div className="flex items-center gap-2 hover:bg-gray-100 p-2 text-sm rounded">
                    <DoorOpen className="w-4 h-4 text-gray-600" /> Knock into
                    Office
                  </div>
                </div>
              </div>

              {/* Design */}
              <div className="absolute top-[360px] left-[300px] w-[220px] bg-white rounded-xl shadow p-4 z-10">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-sm">
                    Graphic & UI/UX Design
                  </p>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="/broken-image.jpg"
                    className="w-10 h-10 rounded-full bg-gray-100"
                  />
                  <div>
                    <p className="text-sm font-bold">Alexandre</p>
                    <p className="text-xs text-gray-500">Maximate</p>
                  </div>
                </div>
              </div>

              {/* Web Dev */}
              <div className="absolute top-[360px] left-[600px] w-[220px] bg-white rounded-xl shadow p-4 z-10">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-sm">Web Development</p>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="/broken-image.jpg"
                    className="w-10 h-10 rounded-full bg-gray-100"
                  />
                  <div>
                    <p className="text-sm font-bold">Alexandre</p>
                    <p className="text-xs text-gray-500">Haxmate</p>
                  </div>
                </div>
              </div>

              {/* SMM */}
              <div className="absolute top-[600px] left-[460px] w-[220px] bg-white rounded-xl shadow p-4 z-10">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-sm">Digital Marketing</p>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="/broken-image.jpg"
                    className="w-10 h-10 rounded-full bg-gray-100"
                  />
                  <div>
                    <p className="text-sm font-bold">Alexandre</p>
                    <p className="text-xs text-gray-500">Maximate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Meeting Rooms */}
          <div className="w-[360px] flex flex-col gap-4 overflow-y-auto pt-4 pr-1">
            {roomTitles.map((title, index) => (
              <MeetingRoom key={index} title={title} users={users} />
            ))}
          </div>
        </div>
        {/* Meeting Rooms */}
      </main>
    </div>
  );
}
