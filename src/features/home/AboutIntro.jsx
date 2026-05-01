import React from "react";

export default function AboutIntro() {
  const paragraphClass = "text-neutral-700 leading-relaxed";

  return (
    <section className="py-14 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* === Company Intro === */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700">
            Viman Survey: India’s Leading Drone Survey & Mapping Company
          </h2>

          <p className={paragraphClass}>
            Founded in 2020, <strong>Viman Survey</strong> has quickly become one of{" "}
            <strong>India’s most trusted drone survey companies</strong>, delivering
            accurate and reliable aerial data solutions.
          </p>

          <p className={paragraphClass}>
            Our expertise spans <strong>GIS & topographic surveys</strong>,{" "}
            <strong>drone inspections</strong>, <strong>mapping</strong>,{" "}
            <strong>powerline monitoring</strong>, <strong>smart city surveys</strong>,{" "}
            <strong>mining & road surveys</strong>, <strong>flood assessments</strong>,{" "}
            <strong>solar inspections</strong>, <strong>crop monitoring</strong>,{" "}
            <strong>volumetric analysis</strong>, and <strong>3D modeling</strong>.
          </p>

          <p className={paragraphClass}>
            Using advanced <strong>UAV technology</strong> and{" "}
            <strong>AI-driven analytics</strong>, we provide high-resolution data
            that enables faster, smarter decision-making.
          </p>

          <p className={paragraphClass}>
            With operations across{" "}
            <strong>
              Jaipur, Udaipur, Lucknow, Haryana, Uttarakhand, Mumbai, Rajkot,
              Ahmedabad, Delhi, and Gurugram
            </strong>, we are redefining how India surveys and manages its assets.
          </p>

          <p className={paragraphClass}>
            At <strong>Viman Survey</strong>, we combine{" "}
            <strong>precision, innovation, and speed</strong> to turn aerial
            insights into real business value.
          </p>
        </div>

        {/* === Technology Section === */}
        <div className="space-y-6 pt-8 border-t border-neutral-200">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700">
            Data-Driven Drone Survey Solutions
          </h2>

          <p className={paragraphClass}>
            We seamlessly integrate aerial survey data into your digital ecosystem.
            Our secure, cloud-enabled platform allows you to{" "}
            <strong>visualize, analyze, and download</strong> results in formats
            compatible with GIS, CAD, and asset management systems.
          </p>

          <p className={paragraphClass}>
            Get ultra–high-resolution <strong>4K imagery</strong>, precise{" "}
            <strong>orthomosaic mapping</strong>, and{" "}
            <strong>3D terrain models</strong> (DSM, DTM, LAS) for industries like
            infrastructure, mining, renewable energy, and agriculture.
          </p>

          <p className={paragraphClass}>
            From permissions and data capture to processing and delivery,{" "}
            <strong>Viman Survey</strong> accelerates every stage of your project —
            delivering actionable insights in hours, not days.
          </p>
        </div>
      </div>
    </section>
  );
}