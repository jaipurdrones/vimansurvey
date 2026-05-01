import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import heroImg from "../../assets/Construction/construction1.webp";
import construction2 from "../../assets/Construction/construction2.webp";
import construction3 from "../../assets/Construction/construction3.webp";

/* ✅ Reusable Section */
function SectionBlock({ children, img, alt, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE */}
      <div className={`flex justify-center ${reverse ? "md:order-2" : "md:order-1"}`}>
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="rounded-2xl shadow-lg w-full max-w-[520px] aspect-[4/3] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
        {children}
      </div>

    </div>
  );
}

const ConstructionSurvey = () => {
  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Construction Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides construction drone surveys for high-precision mapping, site progress monitoring, volumetric analysis, and project planning — improving accuracy, safety, and efficiency."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Helmet>

      {/* 🌄 HERO */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[55svh] sm:min-h-[70svh] md:min-h-[85svh] lg:min-h-[90svh] xl:min-h-[95svh]">
        <img
          src={heroImg}
          alt="Construction Drone Survey"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Aerial Intelligence for Construction
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Revolutionizing project planning, monitoring, and safety through
            drone-powered construction surveys.
          </p>
        </div>
      </section>

      {/* 🧭 OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <SectionBlock img={construction2} alt="Construction Survey">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-primary-700">
              Precision-Driven Construction Surveys
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Viman Survey</strong> is redefining how construction
              projects are planned and executed. Our drone-based construction
              surveys deliver real-time data, high-resolution orthomosaics, and
              accurate volumetric measurements — giving engineers, architects, and
              site managers complete visibility into every stage of development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With advanced UAVs equipped with <strong>RTK/PPK GPS</strong> and{" "}
              <strong>high-resolution sensors</strong>, we capture
              centimeter-level accuracy across expansive and complex construction
              sites. The result: safer workflows, faster progress tracking, and
              better resource management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our drone surveys support everything from site grading and
              excavation measurement to structural inspection and compliance
              documentation — ensuring precision, transparency, and efficiency at
              every stage.
            </p>
          </div>
        </SectionBlock>
      </section>

      {/* 🏗️ APPLICATIONS */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h3 className="text-3xl font-semibold text-center text-primary-700">
            Applications of Drone Surveys in Construction
          </h3>

          <SectionBlock
            img={construction3}
            alt="Drone Survey Applications"
            reverse
          >
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Topographic mapping and terrain modeling</li>
              <li>Site grading and excavation volume calculations</li>
              <li>Progress tracking and as-built verification</li>
              <li>Stockpile and material management</li>
              <li>Bridge, tower, and structure inspection</li>
              <li>Compliance documentation and reporting</li>
            </ul>
          </SectionBlock>
        </div>
      </section>

      {/* 💡 BENEFITS */}
      <section className="bg-primary-700 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Why Choose Viman Survey?
          </h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto">
            Our expert team combines aerial intelligence with construction
            expertise to deliver precise, actionable, and compliant survey data
            — enhancing decision-making from foundation to finish.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "High-Resolution Mapping",
                text: "Generate precise site maps with centimeter accuracy for design validation and project planning.",
              },
              {
                title: "Time & Cost Efficiency",
                text: "Reduce manual surveying time and labor costs while accelerating project timelines.",
              },
              {
                title: "Enhanced Site Safety",
                text: "Monitor hazardous areas safely without putting survey teams at risk.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition"
              >
                <h4 className="text-xl font-semibold mb-3">{b.title}</h4>
                <p className="text-white/90 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 CTA */}
      <section className="bg-gray-100 py-16 md:py-20 text-center">
        <h3 className="text-3xl font-semibold text-primary-700 mb-4">
          Build Smarter with Drone-Powered Surveying
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          From planning and progress tracking to compliance and safety,
          <strong> Viman Survey </strong> delivers reliable data that helps you
          construct with confidence.
        </p>
        <Link
          to="/contact"
          className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition"
        >
          Get a Free Consultation
        </Link>
      </section>
    </main>
  );
};

export default ConstructionSurvey;