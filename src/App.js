import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmployeeForm from './EmployeeForm';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-96 w-full p-10 border-l border-gray-300">
        {/* Navigation and Employee Form */}
        <Navigation />
        <EmployeeForm />
      </div>
    </div>
  );
}

export default App;
