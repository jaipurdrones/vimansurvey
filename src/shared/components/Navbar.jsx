import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/Viman_survey.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  // Scroll effect
  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Applications", dropdown: applications },
    {
      name: "Solutions",
      dropdown: [
        { name: "Drone Insight System", to: "/solutions/drone-insight-system" },
        { name: "Pilots On Project", to: "/solutions/pilots-on-project" },
      ],
    },
    { name: "Blog", to: "/blog" },
    { name: "Contact Us", to: "/contact", isButton: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Viman Survey" className="h-14 sm:h-16" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <DropdownMenu
                key={index}
                title={item.name}
                links={item.dropdown}
              />
            ) : (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `relative font-semibold transition ${
                    isActive ? "text-primary-600" : "text-gray-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-primary-600 transition-all ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md bg-white shadow"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="w-full flex justify-between font-semibold"
                >
                  {item.name}
                  <span>{activeDropdown === index ? "−" : "+"}</span>
                </button>

                {activeDropdown === index && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.dropdown.map((link, i) => (
                      <Link
                        key={i}
                        to={link.to}
                        className="block text-gray-600 hover:text-primary-600"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={index} to={item.to} className="block font-semibold">
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}

/* =========================
   DROPDOWN (FIXED SCROLL)
========================= */
function DropdownMenu({ title, links }) {
  return (
    <div className="relative group">
      <button className="font-semibold text-gray-800 group-hover:text-primary-600 transition">
        {title}
      </button>

      <div
        className="
          absolute top-full left-0 mt-3 w-[320px]
          bg-white rounded-xl shadow-xl
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-300

          /* ✅ FIXED SCROLL */
          max-h-[60vh] overflow-y-auto
        "
      >
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className="block px-5 py-3 hover:bg-gray-50 hover:text-primary-600 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}