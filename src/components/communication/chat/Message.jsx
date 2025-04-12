import React, { useState } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how are you?', sender: 'left' },
    { id: 2, text: "I'm good, thanks! How about you?", sender: 'right' }
  ]);
  
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: messageText, sender: 'right' }]);
      setMessageText('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Chat Box */}
        <div className="p-6 space-y-4 h-[70vh] overflow-y-auto" id="chatBox">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-start ${message.sender === 'right' ? 'justify-end' : ''}`}>
              {message.sender === 'left' && (
                <div className="flex-shrink-0">
                  <img src="user1.jpg" alt="User 1" className="w-10 h-10 rounded-full" />
                </div>
              )}
              <div
                className={`${
                  message.sender === 'left' ? 'bg-gray-200' : 'bg-blue-100'
                } text-black p-3 rounded-lg max-w-xs`}
              >
                {message.text}
              </div>
              {message.sender === 'right' && (
                <div className="flex-shrink-0">
                  <img src="user2.jpg" alt="User 2" className="w-10 h-10 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 bg-gray-200 border-t">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 bg-blue-500 text-white rounded-full p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
