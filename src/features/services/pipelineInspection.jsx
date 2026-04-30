// src/pages/applications/PipelineInspection.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";

import pipelineHero from "../../assets/pipeline1.jpg";
import img2 from "../../assets/pipeline2.jpg";
import img3 from "../../assets/pipeline3.jpg";
import img4 from "../../assets/pipeline4.jpg";
import img5 from "../../assets/pipeline5.jpg";

export default function PipelineInspection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Drone-Based Pipeline Inspection?",
      a: "Drone-based pipeline inspection uses UAVs equipped with high-resolution cameras, thermal, and multispectral sensors to monitor pipeline integrity, detect leaks, and ensure compliance.",
    },
    {
      q: "How does it improve safety and efficiency?",
      a: "Drones reduce the need for personnel in hazardous locations, provide rapid data collection along long pipelines, and enable predictive maintenance to prevent failures.",
    },
    {
      q: "Which types of pipelines are supported?",
      a: "Oil, gas, water, and industrial pipelines can all be monitored with drones, regardless of terrain or accessibility challenges.",
    },
    {
      q: "Can the drones detect early-stage faults?",
      a: "Yes, thermal imaging, visual inspections, and multispectral analysis allow early detection of corrosion, leaks, encroachments, and other anomalies.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Pipeline Inspection & Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides advanced drone-based pipeline inspection and monitoring for oil, gas, and water networks — offering real-time aerial data, leak detection, and route surveillance with unmatched precision."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={pipelineHero}
          alt="Pipeline Drone Inspection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Pipeline Inspection & Drone Survey
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Continuous aerial monitoring for pipelines, utilities, and critical industrial infrastructure.
          </p>
        </div>
      </section>

      {/* Overview + Single Image (NO GRID) */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-primary-700 mb-4">
          Advanced Drone Solutions for Pipeline Integrity
        </h2>
        <p className="text-gray-700 mb-4 text-lg max-w-3xl mx-auto">
          <strong>Viman Survey</strong> provides cutting-edge aerial inspection services for oil, gas, water, and industrial pipelines. Our drones detect leaks, corrosion, encroachments, and route damage with centimeter accuracy.
        </p>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
          By integrating optical, thermal, and multispectral sensors, we deliver actionable insights that help predict maintenance needs and prevent costly downtime.
        </p>

        <div className="flex justify-center">
          <img
            src={img2}
            alt="Pipeline Overview"
            className="rounded-2xl shadow-xl w-full md:w-3/4 object-cover max-h-[420px]"
          />
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Leak & Corrosion Detection
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Detect leaks, corrosion, and other pipeline defects early using high-resolution visual and thermal imaging.
            </p>
            <p className="text-gray-700 text-lg">
              Ensure uninterrupted operations and prevent environmental hazards with predictive insights.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={img3} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 flex justify-center">
            <img src={img4} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Right-of-Way & Encroachment Monitoring
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Monitor pipeline corridors to detect encroachments, vegetation growth, and unauthorized activities.
            </p>
            <p className="text-gray-700 text-lg">
              Maintain compliance, reduce risks, and protect critical infrastructure efficiently.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Real-Time Corridor Patrol
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Conduct automated drone patrols along pipelines with live-streaming and telemetry for immediate insights.
            </p>
            <p className="text-gray-700 text-lg">
              Minimize manual inspections, improve safety, and accelerate decision-making.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={img5} className="rounded-xl shadow-lg w-full md:w-4/5 object-cover max-h-[360px]" />
          </div>
        </div>
      </div>
    
      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center text-primary-700 mb-10">
          Core Pipeline Inspection Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Aerial Route Mapping", desc: "High-resolution imagery and 3D modelling of entire pipeline routes." },
            { title: "Thermal Leak Detection", desc: "Identify leaks, hotspots, and corrosion with infrared imaging." },
            { title: "Right-of-Way Monitoring", desc: "Detect encroachments and vegetation along pipeline corridors." },
            { title: "Volumetric & Topographic Analysis", desc: "3D terrain modelling for design and slope monitoring." },
            { title: "Real-Time Corridor Patrol", desc: "Continuous monitoring with live-streaming capabilities." },
            { title: "Data Reporting & Analytics", desc: "Detailed reports and dashboards for engineers and regulators." },
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
          <h3 className="text-3xl font-semibold mb-6">Why Choose Drone Pipeline Inspection?</h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Real-time aerial data, safety, and cost savings — revolutionizing pipeline monitoring and maintenance.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Early Leak Detection", desc: "Identify potential leaks before failures occur." },
              { title: "Continuous Route Surveillance", desc: "Automated drone patrols for improved visibility." },
              { title: "Reduced Operational Costs", desc: "Fewer field visits and faster data-driven insights." },
            ].map((benefit, i) => (
              <div key={i} className="p-6 border border-white/30 rounded-xl bg-white/10 hover:bg-white/20 transition">
                <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                <p className="text-white/90 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (NO FRAMER) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl text-center text-primary-700 mb-8">
          Frequently Asked Questions
        </h3>
        {faqs.map((f, i) => (
          <div key={i} className="border rounded-lg mb-3">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between p-4"
            >
              <span>{f.q}</span>
              <FaChevronDown className={openIndex === i ? "rotate-180" : ""} />
            </button>
            {openIndex === i && <p className="p-4 text-gray-700">{f.a}</p>}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center">
        <h3 className="text-3xl font-semibold text-primary-700 mb-4">
          Safeguard Your Pipeline Infrastructure with Drone Data
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Partner with <strong>Viman Survey</strong> for end-to-end pipeline inspection solutions — from aerial mapping to predictive analytics.
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
