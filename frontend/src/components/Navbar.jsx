import React from "react";

const Navbar = () => {
  return (
    <div className="w-100 p-5 flex justify-between">
      <div>
        <h2 className="text-5xl font-extrabold ms-4 p-5">Aina</h2>
      </div>
      <div className="text-2xl p-3 me-7 space-x-6 flex ">
        <h2 className="p-2">About</h2>
        <h2 className="p-2">Features</h2>
        <h2 className="p-2">Contact</h2>
      </div>
    </div>
  );
};

export default Navbar;
