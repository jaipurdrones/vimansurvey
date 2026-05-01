// src/pages/applications/PowerlineMonitoring.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FAQ from "../../shared/components/FAQ";

import heroImg from "../../assets/Power/power1.webp";
import power2 from "../../assets/Power/power2.webp";
import power3 from "../../assets/Power/power3.webp";
import power4 from "../../assets/Power/power4.webp";
import power5 from "../../assets/Power/power5.webp";

export default function PowerlineMonitoring() {
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

      {/* SECTION 1 (LEFT TEXT - RIGHT IMAGE) */}
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

        <img
          src={power2}
          alt="Powerline Survey"
          className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
        />
      </section>

      {/* SECTION 2 (RIGHT TEXT - LEFT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={power3}
          alt="Transmission Line Inspection"
          className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
        />

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
      </section>

      {/* SECTION 3 (LEFT TEXT - RIGHT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
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

        <img
          src={power4}
          alt="Vegetation and Corridor Mapping"
          className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
        />
      </section>

      {/* SECTION 4 (RIGHT TEXT - LEFT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={power5}
          alt="Tower Structure Inspection"
          className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
        />

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
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-10">
          Core Powerline Inspection Services
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Aerial Route Mapping",
              desc: "High-resolution drone mapping of transmission corridors for planning, maintenance, and asset documentation.",
            },
            {
              title: "Thermal Leak Detection",
              desc: "Identify overheating components, faults, and energy losses using advanced thermal imaging sensors.",
            },
            {
              title: "Right-of-Way Monitoring",
              desc: "Continuous surveillance of powerline corridors to detect encroachments, vegetation, and safety risks.",
            },
            {
              title: "Volumetric & Topographic Analysis",
              desc: "Generate precise terrain models and elevation data for infrastructure planning and risk assessment.",
            },
            {
              title: "Real-Time Corridor Patrol",
              desc: "Live drone monitoring for instant visibility of powerline conditions and emergency response support.",
            },
            {
              title: "Data Reporting & Analytics",
              desc: "Detailed inspection reports with geotagged visuals, analytics, and actionable maintenance insights.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-primary-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          Why Choose Vimansurvey Drone Powerline Inspection?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Early Fault Detection",
              desc: "Identify defects, corrosion, and risks before they lead to outages or equipment failure.",
            },
            {
              title: "Continuous Monitoring",
              desc: "Enable regular drone surveillance for improved reliability and real-time infrastructure tracking.",
            },
            {
              title: "Reduced Operational Cost",
              desc: "Minimize manual inspections, reduce downtime, and optimize maintenance budgets efficiently.",
            },
          ].map((b, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition">
              <h4 className="text-xl font-semibold mb-2">{b.title}</h4>
              <p className="text-white/90 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (IMPORT BASED ONLY) */}
      <FAQ faqs={faqs} />

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