import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import miningImg from "../../assets/mining.jpg";
import mining1 from "../../assets/mining1.png";


export default function MiningSurvey() {
  return (
    <section className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 text-gray-800">
      <Helmet>
        <title>Mining Drone Survey — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey offers drone-based mining surveys, volumetric stockpile analysis, excavation monitoring, and geospatial mapping using high-precision UAV technology for safe, efficient, and transparent mining operations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Helmet>

      {/* 🌄 Hero Section */}
      <div
        className="relative flex items-center justify-center text-center text-white overflow-hidden
             min-h-[50svh] sm:min-h-[65svh] md:min-h-[85svh] lg:min-h-[92svh] xl:min-h-[95svh]"
      >
        <img
          src={miningImg}
          alt="Mining Drone Survey"
          className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-6 max-w-5xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Mining Drone Survey & Mapping
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-200 drop-shadow">
            Unlock accuracy, safety, and speed in mining operations through advanced drone-based mapping and volumetric analysis.
          </p>
        </motion.div>
      </div>


      {/* 🧭 Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Precision. Transparency. Efficiency.
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            <strong>Viman Survey</strong> combines cutting-edge UAV
            photogrammetry and LiDAR technology to redefine mining surveys. Our
            drone systems deliver accurate volumetric analysis, stockpile
            assessments, and 3D terrain models, helping mining companies make
            faster, data-driven decisions with confidence.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our surveys minimize on-ground risk, optimize time, and ensure full
            compliance with <strong>DGCA</strong> and environmental standards.
            Whether managing open-pit mines, quarries, or excavation sites, we
            provide centimeter-level accuracy and detailed reports suitable for
            planning, compliance, and performance tracking.
          </p>
        </motion.div>

        {/* Applications Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-primary-700 mb-4">
              Applications of Drone Mining Surveys
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Stockpile volumetric measurement and material tracking</li>
              <li>Mine pit and excavation monitoring with 3D visualization</li>
              <li>Haul road inspection and site infrastructure mapping</li>
              <li>Post-blast assessment and slope stability analysis</li>
              <li>Regulatory documentation and safety compliance mapping</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={mining1}
              alt="Mining Drone Survey"
              className="rounded-2xl shadow-lg object-cover max-h-[320px]"
            />
          </motion.div>
        </div>
      </div>

      {/* ⚙️ Technology Section */}
      <div className="bg-gray-100 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-6 space-y-8"
        >
          <h3 className="text-3xl font-semibold text-center text-primary-700">
            Smart Technology. Real Results.
          </h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            Our drones integrate <strong>RTK/PPK GPS, LiDAR scanners, and
              high-resolution RGB sensors</strong> to generate precise, georeferenced
            3D maps and models. Advanced post-processing ensures accuracy within
            centimeters, enabling seamless integration with CAD and GIS workflows.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Volumetric Accuracy",
                desc: "Advanced photogrammetry ensures precise stockpile and excavation volume calculations.",
              },
              {
                title: "High-Resolution Imaging",
                desc: "Capture detailed topographic imagery for better resource management and planning.",
              },
              {
                title: "AI-Powered Analysis",
                desc: "Automated feature extraction and anomaly detection for faster data interpretation.",
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                <h4 className="text-xl font-semibold text-primary-700 mb-2">
                  {tech.title}
                </h4>
                <p className="text-gray-600">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🌟 Benefits Section */}
      <div className="bg-primary-700 text-white py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Why Choose Viman Survey?
          </h3>
          <p className="text-gray-200 mb-12 max-w-3xl mx-auto">
            Our expert team combines aviation precision with geospatial
            intelligence — ensuring your mining surveys are faster, safer, and
            more reliable than ever before.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Unmatched Accuracy",
                text: "Achieve centimeter-level precision in volume and terrain data.",
              },
              {
                title: "Faster Turnaround",
                text: "Get complete survey reports in hours, not days.",
              },
              {
                title: "Comprehensive Reporting",
                text: "Receive 3D maps, DSMs, and volumetric reports ready for compliance and decision-making.",
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/10 rounded-lg border border-white/20"
              >
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {b.title}
                </h4>
                <p className="text-white/90 text-sm">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🤝 CTA Section */}
      <div className="bg-gray-100 py-16 md:py-20 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-primary-700 mb-4"
        >
          Transform Your Mining Operations with Aerial Intelligence
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto mb-8"
        >
          From planning to reporting, Viman Survey ensures accurate, compliant,
          and actionable mining survey data — driving efficiency and profitability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/contact"
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
