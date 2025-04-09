import React, { useState } from "react";
import bgImage from "../assets/image 1.png";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Plans from "../components/Plans";
import OrderSummery from "../components/OrderSummery";
import StupOffice from "../components/StupOffice";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Home() {
  const [activePage, setActivePage] = useState("home"); // Default is home

  const renderComponent = () => {
    switch (activePage) {
      case "home":
        return <Landing />;
      case "plans":
        return <Plans />;
      case "order":
        return <OrderSummery />;
      case "setup":
        return <StupOffice />;
      case "signin":
        return <SignIn />;
      case "signup":
        return <SignUp />;
      default:
        return <Landing />;
    }
  };

  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar setActivePage={setActivePage} activePage={activePage} />
      {renderComponent()}
    </div>
  );
}
