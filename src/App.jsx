import "./App.css";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import TeamifyOrgChart from "./TeamifyOrgChart";
import TeamifyDashboard from "./components/TeamifyDashboard";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<TeamifyDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
