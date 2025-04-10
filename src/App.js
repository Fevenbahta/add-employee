import React from 'react';
import Sidebar      from './Components/Sidebar/Sidebar';
import Navigation   from './Components/Navigation/Navigation';
import EmployeeForm from './Components/Employee/EmployeeForm';
import './App.css';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 w-full p-10 border-l border-gray-300">
        <Navigation />
        <EmployeeForm />
      </div>
    </div>
  );
}

export default App;
