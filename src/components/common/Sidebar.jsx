import React from "react";
import { Link, useLocation } from "react-router-dom";
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
import Logo from "../../assets/logo.png";

export default function Sidebar() {
  const location = useLocation();

  const mainNav = [
    {
      label: "Reception",
      icon: <Lock className="w-4 h-4" />,
      path: "/dashboard",
    },
    { label: "Higher Management", icon: <Users className="w-4 h-4" /> },
    { label: "Human Resource", icon: <UserCircle className="w-4 h-4" /> },
    {
      label: "Design",
      icon: <Palette className="w-4 h-4" />,
      path: "/design",
    },
    {
      label: "Lobby",
      icon: <Palette className="w-4 h-4" />,
      path: "/lobby",
    },
    { label: "Digital Marketing", icon: <Megaphone className="w-4 h-4" /> },
    { label: "Web Development", icon: <Code className="w-4 h-4" /> },
    {
      label: "Mobile App Development",
      icon: <Smartphone className="w-4 h-4" />,
    },
  ];

  const utilityNav = [
    { label: "Lobby", icon: <LayoutDashboard className="w-4 h-4" />, path: "/lobby" },
    { label: "Live Chat", icon: <MessageCircle className="w-4 h-4" />, path: "/live-chat" },
    { label: "Meeting Room", icon: <ChevronDown className="w-4 h-4" />, path: "/meeting-room" },
    { label: "Email", icon: <Mail className="w-4 h-4" />, path: "/email" },
    { label: "Calendar", icon: <Calendar className="w-4 h-4" />, path: "/calendar" },
    { label: "Settings", icon: <Settings className="w-4 h-4" />, path: "/settings" },
    { label: "Help", icon: <HelpCircle className="w-4 h-4" />, path: "/help" },
    { label: "Sign Out", icon: <LogOut className="w-4 h-4" />, path: "/sign-out" },
  ];
  
  return (
    <aside className="w-64 min-h-screen text-[#4B5563] p-6 border-r border-[#D1D5DB] font-sans relative">
      <h1 className="mb-10 items-center w-full flex justify-center">
        <img src={Logo} alt="logo" className="h-8" />
      </h1>

      <nav className="space-y-2 text-sm">
        {mainNav.map(({ label, icon, path }) => {
          const isActive = path && location.pathname === path;

          const content = (
            <div
              className={`group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-[#2D325A] text-white shadow-md"
                  : "hover:bg-[#D9DDE1] hover:text-[#1D3752]"
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center text-[#FFA200] group-hover:scale-105 transition-transform duration-150">
                {icon}
              </div>
              <span className={`truncate font-medium`}>{label}</span>
            </div>
          );

          return path ? (
            <Link key={label} to={path}>
              {content}
            </Link>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </nav>

      <div className="border-t border-[#D1D5DB] my-8" />

      <div className="space-y-2 text-sm">
  {utilityNav.map(({ label, icon, path }) => (
    <Link to={path} key={label}>
      <div
        className="group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#FFF6E6] hover:text-[#1D3752] transition-all duration-200"
      >
        <div className="w-6 h-6 flex items-center justify-center text-[#FFA200] group-hover:scale-105 transition-transform duration-150">
          {icon}
        </div>
        <span className="truncate font-medium">{label}</span>
      </div>
    </Link>
  ))}
</div>
    </aside>
  );
}
