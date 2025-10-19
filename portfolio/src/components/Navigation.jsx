import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ activeSection, onNavigate, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigate = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    document.activeElement?.blur();
  };

  useEffect(() => {
    console.log("Active Section Changed:", activeSection);
  }, [activeSection]);

  return (
    <>
      <div className="flex">
        <nav className="fixed top-0 left-0 h-full bg-gray-700/90 backdrop-blur-md z-50 border-r border-gray-500/30 w-1/6">
          {/* Logo */}
          <div className="flex items-center justify-center h-20 border-b border-blue-500/20">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-100">
              Affin Ajanthan
            </div>
            {/* Mobile toggle */}
            <button
              className="md:hidden absolute top-4 right-4 text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation links */}
          <div
            className={`flex flex-col mt-4 space-y-2 px-4 ${
              mobileMenuOpen ? "block md:block" : "hidden md:flex"
            }`}
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    border: "none",
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-0 active:outline-none ${
                    isActive
                      ? "text-blue-400 bg-teal-900/50 font-semibold"
                      : "text-gray-300 hover:bg-purple-900/30"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
        <div className="w-5/6 ml-[16.666667%]">{children}</div>
      </div>
    </>
  );
};

export default Navigation;
