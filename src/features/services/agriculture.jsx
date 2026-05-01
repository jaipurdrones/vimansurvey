import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FAQ from "../../shared/components/FAQ";
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

/* ✅ Consistent Image */
const SectionImage = ({ src, alt }) => (
  <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

/* ✅ Reusable Section */
const Section = ({ title, icon: Icon, children, image, reverse }) => (
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Image */}
    <div className={reverse ? "order-1 md:order-2" : ""}>
      <SectionImage src={image} alt={title} />
    </div>

    {/* Content */}
    <div className={reverse ? "order-2 md:order-1" : ""}>
      {title && (
        <h3 className="text-2xl font-semibold text-primary-700 mb-4 flex gap-3 items-center">
          {Icon && <Icon />}
          {title}
        </h3>
      )}
      {children}
    </div>
  </div>
);

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
      </Helmet>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center text-white min-h-[85vh]">
        <img
          src={heroImg}
          alt="Agriculture Drone Survey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Agriculture Drone Survey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Empowering precision farming with aerial analytics — crop health monitoring, irrigation planning,
            damage mapping and actionable farm intelligence.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* 1 → Image RIGHT */}
        <Section image={agri1}>
          <div>
            <h2 className="text-3xl font-semibold text-primary-700 mb-4">
              Transforming Agriculture with Drone Intelligence
            </h2>
            <p className="text-gray-700 mb-3">
              <strong>Viman Survey</strong> brings advanced UAV platforms and analytics to agriculture — combining
              multispectral, thermal, and RGB sensors with RTK/PPK accuracy and AI-powered insights.
            </p>
            <p className="text-gray-700">
              Our drone-based agriculture surveys provide real-time crop health monitoring, soil moisture mapping,
              yield estimation, and irrigation planning. We help farmers and agronomists make informed, data-driven
              decisions for higher efficiency and sustainability.
            </p>
          </div>
        </Section>

        {/* 2 → Image LEFT */}
        <Section title="Crop Health Inspection" icon={FaLeaf} image={agri2} reverse>
          <ul className="list-disc pl-6 space-y-2">
            <li>Multispectral & NDVI analysis to identify stressed zones before visible symptoms appear.</li>
            <li>Aerial data captures crop vitality and damage assessment quickly and accurately.</li>
            <li>Automatic crop detection and zonal health maps for targeted interventions.</li>
            <li>Damage mapping for insurance — high-resolution evidence for claims (images + geotagged reports).</li>
          </ul>
        </Section>

        {/* 3 → Image RIGHT */}
        <Section title="Smart Crop Scouting" icon={FaTractor} image={agri3}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Drones provide fast, repeatable scouting across large areas — hours instead of days.</li>
            <li>Real-time snapshots highlight pests, disease, nutrient deficiency and irrigation stress.</li>
            <li>Plant-counting & object-detection algorithms help estimate inventory and predict yield.</li>
            <li>Actionable zone maps that direct ground crews to the exact problem areas.</li>
          </ul>
        </Section>

        {/* 4 → Image LEFT */}
        <Section title="Irrigation Monitoring & Planning" icon={FaWater} image={agri4} reverse>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use DSMs and terrain models to design efficient irrigation and drainage systems.</li>
            <li>Multispectral maps reveal under-watered or leaky irrigation zones.</li>
            <li>Combine aerial maps with field measurements to optimize water distribution and save resources.</li>
          </ul>
        </Section>

        {/* 5 → Image RIGHT */}
        <Section title="Crop Inspection & Insurance Mapping" icon={FaShieldAlt} image={agri5}>
          <ul className="list-disc pl-6 space-y-2">
            <li>High-resolution imagery for accurate damage reporting due to floods, fire, pests, or weather events.</li>
            <li>Deliverables: orthomosaics, DSM/DEM, geotagged image sets and damage polygons ready for claims.</li>
            <li>Export formats supported: DXF, SHP, JPG, LAS, DEM, RCP, TIFF (as required by insurers).</li>
            <li>Fast turnarounds for time-sensitive insurance assessments and post-event documentation.</li>
          </ul>
        </Section>

      </section>

      <FAQ faqs={faqs} />

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <h3 className="text-3xl mb-4">
          Drive Precision Farming with Viman Survey
        </h3>
        <p className="mb-6 text-gray-200">
          From field mapping to yield prediction, our drone surveys deliver actionable intelligence to boost agricultural productivity and sustainability.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary-700 px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}