import React, { useState } from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">

          <img src={logo} alt="NIT PATNA" className="h-12 w-auto" />

          <div>
            <h1 className="text-lg md:text-2xl font-bold text-[#0a3d62] leading-tight">
              Computer Science and Engineering
            </h1>

            <h2 className="text-xs md:text-base text-[#1e3799]">
              National Institute of Technology Patna
            </h2>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-medium text-gray-700">

            <li>
              <Link
                to="/App"
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Overview
              </Link>
            </li>

            <li>
              <Link
                to="/people"
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                People
              </Link>
            </li>

            <li>
              <Link
                to="/research"
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Research
              </Link>
            </li>

            <li>
              <Link
                to="https://www.nitp.ac.in/Department/CSE/timeTable"
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Timetable
              </Link>
            </li>

            <li>
              <Link
                to="https://www.nitp.ac.in/Department/CSE/acadProgram"
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Academic Programs
              </Link>
            </li>

            <li>
              <Link
                to="https://www.nitp.ac.in/Department/CSE/labs"
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Labs
              </Link>
            </li>

          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t">

          <ul className="flex flex-col p-4 gap-3 font-medium text-gray-700">

            <li>
              <Link
                to="/App"
                className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Overview
              </Link>
            </li>

            <li>
              <Link
                to="/people"
                className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                People
              </Link>
            </li>

            <li>
              <Link
                to="/research"
                className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Research
              </Link>
            </li>

            <li>
              <Link
                to="https://www.nitp.ac.in/Department/CSE/timeTable"
                className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Timetable
              </Link>
            </li>

            <li>
              <Link
                to="https://www.nitp.ac.in/Department/CSE/acadProgram"
                className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Academic Programs
              </Link>
            </li>

            <li>
              <Link
                to="https://www.nitp.ac.in/Department/CSE/labs"
                className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Labs
              </Link>
            </li>

          </ul>

        </nav>
      )}

    </header>
  );
};

export default Header;