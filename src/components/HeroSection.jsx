import { useState, useEffect } from "react";
import dep1 from "./images/dep1.png";
import dep2 from "./images/dep2.png";
// import { Users, ClipboardList, Building2 } from "lucide-react";
import {
  User,LayoutDashboard,Users, UserCheck, UserCog, Laptop, Calendar,Home, Medal, ShieldAlert,Venus, UserRound, Activity, Cpu, HeartPulse,
  Landmark,Trophy, Bus, Building2,
  Building,
  Scale,
  FileText,
  Briefcase,
  Shield,
  Wallet,
  LayoutList
} from "lucide-react";

import {
  Info,GraduationCap,CalendarDays, IndianRupee,Bell, LayoutGrid,
  FileCheck,
  FileBarChart,
  Newspaper,
  CreditCard,
  Award,
  BookOpen
} from "lucide-react";


function HeroSection() {
  const images = [dep2, dep1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const DropdownItem = ({ icon, text }) => {
  return (
    <p className="hover:text-blue-600 cursor-pointer flex items-center gap-2">
      {icon} {text}
    </p>
  );
};

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">

      {/* Background Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="CSE Department"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Translucent Navbar at the TOP */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="flex justify-center gap-6 bg-white/20 backdrop-blur-md text-white text-lg font-medium px-10 py-4 shadow-xl">

          {/* Institute */}
<div className="relative group cursor-pointer">
  <span >Institute ▾</span>

  <div className="absolute top-full left-1/2 -translate-x-1/2 
                  hidden group-hover:block z-50 pt-2">
    <div className="bg-white text-gray-800 
                    w-[480px] 
                    rounded-xl 
                    shadow-xl 
                    px-5 py-4">

      <h2 className="text-lg font-semibold mb-3 border-b pb-2">
        Institute
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[14px]">

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Info size={16} className="text-gray-500" />
          About
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Award size={16} className="text-gray-500" />
          NIT Status & Acts
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <FileBarChart size={16} className="text-gray-500" />
          Reports
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Newspaper size={16} className="text-gray-500" />
          Magazine
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <CreditCard size={16} className="text-gray-500" />
          PAN / GST
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          Annual Report
        </div>

      </div>
    </div>
  </div>
</div>

         {/* Administration */}
<div className="relative group cursor-pointer">
  <span>Administration ▾</span>

  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50 pt-4">
    <div className="bg-white text-gray-800 w-[480px] rounded-2xl shadow-2xl px-5 py-4">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-3 border-b pb-2">
        Administration
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[14px]">

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <User size={16} className="text-gray-500" />
    Visitor
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Building size={16} className="text-gray-500" />
    Director
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Landmark size={16} className="text-gray-500" />
    NITs Council
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Briefcase size={16} className="text-gray-500" />
    Registrar
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Users size={16} className="text-gray-500" />
    Board of Governors
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Users size={16} className="text-gray-500" />
    Deans
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Scale size={16} className="text-gray-500" />
    Senate
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <LayoutList size={16} className="text-gray-500" />
    HoD
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Wallet size={16} className="text-gray-500" />
    Finance Committee
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Shield size={16} className="text-gray-500" />
    Proctorial Board
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <FileText size={16} className="text-gray-500" />
    Committees
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <LayoutList size={16} className="text-gray-500" />
    Organization Chart
  </div>

</div>
  </div>
</div>
</div>

          {/* Academics */}
<div className="relative group cursor-pointer">
  <span>Academics ▾</span>

  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50 pt-4">
    <div className="bg-white text-gray-800 w-[480px] rounded-2xl shadow-2xl px-5 py-4">

      {/* Title */}
      <h2 className="text-lg font-semibold mb-3 border-b pb-2">
        Academics
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[14px]">

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <LayoutGrid size={16} className="text-gray-500" />
          Departments
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <LayoutDashboard size={16} className="text-gray-500" />
          Intranet Portal
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <GraduationCap size={16} className="text-gray-500" />
          Programmes
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <CalendarDays size={16} className="text-gray-500" />
          Academic Calendar
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <FileText size={16} className="text-gray-500" />
          Rules & Regulations
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <GraduationCap size={16} className="text-gray-500" />
          Admission
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <IndianRupee size={16} className="text-gray-500" />
          Fee Structure
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Bell size={16} className="text-gray-500" />
          Academic Notices
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Award size={16} className="text-gray-500" />
          Centre of Excellence
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          Scholarships
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          Patents
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          Publications
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          Projects
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          BIS Dashboard
        </div>

      </div>
    </div>
  </div>
</div>

          {/* Faculty & Staff */}
<div className="relative group cursor-pointer">
  <span>Faculty & Staff ▾</span>

  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50 pt-4">
    <div className="bg-white text-gray-800 w-[460px] rounded-2xl shadow-2xl px-5 py-4">

      <h2 className="text-lg font-semibold mb-3 border-b pb-2">
        Faculty & Staff
      </h2>

      <div className="space-y-1 text-[14px]">

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <Users size={17} className="text-gray-500" />
          Faculty Directory
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <UserCheck size={17} className="text-gray-500" />
          Officers Directory
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <UserCog size={17} className="text-gray-500" />
          Staff Directory
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <LayoutDashboard size={17} className="text-gray-500" />
          Admin Portal
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <Laptop size={17} className="text-gray-500" />
          Faculty Academic Portal
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <FileText size={17} className="text-gray-500" />
          Staff Claim Form
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <Calendar size={17} className="text-gray-500" />
          Holidays / Restricted Holidays
        </div>

      </div>
    </div>
  </div>
</div>

          {/* Students */}
<div className="relative group cursor-pointer">
  <span>Students ▾</span>

  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50 pt-4">
    <div className="bg-white text-gray-800 w-[520px] rounded-2xl shadow-2xl px-6 py-5">

      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        Students
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[14px]">

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Home size={17} className="text-gray-500" />
          Hostel & Mess
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Medal size={17} className="text-gray-500" />
          Scholarship
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Users size={17} className="text-gray-500" />
          Clubs / Societies
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <ShieldAlert size={17} className="text-gray-500" />
          Anti Ragging
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <CreditCard size={17} className="text-gray-500" />
          Fee Payment
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Venus size={17} className="text-gray-500" />
          Women Cell
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <UserRound size={17} className="text-gray-500" />
          SC / ST Cell
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Activity size={17} className="text-gray-500" />
          Student Activity Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Cpu size={17} className="text-gray-500" />
          Tech Fest
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Users size={17} className="text-gray-500" />
          NSS@NITP
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Building2 size={17} className="text-gray-500" />
          E-Cell
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Users size={17} className="text-gray-500" />
          Unnat Bharat
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Laptop size={17} className="text-gray-500" />
          Academic Portal (New)
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Laptop size={17} className="text-gray-500" />
          Academic Portal (Old)
        </div>

      </div>
    </div>
  </div>
</div>

          {/* Facilities */}
<div className="relative group cursor-pointer">
  <span>Facilities ▾</span>

  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50 pt-4">
    <div className="bg-white text-gray-800 w-[420px] rounded-2xl shadow-2xl px-6 py-5">

      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        Facilities
      </h2>

      <div className="space-y-2 text-[14px]">

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Building2 size={17} className="text-gray-500" />
          Incubation Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Cpu size={17} className="text-gray-500" />
          Computer Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <HeartPulse size={17} className="text-gray-500" />
          Health Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Trophy size={17} className="text-gray-500" />
          Sports Facilities
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={17} className="text-gray-500" />
          Library
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Landmark size={17} className="text-gray-500" />
          Bank
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Bus size={17} className="text-gray-500" />
          EMU
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Building2 size={17} className="text-gray-500" />
          ESU
        </div>

      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;