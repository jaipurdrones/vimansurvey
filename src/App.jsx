import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Contact from "./pages/Contact";

// Applications
import MinorMineralSurvey from "./pages/applications/minorMineralSurvey";
import MiningSurvey from "./pages/applications/miningsurvey";
import ConstructionSurvey from "./pages/applications/construction";
import AgricultureSurvey from "./pages/applications/agriculture";
import SolarSurvey from "./pages/applications/solar";
import PowerlineMonitoring from "./pages/applications/powerline";
import BridgeRoadInspection from "./pages/applications/bridge-road";
import ForestWildlifeSurvey from "./pages/applications/forest-wildlife";
import DisasterManagement from "./pages/applications/disasterManagement";
import RailwaySurvey from "./pages/applications/railwaySurvey";
import IndustrialInspection from "./pages/applications/industrialInspection";
import SmartCitySurvey from "./pages/applications/smartcitySurvey";
import PipelineInspection from "./pages/applications/pipelineInspection";
import RiverMappingAndServices from "./pages/applications/riverMappingService";
import LidarSurvey from "./pages/applications/lidarSurvey";
import DroneMagneticSurvey from "./pages/applications/droneMagneticSurvey";

// Solutions
import DroneDataProcessing from "./pages/solutions/drone-insight-system";
import PilotsOnProject from "./pages/solutions/pilot";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      {/* Adjust padding to match navbar height */}
      <main className="flex-1 pt-20 lg:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />

          {/* Applications */}
          <Route path="/applications/minorMineralSurvey" element={<MinorMineralSurvey />} />
          <Route path="/applications/miningsurvey" element={<MiningSurvey />} />
          <Route path="/applications/construction" element={<ConstructionSurvey />} />
          <Route path="/applications/agriculture" element={<AgricultureSurvey />} />
          <Route path="/applications/solar" element={<SolarSurvey />} />
          <Route path="/applications/powerline" element={<PowerlineMonitoring />} />
          <Route path="/applications/bridge-road" element={<BridgeRoadInspection />} />
          <Route path="/applications/forest-wildlife" element={<ForestWildlifeSurvey />} />
          <Route path="/applications/disasterManagement" element={<DisasterManagement />} />
          <Route path="/applications/railwaySurvey" element={<RailwaySurvey />} />
          <Route path="/applications/industrialInspection" element={<IndustrialInspection />} />
          <Route path="/applications/smartcitySurvey" element={<SmartCitySurvey />} />
          <Route path="/applications/pipelineInspection" element={<PipelineInspection />} />
          <Route path="/applications/riverMappingService" element={<RiverMappingAndServices />} />
          <Route path="/applications/lidarSurvey" element={<LidarSurvey />} />
          <Route path="/applications/droneMagneticSurvey" element={<DroneMagneticSurvey />} />

          {/* Solutions */}
          <Route path="/solutions/drone-insight-system" element={<DroneDataProcessing />} />
          <Route path="/solutions/pilot" element={<PilotsOnProject />} />
        </Routes>
      </main>
      <FloatingButtons />

      <Footer />
    </div>
  );
}
