// src/pages/applications/RailwaySurvey.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";

import heroImg from "../../assets/railway1.png";
import railway2 from "../../assets/railway2.jpg";
import railway3 from "../../assets/railway3.jpg";
import railway4 from "../../assets/railway4.jpg";
import railway5 from "../../assets/railway5.jpg";

export default function RailwaySurvey() {
  const [openIndex, setOpenIndex] = useState(null);

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
      <Helmet>
        <title>Railway Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides advanced drone-based railway survey and inspection services — including track mapping, alignment verification, and asset health monitoring."
        />
      </Helmet>

      {/* Hero */}
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

      {/* Overview (slider removed) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
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

        <div className="flex justify-center">
          <img
            src={railway2}
            alt="Railway Overview"
            className="rounded-2xl shadow-xl w-full max-h-[420px] object-cover"
          />
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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
          <div className="flex justify-center">
            <img src={railway3} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 flex justify-center">
            <img src={railway4} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
          <div className="order-1 md:order-2">
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
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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
          <div className="flex justify-center">
            <img src={railway5} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
        </div>

      </div>

      {/* Key Applications Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-primary-700 mb-10">
            Key Applications of Railway Drone Surveys
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Track & Bridge Inspection", desc: "Detailed inspection of tracks, bridges, and tunnels." },
              { title: "Alignment Verification", desc: "Ensure accurate track alignment and slope analysis." },
              { title: "3D Modeling & Reporting", desc: "Generate digital twins and comprehensive maintenance reports." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-primary-700 mb-3">{item.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Benefits of Drone Railway Surveys</h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Faster inspections, safer operations, precise mapping, and real-time analytics help railway authorities make informed decisions and reduce maintenance costs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "High-Precision Mapping", desc: "Centimeter-level accuracy for track and corridor surveys." },
              { title: "Operational Safety", desc: "Reduce risks for inspection teams in hazardous areas." },
              { title: "Time & Cost Efficiency", desc: "Faster inspections and optimized maintenance planning." },
            ].map((b, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition">
                <h4 className="text-xl font-semibold text-white mb-3">{b.title}</h4>
                <p className="text-white/90 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (fixed) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-8">
          Frequently Asked Questions
        </h3>

        {faqs.map((f, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border rounded-lg mb-3">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between px-4 py-3"
              >
                <span>{f.q}</span>
                <FaChevronDown className={isOpen ? "rotate-180" : ""} />
              </button>

              {isOpen && <p className="px-4 pb-4">{f.a}</p>}
            </div>
          );
        })}
      </section>

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
