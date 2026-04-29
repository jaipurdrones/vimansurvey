import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const applicationLinks1 = [
    { name: "Minor Mineral Drone Survey Rajasthan", to: "/applications/minorMineralSurvey" },
    { name: "Mining Survey", to: "/applications/miningsurvey" },
    { name: "Construction Survey", to: "/applications/construction" },
    { name: "Solar Industry Survey", to: "/applications/solar" },
    { name: "Powerline Monitoring", to: "/applications/powerline" },
    { name: "Bridge & Road Inspection", to: "/applications/bridge-road" },
    { name: "Forest & Wildlife Survey", to: "/applications/forest-wildlife" },
    { name: "Lidar Survey", to: "/applications/lidarSurvey" },
  ];

  const applicationLinks2 = [
    { name: "Agriculture Survey", to: "/applications/agriculture" },
    { name: "Disaster Management", to: "/applications/disasterManagement" },
    { name: "Railway Survey", to: "/applications/railwaySurvey" },
    { name: "Industrial Inspection", to: "/applications/industrialInspection" },
    { name: "Smart City Survey", to: "/applications/smartcitySurvey" },
    { name: "Pipeline Inspection", to: "/applications/pipelineInspection" },
    { name: "River Mapping and Services", to: "/applications/riverMappingService" },
    { name: "Drone Magnetic Survey", to: "/applications/droneMagneticSurvey" },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Drone Data Process", to: "/drone-data" },
    { name: "Fly With Us", to: "/fly-with-us" },
    { name: "Contact Us", to: "/contact" },
    { name: "Privacy Policy", to: "/privacy" },
  ];

  return (
    <footer className="bg-gray-300 text-black pt-10 sm:pt-8 md:pt-12 lg:pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                      gap-x-10 gap-y-8 sm:gap-y-10">
        
        {/* === About Us === */}
        <div className="min-w-[220px] space-y-4 sm:space-y-3">
          <h3 className="text-lg font-semibold text-cyan-600 mb-2 sm:mb-1">About Us</h3>
          <p className="text-[15px] leading-relaxed text-gray-800 font-medium sm:text-[14px]">
            We are the most reliable <strong>drone survey company</strong>. Our drone survey
            services enable you to make better decisions with high-resolution aerial data.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2 flex-wrap">
            <SocialIcon Icon={FaFacebookF} link="https://facebook.com/vimansurvey" label="Facebook" />
            <SocialIcon Icon={FaInstagram} link="https://instagram.com/vimansurvey" label="Instagram" />
            <SocialIcon Icon={FaTwitter} link="https://twitter.com/vimansurvey" label="Twitter" />
            <SocialIcon Icon={FaLinkedinIn} link="https://linkedin.com/company/vimansurvey" label="LinkedIn" />
            <SocialIcon Icon={FaWhatsapp} link="https://wa.me/919999999999" label="WhatsApp" />
            <SocialIcon Icon={FaYoutube} link="https://youtube.com/@vimansurvey" label="YouTube" />
          </div>
        </div>

        {/* === Quick Links === */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-600 mb-2 sm:mb-1">Quick Links</h3>
          <ul className="space-y-2 text-[15px] sm:text-[14px] font-medium">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="hover:text-cyan-600 hover:underline transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === Applications === */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-cyan-600 mb-2 sm:mb-1">Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-[15px] sm:text-[14px] font-medium">
            {[...applicationLinks1, ...applicationLinks2].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="hover:text-cyan-600 hover:underline transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* === Footer Bottom === */}
      <div className="bg-[#00B8D9] text-black mt-6 sm:mt-8 py-3 text-center text-sm sm:text-[13px] font-medium">
        © {new Date().getFullYear()} <strong>Viman Survey</strong>. All rights reserved.
      </div>
    </footer>
  );
}

function SocialIcon({ Icon, link, label }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="bg-black hover:bg-cyan-600 text-white w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full transition transform hover:scale-105"
    >
      <Icon className="text-lg sm:text-base" />
    </a>
  );
}
