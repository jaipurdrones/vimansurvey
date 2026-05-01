// src/pages/applications/IndustrialInspection.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";
import FAQ from "../../shared/components/FAQ";

// images
import heroImg from "../../assets/Industry/industry1.webp";
import industry2 from "../../assets/Industry/industry2.webp";
import industry3 from "../../assets/Industry/industry3.webp";
import industry4 from "../../assets/Industry/industry4.webp";
import industry5 from "../../assets/Industry/industry5.webp";

export default function IndustrialInspection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Industrial Drone Inspection?",
      a: "Industrial Drone Inspection uses UAVs to capture high-resolution imagery, thermal data, and LiDAR scans of industrial assets, enabling proactive maintenance and enhanced safety.",
    },
    {
      q: "How does drone technology improve industrial inspections?",
      a: "Drones reduce human risk, provide accurate and repeatable measurements, and allow inspections in hard-to-reach or hazardous locations without disrupting operations.",
    },
    {
      q: "Which industries can benefit from drone inspections?",
      a: "Manufacturing plants, refineries, power stations, warehouses, and large-scale infrastructure projects all benefit from faster, safer, and more data-driven inspections.",
    },
    {
      q: "Can drones detect early-stage faults or hazards?",
      a: "Yes, with thermal, visual, and LiDAR data, drones detect overheating components, corrosion, structural cracks, and other anomalies long before they become critical issues.",
    },
  ];

  // ✅ Uniform 16:9 image component
  const Img = ({ src, alt }) => (
    <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Industrial Inspection & Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey offers advanced drone-based industrial inspections — capturing visual, thermal, and LiDAR data for predictive maintenance, asset monitoring, and operational safety."
        />
      </Helmet>

      {/* HERO (UNCHANGED) */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={heroImg}
          alt="Industrial Drone Inspection"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Industrial Drone Inspection & Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Harnessing advanced drone technology to ensure safer, smarter, and more efficient industrial operations.
          </p>
        </div>
      </section>

      {/* SECTION 1 (LEFT TEXT - RIGHT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Revolutionizing Industrial Inspections with Drones
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            <strong>Viman Survey</strong> provides comprehensive drone inspection solutions for factories, refineries, power plants, and industrial infrastructure. Our UAVs deliver high-resolution imagery, thermal scans, and LiDAR data to identify early-stage faults, monitor structural integrity, and ensure operational safety.
          </p>
          <p className="text-gray-700 text-lg">
            By combining autonomous flight missions with AI-powered analytics, we empower industrial teams with actionable insights for predictive maintenance and reduced downtime.
          </p>
        </div>

        <Img src={industry2} alt="Industrial Inspection Overview" />
      </section>

      {/* SECTION 2 (RIGHT TEXT - LEFT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <Img src={industry3} alt="Thermal Inspection Drone" />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Thermal & Infrared Imaging
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Detect overheating components, energy losses, and electrical faults with high-resolution thermal scans.
          </p>
          <p className="text-gray-700 text-lg">
            Early detection helps prevent equipment failure, reduce downtime, and optimize operational efficiency.
          </p>
        </div>
      </section>

      {/* SECTION 3 (LEFT TEXT - RIGHT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Structural Condition Monitoring
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Inspect towers, tanks, pipelines, and industrial structures safely and accurately using drones equipped with high-resolution cameras and 3D mapping tools.
          </p>
          <p className="text-gray-700 text-lg">
            Continuous monitoring enables proactive maintenance and ensures compliance with safety regulations.
          </p>
        </div>

        <Img src={industry4} alt="Structural Inspection Drone" />
      </section>

      {/* SECTION 4 (RIGHT TEXT - LEFT IMAGE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <Img src={industry5} alt="Drone Data Reporting" />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Real-Time Reporting & Analytics
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Generate live inspection reports, 3D models, and actionable dashboards to support predictive maintenance strategies.
          </p>
          <p className="text-gray-700 text-lg">
            Access timely insights to make informed operational decisions and prevent costly downtime.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-primary-700 mb-10">
            Core Applications of Industrial Drone Inspections
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Predictive Maintenance", desc: "Proactively detect faults before they escalate." },
              { title: "Safety & Risk Reduction", desc: "Keep personnel out of hazardous zones." },
              { title: "Data-Driven Decisions", desc: "Leverage accurate visual, thermal, and LiDAR insights." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow border">
                <h4 className="text-xl font-semibold text-primary-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          Benefits of Drone-Based Industrial Inspections
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            { title: "Enhanced Safety", desc: "Keep personnel away from hazardous inspections." },
            { title: "High Accuracy", desc: "Visual, thermal, and LiDAR data ensures reliable insights." },
            { title: "Cost & Time Efficiency", desc: "Faster inspections reduce downtime and maintenance costs." },
          ].map((b, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-lg">
              <h4 className="font-semibold mb-2">{b.title}</h4>
              <p className="text-sm text-white/90">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (UNCHANGED COMPONENT) */}
      <FAQ faqs={faqs} />

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-4">
            Partner with India’s Industrial Drone Experts
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            Leverage Viman Survey’s drone inspection solutions to optimize maintenance, reduce risks, and improve operational efficiency.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}