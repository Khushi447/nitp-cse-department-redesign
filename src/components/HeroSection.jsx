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
          <a href="https://www.nitp.ac.in/Others/NITAct">NIT Status and Acts</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <FileBarChart size={16} className="text-gray-500" />
          Reports
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Newspaper size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Institute/Magazine">Magazine</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <CreditCard size={16} className="text-gray-500" />
          <a href="https://drive.google.com/file/d/1Njk4q-iZudKaNHgZ7eYprCfaFKd1BroC/view?usp=sharing">PAN / GST</a>
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
    <a href="https://www.nitp.ac.in/Administration/Visitor">Visitor</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <User size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Institute/Director">Director</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Landmark size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/CONIT">NITs Council</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Briefcase size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/Registrar">Registrar</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Users size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/BOG">Board of Governors</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Users size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/Deans">Deans</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Scale size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/Senate">Senate</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <User size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/HOD">HoD</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Scale size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/Proctorial_Board/cheif-proctor">Chief Proctor</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <LayoutList size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/CVO">Chief Vigilance Officer</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Users size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/SUH">Service Unit Heads</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Scale size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/BWC">Building work committee</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Wallet size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/FinanceCommittee">Finance Committee</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <Shield size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Administration/Proctorial_Board">Proctorial Board</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <FileText size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Department/CSE#">Committees</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <LayoutList size={16} className="text-gray-500" />
    <a href="https://drive.google.com/file/d/1-rCS5RsPydppIQKOYVM8qNYK8y4tUTMZ/view?usp=sharing">Organization Chart</a>
  </div>

  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
    <FileText size={16} className="text-gray-500" />
    <a href="https://www.nitp.ac.in/Department/CSE#">Minutes of Meeting</a>
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
          <a href="https://www.nitp.ac.in/Academic/Intranet">Intranet Portal</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <GraduationCap size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Course">Programmes</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <CalendarDays size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Calender">Academic Calendar</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <FileText size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Curriculam">Rules & Regulations</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <GraduationCap size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Admission">Admission</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <IndianRupee size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Fee">Fee Structure</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Bell size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Notices/Academic">Academic Notices</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Award size={16} className="text-gray-500" />
          Centre of Excellence
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <Award size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Student/Scholarship">Scholarship</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Patent">Patents</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Publication">Publications</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Projects">Projects</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/BIS">BIS Dashboard</a>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          <a href="https://www.nitp.ac.in/Academic/Format">Format of Official Documents</a>
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
          <Users size={16} className="text-gray-500" />
          Faculty Directory
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <UserCheck size={16} className="text-gray-500" />
          Officers Directory
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <UserCog size={16} className="text-gray-500" />
          Staff Directory
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <LayoutDashboard size={16} className="text-gray-500" />
          Admin Portal
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <Laptop size={16} className="text-gray-500" />
          Faculty Academic Portal
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <FileText size={16} className="text-gray-500" />
          Staff Claim Form
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
          <Calendar size={16} className="text-gray-500" />
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
          <Home size={16} className="text-gray-500" />
          Hostel & Mess
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Medal size={16} className="text-gray-500" />
          Scholarship
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Users size={16} className="text-gray-500" />
          Clubs / Societies
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <ShieldAlert size={16} className="text-gray-500" />
          Anti Ragging
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <CreditCard size={16} className="text-gray-500" />
          Fee Payment
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Venus size={16} className="text-gray-500" />
          Women Cell
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <UserRound size={16} className="text-gray-500" />
          SC / ST Cell
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Activity size={16} className="text-gray-500" />
          Student Activity Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Cpu size={16} className="text-gray-500" />
          Tech Fest
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Users size={16} className="text-gray-500" />
          NSS@NITP
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Building2 size={16} className="text-gray-500" />
          E-Cell
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Users size={16} className="text-gray-500" />
          Unnat Bharat
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Laptop size={16} className="text-gray-500" />
          Academic Portal (New)
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Laptop size={16} className="text-gray-500" />
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
          <Building2 size={16} className="text-gray-500" />
          Incubation Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Cpu size={16} className="text-gray-500" />
          Computer Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <HeartPulse size={16} className="text-gray-500" />
          Health Center
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Trophy size={16} className="text-gray-500" />
          Sports Facilities
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <BookOpen size={16} className="text-gray-500" />
          Library
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Landmark size={16} className="text-gray-500" />
          Bank
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Bus size={16} className="text-gray-500" />
          EMU
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Building2 size={16} className="text-gray-500" />
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