import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import surveyImg from "../../assets/minor-mineral-banner.jpg";
import minormineral1 from "../../assets/minormineral1.png"

export default function MinorMineralSurvey() {
  return (
    <section className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 text-gray-800">
      <Helmet>
        <title>Minor Mineral Drone Survey Rajasthan — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides minor mineral drone survey and mapping services in Rajasthan with government-approved drone technology for sustainable and efficient mining operations."
        />
        {/* ✅ Prevent mobile zoom / scaling issues */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Helmet>

      {/* 🌄 Hero Section */}
      <div
        className="relative flex items-center justify-center text-center text-white overflow-hidden
                   min-h-[50svh] sm:min-h-[65svh] md:min-h-[85svh] lg:min-h-[92svh] xl:min-h-[95svh]"
      >
        <img
          src={surveyImg}
          alt="Minor Mineral Drone Survey Rajasthan"
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
            Minor Mineral Drone Survey Rajasthan
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-200 drop-shadow">
            Precision-driven drone mapping for sustainable and transparent mining.
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
            Transforming Mineral Mapping in Rajasthan
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Government of Rajasthan has implemented mandatory drone-based surveys
            for all minor mineral leases to ensure accurate, transparent, and efficient
            assessment of mining operations. Viman Survey, as a DGCA-approved
            organization, provides end-to-end drone survey and volumetric analysis
            solutions that comply with the Rajasthan Government’s guidelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-primary-700 mb-4">
              Why Drone Surveys for Mining?
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Accurate volumetric calculation of extracted minerals</li>
              <li>Efficient monitoring of lease boundaries and excavation areas</li>
              <li>Eliminates manual errors and ensures transparency</li>
              <li>Complies with Directorate of Mines & Geology (DMG) guidelines</li>
              <li>Faster, safer, and more reliable than traditional methods</li>
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
              src={minormineral1}
              alt="Drone Mining Survey"
              className="rounded-2xl shadow-lg object-cover max-h-[320px]"
            />
          </motion.div>
        </div>
      </div>

      {/* 📄 Download Section */}
      <div className="bg-primary-700 text-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h3 className="text-3xl font-semibold mb-4">
            Official Notifications & SOPs
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Download government-approved guidelines and standard operating procedures
            for drone-based surveys in Rajasthan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/docs/rajasthan-notification.pdf"
              className="bg-white text-primary-700 font-medium px-6 py-3 rounded-full 
             border border-primary-600 hover:bg-primary-600 hover:text-white 
             transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notification PDF
            </a>

            <a
              href="/docs/drone-survey-sop.pdf"
              className="bg-white text-primary-700 font-medium px-6 py-3 rounded-full 
             border border-primary-600 hover:bg-primary-600 hover:text-white 
             transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drone Survey SOP
            </a>
          </div>
        </motion.div>
      </div>

      {/* 🌍 Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-center text-primary-700 mb-10 md:mb-12"
        >
          Benefits of Drone-Based Mineral Surveys
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "High Accuracy",
              text: "Our drones capture centimeter-level accuracy, providing reliable volumetric and topographical data.",
            },
            {
              title: "Compliance & Transparency",
              text: "Fully compliant with DMG Rajasthan standards, promoting data-driven governance in mining.",
            },
            {
              title: "Fast Turnaround",
              text: "Reduce survey time by 70% with automated data processing and cloud-based report delivery.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h4 className="text-xl font-semibold text-primary-700 mb-3">
                {b.title}
              </h4>
              <p className="text-gray-600 text-sm">{b.text}</p>
            </motion.div>
          ))}
        </div>
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
          Partner with Rajasthan’s Trusted Drone Survey Experts
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto mb-8"
        >
          From permissions to execution, Viman Survey ensures 100% compliance and precision
          in every mining survey project.
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
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
