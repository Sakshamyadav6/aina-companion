import React, { useState } from "react";
import SideBar from "../components/Chat/SideBar";
import TopBar from "../components/Chat/TopBar";
import MainChat from "../components/Chat/MainChat";

const ConversationPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <TopBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-20 w-64 bg-white border-r transform
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:relative md:translate-x-0 md:w-1/4 md:block
          `}
        >
          <SideBar />
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main */}
        <div className="w-full md:w-3/4 bg-gray-50 flex flex-col h-full">
          <MainChat />
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
