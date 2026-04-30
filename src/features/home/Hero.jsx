import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Corrected asset paths
import hero1 from "../../assets/Home/home1.webp";
import hero2 from "../../assets/Home/home3.webp";
import hero3 from "../../assets/Home/home2.webp";

export default function Hero({
  title = "India’s Leading Drone Survey Company",
  subtitle = "Viman Survey provides end-to-end drone mapping, aerial inspection, and volumetric analysis services across India.",
  cta = "/contact",
}) {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[60vh] sm:h-[75vh] md:h-[90vh] text-white overflow-hidden">
      <Helmet>
        <title>{title} — Viman Survey</title>
      </Helmet>

      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={current}
            src={images[current]}
            alt="Drone Survey"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        <p className="max-w-2xl text-sm sm:text-lg text-gray-200 mb-8">
          {subtitle}
        </p>

        <div className="flex gap-4">
          <Link
            to={cta}
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition"
          >
            Get a Quote
          </Link>

          <Link
            to="/about"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 flex gap-2 justify-center w-full z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-primary" : "w-2 bg-gray-300/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}