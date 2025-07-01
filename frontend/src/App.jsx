import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AinaChat from "./pages/AinaChat";
import ConversationPage from "./pages/ConversationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<AinaChat />} />
        <Route path="/chat/:conversationId" element={<ConversationPage />} />
      </Routes>
    </>
  );
}

export default App;
