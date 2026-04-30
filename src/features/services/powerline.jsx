// src/pages/applications/PowerlineMonitoring.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaSatelliteDish,
  FaTools,
  FaRegChartBar,
  FaChevronDown,
} from "react-icons/fa";

import heroImg from "../../assets/power1.png";
import power2 from "../../assets/power2.jpg";
import power3 from "../../assets/power3.jpg";
import power4 from "../../assets/power4.jpg";
import power1 from "../../assets/power5.jpg";


export default function PowerlineMonitoring() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do drones improve powerline inspections?",
      a: "Drones provide high-resolution imagery and thermal data to detect faults, corrosion, or vegetation encroachment quickly — reducing manual risks and downtime.",
    },
    {
      q: "Can drones inspect live powerlines safely?",
      a: "Yes. Drones operate at safe distances, capturing accurate data without the need for line shutdowns, ensuring zero downtime.",
    },
    {
      q: "What kind of data do powerline drones capture?",
      a: "RGB, thermal, LiDAR, and 3D photogrammetry data — enabling detection of structural defects, vegetation threats, and component degradation.",
    },
    {
      q: "Are drone inspections cost-effective for utilities?",
      a: "Absolutely. They drastically cut inspection time, reduce manpower, and minimize expensive maintenance downtime.",
    },
    {
      q: "Are drone powerline operations regulated?",
      a: "Yes. All flights comply with DGCA (India) and local airspace safety regulations. Our certified pilots ensure safe and legal operations.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Powerline Monitoring & Inspection — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides drone-based inspection for transmission and distribution lines — ensuring fault detection, safety, and operational efficiency."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden
                   min-h-[55svh] sm:min-h-[65svh] md:min-h-[85svh] lg:min-h-[92svh] xl:min-h-[95svh]">
        <img
          src={heroImg}
          alt="Powerline Drone Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Powerline Monitoring & Inspection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Reliable, safe, and cost-efficient drone inspections for transmission
            and distribution infrastructure.
          </p>
        </div>
      </section>

      {/* TRANSFORMING SECTION (slider removed) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Revolutionizing Powerline Monitoring with Drone Technology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Viman Survey</strong> leverages drone-based imaging and
            analytics to inspect power infrastructure more safely and efficiently.
            Our drones capture ultra-clear visuals and thermal imagery to identify
            faults, corrosion, vegetation risks, and damaged components before they
            cause outages.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These insights enable preventive maintenance, eliminate manual climbing,
            and help utilities make faster, data-driven decisions while keeping the
            grid safe and efficient.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={power2}
            alt="Powerline Survey"
            className="rounded-2xl shadow-xl w-full max-h-[420px] object-cover"
          />
        </div>
      </section>

      {/* Detailed Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Transmission Line Inspection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Inspect high-voltage transmission lines using drones equipped with RGB, zoom, and thermal sensors.
              Identify corrosion, cracks, damaged insulators, or hotspots safely — without line shutdowns.
              Our drone inspections minimize risk to human crews while delivering detailed visuals and actionable analytics.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Using AI-assisted analytics, we deliver high-accuracy defect detection reports and geotagged images
              that help maintenance teams prioritize and schedule repairs efficiently.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={power3}
              alt="Transmission Line Inspection"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src={power4}
              alt="Vegetation and Corridor Mapping"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Vegetation & Corridor Mapping
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Maintain transmission corridor safety with aerial mapping and AI-based vegetation analysis.
              Detect overgrown trees and encroachments threatening the right-of-way.
              With drone-based LiDAR and photogrammetry, we help utilities plan trimming operations efficiently
              and comply with safety clearances.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Regular aerial surveys prevent outages and ensure uninterrupted power supply while
              keeping the environment and infrastructure secure.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Tower Structure Inspection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Drones equipped with high-resolution cameras and LiDAR technology capture detailed visuals of
              tower structures, cross-arms, and insulators — even in hard-to-reach areas.
              Our reports help engineers identify rust, deformation, and foundation issues before they become critical.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With real-time data streaming and automated flight paths, inspections become safer, faster,
              and more accurate — drastically reducing downtime and maintenance costs.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={power1}
              alt="Tower Structure Inspection"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
        </div>

      </div>

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
                  <FaChevronDown
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
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
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-4">
            Partner with Viman Survey for Safer Powerline Monitoring
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            Experience next-generation drone inspection technology that helps
            utilities maintain reliability, safety, and efficiency — without
            downtime or risk.
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