import SideBar from "../components/Chat/SideBar";
import TopBar from "../components/Chat/TopBar";
import MainChat from "../components/Chat/MainChat";
import { useSelector } from "react-redux";
import { createChat } from "../../services/axios.service";
import { useNavigate } from "react-router-dom";

const AinaChat = () => {
  const { token, id } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleCreateChat = async () => {
    try {
      const response = await createChat("api/chat/create", token, id);
      console.log(response);
      const conversationId = response.data.conversation._id;
      navigate(`/chat/${conversationId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <TopBar />
      {/* Main Content Area */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-1/5 bg-white border-r overflow-y-auto">
          <SideBar />
        </aside>

        {/* Main */}
        <main className="w-full md:w-3/4 bg-gray-50 flex flex-col h-full">
          <div className="h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Start a New Conversation
            </h2>
            <p className="text-gray-500 mb-6">
              Select an existing chat from the sidebar or create a new one.
            </p>
            <button
              onClick={handleCreateChat}
              className="bg-orange-600 text-white px-5 py-3 rounded-full hover:bg-orange-700 transition"
            >
              Create New Chat
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AinaChat;
