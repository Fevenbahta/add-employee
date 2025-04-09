import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EmployeeForm from './EmployeeForm';
import Navigation from './Navigation';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-6">
        <Navigation />
        <EmployeeForm />
      </div>
    </div>
  );
}

export default App;
