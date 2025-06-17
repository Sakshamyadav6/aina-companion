import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "💬",
    title: "AI-Powered Chat",
    desc: "Real-time, empathetic conversations powered by GPT.",
  },
  {
    icon: "🎙️",
    title: "Voice Interaction",
    desc: "Talk or listen—Aina adapts to your preferred mode.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Your data belongs to you. End-to-end encrypted.",
  },
  {
    icon: "📜",
    title: "History & Sessions",
    desc: "Review past chats and see your emotional journey.",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Your AI&nbsp;
            <span className="text-orange-600">Therapy</span>&nbsp;Companion
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Calm your mind, track your mood, and reflect with Aina—a mirror for
            your inner self.
          </p>
          <motion.a
            href="#features"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-orange-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/login"> Get Started&nbsp;</Link>
            <FiArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          <img
            src="/icon.png"
            alt="Aina Mirror Icon"
            className="w-64 h-auto md:w-80 lg:w-96 drop-shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600">
            Everything you need to take control of your emotional well-being.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
