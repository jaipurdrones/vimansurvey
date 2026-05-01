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
  // ✅ Single source of truth (kebab-case + sorted)
  const applications = [
    { name: "Agriculture Survey", to: "/applications/agriculture-survey" },
    { name: "Bridge & Road Inspection", to: "/applications/bridge-road-inspection" },
    { name: "Construction Survey", to: "/applications/construction-survey" },
    { name: "Disaster Management", to: "/applications/disaster-management" },
    { name: "Drone Magnetic Survey", to: "/applications/drone-magnetic-survey" },
    { name: "Forest & Wildlife Survey", to: "/applications/forest-wildlife-survey" },
    { name: "Industrial Inspection", to: "/applications/industrial-inspection" },
    { name: "Lidar Survey", to: "/applications/lidar-survey" },
    { name: "Mining Survey", to: "/applications/mining-survey" },
    { name: "Minor Mineral Survey", to: "/applications/minor-mineral-survey" },
    { name: "Pipeline Inspection", to: "/applications/pipeline-inspection" },
    { name: "Powerline Monitoring", to: "/applications/powerline-monitoring" },
    { name: "Railway Survey", to: "/applications/railway-survey" },
    { name: "River Mapping Service", to: "/applications/river-mapping-service" },
    { name: "Smart City Survey", to: "/applications/smart-city-survey" },
    { name: "Solar Industry Survey", to: "/applications/solar-survey" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Drone Insight System", to: "/solutions/drone-insight-system" },
    { name: "Pilots On Project", to: "/solutions/pilots-on-project" },
    { name: "Contact Us", to: "/contact" },
    { name: "Privacy Policy", to: "/privacy" },
  ];

  return (
    <footer className="bg-neutral-200 text-neutral-900 pt-12 pb-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* === About === */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-600">About Us</h3>
          <p className="text-sm text-neutral-700 leading-relaxed">
            We are a reliable <strong>drone survey company</strong> delivering
            high-resolution aerial data to help you make smarter decisions.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <SocialIcon Icon={FaFacebookF} link="https://facebook.com/vimansurvey" />
            <SocialIcon Icon={FaInstagram} link="https://instagram.com/vimansurvey" />
            <SocialIcon Icon={FaTwitter} link="https://twitter.com/vimansurvey" />
            <SocialIcon Icon={FaLinkedinIn} link="https://linkedin.com/company/vimansurvey" />
            <SocialIcon Icon={FaWhatsapp} link="https://wa.me/919352230994" />
            <SocialIcon Icon={FaYoutube} link="https://youtube.com/@vimansurvey" />
          </div>
        </div>

        {/* === Quick Links === */}
        <div>
          <h3 className="text-lg font-semibold text-primary-600 mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="hover:text-primary-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === Applications === */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-primary-600 mb-2">
            Applications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {applications.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="hover:text-primary-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="bg-primary-600 text-white mt-10 py-3 text-center text-sm">
        © {new Date().getFullYear()} <strong>Viman Survey</strong>. All rights reserved.
      </div>
    </footer>
  );
}

/* === Social Icon === */
function SocialIcon({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral-900 hover:bg-primary-600 text-white w-9 h-9 flex items-center justify-center rounded-full transition"
    >
      <Icon className="text-sm" />
    </a>
  );
}