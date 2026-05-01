import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import ScrollToTop from "../shared/components/ScrollToTop";
import FloatingButtons from "../shared/components/FloatingButton";

// Home / Pages
import About from "../features/home/About";
import Blog from "../features/home/Blog";
import Home from "../features/home/Home";

// Contact
import Contact from "../features/contact/Contact";

// Applications (Services) - ✅ kebab-case FILES + sorted
import AgricultureSurvey from "../features/services/agriculture";
import BridgeRoadInspection from "../features/services/bridge-road";
import ConstructionSurvey from "../features/services/construction";
import DisasterManagement from "../features/services/disaster-management";
import DroneMagneticSurvey from "../features/services/drone-magnetic-survey";
import ForestWildlifeSurvey from "../features/services/forest-wildlife";
import IndustrialInspection from "../features/services/industrial-inspection";
import LidarSurvey from "../features/services/lidar-survey";
import MiningSurvey from "../features/services/mining-survey";
import MinorMineralSurvey from "../features/services/minor-mineral-survey";
import PipelineInspection from "../features/services/pipeline-inspection";
import PowerlineMonitoring from "../features/services/powerline-monitoring";
import RailwaySurvey from "../features/services/railway-survey";
import RiverMappingAndServices from "../features/services/river-mapping-service";
import SmartCitySurvey from "../features/services/smart-city-survey";
import SolarSurvey from "../features/services/solar";

// Solutions
import DroneDataProcessing from "../features/services/Solutions/drone-insight-system";
import PilotsOnProject from "../features/services/Solutions/pilots-on-project";

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
          <Route path="/applications/agriculture-survey" element={<AgricultureSurvey />} />
          <Route path="/applications/bridge-road-inspection" element={<BridgeRoadInspection />} />
          <Route path="/applications/construction-survey" element={<ConstructionSurvey />} />
          <Route path="/applications/disaster-management" element={<DisasterManagement />} />
          <Route path="/applications/drone-magnetic-survey" element={<DroneMagneticSurvey />} />
          <Route path="/applications/forest-wildlife-survey" element={<ForestWildlifeSurvey />} />
          <Route path="/applications/industrial-inspection" element={<IndustrialInspection />} />
          <Route path="/applications/lidar-survey" element={<LidarSurvey />} />
          <Route path="/applications/mining-survey" element={<MiningSurvey />} />
          <Route path="/applications/minor-mineral-survey" element={<MinorMineralSurvey />} />
          <Route path="/applications/pipeline-inspection" element={<PipelineInspection />} />
          <Route path="/applications/powerline-monitoring" element={<PowerlineMonitoring />} />
          <Route path="/applications/railway-survey" element={<RailwaySurvey />} />
          <Route path="/applications/river-mapping-service" element={<RiverMappingAndServices />} />
          <Route path="/applications/smart-city-survey" element={<SmartCitySurvey />} />
          <Route path="/applications/solar-survey" element={<SolarSurvey />} />

          {/* Solutions */}
          <Route path="/solutions/drone-insight-system" element={<DroneDataProcessing />} />
          <Route path="/solutions/pilots-on-project" element={<PilotsOnProject />} />
        </Routes>
      </main>

      <FloatingButtons />
      <Footer />
    </div>
  );
}