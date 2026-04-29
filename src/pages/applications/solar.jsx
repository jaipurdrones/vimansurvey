import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaSolarPanel,
  FaRegChartBar,
  FaChevronDown,
  FaTools,
} from "react-icons/fa";
import solarHero from "../../assets/solar1.png";
import solar2 from "../../assets/solar2.jpg";
import solar3 from "../../assets/solar3.jpg";
import solar4 from "../../assets/solar4.jpg";

export default function SolarSurvey() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What type of data can drones collect for solar surveys?",
      a: "Drones can capture high-resolution RGB and thermal imagery to identify panel defects, hotspots, shading issues, and structural problems. The data also includes 3D models, orthomosaics, and digital elevation models for site analysis.",
    },
    {
      q: "How do drone surveys benefit solar projects?",
      a: "They enable faster, safer, and more precise inspection of large solar farms — improving efficiency, reducing downtime, and preventing energy loss by detecting problems early.",
    },
    {
      q: "Are drone surveys cost-effective for solar installations?",
      a: "Yes. Drone inspections significantly reduce manual labor, inspection time, and operational downtime, leading to long-term cost savings while improving asset performance.",
    },
    {
      q: "Can drones help with solar panel maintenance?",
      a: "Absolutely. Drones equipped with thermal cameras detect underperforming or damaged panels so that maintenance teams can prioritize repairs efficiently and minimize productivity loss.",
    },
    {
      q: "Are there regulatory considerations for using drones in solar surveys?",
      a: "Yes — operations must comply with DGCA (India) or equivalent aviation regulations. Our DGCA-certified pilots ensure complete legal and safety compliance.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Solar Industry Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides drone-based solar inspections, construction monitoring, and thermal analysis for solar farms to boost performance and minimize downtime."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden
                   min-h-[55svh] sm:min-h-[65svh] md:min-h-[85svh] lg:min-h-[92svh] xl:min-h-[95svh]">
        <img
          src={solarHero}
          alt="Solar Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Solar Industry Drone Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Revolutionizing solar site inspections with drone-based thermal and visual imagery — ensuring efficiency, reliability, and safety across every panel.
          </p>
        </div>
      </section>

      {/* TRANSFORMING SECTION (slider removed) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Transforming Solar Energy Through Drone Technology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Viman Survey</strong> delivers high-precision aerial inspections for solar farms — combining thermal, visual, and topographic data to optimize performance and maintenance workflows.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our drone solutions empower solar companies with actionable insights that reduce energy losses, identify faulty modules, and streamline project construction and monitoring.
          </p>
        </div>

        {/* Static Image */}
        <div className="flex justify-center">
          <img
            src={solar2}
            alt="Solar Survey"
            className="rounded-2xl shadow-xl w-full max-h-[420px] object-cover"
          />
        </div>
      </section>

      {/* SOLAR PANEL INSPECTION */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-4 flex items-center gap-3">
              <FaSolarPanel className="text-primary-700" /> Solar Panel Inspection
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Inspect panels for mechanical or electrical faults using thermal and visual imagery.</li>
              <li>Identify hotspots, cracks, and underperforming modules for early intervention.</li>
              <li>Minimize downtime and maintain peak operational efficiency.</li>
              <li>Share real-time inspection data with your team for faster decision-making.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={solar3}
              alt="Solar Panel Inspection"
              className="rounded-2xl shadow-lg object-cover max-h-[360px] w-full"
            />
          </div>
        </div>
      </section>

      {/* SOLAR SITE CONSTRUCTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src={solar4}
              alt="Solar Site Construction"
              className="rounded-2xl shadow-lg object-cover max-h-[360px] w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-primary-700 mb-4 flex items-center gap-3">
              <FaTools className="text-primary-700" /> Solar Site Construction
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Generate survey-grade topographic data and digital terrain models.</li>
              <li>Improve accuracy of cut & fill estimates using high-resolution data.</li>
              <li>Monitor site progress with regular drone imagery updates.</li>
              <li>Reduce bidding timelines and errors using precise aerial maps.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-primary-700 mb-4">
            Viman Survey: India’s Best Drone Survey Company in Solar Industry
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Viman Survey leads the solar drone survey sector with cutting-edge technology and comprehensive solutions that go beyond the photovoltaic system. Our drone-based thermal inspections detect and analyze damaged panels swiftly and cost-effectively.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With geotagged imagery, advanced analytics, and sustainability-focused workflows, we enhance the reliability and lifespan of solar assets — ensuring top efficiency across the project lifecycle.
          </p>
        </div>
      </section>
      
      {/* BENEFITS SECTION */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Benefits of Drone Surveys for Solar Projects
          </h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Our drone-powered inspections provide accurate data and deep insights
            to enhance performance, safety, and profitability for solar operations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Rapid Fault Detection",
                desc: "Pinpoint hotspots, defective panels, and shading issues instantly using thermal imaging and visual data.",
              },
              {
                title: "High Data Accuracy",
                desc: "Generate survey-grade maps and 3D models for reliable asset documentation and analysis.",
              },
              {
                title: "Cost & Time Efficiency",
                desc: "Reduce manual inspection efforts and downtime with faster, automated aerial inspections.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition"
              >
                <h4 className="text-xl font-semibold text-white mb-3">{b.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ SECTION */}
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
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                      }`}
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
            Power Your Solar Projects with Viman Survey
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            From construction monitoring to thermal inspection, our drone surveys maximize solar efficiency and reduce downtime — helping you generate more power, faster.
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
