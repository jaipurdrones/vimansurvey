// src/pages/applications/ForestWildlifeSurvey.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";
import FAQ from "../../shared/components/FAQ";


// images
import forest1 from "../../assets/Forest/forest1.webp";
import forest2 from "../../assets/Forest/forest2.webp";
import forest3 from "../../assets/Forest/forest3.webp";
import forest4 from "../../assets/Forest/forest4.webp";
import forest5 from "../../assets/Forest/forest5.webp";

export default function ForestWildlifeSurvey() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do drones assist in wildlife monitoring?",
      a: "Drones provide high-resolution imagery and thermal data to track animals, monitor populations, and detect threats with minimal disturbance to habitats.",
    },
    {
      q: "Can drones detect forest fires early?",
      a: "Yes, using thermal sensors and multispectral imaging, drones can identify early-stage fires and vegetation stress for proactive management.",
    },
    {
      q: "Are drone surveys eco-friendly?",
      a: "Absolutely. UAVs minimize human intrusion in sensitive areas while collecting detailed environmental data.",
    },
    {
      q: "What kind of data is captured?",
      a: "We capture RGB, LiDAR, and thermal data for habitat mapping, wildlife monitoring, and vegetation health assessment.",
    },
  ];

  // uniform image wrapper (16:9)
  const Img = ({ src, alt }) => (
    <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Forest & Wildlife Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey offers drone-based forest and wildlife survey services — habitat mapping, fire detection, poaching monitoring, biodiversity assessment, and conservation analytics."
        />
      </Helmet>

      {/* HERO (UNCHANGED) */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={forest1}
          alt="Forest & Wildlife Drone Survey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-lg">
            Forest & Wildlife Drone Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto drop-shadow">
            Harnessing drone intelligence for ecosystem protection and wildlife conservation across challenging terrains.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Revolutionizing Wildlife & Forest Monitoring
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            <strong>Viman Survey</strong> utilizes drone technology to monitor forests and wildlife efficiently. Our drones capture high-resolution images, LiDAR scans, and thermal data for habitat mapping, anti-poaching surveillance, and biodiversity assessments.
          </p>
          <p className="text-gray-700 text-lg">
            These insights empower conservationists to make timely, data-driven decisions while minimizing ecological disturbance.
          </p>
        </div>
        <Img src={forest2} alt="Forest Survey" />
      </section>

      {/* SECTION 2 */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <Img src={forest3} alt="Wildlife Tracking Drone" />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Wildlife Tracking & Monitoring
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Using thermal imaging and GPS integration, our drones track animal movements and behavior patterns, enabling conservationists to assess population health and detect threats like poaching.
          </p>
          <p className="text-gray-700 text-lg">
            This reduces human intrusion while providing high-resolution, real-time monitoring of sensitive wildlife habitats.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Forest Health & Fire Monitoring
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Drones equipped with multispectral and thermal sensors monitor forest vegetation health, detect early-stage fires, and identify pest infestations for preventive conservation measures.
          </p>
          <p className="text-gray-700 text-lg">
            This ensures proactive management of ecosystems, reducing damage and preserving biodiversity.
          </p>
        </div>
        <Img src={forest4} alt="Forest Health Analysis" />
      </section>

      {/* SECTION 4 */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <Img src={forest5} alt="Habitat Mapping Drone" />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Habitat & Corridor Mapping
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Generate high-resolution 3D maps and orthomosaics to identify wildlife corridors, forest cover changes, and biodiversity zones.
          </p>
          <p className="text-gray-700 text-lg">
            Accurate mapping supports reforestation, anti-poaching strategies, and long-term conservation planning.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-primary-700 mb-10">
            Key Applications of Drone Surveys in Forest & Wildlife Management
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Anti-Poaching Surveillance",
                desc: "Monitor wildlife zones and detect illegal activities in real-time.",
              },
              {
                title: "Forest Fire Detection",
                desc: "Early identification of fires and vegetation stress using thermal imaging.",
              },
              {
                title: "Biodiversity Assessment",
                desc: "Analyze vegetation and animal populations for ecosystem conservation.",
              },
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
      <section className="bg-primary-700 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-semibold mb-6">
          Benefits of Drone-Based Surveys
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              title: "Eco-Safe Data Collection",
              desc: "Minimal disturbance to wildlife habitats while capturing rich aerial insights.",
            },
            {
              title: "High-Resolution & Real-Time Data",
              desc: "Accurate, fast, and repeatable data collection for continuous monitoring.",
            },
            {
              title: "GIS & Analytics Integration",
              desc: "Seamless integration with geospatial systems for detailed habitat analysis and reporting.",
            },
          ].map((b, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-lg">
              <h4 className="font-semibold mb-2">{b.title}</h4>
              <p className="text-sm text-white/90">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (UPDATED CLEAN COMPONENT USE) */}
      <FAQ faqs={faqs} />
      
      {/* CTA */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-4">
            Protect Nature with Precision Drone Intelligence
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            Collaborate with <strong>Viman Survey</strong> to enhance biodiversity, improve forest management, and ensure sustainable conservation with cutting-edge drone technology.
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