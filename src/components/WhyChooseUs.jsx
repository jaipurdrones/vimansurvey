import React from "react";

import precisionImg from "../assets/icons/precision.svg";
import speedImg from "../assets/icons/speed.svg";
import costImg from "../assets/icons/cost.svg";
import teamImg from "../assets/icons/team.svg";

export default function WhyChooseUs() {
  const points = [
    {
      icon: precisionImg,
      title: "High Precision Data",
      desc: "We use RTK-enabled drones and advanced photogrammetry software for centimeter-level accuracy.",
    },
    {
      icon: speedImg,
      title: "Faster Turnaround",
      desc: "From data capture to final deliverables, our efficient workflow ensures faster results.",
    },
    {
      icon: costImg,
      title: "Cost-Effective Solutions",
      desc: "Reduce field time, labor costs, and rework with scalable aerial data collection.",
    },
    {
      icon: teamImg,
      title: "Experienced Team",
      desc: "Our certified pilots and survey engineers ensure safe and reliable operations nationwide.",
    },
  ];

  return (
    <section className="py-14 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1d1d3f]">
          Why Choose Viman Survey?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((p, i) => (
            <div
              key={i}
              className="group border border-gray-500 rounded-2xl p-6 sm:p-5 text-center shadow-sm 
                         hover:shadow-md hover:-translate-y-5 transition-all duration-300 flex flex-col items-center"
            >
              <img
                src={p.icon}
                alt={p.title}
                className="h-24 w-24 sm:h-28 sm:w-28 mb-4 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-800">
                {p.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
