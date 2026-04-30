import React from "react";

// ✅ FIXED asset paths (IMPORTANT)
import aboutImg from "../../assets/About/about.webp";
import rocketIcon from "../../assets/icons/Rocket.svg";
import timeIcon from "../../assets/icons/time.svg";
import dataIcon from "../../assets/icons/data.svg";
import mapIcon from "../../assets/icons/map.svg";

export default function About() {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6 py-20">
        <div className="flex justify-center md:justify-start">
          <img
            src={aboutImg}
            alt="Drone Survey Operations"
            className="rounded-md shadow-md w-full md:w-[90%] object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d3f]">
            Flying High, Serving Higher
          </h1>
          <p className="text-lg text-gray-500">
            Elevating Industries with Our Top-Tier Drone Services.
          </p>
        </div>
      </div>

      {/* About Description */}
      <div className="bg-gradient-to-b from-[#f9f9f9] to-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-[#b9975b]"></span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d3f]">
              About Us
            </h2>
            <span className="w-12 h-[2px] bg-[#b9975b]"></span>
          </div>

          <div className="text-left space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>Viman Survey Pvt. Ltd.</strong>, established in 2020, has
              rapidly grown into one of India’s most trusted drone solutions
              providers. Our foundation is built on redefining surveying and
              mapping through innovative drone technologies and aerial
              intelligence.
            </p>

            <p>
              We are India’s most reliable{" "}
              <strong>drone survey company</strong>, driven by a team of skilled
              professionals with years of experience. We believe UAVs offer a
              modern approach to data collection — accurate, cost-effective, and
              efficient. Our services empower clients to make informed
              decisions, leveraging high-resolution aerial imagery and advanced
              mapping systems.
            </p>

            <p>
              Viman Survey specializes in a comprehensive range of services,
              including GIS & topographic surveys, drone inspections, mapping,
              powerline monitoring, smart city projects, flood assessments,
              solar thermal inspections, property documentation, volumetric
              analysis, crop health monitoring, and 3D modeling. We are
              committed to precision, safety, and innovation — continuously
              improving the way data transforms industries across India.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section (Rocket on Left) */}
      <div className="bg-gradient-to-r from-[#f4f4f4] to-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Rocket Left Side */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3">
            <img
              src={rocketIcon}
              alt="Rocket Icon"
              className="h-48 w-48 object-contain"
            />
          </div>

          {/* Vision & Mission Right Side */}
          <div className="flex flex-col gap-10 w-full md:w-2/3">
            {/* Vision */}
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d3f]">
                Our Vision
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Our Vision is to evaluate the Earth for evolution through the
                help of aerial intelligence and advanced drone mapping.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d3f]">
                Our Mission
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Our Mission is to become the most trusted AI-powered aerial data
                platform across the globe, delivering innovation and accuracy
                for every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-12 h-[2px] bg-[#b9975b]"></span>
            <h2 className="text-3xl font-semibold text-[#1d1d3f]">
              What are the Benefits of Drones in Surveying?
            </h2>
            <span className="w-12 h-[2px] bg-[#b9975b]"></span>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {/* Benefit 1 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src={timeIcon}
                  alt="Reduce Time"
                  className="h-40 w-40 object-contain"
                />
              </div>
              <h4 className="font-semibold text-[#1d1d3f]">
                Reduce Field Time And Survey Costs
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Capturing topographic data with a drone is up to five times
                faster than traditional methods, requiring less manpower and
                delivering results at lower costs.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src={dataIcon}
                  alt="Accurate Data"
                  className="h-40 w-40 object-contain"
                />
              </div>
              <h4 className="font-semibold text-[#1d1d3f]">
                Provide Accurate And Exhaustive Data
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Drone flights capture thousands of measurements, providing
                highly detailed 3D models and orthomosaics beyond what
                traditional tools can achieve.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src={mapIcon}
                  alt="Inaccessible Areas"
                  className="h-40 w-40 object-contain"
                />
              </div>
              <h4 className="font-semibold text-[#1d1d3f]">
                Map Otherwise Inaccessible Areas
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Drones can reach steep slopes, rough terrain, or hazardous zones
                — capturing critical data where traditional surveying methods
                cannot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
