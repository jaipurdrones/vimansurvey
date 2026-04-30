import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaRegChartBar,
  FaWater,
  FaShieldAlt,
  FaChevronDown,
  FaTractor,
} from "react-icons/fa";

import heroImg from "../../assets/Agriculture/Agri.webp";
import agri1 from "../../assets/Agriculture/agriculture1.webp";
import agri2 from "../../assets/Agriculture/agriculture2.webp";
import agri3 from "../../assets/Agriculture/agriculture3.webp";
import agri4 from "../../assets/Agriculture/agriculture5.webp";
import agri5 from "../../assets/Agriculture/agriculture4.webp";

export default function AgricultureSurvey() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What are the benefits of using drones for agriculture?",
      a: `Drones provide rapid, high-resolution aerial data for timely decision making — early stress detection,
          accurate yield estimates, irrigation optimization, and fast damage assessment for insurance claims.
          They reduce manual scouting time, increase coverage, and improve planning accuracy.`,
    },
    {
      q: "How do drones help in crop monitoring?",
      a: `Drones collect multispectral, thermal and RGB imagery to compute indices (e.g., NDVI) that reveal crop
          health, water stress and pest/disease hotspots well before visual symptoms appear. This enables targeted
          interventions and precision farming practices.`,
    },
    {
      q: "What types of drones are suitable for agricultural applications?",
      a: `Multirotor UAVs are ideal for small/medium fields and quick scouting; fixed-wing systems are better for
          large-area mapping. For sensing, choose platforms that support multispectral sensors, PPK/RTK for
          geolocation accuracy and thermal/RGB cameras depending on the use-case.`,
    },
    {
      q: "Can drones be used for precision spraying in agriculture?",
      a: `Yes — specialized spraying drones can deliver targeted agrochemical application on spot areas identified from
          aerial surveys. These systems require proper approvals and trained pilots, and are ideal for hard-to-reach zones.`,
    },
    {
      q: "Are there legal regulations for using drones in agriculture?",
      a: `Yes — drone operations must follow DGCA (India) or local aviation regulations, including permissions,
          pilot certifications, and operational limits. We assist clients with compliance and permissions.`,
    },
    {
      q: "How accurate are the deliverables (maps, DSMs, plant counts)?",
      a: `With RTK/PPK workflows and validated ground control, our deliverables typically achieve centimetre to sub-metre
          accuracy depending on sensor choice and flight parameters. Plant counting accuracy depends on resolution and crop type.`,
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Agriculture Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides advanced drone-based agriculture surveys for crop monitoring, irrigation optimization, yield forecasting, and precision farming insights."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[85vh]">
        <img
          src={heroImg}
          alt="Agriculture Drone Survey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Agriculture Drone Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Empowering precision farming with aerial analytics — crop health monitoring, irrigation planning,
            damage mapping and actionable farm intelligence.
          </p>
        </div>
      </section>

      {/* TRANSFORMING AGRICULTURE */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Transforming Agriculture with Drone Intelligence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Viman Survey</strong> brings advanced UAV platforms and analytics to agriculture — combining
            multispectral, thermal, and RGB sensors with RTK/PPK accuracy and AI-powered insights.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our drone-based agriculture surveys provide real-time crop health monitoring, soil moisture mapping,
            yield estimation, and irrigation planning. We help farmers and agronomists make informed, data-driven
            decisions for higher efficiency and sustainability.
          </p>
        </div>

        <div className="flex justify-center">
          <img src={agri1} className="rounded-2xl shadow-xl w-full max-h-[440px] object-cover" />
        </div>
      </section>

      {/* CROP HEALTH */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-4 flex items-center gap-3">
              <FaLeaf /> Crop Health Inspection
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Multispectral & NDVI analysis to identify stressed zones before visible symptoms appear.</li>
              <li>Aerial data captures crop vitality and damage assessment quickly and accurately.</li>
              <li>Automatic crop detection and zonal health maps for targeted interventions.</li>
              <li>Damage mapping for insurance — high-resolution evidence for claims (images + geotagged reports).</li>
            </ul>
          </div>

          <img src={agri2} className="rounded-2xl shadow-lg w-full max-h-[360px] object-cover" />
        </div>
      </section>

      {/* SMART SCOUTING */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img src={agri3} className="rounded-2xl shadow-lg w-full max-h-[360px] object-cover" />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-primary-700 mb-4 flex items-center gap-3">
              <FaTractor /> Smart Crop Scouting
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Drones provide fast, repeatable scouting across large areas — hours instead of days.</li>
              <li>Real-time snapshots highlight pests, disease, nutrient deficiency and irrigation stress.</li>
              <li>Plant-counting & object-detection algorithms help estimate inventory and predict yield.</li>
              <li>Actionable zone maps that direct ground crews to the exact problem areas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IRRIGATION */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-4 flex items-center gap-3">
              <FaWater /> Irrigation Monitoring & Planning
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use DSMs and terrain models to design efficient irrigation and drainage systems.</li>
              <li>Multispectral maps reveal under-watered or leaky irrigation zones.</li>
              <li>Combine aerial maps with field measurements to optimize water distribution and save resources.</li>
            </ul>
          </div>

          <img src={agri4} className="rounded-2xl shadow-lg w-full max-h-[360px] object-cover" />
        </div>
      </section>

      {/* INSURANCE */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-4 flex items-center gap-3">
              <FaShieldAlt /> Crop Inspection & Insurance Mapping
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>High-resolution imagery for accurate damage reporting due to floods, fire, pests, or weather events.</li>
              <li>Deliverables: orthomosaics, DSM/DEM, geotagged image sets and damage polygons ready for claims.</li>
              <li>Export formats supported: DXF, SHP, JPG, LAS, DEM, RCP, TIFF (as required by insurers).</li>
              <li>Fast turnarounds for time-sensitive insurance assessments and post-event documentation.</li>
            </ul>
          </div>

          <img src={agri5} className="rounded-2xl shadow-lg w-full max-h-[360px] object-cover" />
        </div>
      </section>

      {/* FAQ (no framer motion) */}
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
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-4">
            Drive Precision Farming with Viman Survey
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            From field mapping to yield prediction, our drone surveys deliver actionable intelligence to boost agricultural productivity and sustainability.
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