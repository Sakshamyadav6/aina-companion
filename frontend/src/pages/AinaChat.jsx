import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiSearch,
  FiMenu,
  FiPlus,
  FiLogOut,
  FiSettings,
  FiMessageSquare,
} from "react-icons/fi";

const AinaChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Aina, your AI therapy companion. How can I support you today?",
      sender: "aina",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Current Conversation", date: new Date() },
    {
      id: 2,
      title: "Exploring anxiety techniques",
      date: new Date(Date.now() - 86400000),
    },
    {
      id: 3,
      title: "Relationship challenges",
      date: new Date(Date.now() - 172800000),
    },
  ]);
  const [activeChat, setActiveChat] = useState(1);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI typing animation
    setTimeout(() => {
      const aiResponses = [
        "I understand. Can you tell me more about how this makes you feel?",
        "That sounds challenging. What coping strategies have you tried?",
        "Thank you for sharing. Let's explore this together.",
        "I'm here to listen. What emotions are coming up for you?",
      ];
      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const newAiMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "aina",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000);
  };

  const startNewChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm Aina, your AI therapy companion. What would you like to talk about today?",
        sender: "aina",
        timestamp: new Date(),
      },
    ]);
    setActiveChat(null);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Sidebar */}
      <motion.div
        className={`bg-white border-r border-gray-200 flex flex-col ${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 overflow-hidden`}
        initial={{ width: 256 }}
        animate={{ width: sidebarOpen ? 256 : 0 }}
      >
        <div className="p-4">
          <button
            onClick={startNewChat}
            className="flex items-center justify-center w-full py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors mb-4"
          >
            <FiPlus className="mr-2" />
            New Chat
          </button>
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Recent Conversations
          </h3>
          <ul>
            {chatHistory.map((chat) => (
              <li key={chat.id}>
                <button
                  onClick={() => setActiveChat(chat.id)}
                  className={`w-full text-left px-4 py-3 flex items-center ${
                    activeChat === chat.id
                      ? "bg-purple-50 text-purple-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FiMessageSquare className="mr-3 text-gray-500" />
                  <div className="truncate">
                    <p className="truncate">{chat.title}</p>
                    <p className="text-xs text-gray-500">
                      {chat.date.toLocaleDateString()}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded-md">
            <FiSettings className="mr-3 text-gray-600" />
            Settings
          </button>
          <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded-md">
            <FiLogOut className="mr-3 text-gray-600" />
            Log Out
          </button>
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <FiMenu />
          </button>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 w-64"
              />
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                <FiUser />
              </div>
              <span className="ml-2 font-medium">User</span>
            </div>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xl rounded-lg p-4 ${
                      message.sender === "user"
                        ? "bg-purple-500 text-white"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <div className="flex items-start">
                      {message.sender === "aina" && (
                        <div className="mr-3 mt-1 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <FiMessageSquare className="text-purple-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="whitespace-pre-wrap">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user"
                              ? "text-purple-200"
                              : "text-gray-500"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <div className="ml-3 mt-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <FiUser className="text-gray-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <FiMessageSquare className="text-purple-600" />
                      </div>
                      <div className="flex space-x-1 py-2">
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message Aina..."
                className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                  inputValue.trim()
                    ? "bg-purple-500 text-white hover:bg-purple-600"
                    : "bg-gray-200 text-gray-500"
                } transition-colors`}
              >
                <FiSend />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Aina is designed for supportive conversations, not medical advice.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AinaChat;
