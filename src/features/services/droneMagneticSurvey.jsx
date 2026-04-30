// src/pages/applications/DroneMagneticSurvey.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";

// ✅ Import images
import dm1 from "../../assets/Dronemag/DM1.webp";
import dm2 from "../../assets/Dronemag/DM2.webp";
import dm3 from "../../assets/Dronemag/DM3.webp";
import dm4 from "../../assets/Dronemag/DM4.webp";

export default function DroneMagneticSurvey() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is a Drone Magnetic Survey?",
      a: "Drone Magnetic Surveys use UAVs equipped with high-precision magnetometers to measure subtle variations in Earth's magnetic field for subsurface mapping and geological exploration.",
    },
    {
      q: "How does it support mineral exploration?",
      a: "Magnetometer data identifies ore deposits, fault zones, and subsurface structures, allowing exploration teams to focus on high-potential areas efficiently.",
    },
    {
      q: "What are the benefits over traditional surveys?",
      a: "Drone surveys are faster, safer, more cost-effective, and can cover difficult terrains without disturbing the environment.",
    },
    {
      q: "Can this be used for infrastructure detection?",
      a: "Yes, magnetic surveys can locate buried pipelines, cables, and other infrastructure for planning and monitoring purposes.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Drone Magnetic Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey delivers advanced drone magnetic survey services using high-precision magnetometer-equipped UAVs for mineral exploration, geological mapping, and subsurface analysis across India."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={dm1}
          alt="Drone Magnetic Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Drone Magnetic Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Unlock subsurface intelligence with high-resolution, magnetometer-driven drone surveys for geological and mineral exploration.
          </p>
        </div>
      </section>

      {/* Overview Section (slider removed, layout same) */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Transforming Geophysical Exploration with UAV Magnetometry
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            <strong>Viman Survey</strong> leverages drone technology and magnetometer sensing to deliver accurate, efficient, and safe magnetic field surveys. Our UAVs detect subtle variations in Earth's magnetic field to map subsurface structures such as ore deposits and fault lines.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Drone magnetic surveys eliminate accessibility barriers, reduce environmental disturbance, and provide faster, high-resolution data for mineral exploration and infrastructure planning.
          </p>
        </div>

        {/* ✅ Single image instead of slider */}
        <div className="w-full flex justify-center">
          <img
            src={dm2}
            alt="Drone Magnetic Survey"
            className="rounded-2xl overflow-hidden shadow-xl w-full max-w-[90vw] sm:max-w-[95%] md:max-w-[90%] lg:max-w-5xl object-cover"
          />
        </div>
      </section>

      {/* Applications Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Application 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Mineral & Geological Mapping
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Detect ore deposits and geological formations with high-resolution UAV magnetometry.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our surveys provide critical data for exploration planning and resource assessment.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={dm3}
              alt="Mineral Mapping Drone"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
        </div>

        {/* Application 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src={dm4}
              alt="Subsurface Fault Detection Drone"
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Subsurface Structure Detection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Map fault zones, buried pipelines, and magnetic anomalies with UAV surveys.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              High-precision data supports exploration, infrastructure planning, and archaeological studies.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Section (UNCHANGED) */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h3 className="text-3xl font-semibold text-center text-primary-700">
            Technology Behind the Survey
          </h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            Drones equipped with fluxgate and optically pumped magnetometers, integrated GPS/IMU, and AI-assisted filtering ensure precise and actionable data.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              { title: "Advanced Sensors", desc: "High-resolution magnetometers detect minute magnetic field changes." },
              { title: "AI Data Processing", desc: "Automated noise reduction and anomaly detection for faster analysis." },
              { title: "3D Subsurface Modeling", desc: "Visualize underground structures in GIS and mapping platforms." },
            ].map((card, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white">
                <h4 className="text-xl font-semibold text-primary-700 mb-2">{card.title}</h4>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advantages Section (UNCHANGED) */}
      <div className="bg-primary-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Why Choose Viman Survey?</h3>
          <p className="text-gray-200 mb-12 max-w-3xl mx-auto">
            Experienced geospatial engineers and DGCA-certified pilots ensure accuracy and operational safety.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "High Spatial Accuracy", text: "Achieve centimeter-level precision with GPS-IMU calibration." },
              { title: "Rapid Turnaround", text: "Quick deployment and automated post-processing for faster results." },
              { title: "Cost Efficiency", text: "Up to 60% cheaper than traditional surveys." },
            ].map((b, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-lg border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">{b.title}</h4>
                <p className="text-white/90 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section (no framer) */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-8">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <FaRegChartBar className="text-primary-600" />
                    <span className="font-medium text-gray-800">{f.q}</span>
                  </div>
                  <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 bg-white text-gray-700">
                    <p className="pt-2">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 text-center">
        <h3 className="text-3xl font-semibold text-primary-700 mb-4">
          Partner with India’s Trusted Drone Survey Experts
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          From mineral exploration to infrastructure mapping — Viman Survey delivers reliable, data-driven results that empower smarter decisions.
        </p>
        <Link
          to="/contact"
          className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition"
        >
          Get a Free Consultation
        </Link>
      </section>
    </main>
  );
}