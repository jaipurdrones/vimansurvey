// src/pages/applications/SmartCitySurvey.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";

import heroImg from "../../assets/Smart/smart1.webp";
import img2 from "../../assets/Smart/smart2.webp";
import img3 from "../../assets/Smart/smart3.webp";
import img4 from "../../assets/Smart/smart4.webp";
import img5 from "../../assets/Smart/smart5.webp";

export default function SmartCitySurvey() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is a Smart City Drone Survey?",
      a: "Smart City Drone Surveys leverage UAVs to capture high-resolution aerial imagery, LiDAR data, and 3D models to support urban planning, traffic analysis, and sustainable development initiatives.",
    },
    {
      q: "How does drone technology benefit urban planning?",
      a: "Drones provide fast, accurate, and up-to-date mapping data, enabling planners to optimize infrastructure, improve traffic flow, and make data-driven decisions for sustainable city development.",
    },
    {
      q: "Can drones monitor environmental factors?",
      a: "Yes, drones can monitor vegetation, green cover, air quality zones, and other environmental indicators to support eco-conscious urban management.",
    },
    {
      q: "How is the data integrated for city management?",
      a: "Collected data can be integrated into GIS platforms and smart city dashboards, creating actionable insights for planners, government authorities, and developers.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Smart City Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides advanced drone survey solutions for smart city projects, including LiDAR mapping, 3D modeling, GIS integration, and data-driven urban planning insights."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={heroImg}
          alt="Smart City Drone Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Smart City Drone Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Delivering precise aerial data for sustainable, data-driven urban planning, traffic optimization, and infrastructure management.
          </p>
        </div>
      </section>

      {/* Overview + Single Image */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Transforming Urban Planning with Drone Intelligence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            <strong>Viman Survey</strong> provides high-resolution drone mapping, LiDAR scanning, and 3D modeling for smart city projects.
            Our solutions support traffic management, infrastructure optimization, and sustainable urban development.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            By integrating aerial intelligence into GIS platforms, planners and developers can make informed, data-driven decisions that enhance city livability, efficiency, and sustainability.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={img2}
            alt="Smart City Overview"
            className="rounded-2xl shadow-xl w-full md:w-4/5 object-cover max-h-[420px]"
          />
        </div>
      </section>

      {/* Single Image Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              3D City Modeling & Digital Twins
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Generate detailed 3D city models and digital twins for urban planning, infrastructure management, and simulation of development scenarios.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              These models allow planners to visualize urban growth, optimize asset utilization, and plan future development efficiently.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={img3}
              alt="3D City Modeling"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src={img4}
              alt="Traffic Analysis Drone"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Traffic & Mobility Analysis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Monitor traffic patterns and urban mobility in real-time to optimize flow, reduce congestion, and improve city transportation efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Data-driven insights support better planning for roads, public transport, and pedestrian pathways.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Environmental Assessment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Drone surveys track green cover, vegetation, and other environmental indicators to help cities plan sustainably.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ensure compliance with environmental regulations and integrate eco-friendly solutions in urban development.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={img5}
              alt="Environmental Assessment Drone"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
        </div>
      </div>
   
      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-10">
          Smart City Drone Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Aerial Mapping & LiDAR", desc: "Accurate city-wide mapping and point clouds for planning and monitoring." },
            { title: "3D Modeling & Digital Twins", desc: "Detailed city models to optimize assets, simulate development, and manage infrastructure." },
            { title: "Infrastructure Monitoring", desc: "Track bridges, roads, and public utilities with periodic inspections." },
            { title: "Traffic & Mobility Analysis", desc: "Real-time aerial data to improve traffic flow and urban mobility." },
            { title: "Environmental Assessment", desc: "Monitor green cover, vegetation, and environmental zones for sustainable planning." },
            { title: "GIS Integration & Dashboards", desc: "Integrate drone data into city management systems for actionable insights." },
          ].map((service, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-primary-700 mb-3">{service.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Why Choose Viman Survey?</h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Fast, accurate, and actionable aerial data to support sustainable urban planning, infrastructure optimization, and smart city initiatives.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Faster Execution", desc: "Drone surveys reduce on-ground work, accelerating project timelines." },
              { title: "High Accuracy", desc: "LiDAR and photogrammetry ensure precise mapping for critical infrastructure." },
              { title: "Sustainable Planning", desc: "Use environmental and spatial data to support eco-friendly city development." },
            ].map((b, i) => (
              <div key={i} className="p-6 border border-white/30 rounded-xl shadow-sm bg-white/10 hover:bg-white/20 transition">
                <h4 className="text-xl font-semibold text-white mb-3">{b.title}</h4>
                <p className="text-white/90 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (no framer now) */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <FaRegChartBar className="text-primary-600" />
                    <span className="font-medium text-gray-800">{f.q}</span>
                  </div>
                  <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 bg-white text-gray-700">
                    <p className="pt-2 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-4">
            Partner with India’s Smart City Drone Experts
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            From high-resolution mapping to 3D modeling and GIS dashboards, <strong>Viman Survey</strong> empowers cities to plan efficiently, build sustainably, and make data-driven decisions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
