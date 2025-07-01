import React from "react";

export default function TestChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="border-b p-4 bg-white">TopBar</div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:block w-1/4 border-r bg-gray-100">
          Sidebar
        </aside>

        {/* Main Chat */}
        <main className="flex flex-1 flex-col bg-gray-50">
          {/* Chat Header */}
          <div className="border-b p-4 bg-white">Chat Header</div>

          {/* Scrollable Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[60%] rounded px-3 py-2 shadow ${
                    i % 2 === 0
                      ? "bg-orange-100 border border-orange-200"
                      : "bg-white border"
                  }`}
                >
                  Message {i}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-4 bg-white">
            <form className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
