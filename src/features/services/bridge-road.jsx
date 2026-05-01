// src/pages/applications/BridgeRoadInspection.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";
import FAQ from "../../shared/components/FAQ";


import heroImg from "../../assets/Bridge/bridge5.webp";
import bridge1 from "../../assets/Bridge/bridge1.webp";
import bridge2 from "../../assets/Bridge/bridge2.webp";
import bridge3 from "../../assets/Bridge/bridge3.webp";
import bridge4 from "../../assets/Bridge/bridge4.webp";

/* ✅ Reusable Section Component */
function SectionBlock({ title, text1, text2, img, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE */}
      <div className={`flex justify-center ${reverse ? "md:order-2" : "md:order-1"}`}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="rounded-xl shadow-lg w-full max-w-[520px] aspect-[4/3] object-cover"
        />
      </div>

      {/* TEXT */}
      <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
        <h2 className="text-3xl font-semibold text-primary-700 mb-4">
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
          {text1}
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          {text2}
        </p>
      </div>

    </div>
  );
}

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

      {/* ✅ HERO */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[55svh] sm:min-h-[65svh] md:min-h-[85svh] lg:min-h-[92svh] xl:min-h-[95svh]">
        <img
          src={heroImg}
          alt="Bridge and Road Drone Inspection"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Bridge & Road Drone Inspection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Smarter, safer, and faster infrastructure inspection powered by
            drone technology and precision aerial mapping.
          </p>
        </div>
      </section>

      {/* ✅ INTRO */}
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

        <div className="flex justify-center">
          <img
            src={bridge1}
            alt="Bridge inspection"
            loading="lazy"
            className="rounded-xl shadow-lg w-full max-w-[520px] aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* ✅ DETAILED SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <SectionBlock
          title="Bridge Structure Assessment"
          text1="Drones enable comprehensive visual inspection of bridge decks, girders, and piers — even in hard-to-reach areas. We capture high-resolution imagery and generate 3D digital twins to analyze structural integrity and detect anomalies."
          text2="These inspections reduce manual access requirements, minimize traffic disruption, and improve reporting accuracy for maintenance teams."
          img={bridge2}
        />

        <SectionBlock
          reverse
          title="Road Surface & Corridor Mapping"
          text1="Capture centimeter-accurate orthomosaics, topographic data, and 3D surface models to assess road conditions and plan upgrades. Identify cracks, potholes, and erosion points for proactive maintenance."
          text2="Drone-based mapping also aids in road expansion projects and traffic management planning with precision and speed."
          img={bridge3}
        />

        <SectionBlock
          title="Structural Health & Safety Analysis"
          text1="We combine aerial imagery, LiDAR, and thermal data to identify stress zones, water leaks, and heat patterns in concrete structures. This ensures timely maintenance and prolonged structural lifespan."
          text2="Our advanced data analytics deliver detailed inspection reports that empower engineers with actionable insights and precision."
          img={bridge4}
        />
      </div>

      {/* ✅ USE CASES */}
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
                className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-primary-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ BENEFITS */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">
            Benefits of Drone-Based Infrastructure Inspection
          </h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Drone inspections transform the way bridges and roads are monitored
            — enhancing safety, efficiency, and accuracy for better
            decision-making.
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
                className="p-6 bg-white/10 rounded-lg border hover:bg-white/20 transition"
              >
                <h4 className="text-xl font-semibold mb-3">{b.title}</h4>
                <p className="text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      {/* ✅ CTA */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Partner with Viman Survey for Reliable Infrastructure Monitoring
        </h3>
        <p className="mb-6">
          Experience next-generation drone inspections that enhance safety,
          accuracy, and efficiency across all infrastructure projects.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary-700 px-8 py-3 rounded-full"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}