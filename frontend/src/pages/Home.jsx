import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMessageSquare,
  FiMic,
  FiLock,
  FiBook,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FiMessageSquare className="w-6 h-6" />,
    title: "AI-Powered Chat",
    desc: "Real-time, empathetic conversations powered by advanced AI.",
  },
  {
    icon: <FiMic className="w-6 h-6" />,
    title: "Voice Interaction",
    desc: "Natural voice conversations with seamless switching between modes.",
  },
  {
    icon: <FiLock className="w-6 h-6" />,
    title: "Secure & Private",
    desc: "End-to-end encryption ensures your data remains confidential.",
  },
  {
    icon: <FiBook className="w-6 h-6" />,
    title: "Session History",
    desc: "Track your progress and reflect on your emotional journey.",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 antialiased min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Your Personal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              AI Therapy
            </span>{" "}
            Companion
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            A safe space to explore your thoughts, track your mood, and grow
            with compassionate AI support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3.5 rounded-lg shadow hover:shadow-lg transition-all duration-300 font-medium"
              >
                Get Started <FiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-6 py-3.5 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 rounded-[2rem] rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 rounded-[2rem] -rotate-3"></div>
            <img
              src="/icon.png"
              alt="Aina AI Companion"
              className="relative w-full h-full object-contain drop-shadow-xl rounded-[2rem]"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Thoughtful Features for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                Your Wellbeing
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Designed to support your mental health journey with care and
              innovation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 group"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-orange-500 mb-4 group-hover:from-orange-200 group-hover:to-pink-200 transition-all">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands who've found support through compassionate AI
              conversations.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 font-medium"
              >
                Start Talking Now <FiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
