import React from "react";
import { Facebook, Twitter, MapPin, Linkedin } from "lucide-react";
import logo from "./images/logo.png"; // your logo file

function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="NIT Patna Logo" className="w-24 mb-4" />
            <p className="text-sm">
              The Department of Computer Science & Engineering at NIT Patna is committed to excellence in teaching, research, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.nitp.ac.in/Department" className="hover:text-blue-400">Department</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Others/NIRF" className="hover:text-blue-400">NIRF</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Others/NewCampus" className="hover:text-blue-400">New Campus</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Others/RTI" className="hover:text-blue-400">RTI</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Institute/Magazine" className="hover:text-blue-400">Magazine(Vol.4)</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Academic/Admission?type=study_in_india" className="hover:text-blue-400">Study in India</a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.nitp.ac.in/Institute?tab=campus" className="hover:text-blue-400">Campus</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Others/BOG" className="hover:text-blue-400">BOG/FC/BWC Minutes</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Others/Convocation" className="hover:text-blue-400">Convocation 2023</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Others/Senate" className="hover:text-blue-400">Senate Minutes</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Facilities/SCST" className="hover:text-blue-400">SC/ST Grievance Cell</a>
              </li>
              <li>
                <a href="https://www.nitp.ac.in/Department/CSE#" className="hover:text-blue-400">Climate Action Plan</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:cse@nitp.ac.in" className="hover:text-blue-400">cse@nitp.ac.in</a></li>
              <li>Phone: <a href="tel:+916122371715" className="hover:text-blue-400">+91-612-2371715</a></li>
              <li>Address: <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">NIT Patna, Patna, Bihar, India</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/NITPatna" target="_blank" rel="noopener noreferrer">
                <Facebook className="cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://twitter.com/NITPatna1" target="_blank" rel="noopener noreferrer">
                <Twitter className="cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target="_blank" rel="noopener noreferrer">
                <MapPin className="cursor-pointer hover:text-blue-400" />
              </a>
              <a href="https://www.linkedin.com/company/nit-patna" target="_blank" rel="noopener noreferrer">
                <Linkedin className="cursor-pointer hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/20 mt-10 pt-4 pb-4 text-sm">
          <p>© Department of Computer Science & Engineering, NIT Patna. All rights reserved.</p>
          <a href="https://www.nitp.ac.in/Webteam" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-400" >
          
          Developed & Maintained by WDC, NIT Patna</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;