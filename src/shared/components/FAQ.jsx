import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function FAQ({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      
      {/* ✅ SEO SCHEMA ONCE ONLY */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          })}
        </script>
      </Helmet>

      <h3 className="text-3xl text-center text-primary-700 mb-8">
        {title}
      </h3>

      <div className="space-y-3">
        {faqs.map((f, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center px-4 py-3 text-left bg-white hover:bg-gray-50"
              >
                <span className="font-medium text-gray-800">{f.q}</span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-4 pb-4 text-gray-700">
                  <p className="pt-2">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}