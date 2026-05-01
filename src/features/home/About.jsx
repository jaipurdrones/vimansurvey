import React from "react";

// Assets
import aboutImg from "../../assets/About/about.webp";
import rocketIcon from "../../assets/icons/Rocket.svg";
import timeIcon from "../../assets/icons/time.svg";
import dataIcon from "../../assets/icons/data.svg";
import mapIcon from "../../assets/icons/map.svg";

export default function About() {
  return (
    <section className="bg-white text-gray-700">

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6 py-20">
        
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={aboutImg}
            alt="Drone Survey Operations"
            className="rounded-xl shadow-lg w-full md:w-[90%] object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700 leading-tight">
            Flying High, Serving Higher
          </h1>

          <p className="text-lg text-gray-500">
            Elevating industries with advanced drone-powered solutions.
          </p>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* Section Title */}
          <SectionTitle title="About Us" />

          {/* Content */}
          <div className="text-left space-y-5 leading-relaxed text-gray-600">
            <p>
              <strong className="text-gray-800">Viman Survey Pvt. Ltd.</strong>, established in 2020, 
              has rapidly grown into one of India’s most trusted drone solutions providers. 
              We redefine surveying through cutting-edge UAV technology and aerial intelligence.
            </p>

            <p>
              Our team combines industry expertise with innovation to deliver 
              <strong className="text-gray-800"> accurate, cost-effective, and fast data solutions</strong>. 
              From infrastructure to agriculture, we empower smarter decision-making using 
              high-resolution aerial insights.
            </p>

            <p>
              Our services include GIS & topographic surveys, drone inspections, 
              powerline monitoring, smart city projects, flood assessments, 
              solar inspections, volumetric analysis, crop monitoring, and 3D modeling.
            </p>
          </div>
        </div>
      </div>

      {/* ================= VISION & MISSION ================= */}
      <div className="bg-gradient-to-r from-gray-100 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Icon */}
          <div className="flex justify-center md:justify-start w-full md:w-1/3">
            <img
              src={rocketIcon}
              alt="Rocket Icon"
              className="h-40 w-40 object-contain"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="space-y-8 w-full md:w-2/3">

            <div>
              <h3 className="text-2xl font-semibold text-primary-700">
                Our Vision
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                To transform how the world understands and interacts with the Earth 
                through aerial intelligence and advanced drone mapping.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary-700">
                Our Mission
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                To become the most trusted AI-powered aerial data platform, 
                delivering innovation, speed, and accuracy across industries.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= BENEFITS ================= */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <SectionTitle title="Benefits of Drone Surveying" />

          <div className="grid md:grid-cols-3 gap-10">

            <BenefitCard
              icon={timeIcon}
              title="Faster & Cost-Effective"
              desc="Drone surveys are up to 5x faster than traditional methods, reducing manpower and operational costs."
            />

            <BenefitCard
              icon={dataIcon}
              title="High Accuracy Data"
              desc="Capture thousands of precise data points for detailed 3D models and orthomosaic maps."
            />

            <BenefitCard
              icon={mapIcon}
              title="Access Difficult Areas"
              desc="Survey steep terrain, hazardous zones, and remote locations safely and efficiently."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span className="w-12 h-[2px] bg-primary-500"></span>
      <h2 className="text-3xl md:text-4xl font-semibold text-primary-700">
        {title}
      </h2>
      <span className="w-12 h-[2px] bg-primary-500"></span>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="space-y-4 text-center p-4 rounded-lg hover:shadow-md transition">
      
      <div className="flex justify-center">
        <img
          src={icon}
          alt={title}
          className="h-32 w-32 object-contain"
          loading="lazy"
        />
      </div>

      <h4 className="font-semibold text-primary-700">{title}</h4>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}