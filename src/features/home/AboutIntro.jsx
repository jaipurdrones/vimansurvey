import React from "react";

export default function AboutIntro() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-left space-y-10">
        {/* === Company Introduction === */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d3f]">
            Viman Survey: India’s Leading Drone Survey & Mapping Company
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, <strong>Viman Survey</strong> has emerged as one of{" "}
            <strong>India’s most trusted drone survey companies</strong>,
            delivering end-to-end aerial data and mapping solutions with
            precision and reliability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We specialize in a comprehensive range of services, including{" "}
            <strong>GIS and topographic surveys</strong>,{" "}
            <strong>drone inspections</strong>, <strong>mapping</strong>,{" "}
            <strong>powerline monitoring</strong>,{" "}
            <strong>smart city surveys</strong>,{" "}
            <strong>road and mining surveys</strong>,{" "}
            <strong>flood assessments</strong>,{" "}
            <strong>solar and property inspections</strong>,{" "}
            <strong>security and surveillance</strong>,{" "}
            <strong>crop health monitoring</strong>,{" "}
            <strong>volumetric analysis</strong>, and{" "}
            <strong>3D modeling</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Harnessing the power of advanced <strong>UAV technology</strong> and{" "}
            <strong>AI-driven analytics</strong>, we provide accurate,
            high-resolution data that empowers businesses, governments, and
            industries to make faster, smarter decisions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With a growing presence across India — including{" "}
            <strong>
              Jaipur, Udaipur, Lucknow, Haryana, Uttarakhand, Mumbai, Rajkot,
              Ahmedabad, Delhi, and Gurugram
            </strong>{" "}
            — our mission is to redefine how India surveys, maps, and manages
            its assets.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At <strong>Viman Survey</strong>, we combine{" "}
            <strong>precision, innovation, and speed</strong> to deliver
            exceptional results — helping our clients turn aerial insights into
            strategic advantages.
          </p>
        </div>

        {/* === Platform & Technology Advantage === */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d3f]">
            Empowering Businesses with Data-Driven Drone Survey Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed">
            At <strong>Viman Survey</strong>, we deliver seamless integration of
            aerial survey data into your digital ecosystem. Our secure,
            cloud-enabled platform allows you to visualize, analyze, and
            download survey results in formats compatible with your existing
            GIS, CAD, and asset management systems — ensuring efficient
            decision-making and data accessibility across your organization.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Experience ultra–high-resolution <strong>4K aerial imagery</strong>,
            precision <strong>orthomosaic mapping</strong>, and{" "}
            <strong>3D terrain modeling</strong> (DSM, DTM, LAS) for industries
            including infrastructure, mining, renewable energy, and
            agriculture. Our technology ensures you receive the most accurate
            and reliable data possible.
          </p>

          <p className="text-gray-700 leading-relaxed">
            As one of <strong>India’s leading drone survey companies</strong>,
            Viman Survey accelerates every stage of your project — from flight
            permissions and data capture to processing and delivery — helping
            you achieve actionable insights within hours, not days.
          </p>
        </div>
      </div>
    </section>
  );
}
