import React from "react";
import { Database } from "lucide-react";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      "Java",
      "JavaScript",
      "Python",
      "C#",
      "C",
      "R",
      "Solidity",
      "TypeScript",
    ],
    Frameworks: [
      "ReactJS",
      "NextJS",
      "Node.js",
      "Express.js",
      "Flask",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
    "Data & Analytics": [
      "Power BI",
      "Tableau",
      "Predictive Modeling",
      "Time-Series Analysis",
      "Feature Engineering",
    ],
    Databases: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    "Tools & Platforms": [
      "Git",
      "Docker",
      "Jupyter",
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Jira",
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Database className="text-blue-400" />
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-blue-200 rounded-lg text-sm hover:bg-slate-600/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
