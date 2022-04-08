import React from "react";

const header = () => {
  return (
    <div className="w-full h-12 bg-blue-300 flex justify-between p-2 leading-8">
      <div className="navbar-name">
        <h3 className="text-white">Farah Ismah Hana</h3>
      </div>
      <div>
        <ul className="flex">
          <li className="pr-10 text-white">
            <a href="#">Home</a>
          </li>
          <li className="pr-10 text-white">
            <a href="#">About</a>
          </li>
          <li className="pr-10 text-white">
            <a href="#">Skills</a>
          </li>
          <li className="pr-10 text-white">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
