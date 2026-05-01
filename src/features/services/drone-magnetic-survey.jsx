// src/pages/applications/DroneMagneticSurvey.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";
import FAQ from "../../shared/components/FAQ";


// Images
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

  /* ✅ Reusable section with automatic alternating layout */
  const Section = ({ title, text1, text2, img, index }) => {
    const reverse = index % 2 === 1;

    return (
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className={`${reverse ? "md:order-2" : "md:order-1"} flex justify-center`}>
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full max-w-[520px] aspect-[4/3] object-cover rounded-xl shadow-lg"
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
  };

  return (
    <main className="bg-white text-gray-800">

      <Helmet>
        <title>Drone Magnetic Survey — Viman Survey</title>
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src={dm1}
          alt="Drone Magnetic Survey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Drone Magnetic Survey
          </h1>
          <p className="text-gray-200">
            Unlock subsurface intelligence with high-resolution drone surveys.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Section
          index={0}
          title="Transforming Geophysical Exploration with UAV Magnetometry"
          text1="Viman Survey leverages drone technology and magnetometer sensing to deliver accurate, efficient, and safe magnetic field surveys. Our UAVs detect subtle variations in Earth's magnetic field."
          text2="Drone magnetic surveys eliminate accessibility barriers and provide faster, high-resolution data for exploration and planning."
          img={dm2}
        />
      </section>

      {/* APPLICATION 1 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <Section
          index={1}
          title="Mineral & Geological Mapping"
          text1="Detect ore deposits and geological formations with high-resolution UAV magnetometry."
          text2="Our surveys provide critical data for exploration planning and resource assessment."
          img={dm3}
        />
      </section>

      {/* APPLICATION 2 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <Section
          index={2}
          title="Subsurface Structure Detection"
          text1="Map fault zones, buried pipelines, and magnetic anomalies with UAV surveys."
          text2="High-precision data supports exploration, infrastructure planning, and archaeological studies."
          img={dm4}
        />
      </section>

{/* TECHNOLOGY */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-primary-700 mb-6">
            Technology Behind the Survey
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            Drones equipped with fluxgate and optically pumped magnetometers, integrated GPS/IMU, and AI-assisted filtering ensure precise and actionable data.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Advanced Sensors", desc: "High-resolution magnetometers detect minute magnetic field changes." },
              { title: "AI Data Processing", desc: "Automated noise reduction and anomaly detection for faster analysis." },
              { title: "3D Subsurface Modeling", desc: "Visualize underground structures in GIS and mapping platforms." },
            ].map((c, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                <h4 className="text-lg font-semibold text-primary-700 mb-2">
                  {c.title}
                </h4>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Why Choose Viman Survey?
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "High Spatial Accuracy", text: "Achieve centimeter-level precision with GPS-IMU calibration." },
              { title: "Rapid Turnaround", text: "Quick deployment and automated post-processing for faster results." },
              { title: "Cost Efficiency", text: "Up to 60% cheaper than traditional surveys." },
            ].map((b, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">{b.title}</h4>
                <p className="text-sm text-white/90">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (UPDATED CLEAN COMPONENT USE) */}
      <FAQ faqs={faqs} />

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center">
        <h3 className="text-3xl font-semibold text-primary-700 mb-4">
          Partner with India’s Trusted Drone Survey Experts
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          From mineral exploration to infrastructure mapping — Viman Survey delivers reliable, data-driven results that empower smarter decisions.
        </p>

        <Link
          to="/contact"
          className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600"
        >
          Get a Free Consultation
        </Link>
      </section>


    </main>
  );
}
