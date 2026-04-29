import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/VIMAN_SURVEY.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    {
      name: "Applications",
      dropdown: [
        { name: "Minor Mineral Drone Survey Rajasthan", to: "/applications/minorMineralSurvey" },
        { name: "Mining Survey", to: "/applications/miningsurvey" },
        { name: "Construction Survey", to: "/applications/construction" },
        { name: "Agriculture Survey", to: "/applications/agriculture" },
        { name: "Solar Industry Survey", to: "/applications/solar" },
        { name: "Powerline Monitoring", to: "/applications/powerline" },
        { name: "Bridge & Road Inspection", to: "/applications/bridge-road" },
        { name: "Forest & Wildlife Survey", to: "/applications/forest-wildlife" },
        { name: "Disaster Management", to: "/applications/disasterManagement" },
        { name: "Railway Survey", to: "/applications/railwaySurvey" },
        { name: "Industrial Inspection", to: "/applications/industrialInspection" },
        { name: "Smart City Survey", to: "/applications/smartcitySurvey" },
        { name: "Pipeline Inspection", to: "/applications/pipelineInspection" },
        { name: "River Mapping And Services", to: "/applications/riverMappingService" },
        { name: "Lidar Survey", to: "/applications/lidarSurvey" },
        { name: "Drone Magnetic Survey", to: "/applications/droneMagneticSurvey" },
      ],
    },
    {
      name: "Solutions",
      dropdown: [
        { name: "Drone Insight System", to: "/solutions/drone-insight-system" },
        { name: "Pilots On Project", to: "/solutions/pilot" },
      ],
    },
    { name: "Blog", to: "/blog" },
    {
      name: "Contact Us",
      dropdown: [
        { name: "Contact Form", to: "/contact" },
        { name: "Our Offices", to: "/contact/offices" },
      ],
    },
  ];

  // ✅ The return must be inside this function
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary-200 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-6 py-4 space-y-4">
        {/* Logo Centered */}
        <Link to="/" className="flex justify-center">
          <img
            src={logo}
            alt="Viman Survey Logo"
            className="h-20 object-contain"
          />
        </Link>

        {/* Desktop Menu below Logo */}
        <nav className="hidden lg:flex flex-wrap justify-center items-center gap-8">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <DropdownMenu
                key={index}
                title={item.name}
                links={item.dropdown}
                isOpen={activeDropdown === index}
                onOpen={() => setActiveDropdown(index)}
                onClose={() => setActiveDropdown(null)}
              />
            ) : (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-primary-600 transition ${
                    isActive ? "text-primary-600" : "text-gray-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 absolute top-4 right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu below Logo */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="border-b">
                <button className="w-full text-left px-6 py-3 font-medium text-gray-800 hover:bg-gray-50">
                  {item.name}
                </button>
                <div className="bg-gray-50">
                  {item.dropdown.map((link, i) => (
                    <Link
                      key={i}
                      to={link.to}
                      className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-gray-800 font-medium border-b hover:bg-gray-50"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}

function DropdownMenu({ title, links, isOpen, onOpen, onClose }) {
  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    onOpen();
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => onClose(), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-sm font-medium text-gray-800 hover:text-primary-600 flex items-center gap-1 transition">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 bg-white shadow-xl border mt-2 rounded-md w-72 z-50 animate-fadeIn 
          max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary-600 whitespace-nowrap transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
