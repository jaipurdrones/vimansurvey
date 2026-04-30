import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/Viman_survey.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const location = useLocation();

  // Close menus and scroll to top on navigation
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
        { name: "Agriculture Survey", to: "/applications/agriculture" },
        { name: "Bridge & Road Inspection", to: "/applications/bridge-road" },
        { name: "Construction Survey", to: "/applications/construction" },
        { name: "Disaster Management", to: "/applications/disasterManagement" },
        { name: "Drone Magnetic Survey", to: "/applications/droneMagneticSurvey" },
        { name: "Forest & Wildlife Survey", to: "/applications/forest-wildlife" },
        { name: "Industrial Inspection", to: "/applications/industrialInspection" },
        { name: "Lidar Survey", to: "/applications/lidarSurvey" },
        { name: "Mining Survey", to: "/applications/miningsurvey" },
        { name: "Minor Mineral Drone Survey Rajasthan", to: "/applications/minorMineralSurvey" },
        { name: "Pipeline Inspection", to: "/applications/pipelineInspection" },
        { name: "Powerline Monitoring", to: "/applications/powerline" },
        { name: "Railway Survey", to: "/applications/railwaySurvey" },
        { name: "River Mapping And Services", to: "/applications/riverMappingService" },
        { name: "Smart City Survey", to: "/applications/smartcitySurvey" },
        { name: "Solar Industry Survey", to: "/applications/solar" },
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
    { name: "Contact Us", to: "/contact", isButton: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-200 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Viman Survey Logo"
            className="h-14 sm:h-20 lg:h-20 object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-1 justify-end">
          <ul className="flex items-center gap-12">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <li key={index}>
                  <DropdownMenu
                    title={item.name}
                    links={item.dropdown}
                    isOpen={activeDropdown === index}
                    onOpen={() => setActiveDropdown(index)}
                    onClose={() => setActiveDropdown(null)}
                  />
                </li>
              ) : (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-[17px] font-semibold tracking-wide transition-all ${isActive
                        ? "text-primary-600"
                        : "text-gray-800 hover:text-primary-600"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg border border-primary-600/40 bg-white hover:bg-primary-50 shadow-sm transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-6 h-6 transition-colors duration-300 text-primary-600`}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-100 border-t border-gray-400 transform transition-all duration-300 ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="overflow-y-auto max-h-[70vh] px-2 sm:px-4 pb-2">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="last:pb-0">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 text-[16px] font-semibold text-gray-800 
                       hover:text-primary-600 hover:bg-gray-50 transition-all"
                >
                  <span>{item.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`w-4 h-4 transform transition-transform ${activeDropdown === index ? "rotate-180 text-primary-600" : ""
                      }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-300 ${activeDropdown === index
                      ? "max-h-[60vh] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                  <div className="bg-gray-100 overflow-y-auto max-h-[60vh] rounded-md">
                    {item.dropdown.map((link, i) => (
                      <Link
                        key={i}
                        to={link.to}
                        onClick={() => {
                          setMobileOpen(false);
                          setActiveDropdown(null);
                        }}
                        className="block px-6 py-2.5 text-[15px] font-medium text-gray-700 
                             hover:text-primary-600 hover:bg-gray-50 transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[16px] font-semibold text-gray-800 
                     hover:text-primary-600 hover:bg-gray-50 transition-all"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>

    </header>
  );
}

/* Desktop Dropdown Menu */
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
      <button className="text-[17px] font-semibold tracking-wide text-gray-800 hover:text-primary-600 flex items-center gap-1 transition-all">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 bg-gray-100 shadow-xl border border-gray-300 mt-3 rounded-md w-[320px] z-50 
          max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          <ul className="flex flex-col divide-y divide-gray-200">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="block px-5 py-[12px] text-[15px] font-medium leading-snug text-gray-800 hover:bg-primary/10 hover:text-primary-600 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
