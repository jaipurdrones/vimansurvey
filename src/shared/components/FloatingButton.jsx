import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-3 z-[1000]">
      {/* 📞 Call Button */}
      <a
        href="tel:+919352230994"
        className="flex items-center gap-2 bg-primary-600 text-white py-2 px-4 rounded-full shadow-lg 
                   hover:bg-primary-700 hover:scale-105 transition-all duration-300 group"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={16} className="text-white group-hover:animate-pulse" />
        <span className="font-medium text-sm">Call Us</span>
      </a>

      {/* 💬 WhatsApp Button */}
      <a
        href="https://wa.me/9352230994"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white py-2 px-4 rounded-full shadow-lg 
                   hover:scale-105 hover:brightness-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={18} className="text-white group-hover:animate-pulse" />
        <span className="font-medium text-sm">How can we help you?</span>
      </a>
    </div>
  );
}
