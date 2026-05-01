// src/pages/applications/DisasterManagement.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";
import FAQ from "../../shared/components/FAQ";


import heroImg from "../../assets/Disaster/disaster1.webp";
import disaster2 from "../../assets/Disaster/disaster2.webp";
import disaster3 from "../../assets/Disaster/disaster3.webp";
import disaster4 from "../../assets/Disaster/disaster4.webp";
import disaster5 from "../../assets/Disaster/disaster5.webp";

/* ✅ Reusable Section Component */
function SectionBlock({ title, text1, text2, img, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE */}
      <div className={`w-full ${reverse ? "md:order-2" : ""}`}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-[260px] md:h-[340px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* TEXT */}
      <div className={`${reverse ? "md:order-1" : ""}`}>
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

export default function DisasterManagement() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Drone Disaster Management?",
      a: "Drone Disaster Management uses UAVs to assess, respond to, and mitigate the effects of disasters — providing real-time data for faster, safer operations.",
    },
    {
      q: "How can drones assist in disaster management?",
      a: "They provide aerial surveillance, deliver supplies, locate survivors, and capture real-time imagery for informed decisions.",
    },
    {
      q: "What are the key benefits of using drones?",
      a: "Access to unreachable zones, reduced risk for human teams, faster response times, and improved situational awareness.",
    },
    {
      q: "Are there regulations for drone use in disaster zones?",
      a: "Yes, operations must comply with DGCA and local aviation regulations to ensure safety and responsible data use.",
    },
  ];

  const sections = [
    {
      title: "Rapid Assessment of Affected Areas",
      text1:
        "Drones quickly evaluate disaster-struck zones, providing high-resolution imagery and identifying critical damage to infrastructure and terrain.",
      text2:
        "This accelerates response times and prioritizes rescue operations efficiently.",
      img: disaster3,
    },
    {
      title: "Rescue Coordination & Situational Awareness",
      text1:
        "Our drones assist in planning safe rescue routes, monitoring rescue teams, and providing real-time situational updates.",
      text2:
        "This reduces risks for first responders and ensures faster, safer evacuation operations.",
      img: disaster4,
    },
    {
      title: "Post-Disaster Recovery & Mapping",
      text1:
        "Generate 3D terrain models and maps for reconstruction planning and damage analysis.",
      text2:
        "Data-driven recovery ensures efficient allocation of resources and better long-term disaster preparedness.",
      img: disaster5,
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Disaster Management — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides advanced drone solutions for disaster management — enabling rapid assessment, rescue coordination, and recovery operations across India."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={heroImg}
          alt="Disaster Management Drone Survey"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Disaster Management Drone Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Leveraging drone technology for rapid assessment, rescue coordination, and recovery operations.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionBlock
          reverse
          title="Revolutionizing Disaster Response with Drone Technology"
          text1="Viman Survey uses advanced drones to assess disaster zones quickly, capture real-time imagery, and generate 3D terrain models. Our UAV solutions enable faster decision-making and safer operations."
          text2="From flood zones to earthquake-affected areas, our drones provide precise data to enhance situational awareness and optimize rescue and recovery efforts."
          img={disaster2}
        />
      </section>

      {/* MAIN SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {sections.map((section, i) => (
          <SectionBlock
            key={i}
            {...section}
            reverse={i % 2 === 1} 
          />
        ))}
      </div>

      {/* APPLICATIONS */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-primary-700 mb-10">
            Key Applications of Drone Disaster Management
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Damage Assessment", desc: "Rapid evaluation of affected infrastructure and terrain." },
              { title: "Search & Rescue", desc: "Locate survivors and coordinate rescue teams effectively." },
              { title: "Mapping & 3D Modeling", desc: "Generate accurate terrain models for reconstruction and planning." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-primary-700 mb-3">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <section className="bg-primary-700 text-white py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">
            Benefits of Drone-Based Disaster Management
          </h3>

          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Drones provide real-time data, reduce risk for responders, and enable faster, safer disaster response and recovery operations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rapid Assessment", desc: "Quick evaluation of affected zones and infrastructure damage." },
              { title: "Safe & Efficient", desc: "Minimize risks for first responders and optimize operations." },
              { title: "Data-Driven Decisions", desc: "Accurate insights for faster and smarter recovery planning." },
            ].map((b, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-lg border hover:bg-white/20 transition">
                <h4 className="text-xl font-semibold mb-3">{b.title}</h4>
                <p className="text-white/90 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      {/* CTA */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-4">
            Partner with India’s Leading Disaster Management Experts
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            Viman Survey’s drone-based disaster management solutions empower authorities to act faster, safer, and more efficiently during crises.
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