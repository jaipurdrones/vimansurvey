// src/pages/applications/LidarSurvey.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FAQ from "../../shared/components/FAQ";

// Images
import lidarHero from "../../assets/Lidar/lidar1.webp";
import lidar2 from "../../assets/Lidar/lidar2.gif";
import lidar3 from "../../assets/Lidar/lidar3.webp";
import lidar4 from "../../assets/Lidar/lidar4.webp";

export default function LidarSurvey() {
  const faqs = [
    {
      q: "What is a LiDAR Drone Survey?",
      a: "LiDAR drone surveys use laser scanning technology mounted on UAVs to capture high-density 3D point clouds for terrain, vegetation, and infrastructure analysis.",
    },
    {
      q: "Which industries benefit from LiDAR surveys?",
      a: "LiDAR surveys are widely used in construction, mining, forestry, floodplain management, environmental monitoring, and urban planning.",
    },
    {
      q: "How accurate are LiDAR drone surveys?",
      a: "With RTK/PPK GPS and advanced IMU systems, LiDAR surveys achieve centimeter-level accuracy, suitable for engineering and GIS applications.",
    },
    {
      q: "Can LiDAR penetrate vegetation?",
      a: "Yes, multi-return LiDAR sensors can capture ground data under forest canopies and dense vegetation, providing accurate terrain models.",
    },
  ];

  // ✅ uniform 16:9 image wrapper
  const Img = ({ src, alt }) => (
    <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>LiDAR Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey delivers high-precision LiDAR drone surveys for 3D terrain mapping, infrastructure development, forestry, floodplain management, and environmental monitoring."
        />
      </Helmet>

      {/* HERO (UNCHANGED) */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={lidarHero}
          alt="LiDAR Drone Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            LiDAR Survey & 3D Drone Mapping
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Achieve centimeter-level accuracy in terrain, infrastructure, and environmental mapping through advanced LiDAR technology.
          </p>
        </div>
      </section>

      {/* OVERVIEW (LEFT TEXT - RIGHT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Advanced Aerial LiDAR Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            <strong>Viman Survey</strong> harnesses UAV-based LiDAR systems to capture ultra-dense 3D point clouds for digital terrain models, topographic mapping, and engineering-grade surface reconstruction.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our solutions empower decision-makers in <strong>infrastructure planning, land development, environmental conservation, flood risk management, and forestry analysis</strong>, ensuring precise and actionable insights.
          </p>
        </div>

        <Img src={lidar2} alt="LiDAR Survey Overview" />
      </section>

      {/* SECTION 1 (RIGHT IMAGE - LEFT TEXT swapped to alternate) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <Img src={lidar3} alt="LiDAR Terrain Mapping" />

        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            High-Resolution Terrain Mapping
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Generate accurate digital elevation models and topographic maps quickly and efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Perfect for infrastructure planning, construction, and flood risk management.
          </p>
        </div>
      </section>

      {/* SECTION 2 (LEFT TEXT - RIGHT IMAGE restored alternation) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Infrastructure & Forestry Applications
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Inspect roads, bridges, powerlines, and rail corridors with centimeter-level accuracy.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Analyze vegetation canopy, forest structure, and environmental changes efficiently.
          </p>
        </div>

        <Img src={lidar4} alt="Infrastructure LiDAR Mapping" />
      </section>

      {/* TECHNOLOGY */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h3 className="text-3xl font-semibold text-center text-primary-700">
            Technology that Defines Precision
          </h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            Our drones integrate <strong>multi-return LiDAR sensors, RTK/PPK GPS, and high-end IMU systems</strong> combined with AI-assisted post-processing for engineering-ready geospatial datasets.
          </p>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="bg-primary-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Why Choose Drone LiDAR Surveys?
          </h3>
          <p className="text-gray-200 mb-12 max-w-3xl mx-auto">
            LiDAR provides fast, high-resolution, and versatile mapping — ideal for projects of any scale.
          </p>
        </div>
      </div>

      {/* FAQ (UNCHANGED AS REQUESTED) */}
      <FAQ faqs={faqs} />

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center">
        <h3 className="text-3xl font-semibold text-primary-700 mb-4">
          Harness the Power of LiDAR with Viman Survey
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          From flight planning to final deliverables, Viman Survey ensures precision, compliance, and reliability in every LiDAR mapping mission across India.
        </p>
        <Link
          to="/contact"
          className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition"
        >
          Request a Quote
        </Link>
      </section>
    </main>
  );
}