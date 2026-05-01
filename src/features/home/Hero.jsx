import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Assets (keep outside component)
import hero1 from "../../assets/Home/home1.webp";
import hero2 from "../../assets/Home/home3.webp";
import hero3 from "../../assets/Home/home2.webp";

const images = [hero1, hero2, hero3];

export default function Hero({
  title = "India’s Leading Drone Survey Company",
  subtitle = "Viman Survey provides end-to-end drone mapping, aerial inspection, and volumetric analysis services across India.",
  cta = "/contact",
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[65vh] sm:h-[80vh] md:h-[90vh] text-white overflow-hidden">
      <Helmet>
        <title>{title} — Viman Survey</title>
      </Helmet>

      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Drone Survey"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* ✅ Improved Overlay (gradient for better readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
          {title}
        </h1>

        <p className="max-w-2xl text-sm sm:text-lg text-neutral-200 mb-8">
          {subtitle}
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          {/* ✅ Primary Button */}
          <Link
            to={cta}
            className="bg-primary-600 text-white px-7 py-3 rounded-full font-semibold shadow-md 
                       hover:bg-primary-700 hover:shadow-lg transition-all duration-300"
          >
            Get a Quote
          </Link>

          {/* ✅ Secondary Button */}
          <Link
            to="/about"
            className="border border-white/80 px-7 py-3 rounded-full font-medium 
                       hover:bg-white hover:text-primary-700 hover:border-white 
                       transition-all duration-300"
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
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-primary-500"
                : "w-2 bg-neutral-300/50 hover:bg-neutral-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}