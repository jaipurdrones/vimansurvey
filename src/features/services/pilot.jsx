// src/pages/services/PilotsOnProject.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "../../assets/background1.jpg"; // ✅ Replace with your preferred hero image

export default function PilotsOnProject() {
  return (
    <section className="bg-white text-gray-800 pt-24 overflow-hidden">
      <Helmet>
        <title>Pilots on Project — Viman Survey</title>
        <meta
          name="description"
          content="Viman Survey provides certified drone pilots embedded into your project team — experienced across diverse environments for precision, safety and data integrity."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center text-white">
        <img
          src={heroBg}
          alt="Drone Pilots on Project"
          className="absolute inset-0 w-full h-full object-cover brightness-70"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Certified Drone Pilots on Your Project
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Embed experienced, certified aerial operators into your team — for
            safe, precise, and efficient drone-data missions.
          </p>
        </motion.div>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-primary-700 mb-4">
            Why Choose Our Pilot-on-Project Service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <strong>Viman Survey</strong>, we deploy certified, highly
            experienced drone pilots into your project workflow — whether
            you're surveying mining sites, infrastructure corridors, smart
            cities or environmental zones. Our pilots bring operational
            excellence, technical know-how and full compliance to deliver
            reliable aerial data that supports critical decisions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From pre-flight planning and regulatory clearances to mission
            execution and data hand-off, our pilots integrate seamlessly with
            your team and timeline. You get <strong>quality, speed and safety</strong> —
            all under one roof.
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mt-10"
        >
          {[
            "Certified drone operators with multi-industry experience.",
            "Precise aerial capture for mapping, inspection & monitoring.",
            "Reduced field time and cost via efficient drone missions.",
            "Tailored to your project’s needs: site-specific, mission-specific, scalable.",
            "Secure data handling with confidentiality & industry compliance.",
            "Detailed reporting and imagery for informed decision-making.",
          ].map((point, i) => (
            <li
              key={i}
              className="flex items-start space-x-3 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-primary-600 text-lg">✔</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Highlight Banner */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-primary-700 mb-4"
          >
            Expertise That Flies Beyond Expectations
          </motion.h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our certified pilots are equipped with advanced UAVs and industry
            knowledge — ensuring every flight is compliant, safe, and
            results-driven.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 text-white py-20 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-4"
        >
          Ready to Scale Your Drone Operations with Experts?
        </motion.h3>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Partner with <strong>Viman Survey</strong> and embed the right
          certified pilots for your next major aerial data mission. Let’s fly it
          together.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary-700 px-10 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
