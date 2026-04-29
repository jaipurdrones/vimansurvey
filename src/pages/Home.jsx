import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import { Link } from "react-router-dom";
import AboutIntro from "../components/AboutIntro";

// ✅ Icons
import miningIcon from "../assets/icons/mining.svg";
import constructionIcon from "../assets/icons/construction.svg";
import solarIcon from "../assets/icons/solar.svg";
import agricultureIcon from "../assets/icons/agriculture.svg";
import smartCityIcon from "../assets/icons/smartcity.svg";
import industrialIcon from "../assets/icons/industrial.svg";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900">

      {/* ✅ HERO */}
      <Hero />

      {/* ✅ SERVICES */}
      <div className="px-4 sm:px-6 md:px-0">
        <Services
          items={[
            {
              id: 1,
              icon: miningIcon,
              title: "Mining Survey",
              description:
                "Accurate volumetric and topographic mapping for mining operations.",
              link: "/applications/miningsurvey",
            },
            {
              id: 2,
              icon: constructionIcon,
              title: "Construction Survey",
              description:
                "Track project progress and generate detailed site models.",
              link: "/applications/construction",
            },
            {
              id: 3,
              icon: solarIcon,
              title: "Solar Industry Survey",
              description:
                "Thermal imaging and layout optimization for solar farms.",
              link: "/applications/solar",
            },
            {
              id: 4,
              icon: agricultureIcon,
              title: "Agriculture Survey",
              description:
                "Crop monitoring and irrigation planning using drone data.",
              link: "/applications/agriculture",
            },
            {
              id: 5,
              icon: smartCityIcon,
              title: "Smart City Survey",
              description:
                "Urban mapping and GIS data collection for infrastructure.",
              link: "/applications/smartcitysurvey",
            },
            {
              id: 6,
              icon: industrialIcon,
              title: "Industrial Inspection",
              description:
                "Aerial inspections for plants and critical assets.",
              link: "/applications/industrialInspection",
            },
          ]}
        />
      </div>

      {/* ✅ ABOUT */}
      <div className="-mt-10">
        <AboutIntro />
      </div>

      {/* ✅ WHY CHOOSE US */}
      <div className="-mt-12">
        <WhyChooseUs />
      </div>

      {/* ✅ CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Talk About Your Project
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-gray-100">
          Get in touch for a custom proposal or on-site demo of our drone survey capabilities.
        </p>

        <Link
          to="/contact"
          className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}