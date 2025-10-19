import React from "react";
import { Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Proof of Chosen: Blockchain Consensus Algorithm",
      description:
        "Designed a novel blockchain consensus algorithm that validates training datasets through Machine Learning competitions. The system leverages ML model performance in competitive environments as a trust mechanism, combining distributed consensus principles with intelligent model selection.",
      tags: ["Blockchain", "Machine Learning", "Consensus Algorithm"],
    },
    {
      title: "Generic Cyberattack Detection in SDN",
      description:
        "Engineered a robust Intrusion Detection System (IDS) for Software-Defined Networking using cross-environment pattern mining algorithm (FP-Growth). Successfully detects volumetric DDoS to stealthier DoS attacks by identifying structural traffic patterns with high accuracy and generalization capabilities.",
      tags: ["Machine Learning", "Cybersecurity", "SDN", "IDS"],
    },
    {
      title: "Multi-modal Pancreatic Cancer Detection",
      description:
        "Multi-Modal Deep Learning solution integrating high-resolution CT imaging with clinical biomarkers for Pancreatic Cancer diagnosis. Incorporates Explainable AI (XAI) techniques to provide transparent, interpretable predictions for tumor resectability assessment.",
      tags: ["Deep Learning", "Medical AI", "XAI", "Computer Vision"],
      current: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Code className="text-blue-400" />
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:border-blue-400/40 transition-colors relative overflow-hidden"
            >
              {project.current && (
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  Current
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-3 pr-16">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs"
                  >
                    {tag}
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

export default Projects;
