import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Services from "../services/Services";
import WhyChooseUs from "./WhyChooseUs";
import AboutIntro from "./AboutIntro";

// Icons
import miningIcon from "../../assets/icons/mining.svg";
import constructionIcon from "../../assets/icons/construction.svg";
import solarIcon from "../../assets/icons/solar.svg";
import agricultureIcon from "../../assets/icons/agriculture.svg";
import smartCityIcon from "../../assets/icons/smartcity.svg";
import industrialIcon from "../../assets/icons/industrial.svg";

// ✅ Move outside component (performance + clarity)
const servicesData = [
  {
    id: 1,
    icon: miningIcon,
    title: "Mining Survey",
    description:
      "Accurate volumetric and topographic mapping for mining operations.",
    link: "/applications/mining-survey",
  },
  {
    id: 2,
    icon: constructionIcon,
    title: "Construction Survey",
    description:
      "Track project progress and generate detailed site models.",
    link: "/applications/construction-survey",
  },
  {
    id: 3,
    icon: solarIcon,
    title: "Solar Industry Survey",
    description:
      "Thermal imaging and layout optimization for solar farms.",
    link: "/applications/solar-survey",
  },
  {
    id: 4,
    icon: agricultureIcon,
    title: "Agriculture Survey",
    description:
      "Crop monitoring and irrigation planning using drone data.",
    link: "/applications/agriculture-survey",
  },
  {
    id: 5,
    icon: smartCityIcon,
    title: "Smart City Survey",
    description:
      "Urban mapping and GIS data collection for infrastructure.",
    link: "/applications/smart-city-survey",
  },
  {
    id: 6,
    icon: industrialIcon,
    title: "Industrial Inspection",
    description:
      "Aerial inspections for plants and critical assets.",
    link: "/applications/industrial-inspection",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-200 text-neutral-800">

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <section className="py-16 px-4 sm:px-6 lg:px-0">
        <Services items={servicesData} />
      </section>

      {/* ABOUT */}
      <section className="py-12">
        <AboutIntro />
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12">
        <WhyChooseUs />
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Talk About Your Project
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-primary-100">
          Get in touch for a custom proposal or on-site demo of our drone survey capabilities.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-neutral-100 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}