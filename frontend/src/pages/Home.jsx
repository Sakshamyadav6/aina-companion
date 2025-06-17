import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="w-full h-100 bg-[#f2eaa4] m-0 p-0">
      <Navbar />
      <div className="flex justify-evenly">
        <div className="m-3 ps-7">
          <h2 className="text-4xl font-bold">
            Talk through your <br /> feelings with an <br /> AI mental therapy
            agent
          </h2>
          <p>Aina means mirror to reflect yourself</p>
        </div>
        <div className="">
          <img src="/icon.png" alt="mirror-icon" />
        </div>
      </div>
    </main>
  );
};

export default Home;
