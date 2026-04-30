// src/pages/applications/RiverMappingAndServices.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";

import river1 from "../../assets/River/river1.webp";
import river2 from "../../assets/River/river2.webp";
import river3 from "../../assets/River/river3.webp";
import river4 from "../../assets/River/river4.webp";
import river5 from "../../assets/River/river5.webp";

export default function RiverMappingAndServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Drone-Based River Mapping?",
      a: "Drone-based river mapping uses UAVs with LiDAR, photogrammetry, and multispectral sensors to generate high-resolution maps, 3D models, and flood risk analysis for rivers and floodplains.",
    },
    {
      q: "How does it support environmental monitoring?",
      a: "Drones provide frequent, accurate aerial data that can track vegetation health, sedimentation, erosion, and water quality over time without disturbing ecosystems.",
    },
    {
      q: "Can this data help flood planning?",
      a: "Yes, by creating precise floodplain models and hydrological maps, urban planners and agencies can mitigate risks and design better drainage systems.",
    },
    {
      q: "Which infrastructures are monitored?",
      a: "Drones can inspect bridges, embankments, dams, and river crossings to identify damage, blockages, or erosion efficiently and safely.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>River Mapping & Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides advanced drone-based river mapping and monitoring using LiDAR, photogrammetry, and 3D modelling — enabling flood risk assessment, waterway planning, and environmental management."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={river1}
          alt="River Mapping Drone Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            River Mapping & Drone Survey Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Comprehensive drone mapping for rivers, floodplains, and environmental monitoring — empowering smarter waterway management.
          </p>
        </div>
      </section>

      {/* Overview Section (same layout, slider replaced with single image) */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Comprehensive Aerial Intelligence for Water Systems
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            <strong>Viman Survey</strong> delivers precision river mapping using LiDAR, photogrammetry, and 3D terrain modelling. Our drone data supports flood risk assessment, riverbank monitoring, and environmental planning.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            End-to-end drone survey services provide fast, repeatable, and high-resolution results — ideal for sustainable waterway management.
          </p>
        </div>

        {/* SAME container as swiper */}
        <div className="w-full flex justify-center">
          <div className="relative w-full h-[310px] xs:h-[340px] sm:h-[380px] md:h-[440px] lg:h-[440px] xl:h-[480px] rounded-2xl overflow-hidden shadow-xl max-w-[90vw] sm:max-w-[95%] md:max-w-[90%] lg:max-w-5xl">
            <img
              src={river2}
              alt="River Mapping"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Sections (UNCHANGED layout, only images replaced) */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Floodplain & Risk Analysis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Create accurate floodplain maps to assist in disaster mitigation and urban drainage planning.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Monitor flood-prone areas with precision to reduce risks and improve preparedness.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={river3}
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src={river4}
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Sediment & Erosion Monitoring
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Track sediment buildup, bank erosion, and river morphology changes over time.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Support sustainable river management with regular monitoring data.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Infrastructure Inspection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Monitor bridges, embankments, dams, and hydraulic structures for damage or deformation.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Reduce manual inspections, improve safety, and speed up decision-making.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={river5}
              className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]"
            />
          </div>
        </div>

      </div>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-10">
          Core River Mapping & Monitoring Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "LiDAR & Photogrammetry Mapping", desc: "Generate precise 3D terrain and surface models for flood zones, sedimentation, and hydrological analysis." },
            { title: "Floodplain Modelling & Analysis", desc: "Create accurate floodplain maps for disaster mitigation and urban drainage planning." },
            { title: "Sediment & Erosion Monitoring", desc: "Track sediment buildup, bank erosion, and river morphology changes over time." },
            { title: "Riparian & Vegetation Analysis", desc: "Assess vegetation health and encroachment patterns using multispectral imaging." },
            { title: "Infrastructure Inspection", desc: "Monitor bridges, embankments, and hydraulic structures for damage or blockages." },
            { title: "Water Quality & Environmental Tracking", desc: "Integrate drone imagery with sensor data for ecosystem monitoring." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-primary-700 mb-3">{item.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Why Choose Drone River Mapping?</h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Aerial data provides an unparalleled advantage for hydrological planning, safety, and sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Flood Risk Mitigation", desc: "Identify vulnerable areas with precision mapping for proactive flood control planning." },
              { title: "Environmental Intelligence", desc: "Monitor ecological zones, vegetation cover, and waterway dynamics for conservation." },
              { title: "Infrastructure Safety", desc: "Assess bridges, culverts, and embankments efficiently without manual intervention." },
            ].map((benefit, i) => (
              <div key={i} className="p-6 border border-white/30 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                <p className="text-white/90 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (no framer) */}
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
                  <FaChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
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

      {/* CTA unchanged */}
      <section className="bg-gray-50 py-20 text-center">
        <h3 className="text-3xl font-semibold text-primary-700 mb-4">
          Partner with India’s Trusted River Mapping Experts
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Work with <strong>Viman Survey</strong> for precise, data-driven river mapping and hydrological analysis.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/contact" className="bg-primary-500 text-white px-8 py-3 rounded-full">
            Get in Touch
          </Link>
          <Link to="/about" className="border px-8 py-3 rounded-full">
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
