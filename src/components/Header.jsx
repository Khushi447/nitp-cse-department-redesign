import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center gap-4 p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="NIT PATNA" className="h-15 w-auto block" />
      </div>

      {/* Institute Name */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-[#0a3d62]">
          Computer Science and Engineering
        </h1>
        <h2 className="text-base text-[#1e3799] mt-1">
          National Institute of Technology Patna
        </h2>
      </div>

  <nav>
    <ul className="flex gap-6 font-medium text-gray-700">

      <li>
        <Link to="/overview" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition">
          Overview
        </Link>
      </li>

      <li>
        <Link to="/people" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition">
          People
        </Link>
      </li>

      <li>
        <Link to="/research" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition">
          Research
        </Link>
      </li>

      <li>
        <Link to="/timetable" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition">
          Timetable
        </Link>
      </li>

      <li>
        <Link to="/academic-programs" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition">
          Academic Programs
        </Link>
      </li>

      <li>
        <Link to="/labs" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition">
          Labs
        </Link>
      </li>

    </ul>
  </nav>

    </header>

    
  );
};

export default Header;