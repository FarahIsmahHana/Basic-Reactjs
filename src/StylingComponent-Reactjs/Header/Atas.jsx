import React from "react";

const Atas = () => {
  return (
    <div className="w-full h-18 bg-blue-300 p-2 leading-8">
      <div className="navbar-name">
        <h1 className="text-white text-center text-2xl font-bold">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex pt-2">
          <li className="pl-10 text-white">
            <a href="#">Home</a>
          </li>
          <li className="pl-10 text-white">
            <a href="#">About</a>
          </li>
          <li className="pl-10 text-white">
            <a href="#">Skills</a>
          </li>
          <li className="pl-10 text-white">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Atas;
