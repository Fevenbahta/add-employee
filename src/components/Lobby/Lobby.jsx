import React from 'react';

const Lobby = () => {
  return (
    <div className="flex gap-6">
      {/* Card 3: Service Icon Card */}
      <div className="w-40 h-40 flex justify-center items-center border border-black">
        <svg className="w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M12 2L2 12l10 10 10-10L12 2z"></path>
        </svg>
      </div>

      {/* Inside Cards with Images */}
      <div className="flex flex-wrap gap-6">
        {/* Repeat this block for each of the 4 cards */}
        <div className="w-44 relative border-2 border-white">
          <img src="path/to/your/image.jpg" alt="Image" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-white opacity-80">
            <p className="text-black text-lg">Card Name</p>
            <button className="bg-yellow-500 text-black px-4 py-2 mt-2">Meeting</button>
          </div>
          <svg className="absolute top-2 left-2 w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M12 2L2 12l10 10 10-10L12 2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
