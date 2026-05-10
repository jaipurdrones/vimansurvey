import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Tell us about your project. We’ll reply quickly with a proposal
              and availability.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a
                href="mailto:info@vimansurvey.com"
                className="text-lg font-medium text-cyan-700 hover:underline"
              >
                info@vimansurvey.com
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a
                href="tel:+917976430650"
                className="text-lg font-medium text-cyan-700 hover:underline"
              >
                +91 7976430650
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border">
            <div className="p-5 border-b">
              <h2 className="text-2xl font-semibold text-gray-900">
                Our Location
              </h2>

              <p className="text-gray-600 mt-1 text-sm">
                Visit our office or open directions in Google Maps.
              </p>
            </div>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=26.9124,75.7873&z=15&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="p-5">
              <a
                href="https://maps.app.goo.gl/ub98dHv6Ya135yma6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-full transition-colors"
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-lg p-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}