import React from "react";
import { Link } from "react-router-dom";
import FAQ from "../../shared/components/FAQ";

export default function Services({ items = [] }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-[#1d1d3f]">
          Our Applications
        </h2>

        {/* ✅ Responsive Grid - 2 per row on mobile, 3 per row on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group p-4 sm:p-6 border rounded-2xl shadow-sm 
              hover:shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
              flex flex-col items-center text-center overflow-hidden"
            >
              {/* Default content */}
              <div className="flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-20">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-20 w-20 sm:h-32 sm:w-32 mb-2 object-contain transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-95"
                  />
                )}
                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 text-[#1d1d3f] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm transition-opacity duration-700 delay-100 ease-[cubic-bezier(0.4,0,0.2,1)] px-1 sm:px-0">
                  {item.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center 
                backdrop-blur-sm opacity-0 scale-90 translate-y-3 
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                <p className="text-gray-700 mb-4 sm:mb-5 text-xs sm:text-sm px-3 sm:px-4 transition-opacity duration-700 delay-100">
                  {item.hoverText || "Discover more details about this service."}
                </p>
                <Link
                  to={item.link}
                  className="bg-primary-600 text-white text-xs sm:text-sm px-5 sm:px-6 py-2 rounded-full font-medium 
                  hover:bg-primary-700 transition-all duration-500 ease-in-out transform hover:scale-105"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
