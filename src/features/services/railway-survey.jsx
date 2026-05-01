// src/pages/applications/RailwaySurvey.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FAQ from "../../shared/components/FAQ";

import heroImg from "../../assets/Railway/railway1.webp";
import railway2 from "../../assets/Railway/railway2.webp";
import railway3 from "../../assets/Railway/railway3.webp";
import railway4 from "../../assets/Railway/railway4.webp";
import railway5 from "../../assets/Railway/railway5.webp";

export default function RailwaySurvey() {
  const faqs = [
    {
      q: "What is a Drone Railway Survey?",
      a: "Drone Railway Survey uses UAVs to capture high-resolution images and 3D maps of railway corridors for inspection, alignment verification, and asset monitoring.",
    },
    {
      q: "How does drone technology improve railway inspections?",
      a: "Drones increase safety, reduce inspection time, provide precise mapping, and allow monitoring in hard-to-reach areas without disrupting operations.",
    },
    {
      q: "Can drones detect track and infrastructure faults?",
      a: "Yes, drones capture high-resolution imagery and thermal data to detect track misalignments, ballast issues, and infrastructure defects efficiently.",
    },
    {
      q: "Are there regulations for drone use near railways?",
      a: "Operations comply with DGCA and local aviation regulations to ensure safety, responsible data collection, and minimal disruption to rail traffic.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* HERO (UNCHANGED) */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={heroImg}
          alt="Railway Drone Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Railway Drone Survey & Inspection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Enhancing railway safety and efficiency with precision drone mapping, alignment verification, and asset health monitoring.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Revolutionizing Railway Surveys with Drone Technology
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            <strong>Viman Survey</strong> provides cutting-edge drone solutions for railway infrastructure inspection, track alignment verification, and corridor mapping — ensuring safer and more efficient operations.
          </p>
          <p className="text-gray-700 text-lg">
            Our UAV surveys generate high-resolution images, 3D models, and real-time analytics to optimize maintenance and planning.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={railway2}
            alt="Railway Overview"
            className="rounded-2xl shadow-xl w-full aspect-[5/3] object-cover"
          />
        </div>
      </section>

      {/* SECTION 1 — LEFT IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={railway3}
            alt="Track Mapping"
            className="rounded-xl shadow-lg w-full aspect-[5/3] object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Track & Corridor Mapping
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            High-resolution aerial imaging for track alignment, corridor mapping, and encroachment detection ensures efficient railway operations.
          </p>
          <p className="text-gray-700 text-lg">
            Data-driven mapping reduces inspection time and increases accuracy for planning and maintenance.
          </p>
        </div>
      </section>

      {/* SECTION 2 — RIGHT IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={railway4}
            alt="Asset Monitoring"
            className="rounded-xl shadow-lg w-full aspect-[5/3] object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Asset Health Monitoring
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Monitor railway assets, sleepers, bridges, and electrical installations using high-resolution and thermal imaging drones.
          </p>
          <p className="text-gray-700 text-lg">
            Timely insights prevent failures, reduce maintenance costs, and improve operational safety.
          </p>
        </div>
      </section>

      {/* SECTION 3 — LEFT IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={railway5}
            alt="Reporting"
            className="rounded-xl shadow-lg w-full aspect-[5/3] object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Real-Time Inspection & Reporting
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Generate 3D digital twins, real-time inspection reports, and analytics dashboards to support railway maintenance and project planning.
          </p>
          <p className="text-gray-700 text-lg">
            Fast, accurate, and safe data collection enhances operational efficiency.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold text-primary-700 mb-10">
          Key Applications of Railway Drone Surveys
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Track & Bridge Inspection", desc: "Detailed inspection of tracks, bridges, and tunnels." },
            { title: "Alignment Verification", desc: "Ensure accurate track alignment and slope analysis." },
            { title: "3D Modeling & Reporting", desc: "Generate digital twins and comprehensive maintenance reports." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-sm border">
              <h4 className="text-xl font-semibold text-primary-700 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          Benefits of Drone Railway Surveys
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "High-Precision Mapping", desc: "Centimeter-level accuracy for track and corridor surveys." },
            { title: "Operational Safety", desc: "Reduce risks for inspection teams in hazardous areas." },
            { title: "Time & Cost Efficiency", desc: "Faster inspections and optimized maintenance planning." },
          ].map((b, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">{b.title}</h4>
              <p className="text-white/90 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ IMPORT */}
      <FAQ faqs={faqs} />

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <h3 className="text-3xl mb-4">
          Partner with India’s Leading Drone Railway Survey Experts
        </h3>
        <Link to="/contact" className="bg-white text-primary-700 px-6 py-3 rounded-full">
          Get in Touch
        </Link>
      </section>

    </main>
  );
}