import React from "react";
import SideBar from "../components/Chat/SideBar";
import TopBar from "../components/Chat/TopBar";
import MainChat from "../components/Chat/MainChat";

const ConversationPage = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* <TopBar /> */}
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white border-r overflow-y-auto">
          <SideBar />
        </aside>

        {/* Main */}
        <div className="w-full md:w-3/4 bg-gray-50 flex flex-col h-full">
          <MainChat />
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
