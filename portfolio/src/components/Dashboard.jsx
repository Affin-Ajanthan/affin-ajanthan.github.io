import React, { useEffect, useRef, useState } from "react";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Dashboard = () => {
  const ref = useRef(null);
  const sectionsRef = useRef({});

  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log(`Section "${sectionId}" is now visible`);
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.8,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
      // sectionsRef.current[section.id] = section;
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  return (
    <Navigation activeSection={activeSection} onNavigate={scrollToSection}>
      <div
        ref={ref}
        className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-300"
      >
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Navigation>
  );
};

export default Dashboard;
