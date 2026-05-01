// src/pages/applications/RiverMappingAndServices.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FAQ from "../../shared/components/FAQ";

import river1 from "../../assets/River/river1.webp";
import river2 from "../../assets/River/river2.webp";
import river3 from "../../assets/River/river3.webp";
import river4 from "../../assets/River/river4.webp";
import river5 from "../../assets/River/river5.webp";

export default function RiverMappingAndServices() {

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

      {/* HERO (UNCHANGED) */}
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

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
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

        <div className="md:w-1/2 flex justify-center">
          <img
            src={river2}
            alt="River Mapping"
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* SECTION 1 - LEFT IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={river3}
            className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
          />
        </div>

        <div className="md:w-1/2">
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
      </section>

      {/* SECTION 2 - RIGHT IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={river4}
            className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
          />
        </div>

        <div className="md:w-1/2">
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
      </section>

      {/* SECTION 3 - LEFT IMAGE */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={river5}
            className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
          />
        </div>

        <div className="md:w-1/2">
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
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-10">
          Core River Mapping & Monitoring Services
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "LiDAR & Photogrammetry Mapping", desc: "High-precision 3D terrain models for flood and erosion analysis." },
            { title: "Floodplain Modelling & Analysis", desc: "Accurate flood risk prediction and planning support." },
            { title: "Sediment Monitoring", desc: "Track riverbed changes and sediment flow patterns." },
            { title: "Vegetation Analysis", desc: "Monitor riparian zones and ecological health." },
            { title: "Infrastructure Inspection", desc: "Bridge and embankment safety monitoring." },
            { title: "Environmental Tracking", desc: "Water quality and ecosystem monitoring." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="text-xl font-semibold text-primary-700 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-primary-700 text-white py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          Why Choose Drone River Mapping?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { title: "Flood Risk Mitigation", desc: "Early detection and prevention planning." },
            { title: "Environmental Intelligence", desc: "Sustainable ecosystem monitoring." },
            { title: "Infrastructure Safety", desc: "Safe inspection without manual risk." },
          ].map((b, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">{b.title}</h4>
              <p className="text-sm text-white/90">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (IMPORT ONLY) */}
      <FAQ faqs={faqs} />

      {/* CTA */}
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