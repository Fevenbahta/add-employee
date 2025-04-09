import React from "react";
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

export default function Sidebar() {
  const mainNav = [
    { label: "Reception", icon: <Lock className="w-4 h-4" /> },
    { label: "Higher Management", icon: <Users className="w-4 h-4" /> },
    { label: "Human Resource", icon: <UserCircle className="w-4 h-4" /> },
    { label: "Design", icon: <Palette className="w-4 h-4" /> },
    { label: "Digital Marketing", icon: <Megaphone className="w-4 h-4" /> },
    { label: "Web Development", icon: <Code className="w-4 h-4" /> },
    {
      label: "Mobile App Development",
      icon: <Smartphone className="w-4 h-4" />,
    },
  ];

  const utilityNav = [
    { label: "Lobby", icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: "Live Chat", icon: <MessageCircle className="w-4 h-4" /> },
    { label: "Meeting Room", icon: <ChevronDown className="w-4 h-4" /> },
    { label: "Email", icon: <Mail className="w-4 h-4" /> },
    { label: "Calendar", icon: <Calendar className="w-4 h-4" /> },
    { label: "Settings", icon: <Settings className="w-4 h-4" /> },
    { label: "Help", icon: <HelpCircle className="w-4 h-4" /> },
    { label: "Sign Out", icon: <LogOut className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 min-h-screen  text-[#4B5563] p-6 border-r border-[#D1D5DB] font-sans  relative">
      <h1 className="text-2xl font-extrabold text-black tracking-tight mb-10 flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="h-8" />
        teamify
      </h1>

      <nav className="space-y-2 text-sm">
        {mainNav.map(({ label, icon }) => (
          <div
            key={label}
            className={`group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
              label === "Reception"
                ? "bg-[#2D325A] text-white shadow-md"
                : "hover:bg-[#D9DDE1] hover:text-[#1D3752]"
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center text-[#FFA200] group-hover:scale-105 transition-transform duration-150">
              {icon}
            </div>
            <span className={`truncate font-medium`}>{label}</span>
          </div>
        ))}
      </nav>

      <div className="border-t border-[#D1D5DB] my-8" />

      <div className="space-y-2 text-sm">
        {utilityNav.map(({ label, icon }) => (
          <div
            key={label}
            className="group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#FFF6E6] hover:text-[#1D3752] transition-all duration-200"
          >
            <div className="w-6 h-6 flex items-center justify-center text-[#FFA200] group-hover:scale-105 transition-transform duration-150">
              {icon}
            </div>
            <span className="truncate font-medium">{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
