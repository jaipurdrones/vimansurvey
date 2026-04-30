// src/pages/services/DroneDataProcess.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroBg from "../../assets/M350-RTK-4.webp";

export default function DroneDataProcess() {
  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Drone Data Process — Viman Survey</title>
        <meta
          name="description"
          content="Send us your drone images and we will process them for you — exporting point clouds, 3D models, DEMs, orthophotos, profiles and more with precision and speed."
        />
      </Helmet>

      {/* Hero Section (fixed spacing like other pages) */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[65vh] md:min-h-[85vh] lg:min-h-[95vh]">
        <img
          src={heroBg}
          alt="Drone Data Process"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            THE SKY IS,
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mt-2 text-primary-300">
            NOT THE LIMIT
          </h2>
          <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-gray-200">
            Send us your drone images and we will process them for you.
            We can export: <strong>Point Cloud, 3D Model, DEM, Orthophoto, Profiles</strong> and more.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h3 className="text-3xl font-semibold text-primary-700 mb-4">
            How We Work
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple, transparent workflow from flight to final data delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          
          {/* Step 1 */}
          <div className="flex-1 min-w-[220px] max-w-[260px] p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-primary-700 mb-2">
              Fly Your Drone
            </h4>
            <p className="text-gray-600 text-sm">
              Acquire high-quality aerial images using your drone or terrestrial camera.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 min-w-[220px] max-w-[260px] p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-primary-700 mb-2">
              Send Us the Images
            </h4>
            <p className="text-gray-600 text-sm">
              Upload the images you’ve captured and specify the export format you need.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 min-w-[220px] max-w-[260px] p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-primary-700 mb-2">
              Get Your Data Processed
            </h4>
            <p className="text-gray-600 text-sm">
              We process and deliver high-precision outputs — ready for analysis or integration.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex-1 min-w-[220px] max-w-[260px] p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition text-center">
            <h4 className="text-lg font-semibold text-primary-700 mb-2">
              Download the Exported Data
            </h4>
            <p className="text-gray-600 text-sm">
              In short time you will be able to download the processed requested data.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Ready to Process Your Drone Data?
        </h3>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Partner with <strong>Viman Survey</strong> for fast, reliable, and accurate drone data processing solutions.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary-700 px-8 py-3 rounded-full font-medium hover:bg-primary-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}