import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import ContentWrapper from "./components/ContentWrapper";
import Announcements from "./components/Announcements";
import StatsCards from "./components/StatsCards";
import ResearchAreas from "./components/ResearchAreas";
import Footer from "./components/Footer";


import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <ContentWrapper>
        <Welcome />
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <Announcements />

        {/* Right Column */}
        <StatsCards />

      </div>

    </div>

      <ResearchAreas />
      </ContentWrapper>

      <Footer />
    </>
  )

}

export default App
