import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import ScrollToTop from "../shared/components/ScrollToTop";
import FloatingButtons from "../shared/components/FloatingButton";

// Home / Pages
import Home from "../features/home/Home";
import About from "../features/home/About";
import Blog from "../features/home/Blog";


// Contact
import Contact from "../features/contact/Contact";

// Applications (Services)
import MinorMineralSurvey from "../features/services/minorMineralSurvey";
import MiningSurvey from "../features/services/miningsurvey";
import ConstructionSurvey from "../features/services/construction";
import AgricultureSurvey from "../features/services/agriculture";
import SolarSurvey from "../features/services/solar";
import PowerlineMonitoring from "../features/services/powerline";
import BridgeRoadInspection from "../features/services/bridge-road";
import ForestWildlifeSurvey from "../features/services/forest-wildlife";
import DisasterManagement from "../features/services/disasterManagement";
import RailwaySurvey from "../features/services/railwaySurvey";
import IndustrialInspection from "../features/services/industrialInspection";
import SmartCitySurvey from "../features/services/smartcitySurvey";
import PipelineInspection from "../features/services/pipelineInspection";
import RiverMappingAndServices from "../features/services/riverMappingService";
import LidarSurvey from "../features/services/lidarSurvey";
import DroneMagneticSurvey from "../features/services/droneMagneticSurvey";

// Solutions
import DroneDataProcessing from "../features/services/drone-insight-system";
import PilotsOnProject from "../features/services/pilot";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      <main className="flex-1 pt-20 lg:pt-24">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
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