import React, { useState } from 'react';
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import person1Avatar from '../../assets/person1.jpeg';
import person2Avatar from '../../assets/person2.jpeg';
import personAvatar from '../../assets/profileavatar.svg';
import paperclipIcon from '../../assets/paperclip.svg';
import sendIcon from '../../assets/send.svg';
import closeIcon from '../../assets/close.svg';

const users = [
  { name: "User1", status: "Active" },
  { name: "User2", status: "Offline" },
  { name: "User3", status: "Active" },
];

const LiveChat = () => {
  const [message, setMessage] = useState("");

  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex min-h-screen bg-[#E9EBEA] text-gray-900">
      <aside className="fixed top-0 left-0 h-full overflow-y-scroll">
        <Sidebar />
      </aside>

      <main className="ml-[260px] flex-1 p-6 flex flex-col gap-6">
        <Header />

        <div className="flex flex-1 gap-6">
          <div className="flex-1 flex flex-col p-4">
            <div className="bg-white shadow-lg rounded-xl p-10 w-full flex-1">
              <div className="grid grid-rows-3 gap-6">
                {users.map((user, index) => (
                  <div key={index} className="relative flex justify-between items-center w-full h-[100px] border border-[#d5d6d6] rounded-lg bg-white p-3">
                    <div className="flex items-center justify-center text-center">
                      <img
                        src={personAvatar}
                        alt="User Avatar"
                        className="rounded-full w-20 h-20 mb-3 mt-3 object-cover shadow-md"
                      />
                      <div className="font-semibold text-sm text-gray-800 ml-3">
                        {user.name}
                      </div>
                    </div>

                    <button className="bg-[#FFA200] text-white text-xs py-2 px-4 rounded-md">
                      Message
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[400px] h-[745px] bg-[#F7F7F7] mt-4 border border-[#EAE9E9] rounded-md shadow-lg p-6 flex flex-col justify-between">
            <div className="flex justify-end">
              <img src={closeIcon} alt="Close" className="w-6 h-6 cursor-pointer" />
            </div>

            <div className="flex-grow overflow-y-auto space-y-4 p-4 flex flex-col-reverse">
  <div className="flex items-center space-x-2 justify-end mb-5 p-3 relative">
    {/* Speech bubble pointing to the message bubble */}
  
    {/* Message bubble for Kathryn Murphy */}
    <div className="bg-white text-black p-4 rounded-lg max-w-xs flex flex-col shadow-lg relative">
      <div className="text-xs text-gray-500 mb-1 font-semibold">Kathryn Murphy</div>
      <span className="text-xs text-gray-700">Hi, I need assistance with setting up my office</span>
    </div>
    <img src={person2Avatar} alt="Receiver" className="w-8 h-8 rounded-full" />
  </div>
  
  <div className="flex items-center space-x-2 mt-10">
    <img src={person1Avatar} alt="Sender" className="w-8 h-8 rounded-full" />
    {/* Message bubble for Joshua Abraham */}
    <div className="bg-white text-black p-4 rounded-lg max-w-xs flex flex-col shadow-lg relative">
      <div className="text-xs text-gray-500 mb-1 font-semibold">Joshua Abraham</div>
      <span className="text-xs text-gray-700">Hi, Welcome to iavii. How can I help you today?</span>
    </div>
    <div className="text-xs text-gray-400">11:02</div>
  </div>
</div>



            <div className="relative flex items-center space-x-2 mt-4">
            <input
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="flex-1 p-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA200] focus:border-transparent"
  placeholder="Type a message"
/>

              <img
                src={paperclipIcon}
                alt="Attach"
                className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
              <img
                src={sendIcon}
                alt="Send"
                className="w-8 h-8 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  if (message) {
                    setMessage(""); // Clear input after sending
                  }
                }}
              />
            </div>
          </div>
          <div className="w-[200px] h-[71px]"></div>
        </div>
      </main>
    </div>
  );
};

export default LiveChat;
