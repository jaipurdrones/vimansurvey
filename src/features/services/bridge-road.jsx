// src/pages/applications/BridgeRoadInspection.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import heroImg from "../../assets/bridge5.png";
import bridge1 from "../../assets/bridge1.png";
import bridge2 from "../../assets/bridge2.png";
import bridge3 from "../../assets/bridge3.png";
import bridge4 from "../../assets/bridge4.png";

export default function BridgeRoadInspection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do drones assist in bridge inspections?",
      a: "Drones capture ultra-high-resolution images of bridge decks, piers, and joints — identifying cracks, corrosion, or fatigue without scaffolding or closures.",
    },
    {
      q: "Can drones survey large road networks?",
      a: "Yes. Drones can efficiently map long road corridors with centimeter-level accuracy, producing topographic data, orthomosaics, and 3D terrain models.",
    },
    {
      q: "Are drone bridge inspections safe and compliant?",
      a: "All operations follow DGCA regulations and are performed by certified pilots — ensuring safe and compliant data acquisition in public or high-traffic areas.",
    },
    {
      q: "What kind of data is captured during road inspections?",
      a: "We collect RGB, LiDAR, and thermal imagery for detecting surface cracks, deformations, and drainage issues with precision.",
    },
    {
      q: "Do drone inspections reduce maintenance costs?",
      a: "Absolutely. Drone-based insights minimize manual labor, reduce downtime, and prevent costly structural damage through early fault detection.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Bridge & Road Drone Inspection — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey offers advanced drone-based bridge and road inspections — enhancing safety, accuracy, and efficiency in infrastructure monitoring."
        />
      </Helmet>

      {/* ✅ HERO SECTION (like Powerline) */}
      <section
        className="relative flex items-center justify-center text-center text-white overflow-hidden
                   min-h-[55svh] sm:min-h-[65svh] md:min-h-[85svh] lg:min-h-[92svh] xl:min-h-[95svh]"
      >
        <img
          src={heroImg}
          alt="Bridge and Road Drone Inspection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Bridge & Road Drone Inspection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Smarter, safer, and faster infrastructure inspection powered by
            drone technology and precision aerial mapping.
          </p>
        </div>
      </section>

      {/* ✅ TRANSFORMING INFRASTRUCTURE (with slider) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Revolutionizing Bridge & Road Inspection with Drone Technology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Viman Survey</strong> utilizes drone technology to perform
            efficient bridge and road inspections that reduce risks, save time,
            and improve accuracy. Our drones capture high-resolution visuals,
            LiDAR data, and 3D models that reveal structural health and surface
            conditions with pinpoint accuracy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We help civil engineers, road authorities, and infrastructure teams
            make faster, data-backed decisions while maintaining public safety
            and minimizing operational disruptions.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img src={bridge1} className="rounded-2xl shadow-xl w-full max-w-5xl" />
        </div>
      </section>

      {/* ✅ DETAILED SECTIONS (like Powerline) */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Bridge Structure Assessment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Drones enable comprehensive visual inspection of bridge decks,
              girders, and piers — even in hard-to-reach areas. We capture
              high-resolution imagery and generate 3D digital twins to analyze
              structural integrity and detect anomalies.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              These inspections reduce manual access requirements, minimize
              traffic disruption, and improve reporting accuracy for
              maintenance teams.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={bridge2} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 flex justify-center">
            <img src={bridge3} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Road Surface & Corridor Mapping
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Capture centimeter-accurate orthomosaics, topographic data, and
              3D surface models to assess road conditions and plan upgrades.
              Identify cracks, potholes, and erosion points for proactive
              maintenance.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Drone-based mapping also aids in road expansion projects and
              traffic management planning with precision and speed.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Structural Health & Safety Analysis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              We combine aerial imagery, LiDAR, and thermal data to identify
              stress zones, water leaks, and heat patterns in concrete
              structures. This ensures timely maintenance and prolonged
              structural lifespan.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our advanced data analytics deliver detailed inspection reports
              that empower engineers with actionable insights and precision.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={bridge4} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
        </div>
      </div>

      {/* Key Use-Cases Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-primary-700 mb-10">
            Key Applications of Drone Bridge & Road Inspections
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Bridge Deck & Structural Scanning",
                desc: "Capture detailed imagery and 3D models of bridge decks, joints, and abutments to assess structural health and integrity.",
              },
              {
                title: "Roadway Surface Monitoring",
                desc: "Perform large-scale road surface analysis to detect cracks, deformations, and encroachments efficiently.",
              },
              {
                title: "Corridor & Terrain Mapping",
                desc: "Generate accurate DSM, DTM, and orthomosaic data for road expansions, route planning, and infrastructure design.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-primary-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ BENEFITS SECTION */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">
            Benefits of Drone-Based Infrastructure Inspection
          </h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Drone inspections transform the way bridges and roads are monitored
            — enhancing safety, efficiency, and accuracy for better decision-making.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Safety",
                desc: "Inspect hard-to-reach areas without endangering personnel or disrupting traffic.",
              },
              {
                title: "Data-Driven Precision",
                desc: "Obtain geotagged visuals, 3D models, and condition maps for accurate engineering analysis.",
              },
              {
                title: "Cost & Time Efficiency",
                desc: "Complete inspections in hours instead of days — cutting operational costs significantly.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {b.title}
                </h4>
                <p className="text-white/90 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-8">
          Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <FaRegChartBar className="text-primary-600" />
                    <span className="font-medium text-gray-800">{f.q}</span>
                  </div>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32 }}
                      className="px-4 pb-4 bg-white text-gray-700"
                    >
                      <p className="pt-2 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-4">
            Partner with Viman Survey for Reliable Infrastructure Monitoring
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            Experience next-generation drone inspections that enhance safety,
            accuracy, and efficiency across all infrastructure projects.
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
