import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        <p className="text-lg text-gray-700 mb-6">
          Tell us about your project. We'll reply quickly with a proposal and availability.
        </p>

        <ul className="text-base text-gray-700 space-y-2">
          <li>Email: info@vimansurvey.com</li>
          <li>Phone: +91 9352230994</li>
        </ul>
      </div>

      <div>
        <ContactForm />
      </div>
    </section>
  );
}